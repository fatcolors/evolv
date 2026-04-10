"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Metric = {
  label: string;
  unit: string;
  evolv: number;
  industry: number;
  evolvPercent: number; // 0-100 for bar width
  industryPercent: number;
  lowerIsBetter?: boolean;
};

const metrics: Metric[] = [
  {
    label: "Roll Stability Index",
    unit: "",
    evolv: 94,
    industry: 68,
    evolvPercent: 94,
    industryPercent: 68,
  },
  {
    label: "Turn Radius",
    unit: "m",
    evolv: 2.4,
    industry: 4.1,
    evolvPercent: 92,
    industryPercent: 54,
    lowerIsBetter: true,
  },
  {
    label: "Recovery Time",
    unit: "s",
    evolv: 0.18,
    industry: 0.42,
    evolvPercent: 96,
    industryPercent: 58,
    lowerIsBetter: true,
  },
  {
    label: "Glide Efficiency",
    unit: "%",
    evolv: 91,
    industry: 72,
    evolvPercent: 91,
    industryPercent: 72,
  },
];

function Bar({
  metric,
  index,
  inView,
}: {
  metric: Metric;
  index: number;
  inView: boolean;
}) {
  const delay = 0.1 + index * 0.12;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 py-8"
    >
      {/* Label row */}
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[2px] text-white/35">
            /{String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-outfit text-[22px] font-black uppercase tracking-[0.5px] text-white md:text-[26px]">
            {metric.label}
          </h3>
        </div>
        {metric.lowerIsBetter && (
          <span className="font-mono text-[10px] uppercase tracking-[2px] text-lime/70">
            LOWER = BETTER
          </span>
        )}
      </div>

      {/* EVOLV bar */}
      <div className="mb-3">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-outfit text-[11px] font-extrabold uppercase tracking-[2px] text-lime">
            EVOLV
          </span>
          <span className="font-outfit text-[22px] font-black text-white md:text-[26px]">
            {metric.evolv}
            <span className="ml-1 text-[13px] font-bold text-lime md:text-[15px]">
              {metric.unit}
            </span>
          </span>
        </div>
        <div className="relative h-[10px] w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${metric.evolvPercent}%` } : {}}
            transition={{
              duration: 1.4,
              delay: delay + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-y-0 left-0 rounded-full bg-lime"
          >
            {/* Inner gradient shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Industry bar */}
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[2px] text-white/35">
            INDUSTRY AVG
          </span>
          <span className="font-outfit text-[16px] font-bold text-white/35 md:text-[18px]">
            {metric.industry}
            <span className="ml-1 text-[12px]">{metric.unit}</span>
          </span>
        </div>
        <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${metric.industryPercent}%` } : {}}
            transition={{
              duration: 1.2,
              delay: delay + 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-y-0 left-0 rounded-full bg-white/15"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Dynamics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-dark-deep px-5 py-20 md:px-10 md:py-32">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[4px] text-lime md:text-[14px]">
              DYNAMICS / SECTION 03
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight text-white md:text-[72px] lg:text-[88px]">
              SURGICAL
              <br />
              <span className="text-white/25">CONTROL.</span>
            </h2>
            <p className="mt-6 max-w-[420px] font-jakarta text-[15px] leading-[1.6] text-white/60 md:text-[17px]">
              Every dynamic behaviour — from roll recovery to glide
              efficiency — is measured, benchmarked, and refined against the
              best-in-class in the industry.
            </p>

            {/* Legend */}
            <div className="mt-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-[10px] w-[28px] rounded-full bg-lime" />
                <span className="font-mono text-[11px] uppercase tracking-[2px] text-white/60">
                  EVOLV X-ONE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[28px] rounded-full bg-white/15" />
                <span className="font-mono text-[11px] uppercase tracking-[2px] text-white/40">
                  INDUSTRY AVERAGE
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bars */}
          <div ref={ref} className="lg:col-span-7">
            {metrics.map((m, i) => (
              <Bar key={m.label} metric={m} index={i} inView={inView} />
            ))}
            {/* Final border */}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
