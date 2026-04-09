"use client";

import { motion } from "framer-motion";

export default function ComfortSpeed() {
  return (
    <section className="relative bg-white px-5 pt-20 pb-0 md:px-10 md:pt-28">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-center font-outfit text-[56px] font-black leading-[0.9] tracking-[-2px] md:mb-10 md:text-[80px] lg:text-[108px] lg:tracking-[-4px]"
      >
        <span className="text-[#2d2f2f]">COMFORT</span>
        <br />
        <span className="text-[#cacaca]">AND SPEED.</span>
      </motion.h2>

      {/* Full-width video — container clips the black strip at the bottom */}
      <div className="mx-auto w-full max-w-[1216px] overflow-hidden rounded-t-[32px] md:rounded-t-[40px]" style={{ maxHeight: '75vh' }}>
        <video
          src="/images/comfort-speed-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block h-auto w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
