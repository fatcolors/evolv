"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chapters = [
  {
    num: "I",
    headline: "SILENT CONFIDENCE.",
    title: "Silent Launch",
    body: "Touch the throttle and the EVOLV glides — no roar, no smoke, no announcement. Just you, the hull, and the water opening ahead.",
  },
  {
    num: "II",
    headline: "CONTROL, REDEFINED.",
    title: "Cockpit Interface",
    body: "A single OLED readout keeps what matters close: power, range, heading, temperature. Everything else fades away.",
  },
  {
    num: "III",
    headline: "THE RIDE EXPERIENCE.",
    title: "Comfort & Stability",
    body: "A wide-footprint hull and low centre of mass turn chop into rhythm. Long rides end when you decide they should — not when your body does.",
  },
  {
    num: "IV",
    headline: "AN EMOTIONAL MACHINE.",
    title: "Lifestyle & Marina",
    body: "Dock, charge, disappear. A craft built for private marinas, quiet coves, and the unspoken rituals of a life spent close to water.",
  },
];

export default function ExpRide() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-white py-[120px] lg:py-[180px]"
    >
      {/* Ambient lime wash */}
      <div
        className="pointer-events-none absolute top-1/3 right-[-10%] h-[500px] w-[500px] rounded-full opacity-[0.18] blur-[140px]"
        style={{ background: "#d0fc06" }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 max-w-[1000px]"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2px] text-stone-400">
            <span className="h-px w-10 bg-lime" />
            <span>04 — EXPERIENCE</span>
          </div>
          <h2 className="font-outfit text-[44px] font-black leading-[0.92] tracking-[-1.5px] text-stone-900 sm:text-[60px] lg:text-[92px] lg:tracking-[-3.5px]">
            THE RIDE,
            <br />
            IN <span className="relative inline-block">FOUR MOVEMENTS.
              <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-lime lg:h-[12px]" />
            </span>
          </h2>
          <p className="mt-8 max-w-[600px] font-jakarta text-[17px] font-medium leading-[1.6] text-stone-600">
            Performance is a spec sheet. Experience is what happens when the
            craft, the water, and the rider become the same thing.
          </p>
        </motion.div>

        {/* Chapters */}
        <div className="space-y-24 lg:space-y-32">
          {chapters.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Visual */}
                <div className="lg:col-span-7 lg:[direction:ltr]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] bg-stone-100">
                    <Image
                      src={
                        i === 0
                          ? "/images/comfort-speed-bg.png"
                          : i === 1
                          ? "/images/specs-cockpit.png"
                          : i === 2
                          ? "/images/built-beyond-jetski.png"
                          : "/images/front.png"
                      }
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/80">
                        {c.title}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/50">
                        CHAPTER {c.num}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[3px] text-lime">
                    — CHAPTER {c.num}
                  </div>
                  <h3 className="mt-4 font-outfit text-[34px] font-black leading-[0.95] tracking-[-1.2px] text-stone-900 sm:text-[44px] lg:text-[52px] lg:tracking-[-2px]">
                    {c.headline}
                  </h3>
                  <p className="mt-6 font-jakarta text-[16px] leading-[1.65] text-stone-600 lg:text-[17px]">
                    {c.body}
                  </p>
                  <div className="mt-8 h-px w-full max-w-[280px] bg-stone-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-lime"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
