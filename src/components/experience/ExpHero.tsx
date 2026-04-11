"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ExpHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white pt-[160px] pb-[120px] lg:pt-[200px] lg:pb-[160px]"
    >
      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Lime glow accent */}
      <div
        className="pointer-events-none absolute -top-20 right-[-8%] h-[520px] w-[520px] rounded-full opacity-[0.25] blur-[140px]"
        style={{ background: "#d0fc06" }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-stone-400"
        >
          <span>EVOLV</span>
          <span className="text-stone-300">/</span>
          <span className="text-stone-900">EXPERIENCE</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <motion.div style={{ y, opacity }} className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-stone-900/[0.03] px-4 py-1.5 font-jakarta text-[11px] font-extrabold uppercase tracking-[1.4px] text-stone-900">
                <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
                NEXT-GEN ELECTRIC WATERCRAFT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit text-[56px] font-black leading-[0.9] tracking-[-2.5px] text-stone-900 sm:text-[72px] lg:text-[96px] lg:tracking-[-4px]"
            >
              BUILT TO
              <br />
              BE <span className="relative inline-block">
                FELT.
                <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-lime lg:h-[10px]" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="mt-8 max-w-[520px] font-jakarta text-[17px] font-medium leading-[1.6] text-stone-600 md:text-[19px]"
            >
              A silent launch. Instant torque under your fingertips. The water
              beneath you, rendered in perfect clarity. The EVOLV electric
              watercraft is an experience engineered for the senses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#reserve"
                className="group inline-flex h-[52px] items-center gap-2 rounded-full bg-stone-900 px-8 font-outfit text-[13px] font-extrabold uppercase tracking-[1.4px] text-white transition-all duration-300 hover:scale-[1.03] hover:bg-lime hover:text-stone-900"
              >
                Reserve Now
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 8h13m0 0L8 2m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#experience"
                className="inline-flex h-[52px] items-center rounded-full border border-stone-900/15 bg-white px-8 font-outfit text-[13px] font-extrabold uppercase tracking-[1.4px] text-stone-900 transition-all duration-300 hover:border-stone-900/60"
              >
                Explore the Ride
              </a>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
              className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[10px] uppercase tracking-[2px] text-stone-500"
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-lime" />
                <span>0 EMISSION</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-lime" />
                <span>SILENT DRIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-lime" />
                <span>MARINE GRADE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: product hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[5/4] w-full">
              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute top-6 left-4 z-20 flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[1.5px] text-stone-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
              >
                <span className="h-[6px] w-[6px] rounded-full bg-lime" />
                MODEL — E/01
              </motion.div>

              {/* Floating spec card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.25 }}
                className="absolute right-2 bottom-6 z-20 w-[180px] rounded-2xl border border-stone-900/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] backdrop-blur-md"
              >
                <div className="font-mono text-[9px] uppercase tracking-[1.5px] text-stone-400">
                  TOP SPEED
                </div>
                <div className="mt-1 flex items-baseline gap-1 font-outfit text-stone-900">
                  <span className="text-[36px] font-black leading-none">75</span>
                  <span className="text-[12px] font-bold">MPH</span>
                </div>
                <div className="mt-3 h-[3px] w-full rounded-full bg-stone-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    transition={{ duration: 1.4, delay: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-lime"
                  />
                </div>
              </motion.div>

              {/* Product image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/images/hero-jetski.png"
                  alt="EVOLV electric jet ski"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]"
                />
              </motion.div>

              {/* Ground ellipse */}
              <div className="pointer-events-none absolute bottom-6 left-1/2 h-[30px] w-[60%] -translate-x-1/2 rounded-[50%] bg-stone-900/10 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-stone-900/15 to-transparent"
      />
    </section>
  );
}
