"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PerfCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1360px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-dark px-8 py-16 md:rounded-[48px] md:px-16 md:py-24 lg:px-24"
        >
          {/* Carbon bg */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/carbon-fiber.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          {/* Lime radial */}
          <div
            className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.15] blur-[120px]"
            style={{ background: "#d0fc06" }}
          />

          {/* Jet-ski silhouette backdrop */}
          <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[90%] w-[60%] -translate-y-1/2 opacity-30 md:opacity-50">
            <Image
              src="/images/built-beyond-jetski.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="relative z-10 max-w-[640px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-jakarta text-[11px] font-extrabold uppercase tracking-[1.5px] text-lime"
            >
              <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
              LIMITED BATCH / 2026
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit text-[44px] font-black leading-[0.95] tracking-[-1.5px] text-white md:text-[64px] lg:text-[80px]"
            >
              FEEL THE
              <br />
              <span className="text-lime">DIFFERENCE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-[480px] font-jakarta text-[16px] leading-[1.6] text-white/70 md:text-[18px]"
            >
              The numbers tell one story. The water tells another.
              Reserve a personal sea-trial and let the hull speak for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group rounded-full bg-lime px-10 py-5 font-jakarta text-[14px] font-extrabold uppercase tracking-[1px] text-dark shadow-[0_0_24px_rgba(208,252,6,0.45)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(208,252,6,0.7)]"
              >
                <span className="flex items-center gap-2">
                  BOOK A SEA TRIAL
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="/"
                whileHover={{ borderColor: "#d0fc06", color: "#d0fc06" }}
                className="rounded-full border-2 border-white/20 px-8 py-5 font-jakarta text-[14px] font-extrabold uppercase tracking-[1px] text-white transition-colors duration-300"
              >
                DOWNLOAD SPEC SHEET
              </motion.a>
            </motion.div>

            {/* Small footer meta */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[2px] text-white/35"
            >
              <span>✓ REFUNDABLE DEPOSIT</span>
              <span>✓ PERSONAL SEA-TRIAL</span>
              <span>✓ LIFETIME SUPPORT</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
