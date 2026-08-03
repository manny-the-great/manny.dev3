"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Download, Mail } from 'lucide-react';

const coreTools = [
  "Solidity",
  "TypeScript",
  "Next.js",
  "React.js",
  "Python",
  "Node.js",
  "Chainlink",
  "Hardhat",
  "Docker",
  "Linux",
  "Bash",
];

const stats = [
  { value: "4+", label: "PROJECTS" },
  { value: "3+", label: "YEARS EXP" },
  { value: "2026", label: "DEVELOPER" },
];

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-28 md:pt-36 pb-12 overflow-hidden max-w-6xl mx-auto w-full"
    >
      {/* Target/Radar SVG visual background graphic (Top Right) */}
      <div className="absolute top-10 right-0 w-[340px] h-[340px] md:w-[480px] md:h-[480px] pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 400 400" className="w-full h-full text-zinc-500 stroke-current fill-none" strokeWidth="0.75">
          {/* Concentric Circles */}
          <circle cx="200" cy="200" r="180" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="130" />
          <circle cx="200" cy="200" r="80" strokeDasharray="2 2" />
          <circle cx="200" cy="200" r="30" />

          {/* Crosshairs & Radial Lines */}
          <line x1="20" y1="200" x2="380" y2="200" />
          <line x1="200" y1="20" x2="200" y2="380" />
          <line x1="72" y1="72" x2="328" y2="328" strokeDasharray="4 4" />
          <line x1="72" y1="328" x2="328" y2="72" strokeDasharray="4 4" />

          {/* Outer compass marks */}
          <circle cx="200" cy="200" r="195" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-8 max-w-4xl">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold tracking-wider uppercase self-start"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-1"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] font-heading">
            Blockchain Developer. <br />
            <span className="text-zinc-400">FullStack Developer.</span>
          </h1>
        </motion.div>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed"
        >
          I build scalable Web3 infrastructure and interfaces that make it beautiful, from Solidity smart contracts on EVM chains to production-grade web applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="https://github.com/manny-the-great"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white-pill"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark-pill"
          >
            <Download size={15} />
            Resume
          </a>

          <button
            onClick={() => scrollTo('contact')}
            className="btn-dark-pill"
          >
            <Mail size={15} />
            Contact
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 pt-4 max-w-xl"
        >
          {stats.map((st) => (
            <div
              key={st.label}
              className="p-5 rounded-xl bg-[#0e0e11] border border-[#1e1e24] flex flex-col gap-1"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                {st.value}
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                {st.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Core Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3 pt-6"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
            CORE TOOLS
          </span>
          <div className="flex flex-wrap gap-2">
            {coreTools.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-[#0e0e11] border border-[#1e1e24] text-zinc-300 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
