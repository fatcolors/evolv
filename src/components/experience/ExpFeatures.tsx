"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Silent Electric Propulsion",
    body: "A whisper-quiet drivetrain that lets the water — not the engine — define the moment. Zero fumes. Zero noise pollution.",
  },
  {
    num: "02",
    title: "Instant Torque",
    body: "Full power from the first millisecond. No lag, no ramp-up — just a clean, decisive push the instant you ask for it.",
  },
  {
    num: "03",
    title: "Precision Handling",
    body: "Vectored thrust and a low centre of mass make every turn feel intentional, locked in, and endlessly repeatable.",
  },
  {
    num: "04",
    title: "Intuitive Digital Cockpit",
    body: "A minimalist HUD that fades into the background when you need flow — and surfaces data the instant you want it.",
  },
  {
    num: "05",
    title: "All-Day Comfort",
    body: "An ergonomic seating platform, soft-mount controls, and vibration isolation engineered for unbroken hours on water.",
  },
  {
    num: "06",
    title: "Marine-Grade Engineering",
    body: "Saltwater-sealed systems, composite hull, swappable battery packs. Built for the harshest coastlines.",
  },
];

export default function ExpFeatures() {
  return (
    <section className="relative w-full bg-white py-[120px] lg:py-[180px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-stone-400">
              <span className="h-px w-10 bg-lime" />
              <span>01 — FEATURES</span>
            </div>
            <h2 className="font-outfit text-[44px] font-black leading-[0.92] tracking-[-1.5px] text-stone-900 sm:text-[60px] lg:text-[80px] lg:tracking-[-3px]">
              ENGINEERED
              <br />
              FOR <span className="text-stone-300">THE SENSES.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[380px] font-jakarta text-[16px] font-medium leading-[1.6] text-stone-600 lg:col-span-5"
          >
            Six core systems, six uncompromised philosophies. Each one
            designed to disappear into the ride — until you need it to
            answer, instantly.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-stone-900/10 bg-stone-900/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="group relative bg-white p-10 transition-colors duration-500 hover:bg-dark lg:p-12"
            >
              <div className="flex items-start justify-between">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[2px] text-stone-400 transition-colors duration-500 group-hover:text-stone-500">
                  {f.num}
                </div>
                <div className="h-[8px] w-[8px] rounded-full bg-stone-200 transition-colors duration-500 group-hover:bg-lime" />
              </div>
              <h3 className="mt-12 font-outfit text-[24px] font-extrabold leading-[1.15] tracking-[-0.5px] text-stone-900 transition-colors duration-500 group-hover:text-white lg:text-[26px]">
                {f.title}
              </h3>
              <p className="mt-4 font-jakarta text-[15px] leading-[1.6] text-stone-500 transition-colors duration-500 group-hover:text-stone-300">
                {f.body}
              </p>
              <div className="mt-10 h-px w-full bg-stone-100 transition-colors duration-500 group-hover:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.07 }}
                  className="h-full bg-lime"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
