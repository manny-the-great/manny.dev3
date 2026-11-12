"use client";

import React, { useState, useEffect } from "react";
import { Star, Search, Command } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "/Emmanuel-Johnson-CV.pdf", label: "Resume", isExternal: true },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [starred, setStarred] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    // Detect OS for keyboard shortcut label (⌘K vs Ctrl+K)
    if (typeof window !== "undefined") {
      setIsMac(navigator.userAgent.toLowerCase().includes("mac"));
    }

    // Scroll spy: highlight current visible section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    const sectionIds = ["home", "skills", "experience", "projects", "activity", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[600] bg-[#050505]/85 backdrop-blur-md border-b border-zinc-800/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Navigation Links */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
          {navLinks.map((link) =>
            link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Right Action Controls: ⌘K Search Pill + Star Button */}
        <div className="flex items-center gap-2.5">
          {/* Command Palette Trigger Button */}
          <button
            onClick={openCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#121216] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-mono transition-all cursor-pointer shadow-sm group"
            title="Open Command Palette (⌘K / Ctrl+K)"
          >
            <Search size={12} className="text-zinc-500 group-hover:text-zinc-300" />
            <span className="hidden sm:inline text-zinc-400 group-hover:text-zinc-200">
              Quick Actions
            </span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-850 text-[10px] text-zinc-400 font-sans border border-zinc-750">
              {isMac ? "⌘K" : "Ctrl+K"}
            </kbd>
          </button>

          {/* Star Portfolio Button */}
          <button
            onClick={() => setStarred(!starred)}
            aria-label="Star Portfolio"
            className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 cursor-pointer ${
              starred
                ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                : "bg-[#121216] border-zinc-800 text-amber-400 hover:border-amber-500/50 hover:bg-[#1a1a22]"
            }`}
          >
            <Star size={14} className={starred ? "fill-amber-400" : "fill-amber-400/80"} />
          </button>
        </div>
      </div>
    </header>
  );
}
