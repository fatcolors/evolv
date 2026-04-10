"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function ComfortSpeed() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white px-5 pt-20 pb-0 md:px-10 md:pt-28">
      {/* Huge heading — fades in first, spans the whole section */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center font-outfit font-black uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(72px,18vw,280px)]"
      >
        <span className="block text-[#2d2f2f]">COMFORT</span>
        <span className="block text-[#cacaca]">AND SPEED.</span>
      </motion.h2>

      {/* Image slides up over the heading, clipped by the wrapper */}
      <div
        ref={wrapperRef}
        className="relative mx-auto -mt-[14vw] w-full max-w-[1236px] overflow-hidden rounded-t-[32px] md:rounded-t-[40px]"
        style={{ maxHeight: "80vh" }}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{
            duration: 1.6,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Image
            src="/images/comfort-speed-bg.png"
            alt="EVOLV watercraft — comfort and speed"
            width={1280}
            height={744}
            priority
            className="block h-auto w-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
