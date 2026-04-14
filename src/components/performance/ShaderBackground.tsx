"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated WebGL aurora shader, brand-tinted (lime / deep green / dark).
 * - Sizes itself to the parent element (ResizeObserver).
 * - Pauses RAF when offscreen (IntersectionObserver).
 * - On mobile (<768px) renders a single static frame, no animation.
 */
export default function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const initialW = container.clientWidth || window.innerWidth;
    const initialH = container.clientHeight || window.innerHeight;
    renderer.setSize(initialW, initialH, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(initialW, initialH) },
      },
      vertexShader: /* glsl */ `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);
          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
          // Normalise against iResolution.y to keep vertical consistent,
          // then squeeze the horizontal slightly so comets spread wider
          // on ultra-wide screens without drifting off on narrow ones.
          vec2 uv = (gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5;
          vec2 p = vec2(uv.x / iResolution.y * 0.75, uv.y / iResolution.y) * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          for (float i = 0.0; i < 55.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 4.6
                  + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 55.0));

            // EVOLV brand palette: lime (#d0fc06) → deep green → dark
            vec4 auroraColors = vec4(
              0.55 + 0.25 * sin(i * 0.25 + iTime * 0.4),   // R: yellow-green
              0.85 + 0.15 * cos(i * 0.30 + iTime * 0.5),   // G: dominant
              0.05 + 0.10 * sin(i * 0.40 + iTime * 0.3),   // B: minimal
              1.0
            );

            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8))
              / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 55.0) * 0.55;
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
          }

          o = tanh(pow(o / 100.0, vec4(1.6)));
          // Slight darken so it sits over bg-dark-deep without blowing out
          gl_FragColor = vec4(o.rgb * 1.3, o.a * 0.95);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId: number | null = null;
    let isVisible = true;
    let lastTime = performance.now();

    const renderFrame = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      const now = performance.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      material.uniforms.iTime.value += dt;
      renderFrame();
      frameId = requestAnimationFrame(animate);
    };

    if (isMobile) {
      // Single static frame, mid-animation for an interesting still
      material.uniforms.iTime.value = 8.0;
      renderFrame();
    } else {
      lastTime = performance.now();
      frameId = requestAnimationFrame(animate);
    }

    // Resize against parent, not window
    const ro = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      material.uniforms.iResolution.value.set(w, h);
      if (isMobile) renderFrame();
    });
    ro.observe(container);

    // Pause when offscreen (desktop only)
    let io: IntersectionObserver | null = null;
    if (!isMobile) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            isVisible = e.isIntersecting;
            if (isVisible && frameId === null) {
              lastTime = performance.now();
              frameId = requestAnimationFrame(animate);
            } else if (!isVisible && frameId !== null) {
              cancelAnimationFrame(frameId);
              frameId = null;
            }
          }
        },
        { threshold: 0 }
      );
      io.observe(container);
    }

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      ro.disconnect();
      io?.disconnect();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
