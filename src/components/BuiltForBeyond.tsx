"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(
  target: number,
  duration: number = 1.8,
  inView: boolean,
  decimals: number = 0
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const multiplier = Math.pow(10, decimals);

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(
        Math.round(eased * target * multiplier) / multiplier
      );
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, decimals]);

  return value;
}

/* ------------------------------------------------------------------ */
/*  Card animation variants                                            */
/* ------------------------------------------------------------------ */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function BentoCard({
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
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        boxShadow: hoverShadow,
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
export default function BuiltForBeyond() {
  const dbRef = useRef<HTMLDivElement>(null);
  const dbInView = useInView(dbRef, { once: true, amount: 0.5 });
  const dbValue = useCountUp(48.0, 2.0, dbInView, 1);

  const jetskiCardRef = useRef<HTMLDivElement>(null);
  const jetskiInView = useInView(jetskiCardRef, { once: true, amount: 0.3 });

  const unitsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: unitsProgress } = useScroll({
    target: unitsRef,
    offset: ["start end", "end start"],
  });
  const unitsScale = useTransform(unitsProgress, [0, 0.5, 1], [0.85, 1.02, 0.95]);

  return (
    <section className="flex min-h-screen items-center bg-white px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[1360px]">
        {/* -------------------------------------------------------- */}
        {/*  HEADER ROW                                               */}
        {/* -------------------------------------------------------- */}
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-outfit text-[48px] font-black leading-[0.9] md:text-[72px] lg:text-[96px]"
              style={{ letterSpacing: "-3.84px" }}
            >
              <span className="text-[#2d2f2f]">BUILT FOR</span>
              <br />
              <span className="text-[#cacaca]">THE BEYOND.</span>
            </h2>
          </motion.div>

          {/* Right: Circular anchor button */}
          <motion.button
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full border-2 border-[#d0fc06] p-2.5 md:h-[128px] md:w-[128px]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#2d2f2f]">
              <Image
                src="/icons/anchor-icon.svg"
                alt="Anchor"
                width={36}
                height={36}
                className="md:h-[48px] md:w-[48px]"
              />
            </div>
          </motion.button>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  CARDS GRID                                               */}
        {/* -------------------------------------------------------- */}
        <div className="flex flex-col gap-8">
          {/* --- TOP ROW --- */}
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left large card - Acoustic Signature */}
            <BentoCard
              className="relative flex-[6] overflow-hidden rounded-[32px] border border-[#e7e8e8] bg-white shadow-sm md:rounded-[48px] lg:h-[498px]"
              delay={0}
            >
              <div ref={jetskiCardRef} className="relative flex h-full flex-col lg:flex-row">
                {/* Left: text content */}
                <div className="relative z-10 flex w-full shrink-0 flex-col justify-between p-8 md:p-10 lg:w-[52%]">
                  {/* Top */}
                  <div>
                    <span className="mb-4 inline-block rounded-full bg-[#d0fc06] px-5 py-2 font-jakarta text-[14px] font-extrabold uppercase tracking-[1px] text-[#2d2f2f]">
                      Signature Series
                    </span>
                    <h3 className="mb-3 font-outfit text-[24px] font-black uppercase leading-[1.1] text-[#2d2f2f] md:text-[30px] lg:text-[36px]">
                      ACOUSTIC SIGNATURE
                      <br />
                      CONTROL
                    </h3>
                    <p className="font-jakarta text-[16px] font-medium leading-[1.5] text-[#727272] md:text-[20px]">
                      Whisper-quiet propulsion that respects marine life and enhances the serenity of your journey.
                    </p>
                  </div>

                  {/* Bottom: DB stat */}
                  <div ref={dbRef} className="mt-6 flex items-baseline gap-2">
                    <span className="font-outfit text-[80px] font-black leading-none text-[#2d2f2f] md:text-[100px] lg:text-[128px]">
                      {dbValue.toFixed(1)}
                    </span>
                    <span className="font-jakarta text-[18px] font-extrabold text-[#d6d3d1] md:text-[24px]">
                      DB
                    </span>
                  </div>
                </div>

                {/* Right (desktop) / bottom (mobile): jet ski image */}
                <motion.div
                  className="relative h-[300px] w-full sm:h-[360px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[46%]"
                  initial={{ x: 540 }}
                  animate={jetskiInView ? { x: 0 } : { x: 540 }}
                  transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/scooter.png"
                      alt="Jet ski"
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      quality={95}
                      className="object-contain object-right scale-110 lg:object-center lg:scale-125"
                    />
                  </div>
                </motion.div>
              </div>
            </BentoCard>

            {/* Right dark card - Ocean Grade Carbon */}
            <BentoCard
              className="flex flex-[3] flex-col rounded-[32px] bg-[#2d2f2f] p-8 md:rounded-[48px] md:p-12 lg:h-[498px]"
              delay={0.15}
              hoverShadow="0 20px 50px rgba(0,0,0,0.25)"
            >
              <div className="mb-6">
                <Image
                  src="/icons/ocean-grade-icon.svg"
                  alt="Ocean grade"
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="mb-3 font-outfit text-[22px] font-black uppercase leading-[1.1] text-white md:text-[26px] lg:text-[30px]">
                OCEAN-GRADE
                <br />
                CARBON
              </h3>
              <p className="max-w-[380px] font-jakarta text-[16px] font-medium leading-[1.6] text-[#adadad] md:text-[20px]">
                Aerospace-derived carbon composites deliver extreme rigidity at
                minimal weight, engineered to endure saltwater environments.
              </p>

              {/* Arrow button */}
              <div className="mt-auto pt-6">
                <motion.button
                  whileHover={{
                    rotate: 45,
                    borderColor: "rgba(255,255,255,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-white/20"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16L16 4M16 4H6M16 4V14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </BentoCard>
          </div>

          {/* --- BOTTOM ROW --- */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1: Lime - Sustainable */}
            <BentoCard
              className="group flex h-[300px] flex-col rounded-[32px] bg-[#d0fc06] p-8 md:rounded-[48px] md:p-10"
              delay={0.2}
              hoverShadow="0 20px 50px rgba(208,252,6,0.25)"
            >
              <motion.div
                whileHover={{ filter: "brightness(1.05)" }}
                className="flex h-full flex-col"
              >
                <div className="mb-4">
                  <Image
                    src="/icons/sustainable-icon.svg"
                    alt="Sustainable"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="mt-auto font-outfit text-[20px] font-black uppercase leading-[1.2] text-[#2d2f2f] md:text-[24px]">
                  100% SUSTAINABLE
                  <br />
                  MANUFACTURING
                  <br />
                  PROCESS
                </h4>
              </motion.div>
            </BentoCard>

            {/* Card 2: Gray - Whitepaper */}
            <BentoCard
              className="group relative flex h-[300px] flex-col justify-end rounded-[32px] bg-[#e7e8e8] p-8 md:rounded-[48px] md:p-10"
              delay={0.3}
            >
              <div className="flex items-end justify-between">
                <div>
                  <span className="mb-2 block font-jakarta text-[14px] font-extrabold uppercase tracking-[1px] text-[#888] md:text-[16px]">
                    Deep Dive
                  </span>
                  <h4 className="font-outfit text-[20px] font-black uppercase leading-[1.2] text-[#2d2f2f] md:text-[24px]">
                    TECHNICAL
                    <br />
                    WHITEPAPER
                  </h4>
                </div>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 pb-1"
                >
                  <Image
                    src="/icons/whitepaper-arrow.svg"
                    alt="Read whitepaper"
                    width={32}
                    height={32}
                  />
                </motion.div>
              </div>
            </BentoCard>

            {/* Card 3: Light gray - 250 units */}
            <BentoCard
              className="flex h-[300px] flex-col items-center justify-center rounded-[32px] bg-[#e1e3e3] p-8 md:rounded-[48px] md:p-10"
              delay={0.4}
            >
              <motion.div
                ref={unitsRef}
                style={{ scale: unitsScale }}
                className="flex flex-col items-center text-center"
              >
                <span className="font-outfit text-[80px] font-black leading-none text-[#2d2f2f] md:text-[100px] lg:text-[128px]">
                  250
                </span>
                <span
                  className="mt-2 font-jakarta text-[14px] font-extrabold uppercase text-[#888] md:text-[16px]"
                  style={{ letterSpacing: "1px" }}
                >
                  UNITS IN BATCH 01
                </span>
              </motion.div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
