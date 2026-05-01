"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const rotatingTitles = [
  "Blockchain Engineer.",
  "Web3 Builder.",
  "Backend Developer.",
  "Solidity Dev.",
  "Smart Contract Eng.",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const HeroSection = () => {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTitleIdx(p => (p + 1) % rotatingTitles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[180px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto gap-8"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary/60" />
          <span className="section-label">Portfolio · 2026</span>
          <div className="w-8 h-px bg-primary/60" />
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <h1
            className="hero-heading text-[clamp(3.5rem,10vw,9rem)] text-foreground"
            style={{ fontFamily: 'var(--font-bricolage), var(--font-poppins)', fontWeight: 900 }}
          >
            Hi. I&apos;m Manny.
          </h1>

          {/* Rotating subtitle */}
          <div className="h-[clamp(2.5rem,6vw,5.5rem)] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIdx}
                initial={{ y: 48, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -48, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="hero-heading text-[clamp(2.2rem,6vw,5.5rem)] gradient-text block"
                style={{ fontFamily: 'var(--font-bricolage), var(--font-poppins)', fontWeight: 900 }}
              >
                {rotatingTitles[titleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted text-[clamp(1rem,2vw,1.25rem)] max-w-2xl leading-relaxed font-light"
        >
          Building scalable{' '}
          <span className="text-foreground font-medium">Web3 infrastructure</span>,
          developer tools, and modern digital systems with{' '}
          <span className="text-[#F7DF1E] font-medium">JavaScript</span>,{' '}
          <span className="text-[#AA6746] font-medium">Solidity</span>, and
          backend architecture.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 justify-center">
          <button
            onClick={() => scrollTo('projects')}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm font-heading transition-all duration-300"
            style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://github.com/manny-the-great"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm font-heading border border-foreground/15 text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-all duration-300 backdrop-blur-sm"
            style={{ background: 'rgba(var(--foreground), 0.04)' }}
          >
            <Github size={16} />
            GitHub Profile
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 mt-4 cursor-pointer opacity-40 hover:opacity-70 transition-opacity"
          onClick={() => scrollTo('projects')}
        >
          <span className="text-xs text-muted tracking-widest uppercase font-heading">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-foreground/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-foreground/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
