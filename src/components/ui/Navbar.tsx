"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero",     label: "About"    },
  { href: "#projects", label: "Projects" },
  { href: "#activity", label: "Activity" },
  { href: "#contact",  label: "Contact"  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!mounted) return null;

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[600] pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-full border border-white/10"
          style={{
            background: "rgba(18,18,18,0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-bold text-white select-none"
            style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.1rem" }}
          >
            MJ
            <span style={{ color: "#fff", opacity: 0.5 }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white transition-colors duration-200 font-medium"
                style={{ color: "inherit" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="22" width="22">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[1000]"
              style={{ background: "rgba(5,5,5,0.8)", backdropFilter: "blur(8px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 z-[1100] h-full w-full md:w-[60%]"
              style={{ background: "#111" }}
            >
              <div className="flex flex-col gap-8 px-10 pt-28 text-3xl font-semibold">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-white hover:text-[rgb(144,255,3)] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
