"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const callouts = [
  {
    label: "HEADS-UP DISPLAY",
    value: "AR OVERLAY",
    pos: "top-[14%] left-[3%]",
    dotPos: "top-[20%] left-[22%]",
  },
  {
    label: "NEURAL ASSIST",
    value: "ACTIVE",
    pos: "top-[14%] right-[3%]",
    dotPos: "top-[30%] right-[20%]",
  },
  {
    label: "HAPTIC THROTTLE",
    value: "4 ZONES",
    pos: "bottom-[22%] left-[3%]",
    dotPos: "bottom-[32%] left-[28%]",
  },
  {
    label: "LIVE TELEMETRY",
    value: "200 Hz",
    pos: "bottom-[22%] right-[3%]",
    dotPos: "bottom-[30%] right-[24%]",
  },
];

const hudFeatures = [
  { icon: "/icons/screen-icon.svg", label: "4K HDR PANEL", sub: "11.8-inch" },
  { icon: "/icons/neural-nav-icon.svg", label: "AR NAVIGATION", sub: "Live overlay" },
  { icon: "/icons/sound-icon.svg", label: "SPATIAL AUDIO", sub: "12 drivers" },
  { icon: "/icons/wifi-icon.svg", label: "VOICE CONTROL", sub: "On-device NLP" },
];

export default function CockpitHUD() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-32">
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
              COCKPIT / SECTION 04
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-dark">THE</span>
              <br />
              <span className="text-[#cacaca]">HELM.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              A cockpit reimagined around the rider. Glass, haptics, voice —
              all tuned for wet hands and open water.
            </p>
          </div>
        </motion.div>

        {/* SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] overflow-hidden rounded-[32px] bg-gray-100 md:h-[640px] md:rounded-[48px]"
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

          {/* Cockpit image */}
          <div className="absolute inset-0">
            <Image
              src="/images/specs-cockpit.png"
              alt="Cockpit interior"
              fill
              sizes="(max-width: 1024px) 100vw, 1300px"
              className="object-cover object-center"
            />
            {/* Darken overlay */}
            <div className="absolute inset-0 bg-dark-deep/30" />
          </div>

          {/* HUD indicator */}
          <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-white/80">
            <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
            <span>HUD / LIVE FEED</span>
          </div>

          {/* Corner telemetry */}
          <div className="absolute right-6 top-6 flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[2px] text-white/70">
            <span>11.8&apos;&apos; / 4K HDR</span>
            <span className="text-lime">120 fps</span>
          </div>

          {/* Dot markers */}
          {callouts.map((c) => (
            <motion.div
              key={c.label + "dot"}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`absolute ${c.dotPos} h-[10px] w-[10px] rounded-full bg-lime shadow-[0_0_16px_rgba(208,252,6,0.8)]`}
            >
              <motion.div
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-lime"
              />
            </motion.div>
          ))}

          {/* Callout labels */}
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
              className={`absolute ${c.pos} flex flex-col gap-1 rounded-xl bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-lime" />
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#888]">
                  {c.label}
                </span>
              </div>
              <span className="font-outfit text-[16px] font-black text-dark md:text-[18px]">
                {c.value}
              </span>
            </motion.div>
          ))}

          {/* Bottom readout */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-dark-deep/70 px-6 py-4 backdrop-blur-[8px]">
            <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[1.5px] text-white/60">
              <span>
                LAT: <span className="text-lime">59.3293° N</span>
              </span>
              <span className="hidden md:inline">
                LON: <span className="text-lime">18.0686° E</span>
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/60">
              SIG: <span className="text-lime">-62 dBm</span>
            </div>
          </div>
        </motion.div>

        {/* HUD features row */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-6">
          {hudFeatures.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-2xl bg-gray-100 p-5 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-white">
                <Image src={f.icon} alt="" width={22} height={22} />
              </div>
              <div className="min-w-0">
                <div className="font-outfit text-[13px] font-black uppercase tracking-[0.5px] text-dark md:text-[14px]">
                  {f.label}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#888]">
                  {f.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
