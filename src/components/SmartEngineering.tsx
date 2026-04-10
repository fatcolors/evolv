"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(
  target: number,
  duration: number = 1.8,
  inView: boolean
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      // ease-out cubic
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
/*  Stat counter component                                             */
/* ------------------------------------------------------------------ */
function StatCounter({
  label,
  value,
  unit,
  inView,
}: {
  label: string;
  value: number;
  unit: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 1.8, inView);
  return (
    <div className="flex flex-col gap-1 w-[130px]">
      <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-[1px] text-[#666]">
        {label}
      </span>
      <span className="font-outfit font-black leading-[36px] text-[#2d2f2f] whitespace-nowrap">
        <span className="text-[38px] tabular-nums">{count} </span>
        <span className="text-[22px] text-[#7c7c7c]">{unit}</span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DB Gauge with concentric rings                                     */
/* ------------------------------------------------------------------ */
function DbGauge({ inView }: { inView: boolean }) {
  const dbValue = useCountUp(460, 2.0, inView);
  const formatted = (dbValue / 10).toFixed(1);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative h-[240px] w-[500px] md:h-[339px] md:w-[735px]">
        <svg
          viewBox="0 0 735 339"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <filter id="filter0_d_5_782" x="76" y="-121.75" width="582.5" height="582.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5_782"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_782"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_782" result="shape"/>
            </filter>
            <filter id="filter1_d_5_782" x="0" y="-197.75" width="734.5" height="734.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5_782"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_782"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_782" result="shape"/>
            </filter>
            <filter id="filter2_d_5_782" x="142.75" y="-56" width="449" height="449" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5_782"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_782"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_782" result="shape"/>
            </filter>
            <filter id="filter3_d_5_782" x="198.75" y="1" width="337" height="337" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5_782"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_782"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_782" result="shape"/>
            </filter>
          </defs>
          {/* Concentric rings with drop shadows */}
          <g filter="url(#filter0_d_5_782)">
            <circle cx="367.25" cy="169.5" r="265" stroke="white" strokeOpacity="0.3" strokeWidth="0.5" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter1_d_5_782)">
            <circle cx="367.25" cy="169.5" r="341" stroke="white" strokeOpacity="0.3" strokeWidth="0.5" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter2_d_5_782)">
            <circle cx="367.25" cy="168.5" r="198" stroke="white" strokeOpacity="0.3" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter3_d_5_782)">
            <circle cx="367.25" cy="169.5" r="142" stroke="white" strokeOpacity="0.3" shapeRendering="crispEdges"/>
          </g>
          {/* Lime full circle */}
          <circle cx="367.25" cy="169" r="96" stroke="#D0FC06" strokeWidth="16"/>
          {/* Dark arc */}
          <path d="M367.25 73C382.754 73 398.028 76.7552 411.764 83.9444C425.501 91.1336 437.292 101.543 446.129 114.282C454.966 127.021 460.587 141.711 462.509 157.096C464.432 172.48 462.599 188.102 457.169 202.624C451.739 217.146 442.872 230.137 431.327 240.485C419.782 250.834 405.902 258.232 390.874 262.048C375.847 265.863 360.119 265.982 345.036 262.394C329.952 258.807 315.962 251.619 304.262 241.446" stroke="#2D2F2F" strokeWidth="16" strokeLinecap="round"/>
        </svg>

        {/* Center value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px]">
          <span className="font-outfit text-[38px] font-black leading-[40px] text-[#2d2f2f] tabular-nums md:text-[44px]">
            {formatted}
          </span>
          <span className="font-outfit text-[17px] font-extrabold leading-[20px] text-[#666] md:text-[20px]">
            DB
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card hover wrapper                                                 */
/* ------------------------------------------------------------------ */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function BentoCard({
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
        y: -5,
        boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
      }}
      className={`transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function SmartEngineering() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const gaugeRef = useRef<HTMLDivElement>(null);
  const gaugeInView = useInView(gaugeRef, { once: true, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f6f6] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* -------------------------------------------------------- */}
        {/*  HEADER                                                   */}
        {/* -------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid grid-cols-1 gap-8 md:mb-20 lg:grid-cols-12 lg:gap-0"
        >
          {/* Left: label + heading */}
          <div className="lg:col-span-8">
            <p
              className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[4px] text-[#b9b9b9] md:text-[14px]"
            >
              THE ARCHITECTURE OF POWER
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[1] tracking-tight md:text-[72px] lg:text-[96px]">
              <span className="text-[#2d2f2f]">SMART</span>
              <br className="hidden md:block" />{" "}
              <span className="text-[#cacaca]">ENGINEERING.</span>
            </h2>
          </div>

          {/* Right: description */}
          <div className="flex items-end lg:col-span-4">
            <p className="max-w-[420px] font-jakarta text-[16px] font-normal leading-[1.6] text-[#666] md:text-[18px]">
              A masterclass in asymmetric design and hydrodynamic efficiency.
              Every curve is calculated for peak maritime performance.
            </p>
          </div>
        </motion.div>

        {/* -------------------------------------------------------- */}
        {/*  BENTO GRID                                               */}
        {/* -------------------------------------------------------- */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Top row: dark card + tall card (equal height via flex stretch) */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-6">
            {/* --- 1. Large dark card --- */}
            <BentoCard
              className="relative min-h-[400px] overflow-hidden rounded-[32px] p-8 md:min-h-[520px] md:rounded-[40px] md:p-10 lg:h-auto lg:min-h-[584px] lg:w-[835px]"
              delay={0}
            >
              {/* bg colour */}
              <div className="absolute inset-0 bg-[#2d2f2f]" />
              {/* carbon fibre texture */}
              <div className="absolute inset-0 opacity-60">
                <Image
                  src="/images/peak-efficiency.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                {/* badge */}
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-fit rounded-full bg-[#d0fc06] px-5 py-2 font-jakarta text-[14px] font-extrabold uppercase tracking-[1px] text-[#2d2f2f] md:text-[16px]"
                >
                  PEAK EFFICIENCY
                </motion.span>

                <div className="mt-auto">
                  <h3 className="mb-3 font-outfit text-[26px] font-black uppercase leading-[1.1] tracking-[1.8px] text-white md:text-[32px] lg:text-[36px]">
                    REDEFINING THE
                    <br />
                    WATERCRAFT PARADIGM.
                  </h3>
                  <p className="max-w-[480px] font-jakarta text-[14px] font-semibold leading-[1.6] text-white/80 md:text-[16px]">
                    Precision-engineered hull geometry paired with an
                    all-electric powertrain delivers unmatched acceleration,
                    range, and control across every sea condition.
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* --- 2. Right tall card (stretches to match dark card height) --- */}
            <BentoCard
              className="flex flex-col rounded-[32px] bg-[#e1e3e3] p-7 md:rounded-[40px] md:p-10 lg:h-auto lg:w-[493px]"
              delay={0.15}
            >
              <div className="mb-5">
                <Image
                  src="/icons/bolt-icon.svg"
                  alt="Bolt"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="mb-3 font-outfit text-[20px] font-black uppercase tracking-[1.2px] text-[#2d2f2f] md:text-[24px]">
                MODULAR POWER CORE
              </h3>
              <p className="mb-6 max-w-[380px] font-jakarta text-[14px] font-medium leading-[1.6] text-[#666] md:text-[16px]">
                Swappable high-density lithium cells allow for non-stop action
                with zero downtime. Engineered for hot-swapping in maritime
                environments.
              </p>
              <div className="relative mt-auto flex-1 min-h-[300px] overflow-hidden rounded-2xl lg:min-h-0">
                <video
                  src="/images/battery-swap.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </BentoCard>
          </div>

          {/* --- 3. Two small cards spanning full container width --- */}
          <div className="flex flex-col gap-5 sm:flex-row lg:gap-6">
            {/* 3a. Lime card */}
            <BentoCard
              className="flex min-h-[240px] flex-1 flex-col rounded-[32px] bg-[#d0fc06] p-7 md:min-h-[280px] md:rounded-[40px] md:p-8"
              delay={0.2}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#2d2f2f]/10 md:h-[50px] md:w-[50px]">
                  <Image
                    src="/icons/nav-icon.svg"
                    alt="Navigation"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#2d2f2f]/10 md:h-[50px] md:w-[50px]">
                  <Image
                    src="/icons/arrow-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="mt-auto">
                <h4 className="mb-2 font-outfit text-[18px] font-black uppercase tracking-[0.5px] text-[#2d2f2f] md:text-[20px]">
                  NEURAL NAVIGATION
                </h4>
                <p className="font-jakarta text-[14px] font-medium leading-[1.5] text-[#56660d] md:text-[16px]">
                  AI-assisted route planning adapts in real-time to tides,
                  currents, and traffic.
                </p>
              </div>
            </BentoCard>

            {/* 3b. Gray card */}
            <BentoCard
              className="flex min-h-[240px] flex-1 flex-col rounded-[32px] bg-[#f0f1f1] p-7 md:min-h-[280px] md:rounded-[40px] md:p-8"
              delay={0.3}
            >
              <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[#2d2f2f] md:h-[80px] md:w-[80px]">
                <Image
                  src="/icons/carbon-icon.svg"
                  alt="Carbon"
                  width={32}
                  height={32}
                />
              </div>

              <div className="mt-auto">
                <h4 className="mb-2 font-outfit text-[18px] font-black uppercase tracking-[0.5px] text-[#2d2f2f] md:text-[20px]">
                  OCEAN-GRADE CARBON
                </h4>
                <p className="font-jakarta text-[14px] font-medium leading-[1.5] text-[#666] md:text-[16px]">
                  Aerospace-derived carbon composites deliver extreme
                  rigidity at minimal weight.
                </p>
              </div>
            </BentoCard>
          </div>

          {/* --- 4. Full-width bottom bar --- */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-[32px] bg-[#e7e8e8] p-8 md:h-[339px] md:rounded-[40px] md:p-0"
          >
            <div className="flex h-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-0">
              {/* Left content */}
              <div className="flex flex-col gap-4 shrink-0 md:pl-[48px]">
                <h3 className="font-outfit text-[24px] font-black uppercase leading-[36px] tracking-[1.5px] text-[#2d2f2f] md:text-[30px]">
                  ACOUSTIC SIGNATURE
                  <br />
                  CONTROL
                </h3>
                <p className="max-w-[487px] font-jakarta text-[14px] font-medium leading-[1.5] text-[#666] md:text-[16px]">
                  Whisper-quiet propulsion that respects marine life. Our
                  patented &quot;Silent Fin&quot; technology reduces underwater noise
                  pollution by{" "}
                  <span className="font-bold text-[#2d2f2f]">94% compared</span>{" "}
                  to traditional hulls.
                </p>

                {/* Stats */}
                <div ref={statsRef} className="flex items-start gap-[32px] pt-[16px]">
                  <StatCounter
                    label="Thrust"
                    value={450}
                    unit="LB"
                    inView={statsInView}
                  />
                  {/* vertical divider */}
                  <div className="h-[48px] w-px bg-[#e1e3e3]" />
                  <StatCounter
                    label="Weight"
                    value={180}
                    unit="KG"
                    inView={statsInView}
                  />
                </div>
              </div>

              {/* Right: DB gauge */}
              <div ref={gaugeRef} className="flex flex-1 shrink-0 items-center justify-center overflow-hidden">
                <DbGauge inView={gaugeInView} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
