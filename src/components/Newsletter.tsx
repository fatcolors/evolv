"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-gray-100 py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[896px] mx-auto flex flex-col items-center px-4 md:px-8">
        {/* Mail Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -20 }}
          whileInView={{ opacity: 1, y: 0, rotate: -12 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="mb-8"
        >
          <div className="bg-lime rounded-[40px] w-24 h-24 flex items-center justify-center -rotate-12">
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              className="rotate-12"
            >
              <path
                d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z"
                fill="#2d2f2f"
              />
            </svg>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-outfit font-black text-dark text-[36px] sm:text-[48px] md:text-[72px] text-center tracking-[-0.04em] leading-none mb-6"
        >
          SECURE YOUR POSITION.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-jakarta text-text-muted text-lg md:text-2xl text-center max-w-[753px] leading-relaxed mb-10"
        >
          Batch 01 production is limited to{" "}
          <span className="font-semibold text-dark">250 units globally</span>.
          Join the priority waitlist to receive technical specs and exclusive
          ordering window notifications.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-[672px] relative mb-6"
        >
          <motion.input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.01, borderColor: "#d0fc06" }}
            className="w-full bg-gray-200 rounded-full border-2 border-transparent h-20 md:h-24 pl-6 md:pl-8 pr-[220px] md:pr-[270px] font-jakarta font-medium text-base md:text-xl text-dark placeholder:text-text-light outline-none transition-all duration-300 focus:border-lime"
            required
          />
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.button
                key="submit"
                type="submit"
                whileHover={{ scale: 1.05, backgroundColor: "#d0fc06", color: "#2d2f2f" }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-dark text-white rounded-full px-6 md:px-10 py-4 md:py-5 font-jakarta font-extrabold text-sm md:text-base tracking-[1px] uppercase flex items-center gap-3 transition-colors"
              >
                Register Now
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-lime text-dark rounded-full px-6 md:px-10 py-4 md:py-5 font-jakarta font-extrabold text-sm md:text-base tracking-[1px] uppercase flex items-center gap-2"
              >
                Registered
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10L8 14L16 6"
                    stroke="#2d2f2f"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Privacy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-jakarta font-bold text-[10px] text-text-light tracking-[1px] uppercase text-center"
        >
          By registering, you agree to our{" "}
          <a
            href="#"
            className="text-dark underline decoration-lime underline-offset-2 hover:text-lime transition-colors"
          >
            Privacy Policy
          </a>
        </motion.p>
      </div>
    </section>
  );
}
