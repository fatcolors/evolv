"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Channel = {
  id: string;
  name: string;
  standard: string;
  desc: string;
  signal: number; // 0-100
  bg: string;
  textClass: string;
  accent: string;
};

const channels: Channel[] = [
  {
    id: "01",
    name: "5G MARITIME",
    standard: "NR Rel.17",
    desc: "Multi-band cellular with seamless handover across coastal towers.",
    signal: 92,
    bg: "bg-white",
    textClass: "text-dark",
    accent: "bg-lime",
  },
  {
    id: "02",
    name: "LOW-EARTH SAT",
    standard: "LEO-X",
    desc: "Direct-to-device satellite link for off-coast coverage anywhere on Earth.",
    signal: 78,
    bg: "bg-gray-100",
    textClass: "text-dark",
    accent: "bg-dark",
  },
  {
    id: "03",
    name: "MESH BLUETOOTH",
    standard: "BT 5.4",
    desc: "Fleet-to-fleet mesh for group rides, rendezvous, and tow-assist.",
    signal: 100,
    bg: "bg-dark",
    textClass: "text-white",
    accent: "bg-lime",
  },
  {
    id: "04",
    name: "OTA BRIDGE",
    standard: "EVOS/U",
    desc: "Encrypted update channel — firmware, models, and new capabilities.",
    signal: 86,
    bg: "bg-lime",
    textClass: "text-dark",
    accent: "bg-dark",
  },
];

export default function Connectivity() {
  return (
    <section className="relative bg-gray-100 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1360px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid grid-cols-1 gap-8 md:mb-20 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <p className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[4px] text-[#b9b9b9] md:text-[14px]">
              CONNECTIVITY / SECTION 05
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-dark">FOUR LINKS.</span>
              <br />
              <span className="text-[#cacaca]">ZERO DROPOUTS.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              Redundant, overlapping links keep you connected from the
              harbor to the horizon — without a single loading spinner.
            </p>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {channels.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col overflow-hidden rounded-[32px] ${c.bg} p-8 transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] md:rounded-[40px] md:p-10 lg:min-h-[420px]`}
            >
              {/* Kicker row */}
              <div className="flex items-start justify-between">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[2px] ${c.textClass} opacity-40`}
                >
                  /{c.id}
                </span>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[1.5px] ${
                    c.bg === "bg-dark"
                      ? "bg-white/10 text-white/70"
                      : c.bg === "bg-lime"
                      ? "bg-dark/10 text-dark/70"
                      : "bg-dark/5 text-dark/60"
                  }`}
                >
                  {c.standard}
                </span>
              </div>

              {/* Signal bars */}
              <div className="mt-8 flex items-end gap-1.5">
                {[0, 1, 2, 3, 4].map((idx) => {
                  const filled = (idx + 1) * 20 <= c.signal;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(idx + 1) * 10 + 8}px` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.1 + idx * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`w-[8px] rounded-sm ${
                        filled
                          ? c.accent
                          : c.bg === "bg-dark"
                          ? "bg-white/15"
                          : c.bg === "bg-lime"
                          ? "bg-dark/15"
                          : "bg-dark/10"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Name */}
              <h3
                className={`mt-6 font-outfit text-[24px] font-black uppercase leading-[1.05] tracking-[0.5px] ${c.textClass} md:text-[28px]`}
              >
                {c.name}
              </h3>

              {/* Description */}
              <p
                className={`mt-3 font-jakarta text-[13px] font-medium leading-[1.5] ${c.textClass} opacity-70 md:text-[14px]`}
              >
                {c.desc}
              </p>

              {/* Signal strength footer */}
              <div
                className={`mt-auto flex items-center justify-between border-t pt-5 ${
                  c.bg === "bg-dark"
                    ? "border-white/10"
                    : c.bg === "bg-lime"
                    ? "border-dark/15"
                    : "border-dark/8"
                }`}
              >
                <span
                  className={`font-mono text-[9px] uppercase tracking-[1.5px] ${c.textClass} opacity-50`}
                >
                  SIGNAL
                </span>
                <span
                  className={`font-outfit text-[18px] font-black ${c.textClass}`}
                >
                  {c.signal}
                  <span className="ml-1 text-[10px] opacity-60">%</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
