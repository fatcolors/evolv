"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const testResults = [
  {
    kicker: "TEMPERATURE",
    label: "THERMAL RANGE",
    value: "—5",
    separator: "TO",
    value2: "42",
    unit: "°C",
    description: "Arctic to equatorial.",
  },
  {
    kicker: "SEA STATE",
    label: "WAVE CONDITIONS",
    value: "UP TO",
    separator: "",
    value2: "5",
    unit: "BF",
    description: "Rough sea certified.",
  },
  {
    kicker: "DURATION",
    label: "SEA TRIAL HOURS",
    value: "1,200",
    separator: "+",
    value2: "",
    unit: "HRS",
    description: "Continuous field testing.",
  },
];

export default function ProvenOnWater() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-dark-deep px-5 py-24 md:px-10 md:py-40"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/watercraft-bg2.png"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </motion.div>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deep via-dark-deep/70 to-dark-deep" />

      {/* Noise */}
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-[900px] md:mb-24"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[3px] text-lime">
            <span className="h-px w-8 bg-lime" />
            <span>FIELD VERIFIED / SECTION 06</span>
          </div>
          <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight text-white md:text-[72px] lg:text-[104px]">
            TESTED.
            <br />
            PROVEN.
            <br />
            <span className="text-white/25">REPEATED.</span>
          </h2>
          <p className="mt-8 max-w-[560px] font-jakarta text-[16px] leading-[1.6] text-white/60 md:text-[18px]">
            Over three years of on-water validation across twelve coastlines,
            four climates, and every sea state our engineers could chase.
          </p>
        </motion.div>

        {/* Test result columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {testResults.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-white/15 pt-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[2px] text-lime">
                  /0{i + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-white/40">
                  {t.kicker}
                </span>
              </div>

              <h3 className="mt-6 font-outfit text-[13px] font-extrabold uppercase tracking-[2px] text-white/50">
                {t.label}
              </h3>

              {/* Value */}
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-outfit text-[56px] font-black leading-[0.9] tracking-[-2px] text-white md:text-[68px]">
                  {t.value}
                </span>
                {t.separator && (
                  <span className="font-outfit text-[16px] font-bold uppercase text-white/40 md:text-[18px]">
                    {t.separator}
                  </span>
                )}
                {t.value2 && (
                  <span className="font-outfit text-[56px] font-black leading-[0.9] tracking-[-2px] text-lime md:text-[68px]">
                    {t.value2}
                  </span>
                )}
                <span className="font-outfit text-[20px] font-bold text-white/60 md:text-[22px]">
                  {t.unit}
                </span>
              </div>

              <p className="mt-4 font-jakarta text-[14px] font-medium text-white/50 md:text-[15px]">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
