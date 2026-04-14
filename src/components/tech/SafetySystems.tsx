"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HomeIcon = () => (
  <svg {...iconProps}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FishIcon = () => (
  <svg {...iconProps}>
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
    <path d="M18 12v.5" />
    <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
    <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
    <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
    <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
  </svg>
);

const RadioIcon = () => (
  <svg {...iconProps}>
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
    <circle cx="12" cy="12" r="2" />
    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
  </svg>
);

const systems: {
  id: string;
  Icon: () => ReactNode;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}[] = [
  {
    id: "S1",
    Icon: ShieldIcon,
    title: "COLLISION AVOIDANCE",
    desc: "Predictive hazard detection that intervenes before impact — even at full throttle.",
    metric: "360°",
    metricLabel: "COVERAGE",
  },
  {
    id: "S2",
    Icon: HomeIcon,
    title: "AUTO-RETURN HOME",
    desc: "Lose signal, fall off, or run low on charge — the hull pilots itself back to harbor.",
    metric: "12 km",
    metricLabel: "RANGE",
  },
  {
    id: "S3",
    Icon: FishIcon,
    title: "MARINE-LIFE AWARENESS",
    desc: "Thermal and sonar fusion identifies wildlife and automatically softens approach.",
    metric: "AI",
    metricLabel: "FUSED",
  },
  {
    id: "S4",
    Icon: RadioIcon,
    title: "EMERGENCY BEACON",
    desc: "One-touch SOS with live GPS broadcast to coastguard and paired devices.",
    metric: "< 2s",
    metricLabel: "RELAY",
  },
];

export default function SafetySystems() {
  return (
    <section className="relative overflow-hidden bg-dark-deep px-5 py-20 md:px-10 md:py-32">
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
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-lime/10 text-lime ring-1 ring-lime/20">
                <s.Icon />
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
