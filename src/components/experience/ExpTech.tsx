"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    num: "01",
    title: "Composite Monocoque",
    body: "A single-piece carbon-aramid hull delivers stiffness-to-weight ratios borrowed from aerospace. Lighter, stronger, quieter.",
  },
  {
    num: "02",
    title: "Adaptive Drive OS",
    body: "An on-board intelligence layer that reads water conditions 200 times a second and tunes torque delivery in real time.",
  },
  {
    num: "03",
    title: "Thermal Architecture",
    body: "Liquid-cooled battery pack with phase-change buffering — consistent output from cold mornings to midday sun.",
  },
];

export default function ExpTech() {
  return (
    <section className="relative w-full bg-white py-[120px] lg:py-[180px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-[900px]"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-stone-400">
            <span className="h-px w-10 bg-lime" />
            <span>03 — TECH</span>
          </div>
          <h2 className="font-outfit text-[44px] font-black leading-[0.92] tracking-[-1.5px] text-stone-900 sm:text-[60px] lg:text-[80px] lg:tracking-[-3px]">
            INTELLIGENCE,
            <br />
            <span className="text-stone-300">UNDER THE SURFACE.</span>
          </h2>
        </motion.div>

        {/* Feature panel */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-stone-100">
              <Image
                src="/images/carbon-fiber.png"
                alt="EVOLV composite hull"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
              {/* Spec pill */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[1.5px] text-white backdrop-blur-md">
                <span className="h-[6px] w-[6px] rounded-full bg-lime" />
                CARBON / ARAMID WEAVE
              </div>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="flex flex-col lg:col-span-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
                className="group relative border-t border-stone-900/10 py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start gap-6">
                  <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[2px] text-stone-400">
                    {p.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-outfit text-[24px] font-extrabold leading-[1.15] tracking-[-0.5px] text-stone-900 transition-colors duration-300 group-hover:text-stone-900 lg:text-[30px]">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-jakarta text-[15px] leading-[1.6] text-stone-500 lg:text-[16px]">
                      {p.body}
                    </p>
                  </div>
                  <div className="mt-2 h-[10px] w-[10px] rounded-full bg-stone-200 transition-colors duration-300 group-hover:bg-lime" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
