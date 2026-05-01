"use client";

import React from 'react';
import { motion } from 'framer-motion';

const expertise = [
  "Solidity", "Smart Contracts", "EVM", "Chainlink Oracles", "CCIP",
  "JavaScript", "TypeScript", "Node.js", "Next.js", "REST APIs",
  "TailwindCSS", "Framer Motion", "Git", "Hardhat", "Web3.js",
];

export const AboutSection = () => (
  <section className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
    <div>
      <div className="section-label mb-2">About Me</div>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
        The Engineer Behind the Code
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left — narrative */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 flex flex-col gap-6 justify-between"
      >
        <div className="flex flex-col gap-5">
          <p className="text-foreground/90 text-base leading-[1.8]">
            I&apos;m <span className="text-primary font-semibold">Emmanuel Johnson</span> — a self-driven
            Blockchain & Full-Stack Engineer building at the intersection of
            decentralised infrastructure and clean product experiences.
          </p>
          <p className="text-muted text-base leading-[1.8]">
            My engineering journey started with curiosity about how systems
            communicate, which naturally led me into backend architecture, and
            eventually into the world of smart contracts and on-chain protocols.
            Every line of Solidity I write carries that same curiosity.
          </p>
          <p className="text-muted text-base leading-[1.8]">
            I care deeply about <span className="text-foreground font-medium">proof of work</span> — not
            just the consensus mechanism, but the philosophy. Ship things. Learn
            publicly. Build tools that matter. That&apos;s the mission.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-foreground/8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted font-heading">
            Open to full-time roles &amp; freelance contracts
          </span>
        </div>
      </motion.div>

      {/* Right — expertise tags + quote */}
      <div className="flex flex-col gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 flex flex-col gap-4 flex-1"
        >
          <h3 className="text-sm font-semibold font-heading text-foreground uppercase tracking-widest">
            Skills &amp; Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="pill-tag cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Editorial quote card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(56,189,248,0.04) 100%)' }}
        >
          <div className="absolute top-4 left-6 text-6xl font-black text-primary/15 leading-none font-heading select-none">
            &ldquo;
          </div>
          <blockquote className="text-foreground/80 text-base leading-relaxed mt-6 font-light italic">
            The Web3 stack is the most exciting engineering surface in a
            generation. I want to be one of the people who shapes what it becomes.
          </blockquote>
          <p className="text-xs text-muted font-heading mt-4">— Manny D&apos; Great</p>
        </motion.div>
      </div>
    </div>
  </section>
);
