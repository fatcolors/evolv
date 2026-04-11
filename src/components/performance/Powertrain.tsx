"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function Card({
  children,
  className = "",
  delay = 0,
  hoverShadow = "0 20px 50px rgba(0,0,0,0.10)",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverShadow?: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: hoverShadow }}
      className={`transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Powertrain() {
  return (
    <section className="relative bg-gray-100 px-5 py-20 md:px-10 md:py-32">
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
              THE CORE / SECTION 02
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-dark">ENGINEERED</span>
              <br />
              <span className="text-[#cacaca]">FOR VELOCITY.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              A dual axial-flux drivetrain mated to a direct-drive rotor.
              Zero gearbox losses. Zero latency. All thrust.
            </p>
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Main lime card */}
          <Card
            className="relative col-span-1 overflow-hidden rounded-[32px] bg-lime p-8 md:rounded-[40px] md:p-10 lg:col-span-8 lg:h-[560px] lg:p-14"
            delay={0}
            hoverShadow="0 20px 50px rgba(208,252,6,0.35)"
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <motion.span
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block rounded-full bg-dark px-5 py-2 font-jakarta text-[13px] font-extrabold uppercase tracking-[1px] text-lime md:text-[14px]"
                  >
                    DUAL AXIAL-FLUX DRIVE
                  </motion.span>
                  <h3 className="mt-5 max-w-[540px] font-outfit text-[28px] font-black uppercase leading-[1.05] tracking-[1px] text-dark md:text-[36px] lg:text-[44px]">
                    TWIN ROTORS.
                    <br />
                    ONE MISSION:
                    <br />
                    <span className="text-dark/60">RAW THRUST.</span>
                  </h3>
                </div>

                {/* Spec chip */}
                <div className="hidden flex-col items-end gap-1 md:flex">
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-dark/50">
                    MOTOR ID
                  </span>
                  <span className="font-mono text-[14px] font-bold tracking-[1px] text-dark">
                    EVX—240D
                  </span>
                </div>
              </div>

              {/* Bottom spec row */}
              <div className="mt-auto grid grid-cols-2 gap-6 pt-10 md:grid-cols-4">
                {[
                  { label: "ROTORS", value: "2" },
                  { label: "PEAK RPM", value: "14,800" },
                  { label: "TORQUE", value: "720 Nm" },
                  { label: "EFFICIENCY", value: "96.4%" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="border-l border-dark/20 pl-4"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[2px] text-dark/50">
                      {s.label}
                    </div>
                    <div className="mt-1 font-outfit text-[22px] font-black text-dark md:text-[26px]">
                      {s.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>

          {/* Right tall card — battery unit */}
          <Card
            className="relative col-span-1 flex flex-col overflow-hidden rounded-[32px] bg-white p-8 md:rounded-[40px] md:p-10 lg:col-span-4 lg:h-[560px]"
            delay={0.15}
          >
            <h3 className="font-outfit text-[22px] font-black uppercase tracking-[1px] text-dark md:text-[26px]">
              MODULAR POWER
              <br />
              CORE
            </h3>
            <p className="mt-3 max-w-[340px] font-jakarta text-[14px] font-medium leading-[1.6] text-[#666] md:text-[15px]">
              Swappable high-density lithium cells. Hot-swap ready.
              0—80% in 22 minutes under marine fast-charge.
            </p>
            <div className="relative mt-6 flex-1 min-h-[280px] overflow-hidden rounded-2xl bg-gray-200 lg:min-h-0">
              <Image
                src="/images/battery-unit-new.png"
                alt="Modular power core"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="scale-125 object-contain object-center"
              />
              {/* Overlay label */}
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-1 rounded-xl bg-white/90 px-3 py-2 backdrop-blur-sm">
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#888]">
                  CAPACITY
                </span>
                <span className="font-outfit text-[18px] font-black text-dark">
                  28 kWh
                </span>
              </div>
            </div>
          </Card>

          {/* Feature row — 2 small cards */}
          <Card
            className="col-span-1 flex flex-col gap-5 rounded-[32px] bg-white p-8 md:rounded-[40px] md:p-10 lg:col-span-6 lg:h-[280px]"
            delay={0.2}
          >
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-dark">
              <Image
                src="/icons/modular-power-icon.svg"
                alt=""
                width={28}
                height={28}
              />
            </div>
            <div className="mt-auto">
              <h4 className="font-outfit text-[20px] font-black uppercase tracking-[0.5px] text-dark md:text-[22px]">
                DIRECT DRIVE
              </h4>
              <p className="mt-2 font-jakarta text-[14px] font-medium leading-[1.5] text-[#666] md:text-[15px]">
                No gearbox. No belts. Just uninterrupted energy transfer from
                stator to water.
              </p>
            </div>
          </Card>

          <Card
            className="col-span-1 flex flex-col gap-5 rounded-[32px] bg-dark p-8 md:rounded-[40px] md:p-10 lg:col-span-6 lg:h-[280px]"
            delay={0.3}
            hoverShadow="0 20px 50px rgba(0,0,0,0.25)"
          >
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-white/10">
              <Image src="/icons/hull-icon.svg" alt="" width={28} height={28} />
            </div>
            <div className="mt-auto">
              <h4 className="font-outfit text-[20px] font-black uppercase tracking-[0.5px] text-white md:text-[22px]">
                THERMAL MASTERY
              </h4>
              <p className="mt-2 font-jakarta text-[14px] font-medium leading-[1.5] text-white/70 md:text-[15px]">
                Liquid-cooled stator assembly maintains optimal output across
                the entire power curve.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
