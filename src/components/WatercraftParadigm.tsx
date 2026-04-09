"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const labelVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/*  Glass Card                                                         */
/* ------------------------------------------------------------------ */
function GlassCard({
  icon,
  iconSize,
  title,
  description,
  delay,
  floatDuration,
}: {
  icon: string;
  iconSize: number;
  title: string;
  description: string;
  delay: number;
  floatDuration: number;
}) {
  return (
    /* Outer wrapper handles the entrance animation (slide-up) */
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-1"
    >
      {/* Inner wrapper handles hover only (no float animation) */}
      <motion.div
        whileHover={{
          borderColor: "rgba(255,255,255,0.3)",
          scale: 1.02,
        }}
        className="flex flex-1 flex-col gap-5 rounded-[56px] border border-white/10 bg-white/10 p-8 backdrop-blur-[12px] transition-colors duration-300 md:p-10"
      >
        <div className="flex h-[48px] w-[48px] items-center justify-center">
          <Image src={icon} alt="" width={iconSize} height={iconSize} />
        </div>

        <h3 className="font-jakarta text-[18px] font-extrabold uppercase leading-tight tracking-[-1px] text-white md:text-[20px]">
          {title}
        </h3>

        <p className="font-jakarta text-[14px] font-medium leading-[1.6] text-white/60">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Heading words                                                      */
/* ------------------------------------------------------------------ */
const headingWords = [
  { text: "REDEFINING", color: "text-white" },
  { text: "THE", color: "text-white" },
  { text: "WATERCRAFT", color: "text-[#d0fc06]" },
  { text: "PARADIGM.", color: "text-white" },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function WatercraftParadigm() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax for background image */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#2d2f2f] min-h-[600px] md:min-h-[800px] lg:h-[995px] -mt-px"
    >
      {/* ---- Background image with parallax ---- */}
      <motion.div
        className="absolute inset-0 h-[120%] w-full"
        style={{ y: bgY }}
      >
        <Image
          src="/images/watercraft-bg2.png"
          alt=""
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto flex h-full max-w-[896px] flex-col items-center justify-center px-6 py-20 md:px-8 lg:py-0">
        {/* Label */}
        <motion.p
          variants={labelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 text-center font-jakarta text-[14px] font-extrabold uppercase tracking-[6px] text-[#d0fc06] md:text-[16px]"
        >
          SMART ENGINEERING
        </motion.p>

        {/* Heading — word-by-word stagger */}
        <h2 className="flex flex-wrap justify-center text-center font-outfit text-[48px] font-black uppercase leading-[0.9] tracking-[-1.5px] md:text-[72px] md:tracking-[-2.5px] lg:text-[96px] lg:tracking-[-3.84px]">
          {headingWords.map((word, i) => (
            <motion.span
              key={word.text}
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mr-[0.3em] last:mr-0 ${word.color}`}
            >
              {word.text}
            </motion.span>
          ))}
        </h2>

        {/* Glass cards */}
        <div className="mt-12 flex w-full flex-col gap-6 md:gap-8 lg:flex-row">
          <GlassCard
            icon="/icons/modular-power-icon.svg"
            iconSize={32}
            title="MODULAR POWER CORE"
            description="Swappable high-density lithium cells allow for non-stop action with zero downtime and maximum endurance."
            delay={0.1}
            floatDuration={3}
          />
          <GlassCard
            icon="/icons/neural-nav-icon.svg"
            iconSize={26}
            title="NEURAL NAVIGATION"
            description="AI-powered depth sensing and predictive routing adapt to real-time ocean conditions for optimal safety and speed."
            delay={0.25}
            floatDuration={3.5}
          />
        </div>
      </div>
    </section>
  );
}
