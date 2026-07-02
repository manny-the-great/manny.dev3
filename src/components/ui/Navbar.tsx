"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", isActive: true },
  { href: "#projects", label: "Projects" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[600]">
      <div className="flex items-center gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl">
        
        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                link.isActive
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          
          {/* Resume Download Link */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-2 sm:ml-0 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </button>

      </div>
    </div>
  );
}
