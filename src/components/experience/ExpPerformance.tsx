"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "TOP SPEED", value: "75", unit: "MPH", fill: 88 },
  { label: "0 — 30 MPH", value: "2.4", unit: "SEC", fill: 74 },
  { label: "RANGE", value: "120", unit: "KM", fill: 82 },
  { label: "THRUST", value: "420", unit: "KGF", fill: 92 },
];

export default function ExpPerformance() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-950 py-[120px] lg:py-[180px]">
      {/* Lime glow */}
      <div
        className="pointer-events-none absolute -top-40 left-[-10%] h-[600px] w-[600px] rounded-full opacity-[0.15] blur-[140px]"
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

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-white/40">
              <span className="h-px w-10 bg-lime" />
              <span>02 — PERFORMANCE</span>
            </div>
            <h2 className="font-outfit text-[44px] font-black leading-[0.92] tracking-[-1.5px] text-white sm:text-[60px] lg:text-[80px] lg:tracking-[-3px]">
              SPEED, MEASURED
              <br />
              IN <span className="text-lime">HEARTBEATS.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[380px] font-jakarta text-[16px] font-medium leading-[1.6] text-white/60 lg:col-span-5"
          >
            Dual-axial motors, direct drive, and active ballast create a
            performance envelope that feels as alive as the water itself.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[5/4] w-full">
              <Image
                src="/images/unleash-the-apex.png"
                alt="EVOLV performance render"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-lime/40 hover:bg-white/[0.04]"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[2px] text-white/40">
                    {s.label}
                  </div>
                  <div className="mt-3 flex items-baseline gap-1.5 font-outfit text-white">
                    <span className="text-[56px] font-black leading-none tracking-[-2px]">
                      {s.value}
                    </span>
                    <span className="text-[14px] font-bold text-white/50">
                      {s.unit}
                    </span>
                  </div>
                  <div className="mt-5 h-[2px] w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.fill}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + i * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-lime"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 font-jakarta text-[15px] leading-[1.6] text-white/50"
            >
              Measured at sea level, 22°C, 85kg rider. Three drive modes —
              Cruise, Sport, Apex — each calibrated around the way you
              actually ride.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
