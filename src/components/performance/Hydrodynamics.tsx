"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const callouts = [
  {
    label: "DRAG COEFFICIENT",
    value: "0.18",
    unit: "Cx",
    pos: "top-[18%] left-[2%]",
    side: "left" as const,
  },
  {
    label: "DISPLACED WATER",
    value: "28",
    unit: "L/s",
    pos: "top-[18%] right-[2%]",
    side: "right" as const,
  },
  {
    label: "WAKE SIGNATURE",
    value: "—76",
    unit: "%",
    pos: "bottom-[20%] left-[2%]",
    side: "left" as const,
  },
  {
    label: "HULL CURVATURE",
    value: "VAR",
    unit: "CAMBER",
    pos: "bottom-[20%] right-[2%]",
    side: "right" as const,
  },
];

const techSpecs = [
  { label: "HULL MATERIAL", value: "Ocean-grade carbon composite" },
  { label: "HYDRO PROFILE", value: "Asymmetric variable-camber" },
  { label: "THRUST TYPE", value: "Impeller-driven jet-stream" },
  { label: "WATERLINE LENGTH", value: "3.24 m" },
  { label: "BEAM", value: "1.12 m" },
  { label: "DRY WEIGHT", value: "318 kg" },
];

export default function Hydrodynamics() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1360px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid grid-cols-1 gap-8 md:mb-20 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <p className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[4px] text-[#b9b9b9] md:text-[14px]">
              WATERBORNE / SECTION 04
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-dark">HYDRO</span>
              <br />
              <span className="text-[#cacaca]">DYNAMICS.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              A hull shape reconsidered from the keel up. Every curve, fin,
              and channel is sculpted to cheat friction and tame chop.
            </p>
          </div>
        </motion.div>

        {/* SHOWCASE */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Watercraft showcase */}
          <div className="relative lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[460px] overflow-hidden rounded-[32px] bg-gray-100 md:h-[580px] md:rounded-[48px]"
            >
              {/* Grid overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(45,47,47,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,47,47,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Floating shadow — syncs inversely with image float */}
              <motion.div
                aria-hidden
                initial={{ scaleX: 0.8, opacity: 0.35 }}
                animate={{
                  scaleX: [0.8, 1.1, 0.8],
                  opacity: [0.35, 0.15, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ filter: "blur(18px)" }}
                className="pointer-events-none absolute left-1/2 bottom-[8%] z-[1] h-[24px] w-[45%] -translate-x-1/2 rounded-[50%] bg-black"
              />

              {/* Scooter image */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-[2] flex items-center justify-center"
              >
                <div className="relative h-[70%] w-[85%]">
                  <Image
                    src="/images/front.png"
                    alt="EVOLV watercraft hull"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Reflection gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-200 to-transparent" />

              {/* Corner readout */}
              <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-[#888]">
                <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
                <span>HULL SCAN / LIVE</span>
              </div>

              {/* Spec callouts */}
              {callouts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group absolute ${c.pos} z-[3]`}
                >
                  <div className="flex flex-col gap-1 rounded-xl bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-colors duration-300 group-hover:bg-dark">
                    <div className="flex items-center gap-2">
                      <span className="h-[6px] w-[6px] rounded-full bg-lime" />
                      <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#888] transition-colors duration-300 group-hover:text-lime">
                        {c.label}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-outfit text-[22px] font-black leading-none text-dark transition-colors duration-300 group-hover:text-white md:text-[26px]">
                        {c.value}
                      </span>
                      <span className="font-outfit text-[11px] font-bold text-[#888] transition-colors duration-300 group-hover:text-white/60 md:text-[12px]">
                        {c.unit}
                      </span>
                    </div>
                  </div>

                  {/* Connector line + pulsing dot */}
                  <div
                    className={`pointer-events-none absolute top-1/2 flex h-[12px] w-[160px] -translate-y-1/2 items-center ${
                      c.side === "left" ? "left-full" : "right-full"
                    }`}
                  >
                    <div
                      className={`h-[2px] w-full scale-x-0 bg-lime transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                        c.side === "left" ? "origin-left" : "origin-right"
                      }`}
                    />
                    <span
                      className={`absolute top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-lime opacity-0 transition-opacity delay-500 duration-300 group-hover:opacity-100 ${
                        c.side === "left"
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      }`}
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-lime" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tech specs panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-[32px] bg-dark p-8 md:rounded-[48px] md:p-10 lg:col-span-4"
          >
            <span className="inline-block w-fit rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-jakarta text-[11px] font-extrabold uppercase tracking-[1.5px] text-lime">
              TECHNICAL READOUT
            </span>
            <h3 className="mt-5 font-outfit text-[24px] font-black uppercase leading-[1.1] tracking-[0.5px] text-white md:text-[28px]">
              THE FLOW
              <br />
              <span className="text-white/40">OF FORM.</span>
            </h3>

            {/* Spec list */}
            <div className="mt-8 flex flex-col">
              {techSpecs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.06,
                    ease: "easeOut",
                  }}
                  className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40">
                    {s.label}
                  </span>
                  <span className="text-right font-jakarta text-[12px] font-bold text-white md:text-[13px]">
                    {s.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
