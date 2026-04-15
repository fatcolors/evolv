"use client";

import { motion } from "framer-motion";

const experienceLinks = ["Design Philosophy", "Engineering", "Sustainability"];
const companyLinks = ["Press Kit", "Privacy", "Terms"];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-dark-deep rounded-t-[32px]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 lg:py-20">
          {/* Col 1: Brand */}
          <div>
            <h3 className="font-outfit font-bold text-2xl text-white mb-5">
              EVOLV MARITIME
            </h3>
            <p className="font-jakarta text-sm text-[#a8a29e] leading-relaxed mb-6">
              Pioneering the silent revolution in maritime performance. Designing
              the vessels of tomorrow, today.
            </p>
            <div className="flex gap-4">
              {/* X / Twitter */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Col 2: Experience */}
          <div>
            <h4 className="font-jakarta font-bold text-base text-white mb-6">
              Experience
            </h4>
            <ul className="space-y-4">
              {experienceLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ color: "#ffffff", x: 4 }}
                    className="font-jakarta text-base text-[#78716c] transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-jakarta font-bold text-base text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ color: "#ffffff", x: 4 }}
                    className="font-jakarta text-base text-[#78716c] transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="sm:text-right lg:text-right">
            <h4 className="font-jakarta font-bold text-base text-white mb-6">
              Contact
            </h4>
            <p className="font-jakarta text-sm text-[#78716c] mb-4">
              hello@fatcolors.pl
            </p>
            <p className="font-jakarta text-sm text-[#78716c]">
              Stockholm, Sweden
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
          <p className="font-jakarta text-[10px] text-[#a8a29e] tracking-[1px] uppercase">
            &copy; 2026{" "}
            <a
              href="https://fatcolors.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d0fc06] transition-colors duration-200"
            >
              FATCOLORS.PL
            </a>
            {" "}. All rights reserved.
          </p>
          <p className="font-jakarta text-[10px] text-[#a8a29e] tracking-[1px] uppercase">
            Built with Kinetic Precision
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
