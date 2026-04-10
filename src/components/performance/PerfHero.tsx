"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PerfHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-dark-deep pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px]"
    >
      {/* Carbon fiber background */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/carbon-fiber.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Lime radial glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "#d0fc06" }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
              <span className="text-lime">PERFORMANCE</span>
            </motion.div>

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-jakarta text-[12px] font-extrabold uppercase tracking-[1.2px] text-lime">
                <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
                PEAK OUTPUT / SURGICAL CONTROL
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
                UNLEASH
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-outfit text-[56px] font-black leading-[0.88] tracking-[-2px] text-white/25 sm:text-[72px] lg:text-[108px] lg:tracking-[-4px]"
              >
                THE APEX.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="mt-8 max-w-[560px] font-jakarta text-[16px] font-medium leading-[1.6] text-white/70 md:text-[18px]"
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
              className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[2px] text-white/50"
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

          {/* RIGHT: Stat stack */}
          <motion.div
            style={{ y: imgY }}
            className="relative lg:col-span-5"
          >
            <div className="relative flex flex-col gap-4">
              {[
                {
                  label: "0—60 MPH",
                  value: "2.8",
                  unit: "s",
                  delay: 0.5,
                },
                {
                  label: "PEAK TORQUE",
                  value: "720",
                  unit: "Nm",
                  delay: 0.7,
                },
                {
                  label: "PEAK POWER",
                  value: "240",
                  unit: "kW",
                  delay: 0.9,
                },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: s.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: -6 }}
                  className="group relative flex items-center justify-between overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.03] px-8 py-7 backdrop-blur-[8px]"
                  style={{
                    marginLeft: `${i * 18}px`,
                  }}
                >
                  {/* Lime hover bar */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[2px] text-white/40">
                      {s.label}
                    </span>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="font-outfit text-[56px] font-black leading-none text-white">
                        {s.value}
                      </span>
                      <span className="font-outfit text-[18px] font-bold text-lime">
                        {s.unit}
                      </span>
                    </div>
                  </div>

                  {/* Tick marks */}
                  <div className="flex flex-col items-end gap-1.5">
                    {[...Array(5)].map((_, idx) => (
                      <span
                        key={idx}
                        className="block h-[2px]"
                        style={{
                          width: `${12 + idx * 4}px`,
                          backgroundColor:
                            idx < 3 ? "#d0fc06" : "rgba(255,255,255,0.15)",
                        }}
                      />
                    ))}
                  </div>
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
