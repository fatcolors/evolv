"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const systems = [
  {
    id: "S1",
    icon: "/icons/shield-icon.svg",
    title: "COLLISION AVOIDANCE",
    desc: "Predictive hazard detection that intervenes before impact — even at full throttle.",
    metric: "360°",
    metricLabel: "COVERAGE",
  },
  {
    id: "S2",
    icon: "/icons/recovery-icon.svg",
    title: "AUTO-RETURN HOME",
    desc: "Lose signal, fall off, or run low on charge — the hull pilots itself back to harbor.",
    metric: "12 km",
    metricLabel: "RANGE",
  },
  {
    id: "S3",
    icon: "/icons/neural-nav-icon.svg",
    title: "MARINE-LIFE AWARENESS",
    desc: "Thermal and sonar fusion identifies wildlife and automatically softens approach.",
    metric: "AI",
    metricLabel: "FUSED",
  },
  {
    id: "S4",
    icon: "/icons/wifi-icon.svg",
    title: "EMERGENCY BEACON",
    desc: "One-touch SOS with live GPS broadcast to coastguard and paired devices.",
    metric: "< 2s",
    metricLabel: "RELAY",
  },
];

export default function SafetySystems() {
  return (
    <section className="relative overflow-hidden bg-dark px-5 py-20 md:px-10 md:py-32">
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Lime glow */}
      <div
        className="pointer-events-none absolute left-[10%] top-[30%] h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[140px]"
        style={{ background: "#d0fc06" }}
      />

      <div className="relative mx-auto max-w-[1360px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid grid-cols-1 gap-8 md:mb-20 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <p className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[4px] text-lime md:text-[14px]">
              SAFETY / SECTION 06
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight text-white md:text-[72px] lg:text-[96px]">
              ALWAYS
              <br />
              <span className="text-white/25">WATCHING.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-white/60 md:text-[18px]">
              A second pair of eyes — and reflexes faster than yours — making
              sure every ride ends back on the dock.
            </p>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {systems.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-lime/40 hover:bg-white/[0.05] md:rounded-[40px] md:p-10 lg:min-h-[320px]"
            >
              {/* Corner ID */}
              <span className="absolute right-8 top-8 font-mono text-[10px] uppercase tracking-[2px] text-white/30 md:right-10 md:top-10">
                /{s.id}
              </span>

              {/* Icon */}
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-lime/10 ring-1 ring-lime/20">
                <Image src={s.icon} alt="" width={30} height={30} />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-outfit text-[24px] font-black uppercase leading-[1.05] tracking-[0.5px] text-white md:text-[28px]">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[440px] font-jakarta text-[14px] font-medium leading-[1.55] text-white/60 md:text-[15px]">
                {s.desc}
              </p>

              {/* Metric footer */}
              <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-[6px] w-[6px] rounded-full bg-lime shadow-[0_0_12px_rgba(208,252,6,0.8)]"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40">
                    ARMED
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-outfit text-[30px] font-black leading-none text-lime md:text-[34px]">
                    {s.metric}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-white/40">
                    {s.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
