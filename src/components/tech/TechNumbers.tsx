"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration: number, inView: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

type Stat = {
  kicker: string;
  label: string;
  value: number;
  unit: string;
  description: string;
};

const stats: Stat[] = [
  {
    kicker: "01",
    label: "NEURAL COMPUTE",
    value: 240,
    unit: "TOPS",
    description: "On-board inference.",
  },
  {
    kicker: "02",
    label: "FUSED SENSORS",
    value: 32,
    unit: "UNITS",
    description: "Active at all times.",
  },
  {
    kicker: "03",
    label: "OTA EVOLUTIONS",
    value: 14,
    unit: "/ YEAR",
    description: "Continuous refinement.",
  },
  {
    kicker: "04",
    label: "DATA THROUGHPUT",
    value: 8,
    unit: "Gb/s",
    description: "Sensor bandwidth.",
  },
];

function Cell({
  stat,
  index,
  inView,
}: {
  stat: Stat;
  index: number;
  inView: boolean;
}) {
  const v = useCountUp(stat.value, 2, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col gap-4 py-10 md:py-0 md:px-10"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[2px] text-[#cacaca]">
          /{stat.kicker}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[2px] text-[#888]">
          {stat.label}
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-outfit text-[64px] font-black leading-[0.9] tracking-[-2px] text-dark md:text-[80px] lg:text-[88px]">
          {v}
        </span>
        <span className="font-outfit text-[18px] font-bold text-[#888] md:text-[22px]">
          {stat.unit}
        </span>
      </div>

      <p className="font-jakarta text-[13px] font-medium text-[#888] md:text-[14px]">
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function TechNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-[1360px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[3px] text-[#b9b9b9] md:mb-16"
        >
          <span className="h-px w-8 bg-lime" />
          <span>PLATFORM / NUMBERS</span>
        </motion.div>

        <div className="grid grid-cols-1 divide-y divide-[#e7e8e8] md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">
          {stats.map((s, i) => (
            <Cell key={s.label} stat={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
