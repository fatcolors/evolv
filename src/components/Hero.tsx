"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Animated counter – counts from 0 to `value` over `duration` ms    */
/* ------------------------------------------------------------------ */
function AnimatedNumber({
  value,
  duration = 1800,
  delay = 0,
}: {
  value: number;
  duration?: number;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, value, duration, delay]);

  return <span ref={ref}>{display}</span>;
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                    */
/* ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-[100px] pb-[60px] lg:pt-[81px] lg:pb-0 lg:h-[830px]">
      {/* ---- content grid ---- */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col lg:flex-row items-start">
        {/* ========== LEFT COLUMN ========== */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-28 lg:pr-0 lg:pt-[100px] w-full lg:w-[60%] shrink-0 relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-lime px-4 py-1.5 font-jakarta text-[12px] font-extrabold uppercase tracking-[1.2px] text-dark">
              ZERO EMISSION / PEAK TORQUE
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mt-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="font-outfit text-[48px] sm:text-[64px] lg:text-[96px] font-black leading-[0.9] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.84px] text-dark"
            >
              THE FUTURE
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="font-outfit text-[48px] sm:text-[64px] lg:text-[96px] font-black leading-[0.9] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.84px] text-dark"
            >
              OF MARITIME
            </motion.h1>

            {/* MOBILITY. skewed block */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-1 inline-block origin-left"
            >
              <div className="-skew-x-6 bg-dark px-4 py-1 sm:px-6 lg:px-8">
                <span className="inline-block skew-x-6 font-outfit text-[48px] sm:text-[64px] lg:text-[96px] font-black leading-[0.9] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.84px] text-lime">
                  MOBILITY.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-8 max-w-[583px] font-jakarta text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.4] text-dark"
          >
            Engineered for silence, built for speed. Experience the
            world&apos;s most advanced electric personal watercraft
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* RESERVE NOW */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group rounded-full bg-lime px-10 py-5 font-jakarta text-[16px] font-extrabold uppercase tracking-[1px] text-dark shadow-[0_0_24px_rgba(208,252,6,0.45)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(208,252,6,0.7)]"
            >
              <span className="flex items-center gap-2">
                RESERVE NOW
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </motion.button>

            {/* VIEW SPECS */}
            <motion.button
              whileHover={{ borderColor: "#d0fc06" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border-2 border-[#f2f2f2] px-6 py-5 font-jakarta text-[16px] font-extrabold uppercase tracking-[1px] text-dark transition-colors duration-300"
            >
              VIEW SPECS
            </motion.button>
          </motion.div>
        </div>

        {/* ========== RIGHT COLUMN / IMAGE ========== */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative mt-10 w-full lg:mt-0 lg:absolute lg:right-0 lg:top-[60px] lg:h-full lg:w-[58%]"
        >
          <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full flex items-center justify-center lg:justify-end overflow-hidden bg-white">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-contain object-center lg:object-right scale-110 lg:scale-105"
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* --- Stats card (vertical, with icon circles) --- */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
            className="absolute right-[12%] top-[16%] z-20 hidden lg:block"
          >
            <div className="flex flex-col gap-5 rounded-[40px] border border-white/5 bg-dark p-[29px] backdrop-blur-[6px]">
              {/* Max Speed */}
              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/10">
                  <Image
                    src="/icons/lucide-zap.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#78716c]">
                    Max Speed
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-outfit text-[34px] font-black leading-[40px] tracking-[0.5px] text-white">
                      <AnimatedNumber value={65} delay={1200} />
                    </span>
                    <span className="font-outfit text-[12px] font-bold tracking-[1px] text-lime pb-1">
                      KTS
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/10" />

              {/* Charge */}
              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/10">
                  <Image
                    src="/icons/lucide-clock.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#78716c]">
                    Charge
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-outfit text-[34px] font-black leading-[40px] tracking-[0.5px] text-white">
                      <AnimatedNumber value={45} delay={1400} />
                    </span>
                    <span className="font-outfit text-[12px] font-bold tracking-[1px] text-lime pb-1">
                      MIN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Acoustics glass card (overlaying jet ski) --- */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
            className="absolute bottom-[28%] left-[12%] z-20 hidden lg:block"
          >
            <div className="flex items-center gap-4 rounded-[16px] border border-white/20 bg-[rgba(255,255,255,0.4)] p-[17px] shadow-[0_28px_28px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime">
                <Image
                  src="/icons/silent-drive-icon.svg"
                  alt="Silent Drive"
                  width={17}
                  height={14}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-jakarta text-[10px] font-extrabold uppercase tracking-[1px] text-[#57534e]">
                  Acoustics
                </span>
                <span className="font-jakarta text-[18px] font-extrabold text-dark">
                  Silent Drive&trade;
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
