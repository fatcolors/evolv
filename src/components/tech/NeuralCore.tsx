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

export default function NeuralCore() {
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
              THE BRAIN / SECTION 02
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-dark">NEURAL</span>
              <br />
              <span className="text-[#cacaca]">CORE.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              A purpose-built compute stack running EVOS — our maritime
              operating system — with learning models tuned for open water.
            </p>
          </div>
        </motion.div>

        {/* BENTO */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Main dark card */}
          <Card
            className="relative col-span-1 overflow-hidden rounded-[32px] p-8 md:rounded-[40px] md:p-10 lg:col-span-8 lg:h-[560px] lg:p-14"
            delay={0}
          >
            <div className="absolute inset-0 bg-dark" />
            <div className="absolute inset-0 opacity-40">
              <Image
                src="/images/carbon-fiber.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 860px"
                className="object-cover"
              />
            </div>

            {/* Circuit grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(208,252,6,1) 1px, transparent 1px), linear-gradient(90deg, rgba(208,252,6,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Lime radial */}
            <div
              className="pointer-events-none absolute -top-10 -right-10 h-[420px] w-[420px] rounded-full opacity-20 blur-[100px]"
              style={{ background: "#d0fc06" }}
            />

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
                    className="inline-block rounded-full bg-lime px-5 py-2 font-jakarta text-[13px] font-extrabold uppercase tracking-[1px] text-dark md:text-[14px]"
                  >
                    EVOS NEURAL CORE
                  </motion.span>
                  <h3 className="mt-5 max-w-[540px] font-outfit text-[28px] font-black uppercase leading-[1.05] tracking-[1px] text-white md:text-[36px] lg:text-[44px]">
                    240 TOPS OF
                    <br />
                    <span className="text-lime">MARITIME</span>
                    <br />
                    INTELLIGENCE.
                  </h3>
                </div>

                <div className="hidden flex-col items-end gap-1 md:flex">
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-white/40">
                    CHIP ID
                  </span>
                  <span className="font-mono text-[14px] font-bold tracking-[1px] text-lime">
                    EVX—N240
                  </span>
                </div>
              </div>

              {/* Bottom specs row */}
              <div className="mt-auto grid grid-cols-2 gap-6 pt-10 md:grid-cols-4">
                {[
                  { label: "CORES", value: "16" },
                  { label: "MEMORY", value: "32 GB" },
                  { label: "LATENCY", value: "4.2 ms" },
                  { label: "POWER", value: "45 W" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="border-l border-white/15 pl-4"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[2px] text-white/40">
                      {s.label}
                    </div>
                    <div className="mt-1 font-outfit text-[22px] font-black text-white md:text-[26px]">
                      {s.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>

          {/* Right: EVOS OS card */}
          <Card
            className="relative col-span-1 flex flex-col overflow-hidden rounded-[32px] bg-white p-8 md:rounded-[40px] md:p-10 lg:col-span-4 lg:h-[560px]"
            delay={0.15}
          >
            <div className="mb-4">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-dark">
                <Image
                  src="/icons/neural-nav-icon.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <h3 className="font-outfit text-[22px] font-black uppercase tracking-[1px] text-dark md:text-[26px]">
              EVOS
              <br />
              OPERATING
              <br />
              SYSTEM
            </h3>
            <p className="mt-3 max-w-[340px] font-jakarta text-[14px] font-medium leading-[1.6] text-[#666] md:text-[15px]">
              Our purpose-built maritime OS. Secure boot, real-time
              determinism, and a driver stack tuned for open water.
            </p>

            {/* Version box */}
            <div className="mt-auto flex flex-col gap-3 rounded-2xl bg-gray-100 p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#888]">
                  CURRENT BUILD
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[1.5px] text-[#2d2f2f]">
                  <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
                  STABLE
                </span>
              </div>
              <div className="font-outfit text-[32px] font-black text-dark">
                v4.2.1
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#888]">
                NEXT OTA — 14 DAYS
              </div>
            </div>
          </Card>

          {/* Feature row */}
          <Card
            className="col-span-1 flex flex-col gap-5 rounded-[32px] bg-lime p-8 md:rounded-[40px] md:p-10 lg:col-span-4 lg:h-[280px]"
            delay={0.2}
            hoverShadow="0 20px 50px rgba(208,252,6,0.3)"
          >
            <Image src="/icons/bolt-icon.svg" alt="" width={44} height={44} />
            <div className="mt-auto">
              <h4 className="font-outfit text-[20px] font-black uppercase tracking-[0.5px] text-dark md:text-[22px]">
                PREDICTIVE COMPUTE
              </h4>
              <p className="mt-2 font-jakarta text-[14px] font-medium leading-[1.5] text-[#56660d] md:text-[15px]">
                Models that anticipate throttle, wave, and handling response
                before you do.
              </p>
            </div>
          </Card>

          <Card
            className="col-span-1 flex flex-col gap-5 rounded-[32px] bg-white p-8 md:rounded-[40px] md:p-10 lg:col-span-4 lg:h-[280px]"
            delay={0.3}
          >
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-gray-200">
              <Image
                src="/icons/modular-power-icon.svg"
                alt=""
                width={28}
                height={28}
              />
            </div>
            <div className="mt-auto">
              <h4 className="font-outfit text-[20px] font-black uppercase tracking-[0.5px] text-dark md:text-[22px]">
                ON-DEVICE MODELS
              </h4>
              <p className="mt-2 font-jakarta text-[14px] font-medium leading-[1.5] text-[#666] md:text-[15px]">
                All inference runs locally. No cloud dependency, no latency,
                no drop-outs at sea.
              </p>
            </div>
          </Card>

          <Card
            className="col-span-1 flex flex-col gap-5 rounded-[32px] bg-dark p-8 md:rounded-[40px] md:p-10 lg:col-span-4 lg:h-[280px]"
            delay={0.4}
            hoverShadow="0 20px 50px rgba(0,0,0,0.25)"
          >
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-white/10">
              <Image
                src="/icons/recovery-icon.svg"
                alt=""
                width={28}
                height={28}
              />
            </div>
            <div className="mt-auto">
              <h4 className="font-outfit text-[20px] font-black uppercase tracking-[0.5px] text-white md:text-[22px]">
                SELF-LEARNING
              </h4>
              <p className="mt-2 font-jakarta text-[14px] font-medium leading-[1.5] text-white/70 md:text-[15px]">
                Every ride refines the model. Behaviour adapts to your
                style, conditions, and routes.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
