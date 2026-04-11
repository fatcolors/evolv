"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ExpCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="reserve"
      className="relative w-full overflow-hidden bg-stone-950 py-[120px] lg:py-[180px]"
    >
      {/* Ambient lime */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.2] blur-[160px]"
        style={{ background: "#d0fc06" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-white/40"
        >
          <span className="h-px w-10 bg-lime" />
          <span>05 — RESERVE YOUR POSITION</span>
          <span className="h-px w-10 bg-lime" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-outfit text-[52px] font-black leading-[0.9] tracking-[-2px] text-white sm:text-[72px] lg:text-[112px] lg:tracking-[-4.5px]"
        >
          JOIN THE
          <br />
          <span className="text-lime">FIRST WAVE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-[580px] font-jakarta text-[16px] font-medium leading-[1.6] text-white/60 md:text-[18px]"
        >
          The EVOLV E/01 launches in limited allocation. Reserve your build
          slot, lock in launch pricing, and receive private delivery
          briefings from the engineering team.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.45 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSubmitted(true);
          }}
          className="mx-auto mt-14 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="h-[58px] flex-1 rounded-full border border-white/15 bg-white/[0.04] px-7 font-jakarta text-[15px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-lime/60 focus:bg-white/[0.08]"
            required
          />
          <button
            type="submit"
            className="group inline-flex h-[58px] items-center justify-center gap-2 rounded-full bg-lime px-8 font-outfit text-[13px] font-extrabold uppercase tracking-[1.4px] text-stone-900 transition-all duration-300 hover:scale-[1.03]"
          >
            {submitted ? "Reserved ✓" : "Reserve Now"}
            {!submitted && (
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
            )}
          </button>
        </motion.form>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-[10px] uppercase tracking-[2px] text-white/40"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-lime" />
            <span>NO DEPOSIT REQUIRED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-lime" />
            <span>LIMITED ALLOCATION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-lime" />
            <span>PRIVATE DELIVERY</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
    </section>
  );
}
