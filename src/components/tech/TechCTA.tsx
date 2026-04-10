"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TechCTA() {
  return (
    <section className="relative overflow-hidden bg-dark-deep px-5 py-24 md:px-10 md:py-40">
      {/* Circuit grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208,252,6,1) 1px, transparent 1px), linear-gradient(90deg, rgba(208,252,6,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Lime radial glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{ background: "#d0fc06" }}
      />

      {/* Scanning line */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[1360px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Kicker */}
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[3px] text-lime md:text-[13px]">
            <span className="h-px w-10 bg-lime" />
            <span>INTELLIGENCE / LIVE</span>
            <span className="h-px w-10 bg-lime" />
          </div>

          {/* Headline */}
          <h2 className="font-outfit text-[56px] font-black leading-[0.92] tracking-tight text-white md:text-[96px] lg:text-[128px]">
            STEP INTO
            <br />
            <span className="text-lime">THE FUTURE.</span>
          </h2>

          {/* Sub */}
          <p className="mt-8 max-w-[560px] font-jakarta text-[16px] leading-[1.6] text-white/60 md:text-[18px]">
            Reserve your place in the first production run. The most
            intelligent watercraft ever built is ready for its first ride —
            and that ride could be yours.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="group relative flex h-[56px] items-center gap-3 overflow-hidden rounded-full bg-lime px-8 font-jakarta text-[14px] font-extrabold uppercase tracking-[1.5px] text-dark transition-transform hover:scale-[1.03] md:h-[64px] md:px-10 md:text-[15px]"
            >
              <span>RESERVE YOURS</span>
              <span className="text-[18px]">→</span>
            </Link>
            <Link
              href="/performance"
              className="flex h-[56px] items-center gap-3 rounded-full border border-white/20 px-8 font-jakarta text-[14px] font-extrabold uppercase tracking-[1.5px] text-white transition-colors hover:border-lime hover:text-lime md:h-[64px] md:px-10 md:text-[15px]"
            >
              <span>EXPLORE PERFORMANCE</span>
            </Link>
          </div>

          {/* Status strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-[10px] uppercase tracking-[2px] text-white/40 md:text-[11px]">
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-[6px] w-[6px] rounded-full bg-lime"
              />
              EVOS v4.2.1 — STABLE
            </span>
            <span>32 SENSORS ACTIVE</span>
            <span>240 TOPS / ONBOARD</span>
            <span className="text-lime">READY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
