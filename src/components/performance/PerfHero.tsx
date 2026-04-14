"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ShaderBackground from "./ShaderBackground";

export default function PerfHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-dark-deep pt-[140px] pb-[160px] lg:pt-[180px] lg:pb-[240px]"
    >
      {/* Animated shader background (lime aurora) */}
      <ShaderBackground />

      {/* Lime radial glow accent */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "#d0fc06" }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-10">
        <motion.div style={{ y }} className="flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-white/40"
          >
            <span>EVOLV</span>
            <span className="text-white/20">/</span>
            <span className="text-lime">PERFORMANCE</span>
          </motion.div>

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-jakarta text-[12px] font-extrabold uppercase tracking-[1.2px] text-lime">
              <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
              PEAK OUTPUT / SURGICAL CONTROL
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 whitespace-nowrap font-outfit text-[56px] font-black leading-[0.88] tracking-[-2px] text-white sm:text-[72px] lg:text-[108px] lg:tracking-[-4px]"
          >
            UNLEASH <span className="text-white/25">THE APEX.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-[820px] font-jakarta text-[16px] font-medium leading-[1.6] text-white/70 md:text-[18px]"
          >
            Three years of relentless R&D condensed into a single push of the
            throttle. Instant torque. Surgical handling. Uncompromising
            composure — even at the edge.
          </motion.p>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[2px] text-white/50"
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-lime" />
              <span>DUAL-AXIAL DRIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-lime" />
              <span>ZERO-EMISSION</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-lime" />
              <span>OCEAN-GRADE</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ticker line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-lime/40 to-transparent"
      />
    </section>
  );
}
