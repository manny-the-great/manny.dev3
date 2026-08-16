"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "/cv.pdf", label: "Resume", isExternal: true },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

export function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [starred, setStarred] = useState(false);

  const handleNavClick = (href: string, label: string) => {
    setActiveLink(label);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-[600] bg-[#050505]/85 backdrop-blur-md border-b border-zinc-800/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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
                onClick={() => handleNavClick(link.href, link.label)}
                className={`transition-colors ${
                  activeLink === link.label
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Right Star Button */}
        <button
          onClick={() => setStarred(!starred)}
          aria-label="Star Portfolio"
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
            starred
              ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
              : "bg-[#121216] border-zinc-800 text-amber-400 hover:border-amber-500/50 hover:bg-[#1a1a22]"
          }`}
        >
          <Star size={16} className={starred ? "fill-amber-400" : "fill-amber-400/80"} />
        </button>
      </div>
    </header>
  );
}
