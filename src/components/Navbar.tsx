"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "FEATURES", href: "/" },
  { label: "PERFORMANCE", href: "/performance" },
  { label: "TECH", href: "/tech" },
  { label: "EXPERIENCE", href: "/experience" },
];

function LogoFull() {
  return (
    <svg
      width="159"
      height="21"
      viewBox="0 0 159 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[18px] w-auto shrink-0 md:h-[21px]"
    >
      <path d="M5.12132 19.2635C3.94975 20.4351 2.05025 20.4351 0.87868 19.2635C-0.292893 18.0919 -0.292893 16.1924 0.87868 15.0209L15.0208 0.878723C16.1924 -0.29285 18.0919 -0.292849 19.2635 0.878724C20.435 2.0503 20.435 3.94979 19.2635 5.12137L5.12132 19.2635Z" fill="#D0FC06"/>
      <path d="M0.878724 5.12132C-0.292849 3.94975 -0.292848 2.05025 0.878726 0.87868C2.0503 -0.292893 3.94979 -0.292893 5.12137 0.87868L19.2635 15.0208C20.4351 16.1924 20.4351 18.0919 19.2635 19.2635C18.0919 20.435 16.1924 20.435 15.0209 19.2635L0.878724 5.12132Z" fill="#D0FC06"/>
      <path d="M29.4871 19.0711V1.98309H34.2871V19.0711H29.4871ZM33.3751 19.0711V15.0871H42.5431V19.0711H33.3751ZM33.3751 12.3031V8.41509H41.6551V12.3031H33.3751ZM33.3751 5.96709V1.98309H42.3991V5.96709H33.3751Z" fill="#1C1917"/>
      <path d="M48.9031 19.0711L42.6391 1.98309H47.7271L52.3591 15.7831H50.1031L54.8071 1.98309H59.8231L53.4631 19.0711H48.9031Z" fill="#1C1917"/>
      <path d="M68.7507 19.4071C67.4067 19.4071 66.1667 19.1831 65.0307 18.7351C63.9107 18.2871 62.9267 17.6631 62.0787 16.8631C61.2467 16.0631 60.5987 15.1191 60.1347 14.0311C59.6707 12.9431 59.4387 11.7671 59.4387 10.5031C59.4387 9.22309 59.6627 8.04709 60.1107 6.97509C60.5747 5.90309 61.2227 4.96709 62.0547 4.16709C62.8867 3.36709 63.8627 2.75109 64.9827 2.31909C66.1187 1.87109 67.3587 1.64709 68.7027 1.64709C70.0467 1.64709 71.2787 1.87109 72.3987 2.31909C73.5347 2.75109 74.5187 3.36709 75.3507 4.16709C76.1827 4.96709 76.8227 5.91109 77.2707 6.99909C77.7347 8.07109 77.9667 9.24709 77.9667 10.5271C77.9667 11.7911 77.7347 12.9671 77.2707 14.0551C76.8227 15.1271 76.1827 16.0711 75.3507 16.8871C74.5187 17.6871 73.5427 18.3111 72.4227 18.7591C71.3027 19.1911 70.0787 19.4071 68.7507 19.4071ZM68.7027 15.1831C69.5987 15.1831 70.3747 14.9911 71.0307 14.6071C71.6867 14.2231 72.1907 13.6791 72.5427 12.9751C72.8947 12.2711 73.0707 11.4471 73.0707 10.5031C73.0707 9.79909 72.9667 9.16709 72.7587 8.60709C72.5667 8.03109 72.2787 7.54309 71.8947 7.1431C71.5107 6.7271 71.0467 6.41509 70.5027 6.20709C69.9747 5.98309 69.3747 5.87109 68.7027 5.87109C67.8067 5.87109 67.0307 6.06309 66.3747 6.44709C65.7187 6.81509 65.2147 7.35109 64.8627 8.05509C64.5107 8.74309 64.3347 9.55909 64.3347 10.5031C64.3347 11.2231 64.4307 11.8711 64.6227 12.4471C64.8307 13.0231 65.1267 13.5191 65.5107 13.9351C65.8947 14.3351 66.3507 14.6471 66.8787 14.8711C67.4227 15.0791 68.0307 15.1831 68.7027 15.1831Z" fill="#1C1917"/>
      <path d="M79.3433 19.0711V1.98309H84.1433V19.0711H79.3433ZM83.2553 19.0711V14.9911H91.2473V19.0711H83.2553Z" fill="#1C1917"/>
      <path d="M95.9468 19.0711L89.6828 1.98309H94.7708L99.4028 15.7831H97.1468L101.851 1.98309H106.867L100.507 19.0711H95.9468Z" fill="#1C1917"/>
      <path d="M111.575 19.0711V1.98309H116.375V19.0711H111.575Z" fill="#1C1917"/>
      <path d="M118.615 19.0711V1.98309H121.975L123.415 5.58309V19.0711H118.615ZM130.375 19.0711L120.463 6.61509L121.975 1.98309L131.887 14.4391L130.375 19.0711ZM130.375 19.0711L129.175 15.2791V1.98309H133.975V19.0711H130.375Z" fill="#1C1917"/>
      <path d="M144.651 19.3591C143.339 19.3591 142.115 19.1431 140.979 18.7111C139.859 18.2631 138.875 17.6391 138.027 16.8391C137.179 16.0391 136.515 15.1031 136.035 14.0311C135.571 12.9431 135.339 11.7671 135.339 10.5031C135.339 9.22309 135.571 8.04709 136.035 6.97509C136.515 5.90309 137.171 4.97509 138.003 4.19109C138.851 3.40709 139.835 2.79909 140.955 2.36709C142.075 1.91909 143.291 1.69509 144.603 1.69509C145.931 1.69509 147.147 1.90309 148.251 2.31909C149.355 2.73509 150.315 3.31109 151.131 4.04709L147.939 7.26309C147.555 6.8471 147.083 6.51909 146.523 6.27909C145.979 6.03909 145.339 5.91909 144.603 5.91909C143.963 5.91909 143.371 6.02309 142.827 6.23109C142.299 6.43909 141.843 6.74309 141.459 7.1431C141.075 7.54309 140.771 8.03109 140.547 8.60709C140.339 9.16709 140.235 9.79909 140.235 10.5031C140.235 11.2231 140.339 11.8711 140.547 12.4471C140.771 13.0071 141.075 13.4871 141.459 13.8871C141.843 14.2871 142.299 14.5991 142.827 14.8231C143.371 15.0311 143.963 15.1351 144.603 15.1351C145.323 15.1351 145.963 15.0231 146.523 14.7991C147.099 14.5751 147.595 14.2471 148.011 13.8151L151.227 17.0311C150.379 17.7671 149.427 18.3431 148.371 18.7591C147.315 19.1591 146.075 19.3591 144.651 19.3591Z" fill="#1C1917"/>
      <path d="M155.907 19.3591C155.155 19.3591 154.531 19.1031 154.035 18.5911C153.539 18.0791 153.291 17.4551 153.291 16.7191C153.291 15.9671 153.539 15.3351 154.035 14.8231C154.531 14.3111 155.155 14.0551 155.907 14.0551C156.659 14.0551 157.275 14.3111 157.755 14.8231C158.251 15.3351 158.499 15.9671 158.499 16.7191C158.499 17.4551 158.251 18.0791 157.755 18.5911C157.275 19.1031 156.659 19.3591 155.907 19.3591Z" fill="#D0FC06"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderBottom: "1px solid #f5f5f4",
          boxShadow: scrolled
            ? "0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)"
            : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <nav className="mx-auto flex h-[80px] max-w-[1280px] items-center justify-between px-8">
          {/* Left: Logo */}
          <a href="#" className="flex items-center">
            <LogoFull />
          </a>

          {/* Center: Nav links (desktop) */}
          <ul className="hidden items-center gap-[48px] lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="group relative font-outfit text-[14px] uppercase"
                    style={{
                      fontWeight: active ? 800 : 600,
                      color: active ? "#1c1917" : "#78716c",
                      letterSpacing: "1px",
                    }}
                    whileHover={{ color: "#1c1917" }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full"
                        style={{ backgroundColor: "#d0fc06" }}
                      />
                    )}
                    {!active && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#d0fc06] transition-all duration-300 ease-out group-hover:w-full" />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA button (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#waitlist"
              className="hidden h-[40px] items-center rounded-full px-6 font-outfit text-[12px] font-extrabold uppercase tracking-[1px] text-white lg:inline-flex"
              style={{ backgroundColor: "#1c1917" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#d0fc06",
                color: "#1c1917",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              Join Waitlist
            </motion.a>

            {/* Hamburger button (mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 6, backgroundColor: "#1c1917" }
                    : { rotate: 0, y: 0, backgroundColor: "#1c1917" }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full"
                style={{ backgroundColor: "#1c1917" }}
              />
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-6 rounded-full"
                style={{ backgroundColor: "#1c1917" }}
              />
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -6, backgroundColor: "#1c1917" }
                    : { rotate: 0, y: 0, backgroundColor: "#1c1917" }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full"
                style={{ backgroundColor: "#1c1917" }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center lg:hidden"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.97)" }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-10"
            >
{navLinks.map((link, index) => {
  const active = isActive(link.href);

  return (
    <motion.a
      key={link.label}
      href={link.href}
      onClick={() => setMobileMenuOpen(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: 0.15 + index * 0.06 }}
      className="relative font-outfit text-[28px] uppercase"
      style={{
        fontWeight: active ? 800 : 600,
        color: active ? "#1c1917" : "#78716c",
        letterSpacing: "2px",
      }}
    >
      {link.label}
      {active && (
        <span
          className="absolute -bottom-2 left-0 h-[3px] w-full"
          style={{ backgroundColor: "#d0fc06" }}
        />
      )}
    </motion.a>
  );
})}

              <motion.a
                href="#waitlist"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: 0.15 + navLinks.length * 0.06,
                }}
                className="mt-4 rounded-full px-10 py-3.5 font-outfit text-[14px] font-extrabold uppercase tracking-[1px] text-white"
                style={{ backgroundColor: "#1c1917" }}
              >
                Join Waitlist
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
