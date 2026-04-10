"use client";

import { motion } from "framer-motion";

type Mode = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  maxSpeed: string;
  range: string;
  powerPct: number;
  bg: string;
  textClass: string;
  accent: string;
  numberColor: string;
};

const modes: Mode[] = [
  {
    id: "01",
    name: "ECO",
    tagline: "Range Extended",
    description: "Maximum distance. Minimum draw. Built for coastal cruising and effortless glide.",
    maxSpeed: "38",
    range: "+65%",
    powerPct: 32,
    bg: "bg-white",
    textClass: "text-dark",
    accent: "bg-[#d0fc06]",
    numberColor: "text-dark",
  },
  {
    id: "02",
    name: "CRUISE",
    tagline: "Balanced Output",
    description: "The everyday default. Silky power delivery balanced for all-day comfort.",
    maxSpeed: "52",
    range: "Standard",
    powerPct: 56,
    bg: "bg-gray-100",
    textClass: "text-dark",
    accent: "bg-dark",
    numberColor: "text-dark",
  },
  {
    id: "03",
    name: "SPORT",
    tagline: "Aggressive",
    description: "Sharpened throttle map. Tighter steering response. Crisper regen braking.",
    maxSpeed: "60",
    range: "Balanced",
    powerPct: 82,
    bg: "bg-dark",
    textClass: "text-white",
    accent: "bg-lime",
    numberColor: "text-white",
  },
  {
    id: "04",
    name: "APEX",
    tagline: "Race-Ready",
    description: "Full liberation. 720 Nm, 240 kW, zero filtering. For closed-course use only.",
    maxSpeed: "65",
    range: "-40%",
    powerPct: 100,
    bg: "bg-lime",
    textClass: "text-dark",
    accent: "bg-dark",
    numberColor: "text-dark",
  },
];

export default function PerfModes() {
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
              RIDE MODES / SECTION 05
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-dark">FOUR MODES,</span>
              <br />
              <span className="text-[#cacaca]">ONE SOUL.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              Remap the entire machine at the press of a button. Throttle,
              steering, regen, and audio signature — all re-tuned.
            </p>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {modes.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col overflow-hidden rounded-[32px] ${m.bg} p-8 transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] md:rounded-[40px] md:p-10 lg:min-h-[460px]`}
            >
              {/* Kicker */}
              <div className="flex items-start justify-between">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[2px] ${m.textClass} opacity-40`}
                >
                  /{m.id}
                </span>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[1.5px] ${
                    m.bg === "bg-dark"
                      ? "bg-white/10 text-white/70"
                      : m.bg === "bg-lime"
                      ? "bg-dark/10 text-dark/70"
                      : "bg-dark/5 text-dark/60"
                  }`}
                >
                  {m.tagline}
                </span>
              </div>

              {/* Mode name */}
              <h3
                className={`mt-10 font-outfit text-[48px] font-black leading-[0.9] tracking-[-1.5px] ${m.numberColor} md:text-[56px]`}
              >
                {m.name}
              </h3>

              {/* Description */}
              <p
                className={`mt-4 font-jakarta text-[13px] font-medium leading-[1.5] ${m.textClass} opacity-70 md:text-[14px]`}
              >
                {m.description}
              </p>

              {/* Stats */}
              <div className="mt-auto flex flex-col gap-5 pt-8">
                {/* Power meter */}
                <div>
                  <div
                    className={`mb-2 flex items-baseline justify-between font-mono text-[9px] uppercase tracking-[1.5px] ${m.textClass} opacity-60`}
                  >
                    <span>POWER OUTPUT</span>
                    <span className={`font-bold ${m.textClass}`}>
                      {m.powerPct}%
                    </span>
                  </div>
                  <div
                    className={`relative h-[6px] w-full overflow-hidden rounded-full ${
                      m.bg === "bg-dark"
                        ? "bg-white/10"
                        : m.bg === "bg-lime"
                        ? "bg-dark/15"
                        : "bg-dark/8"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.powerPct}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`absolute inset-y-0 left-0 rounded-full ${m.accent}`}
                    />
                  </div>
                </div>

                {/* Bottom stats */}
                <div
                  className={`grid grid-cols-2 gap-3 border-t pt-5 ${
                    m.bg === "bg-dark"
                      ? "border-white/10"
                      : m.bg === "bg-lime"
                      ? "border-dark/15"
                      : "border-dark/8"
                  }`}
                >
                  <div>
                    <div
                      className={`font-mono text-[9px] uppercase tracking-[1.5px] ${m.textClass} opacity-50`}
                    >
                      MAX SPEED
                    </div>
                    <div
                      className={`mt-1 font-outfit text-[20px] font-black ${m.numberColor}`}
                    >
                      {m.maxSpeed}
                      <span
                        className={`ml-1 font-outfit text-[11px] font-bold ${m.textClass} opacity-60`}
                      >
                        KTS
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`font-mono text-[9px] uppercase tracking-[1.5px] ${m.textClass} opacity-50`}
                    >
                      RANGE
                    </div>
                    <div
                      className={`mt-1 font-outfit text-[20px] font-black ${m.numberColor}`}
                    >
                      {m.range}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
