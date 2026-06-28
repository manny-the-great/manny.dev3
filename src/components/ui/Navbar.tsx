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
  const [mounted, setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleNavClick = (href: string) => {
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

          {/* Links */}
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
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
        </div>
      </div>
    </>
  );
}
