"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Clock } from 'lucide-react';

const infoCards = [
  {
    category: "EDUCATION",
    title: "Software & Web3 Engineering",
    subtitle: "B.Sc. — Computer Science & Software Development",
  },
  {
    category: "ROLE",
    title: "Blockchain Engineer + FullStack Developer",
    subtitle: "Open to high-leverage roles & contract opportunities",
  },
  {
    category: "INTERESTS",
    title: "Web3 Architecture · Smart Contracts · Minimal UI",
    subtitle: "DeFi Protocols · Developer Tools · Clean Systems",
  },
  {
    category: "LANGUAGES (HUMAN)",
    title: "English · Yoruba",
    subtitle: "Professional fluency across global teams",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col gap-8">
      {/* Section Header with Line */}
      <div className="flex items-center gap-4 text-xs tracking-wider uppercase font-semibold text-zinc-500">
        <span className="flex items-center gap-1 font-mono text-zinc-400">
          &lt;&gt; ABOUT ME
        </span>
        <div className="flex-1 h-[1px] bg-zinc-800/80" />
      </div>

      <div className="flex flex-col gap-6">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading leading-tight max-w-3xl">
          Blockchain &amp; FullStack Engineer <span className="text-zinc-400 font-normal">who ships clean interfaces.</span>
        </h2>

        {/* Bio Paragraphs */}
        <div className="flex flex-col gap-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
          <p>
            I specialize in Web3 engineering and full-stack systems, writing Solidity smart contracts that execute on EVM chains, deploying scalable backend infrastructure, and building responsive developer applications.
          </p>
          <p>
            On the frontend, I bring that same precision-engineering mindset to building interfaces and AI-powered Web3 tools. Clean code, tight typography, minimal dependencies. No bloat.
          </p>
          <p className="text-white font-medium">
            My goal is always the same: automate the complex, build the beautiful.
          </p>
        </div>

        {/* Quick Info Metadata List */}
        <div className="flex flex-col gap-3 pt-2 text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-2.5">
            <MapPin size={14} className="text-zinc-500 shrink-0" />
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-2.5">
            <GraduationCap size={14} className="text-zinc-500 shrink-0" />
            <span>Graduate <strong className="text-white font-semibold">2026</strong> — Computer Science</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={14} className="text-zinc-500 shrink-0" />
            <span>Currently building: <strong className="text-white font-semibold">AutoChain &amp; Streamly</strong></span>
          </div>
        </div>

        {/* Info Cards Grid (2x2 matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-6 rounded-xl bg-[#0e0e11] border border-[#1e1e24] flex flex-col gap-2 shadow-lg"
            >
              <span className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase font-mono">
                {card.category}
              </span>
              <h3 className="text-base font-bold text-white font-heading">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-400 font-normal">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
