"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const codeLines = [
  { n: "01", t: "system", c: "EVOS v4.2.1" },
  { n: "02", t: "status", c: "LINKED / 4 SATELLITES" },
  { n: "03", t: "compute", c: "240 TOPS / NEURAL CORE" },
  { n: "04", t: "sensors", c: "32 ACTIVE / FUSED" },
  { n: "05", t: "uptime", c: "1,842 HOURS" },
];

export default function TechHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-dark-deep pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px]"
    >
      {/* Carbon background */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/carbon-fiber.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208,252,6,1) 1px, transparent 1px), linear-gradient(90deg, rgba(208,252,6,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial lime glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-[20%] h-[600px] w-[600px] rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "#d0fc06" }}
      />

      {/* Scanning line */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 800, opacity: [0, 0.6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        className="pointer-events-none absolute left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(208,252,6,0.7), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: Copy */}
          <motion.div style={{ y }} className="lg:col-span-7">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-white/40"
            >
              <span>EVOLV</span>
              <span className="text-white/20">/</span>
              <span className="text-lime">TECHNOLOGY</span>
            </motion.div>

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-jakarta text-[12px] font-extrabold uppercase tracking-[1.2px] text-lime">
                <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
                INTELLIGENT SYSTEMS / EVOS v4.2
              </span>
            </motion.div>

            {/* Title */}
            <div className="mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-outfit text-[56px] font-black leading-[0.88] tracking-[-2px] text-white sm:text-[72px] lg:text-[108px] lg:tracking-[-4px]"
              >
                INTELLIGENT
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-outfit text-[56px] font-black leading-[0.88] tracking-[-2px] text-white/25 sm:text-[72px] lg:text-[108px] lg:tracking-[-4px]"
              >
                BY DESIGN.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 max-w-[560px] font-jakarta text-[16px] font-medium leading-[1.6] text-white/70 md:text-[18px]"
            >
              A watercraft that thinks. 240 TOPS of onboard neural compute,
              32 fused sensors, and a lifetime of over-the-air evolution —
              all orchestrated by EVOS, our purpose-built maritime OS.
            </motion.p>

            {/* Feature strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[2px] text-white/50"
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-lime" />
                <span>NEURAL COMPUTE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-lime" />
                <span>SENSOR FUSION</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-lime" />
                <span>OTA UPDATES</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Terminal readout card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-[10px]">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[8px] w-[8px] rounded-full bg-[#febc2e]" />
                  <span className="h-[8px] w-[8px] rounded-full bg-lime" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40">
                  EVOS://TERMINAL
                </span>
                <div className="w-[50px]" />
              </div>

              {/* Body — code lines */}
              <div className="flex flex-col gap-3 px-5 py-6 font-mono text-[12px]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={line.n}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.9 + i * 0.15,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-white/25">{line.n}</span>
                    <span className="text-white/50">{line.t}</span>
                    <span className="text-white/20">:</span>
                    <span className="text-lime">{line.c}</span>
                  </motion.div>
                ))}

                {/* Blinking cursor line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="mt-2 flex items-center gap-4"
                >
                  <span className="text-white/25">06</span>
                  <span className="text-lime">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block h-[14px] w-[7px] bg-lime"
                  />
                </motion.div>
              </div>
            </div>

            {/* Stat pills below terminal */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { label: "LATENCY", value: "4.2 ms" },
                { label: "NODES", value: "128" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                  className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 backdrop-blur-[8px]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40">
                    {s.label}
                  </span>
                  <span className="font-outfit text-[24px] font-black text-white">
                    {s.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
