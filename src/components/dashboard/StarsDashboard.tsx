"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Trophy, Zap, Code2, Shield } from 'lucide-react';

interface StatCard {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
}

const statCards: StatCard[] = [
  { label: "GitHub Stars",      value: 436,  suffix: "+", icon: <Star   size={20} />, color: "text-yellow-400", glow: "rgba(250,204,21,0.15)" },
  { label: "Total Commits",     value: 1482, suffix: "+", icon: <GitFork size={20}/>, color: "text-primary",    glow: "rgba(34,197,94,0.15)"  },
  { label: "Smart Contracts",   value: 24,              icon: <Shield size={20} />, color: "text-secondary",   glow: "rgba(56,189,248,0.15)" },
  { label: "Repos Built",       value: 37,              icon: <Code2  size={20} />, color: "text-primary",    glow: "rgba(34,197,94,0.15)"  },
  { label: "Projects Shipped",  value: 15,  suffix: "+", icon: <Zap    size={20} />, color: "text-secondary",   glow: "rgba(56,189,248,0.15)" },
  { label: "Achievements",      value: 8,               icon: <Trophy size={20} />, color: "text-yellow-400", glow: "rgba(250,204,21,0.15)" },
];

const topRepos = [
  { name: "CryptoVerse",         stars: 124, forks: 32, lang: "TypeScript",  langColor: "#3178c6" },
  { name: "SecureChat",          stars: 89,  forks: 12, lang: "JavaScript",  langColor: "#f1e05a" },
  { name: "Chainlink Functions", stars: 156, forks: 45, lang: "Solidity",    langColor: "#AA6746" },
  { name: "CCIP Experiments",    stars: 42,  forks: 8,  lang: "Solidity",    langColor: "#AA6746" },
  { name: "manny.dev3",          stars: 25,  forks: 5,  lang: "TypeScript",  langColor: "#3178c6" },
];

function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <>{prefix}{count.toLocaleString()}{suffix}</>;
}

export const StarsDashboard = () => (
  <section id="stars" className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
    {/* Header */}
    <div>
      <div className="section-label mb-2">Recognition & Impact</div>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
        By the Numbers
      </h2>
    </div>

    {/* Stat cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {statCards.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="glass-card p-5 flex flex-col gap-3 relative overflow-hidden group cursor-default"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow}, transparent 70%)` }} />
          <div className={s.color}>{s.icon}</div>
          <div className="flex flex-col gap-0.5">
            <span className={`text-2xl font-black font-heading ${s.color}`}>
              <AnimatedNumber target={s.value} suffix={s.suffix} prefix={s.prefix} />
            </span>
            <span className="text-[10px] text-muted uppercase tracking-widest font-heading leading-tight">{s.label}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Top Repositories */}
    <div className="glass-card p-6 md:p-8 flex flex-col gap-5">
      <h3 className="font-bold font-heading text-white text-lg">Top Repositories</h3>
      <div className="flex flex-col divide-y divide-white/6">
        {topRepos.map((repo, i) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 py-3.5 group cursor-pointer items-start"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted/50 font-mono w-4">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm font-semibold font-mono text-white group-hover:text-primary transition-colors truncate">
                manny-the-great / {repo.name}
              </span>
            </div>
            <div className="flex items-center gap-5 text-xs text-muted font-heading ml-7 sm:ml-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: repo.langColor }} />
                {repo.lang}
              </div>
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400" />
                {repo.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={12} />
                {repo.forks}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
