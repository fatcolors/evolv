"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/logos/logo1.svg", alt: "Partner 1", width: 214, height: 40 },
  { src: "/logos/logo2.svg", alt: "Partner 2", width: 217, height: 39 },
  { src: "/logos/logo3.svg", alt: "Partner 3", width: 119, height: 27 },
  { src: "/logos/logo4.svg", alt: "Partner 4", width: 128, height: 57 },
  { src: "/logos/logo5.svg", alt: "Partner 5", width: 50, height: 37 },
];

function LogoStrip() {
  return (
    <div className="flex shrink-0 items-center">
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center justify-center px-10 sm:px-12 md:px-[50px] transition-all duration-300 grayscale opacity-45 hover:grayscale-0 hover:opacity-100"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-8 w-auto sm:h-9 md:h-10"
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white py-16 overflow-hidden"
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max">
          <LogoStrip />
          <LogoStrip />
          <LogoStrip />
          <LogoStrip />
        </div>
      </div>
    </motion.section>
  );
}
