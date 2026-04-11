"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(target: number, duration: number = 1.8, inView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return value;
}

/* ------------------------------------------------------------------ */
/*  Card wrapper with stagger + hover                                  */
/* ------------------------------------------------------------------ */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function SpecCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(255,255,255,0.25)",
        transition: { duration: 0.25 },
      }}
      className={`border border-white/10 bg-white/5 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Status badge component                                             */
/* ------------------------------------------------------------------ */
function StatusBadge({
  label,
  value,
  valueColor = "text-[#d0fc06]",
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5">
      <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#adadad]">
        {label}
      </span>
      <span className={`font-mono text-[12px] font-bold ${valueColor}`}>
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function EngineeringSpecs() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressInView = useInView(progressRef, { once: true, amount: 0.5 });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  /* Parallax for image card */
  const imageCardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageCardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const thrustValue = useCountUp(450, 1.8, statsInView);
  const weightValue = useCountUp(180, 1.8, statsInView);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center bg-[#1a1a1a] px-5 py-10 md:px-[42px] md:py-[42px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[32px] bg-[#2d2f2f] p-5 md:rounded-[48px] md:p-[42px]"
      >
        {/* -------------------------------------------------------- */}
        {/*  HEADER                                                   */}
        {/* -------------------------------------------------------- */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          {/* Left side */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3 font-mono text-[12px] font-bold uppercase tracking-[3.6px] text-[#d0fc06]"
            >
              SYSTEMS_REPORT // 2024
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-outfit text-[36px] font-black leading-[1] tracking-[-1.5px] text-white md:text-[48px] md:tracking-[-2.4px]"
            >
              ENGINEERING SPECS.
            </motion.h2>
          </div>

          {/* Right: status badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3"
          >
            <StatusBadge label="STATUS" value="READY_TO_DEPLOY" />
            <StatusBadge
              label="FIRMWARE"
              value="V.2.0.48"
              valueColor="text-white"
            />
          </motion.div>
        </div>

        {/* Pulse animation on lime badge text */}
        <style jsx global>{`
          @keyframes limePulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .lime-pulse {
            animation: limePulse 2.4s ease-in-out infinite;
          }
        `}</style>

        {/* -------------------------------------------------------- */}
        {/*  GRID                                                     */}
        {/* -------------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* ====================================================== */}
          {/*  ROW 1 – Col 1-2: Performance card (span 2)             */}
          {/* ====================================================== */}
          <SpecCard
            className="rounded-[28px] p-6 sm:col-span-2 md:rounded-[40px] md:p-8"
            delay={0.1}
          >
            {/* Top row: icon + label + value */}
            <div className="mb-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Image
                    src="/icons/accel-icon.svg"
                    alt="Acceleration"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="font-jakarta text-[11px] font-extrabold uppercase tracking-[2px] text-[#adadad]">
                  Acceleration
                </span>
              </div>
              <h3 className="font-outfit text-[20px] font-black leading-[1.1] text-white md:text-[24px]">
                0-50 KNOTS / 3.2s
              </h3>
            </div>

            {/* Progress bar */}
            <div ref={progressRef} className="mb-8">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#d0fc06]"
                  initial={{ width: "0%" }}
                  animate={progressInView ? { width: "85%" } : { width: "0%" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Bottom stats */}
            <div ref={statsRef} className="flex gap-6 md:gap-10">
              <div className="flex flex-col gap-1">
                <span className="font-jakarta text-[11px] font-extrabold uppercase tracking-[2px] text-[#adadad]">
                  Thrust
                </span>
                <span className="font-outfit text-[22px] font-black leading-none text-white md:text-[26px]">
                  {thrustValue}{" "}
                  <span className="text-[14px] font-bold text-[#adadad]">
                    LB
                  </span>
                </span>
              </div>
              <div className="h-[40px] w-px bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="font-jakarta text-[11px] font-extrabold uppercase tracking-[2px] text-[#adadad]">
                  TOTAL_WEIGHT
                </span>
                <span className="font-outfit text-[22px] font-black leading-none text-white md:text-[26px]">
                  {weightValue}{" "}
                  <span className="text-[14px] font-bold text-[#adadad]">
                    KG
                  </span>
                </span>
              </div>
            </div>
          </SpecCard>

          {/* ====================================================== */}
          {/*  ROW 1 – Col 3: Recovery card                           */}
          {/* ====================================================== */}
          <SpecCard
            className="rounded-[28px] p-6 md:rounded-[40px] md:p-8"
            delay={0.2}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Image
                src="/icons/recovery-icon.svg"
                alt="Recovery"
                width={24}
                height={24}
              />
            </div>
            <span className="mb-2 block font-jakarta text-[11px] font-extrabold uppercase tracking-[2px] text-[#adadad]">
              POWER_RECOVERY
            </span>
            <h3 className="mb-3 font-outfit text-[18px] font-black leading-[1.15] text-white md:text-[24px]">
              HYPER-DRIVE KINETIC RECOVERY
            </h3>
            <p className="font-jakarta text-[13px] font-medium leading-[1.6] text-white/50 md:text-[14px]">
              Regenerative braking captures kinetic energy during deceleration,
              converting momentum back into stored power for extended range.
            </p>
          </SpecCard>

          {/* ====================================================== */}
          {/*  ROW 1 – Col 4: Hull card                               */}
          {/* ====================================================== */}
          <SpecCard
            className="rounded-[28px] p-6 md:rounded-[40px] md:p-8"
            delay={0.3}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Image
                src="/icons/hull-icon.svg"
                alt="Hull"
                width={24}
                height={24}
              />
            </div>
            <span className="mb-2 block font-jakarta text-[11px] font-extrabold uppercase tracking-[2px] text-[#adadad]">
              HULL_COMPOSITION
            </span>
            <h3 className="mb-3 font-outfit text-[18px] font-black leading-[1.15] text-white md:text-[24px]">
              OCEAN-GRADE CARBON FIBER
            </h3>
            <p className="font-jakarta text-[13px] font-medium leading-[1.6] text-white/50 md:text-[14px]">
              Aerospace-derived carbon composites deliver extreme structural
              rigidity at minimal weight, engineered to withstand saltwater
              corrosion and impact.
            </p>
          </SpecCard>

          {/* ====================================================== */}
          {/*  ROW 2 – Full-width image card                          */}
          {/* ====================================================== */}
          <motion.div
            ref={imageCardRef}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative col-span-1 h-[360px] overflow-hidden rounded-[28px] sm:col-span-2 md:h-[400px] md:rounded-[40px] lg:col-span-4"
          >
            {/* Background image with parallax */}
            <motion.div
              className="absolute inset-[-10%] h-[120%] w-[120%]"
              style={{ y: parallaxY }}
            >
              <Image
                src="/images/specs-cockpit-overlay2.png"
                alt="Cockpit specifications"
                fill
                quality={95}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content layer */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
              {/* Top row */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Top-left: lime badge */}
                <div className="flex flex-col gap-1 rounded-3xl bg-[#d0fc06] p-3 md:p-4">
                  <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#2d2f2f]">
                    COMPONENT_SCAN
                  </span>
                  <span className="font-mono text-[12px] font-bold text-[#2d2f2f]">
                    OPTIMIZED_THERMALS
                  </span>
                </div>

                {/* Top-right: sensors + progress */}
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[2px] text-white/70">
                    SENSORS_ENABLED
                  </span>
                  <div className="flex h-1 w-[80px] overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      className="h-full rounded-full bg-[#d0fc06]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                    <motion.div
                      className="ml-0.5 h-full rounded-full bg-white"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "20%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                {/* Bottom-left: title + description */}
                <div className="max-w-[480px]">
                  <h3 className="mb-2 font-outfit text-[24px] font-black leading-[1.1] text-white md:text-[30px]">
                    NEURAL NAVIGATION.
                  </h3>
                  <p className="font-jakarta text-[13px] font-medium leading-[1.6] text-white/60 md:text-[14px]">
                    AI-assisted route planning adapts in real-time to tides,
                    currents, and marine traffic for optimized pathfinding.
                  </p>
                </div>

                {/* Bottom-right: telemetry glass card */}
                <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:rounded-[36px] md:p-5">
                  <span className="mb-3 block font-jakarta text-[10px] font-extrabold uppercase tracking-[2px] text-white/60">
                    TELEMETRY_LINK
                  </span>
                  <div className="flex items-center gap-3">
                    {/* Connectivity icons */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d0fc06]/20">
                      <svg
                        className="h-4 w-4 text-[#d0fc06]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"
                        />
                      </svg>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <svg
                        className="h-4 w-4 text-white/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <svg
                        className="h-4 w-4 text-white/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
