"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Blocks,
  Braces,
  Code2,
  Cpu,
  Database,
  Github,
  Globe2,
  Layers3,
} from "lucide-react";

const orbitSkills = [
  { label: "Solidity", icon: Blocks, color: "text-violet-400" },
  { label: "TypeScript", icon: Braces, color: "text-blue-400" },
  { label: "Web3", icon: Globe2, color: "text-cyan-400" },
  { label: "Backend", icon: Cpu, color: "text-amber-400" },
  { label: "Databases", icon: Database, color: "text-emerald-400" },
  { label: "GitHub", icon: Github, color: "text-zinc-300" },
  { label: "Frontend", icon: Code2, color: "text-sky-400" },
  { label: "Architecture", icon: Layers3, color: "text-pink-400" },
];

export function HeroOrbit() {
  const prefersReducedMotion = useReducedMotion();
  const duration = 48;

  return (
    <div
      className="relative mx-auto flex h-64 w-full max-w-[320px] items-center justify-center sm:h-72"
      role="img"
      aria-label="An animated orbit of the technologies Emmanuel works with"
    >
      <div className="absolute h-48 w-48 rounded-full border border-dashed border-zinc-700/50 sm:h-56 sm:w-56" />
      <div className="absolute h-36 w-36 rounded-full border border-zinc-800/60 sm:h-44 sm:w-44" />
      <div className="absolute h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-1 font-mono text-[9px] tracking-[0.32em] text-zinc-500">
          MANNY.DEV
        </span>
        <span className="hero-heading text-2xl text-white sm:text-3xl">
          Ideas,
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            engineered.
          </span>
        </span>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {orbitSkills.map(({ label, icon: Icon, color }, index) => {
          const angle = (index * 360) / orbitSkills.length;

          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(104px) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                className="flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-zinc-700/80 bg-[#121216] shadow-[0_8px_24px_rgba(0,0,0,0.28)] sm:h-11 sm:w-11"
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <Icon size={17} className={color} strokeWidth={1.8} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
