"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tech {
  name: string;
  icon: string;
  category: string;
  experience: string;
  usedIn: string[];
  needsInvert?: boolean;
}

const techs: Tech[] = [
  { name: "Solidity",    icon: "https://cdn.simpleicons.org/solidity/22c55e",   category: "Web3",     experience: "1+ yr",  usedIn: ["Chainlink Functions", "CCIP Experiments", "DeFi Contracts"] },
  { name: "Ethereum",    icon: "https://cdn.simpleicons.org/ethereum/9CA3AF",   category: "Web3",     experience: "1+ yr",  usedIn: ["Smart Contracts", "DApps", "Wallets"] },
  { name: "Chainlink",   icon: "https://cdn.simpleicons.org/chainlink/375BD2",  category: "Web3",     experience: "1 yr",   usedIn: ["Price Feeds", "Functions", "CCIP"] },
  { name: "JavaScript",  icon: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Frontend", experience: "3+ yrs", usedIn: ["DegenSim", "SafeChat", "Portfolio"] },
  { name: "TypeScript",  icon: "https://cdn.simpleicons.org/typescript/3178c6", category: "Frontend", experience: "2+ yrs", usedIn: ["DegenSim", "manny.dev3", "APIs"] },
  { name: "Node.js",     icon: "https://cdn.simpleicons.org/nodedotjs/22c55e",  category: "Backend",  experience: "2+ yrs", usedIn: ["SafeChat API", "REST Services", "WebSockets"] },
  { name: "Next.js",     icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",  category: "Frontend", experience: "2+ yrs", usedIn: ["manny.dev3", "DegenSim", "CryptoVerse"], needsInvert: true },
  { name: "Hardhat",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg", category: "Web3", experience: "1+ yr", usedIn: ["Contract Testing", "Deployment", "Scripts"] },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8",category: "Frontend", experience: "2+ yrs", usedIn: ["All UI projects"] },
];

const categoryColor: Record<string,string> = {
  Web3:     'text-primary border-primary/25 bg-primary/8',
  Frontend: 'text-secondary border-secondary/25 bg-secondary/8',
  Backend:  'text-yellow-400 border-yellow-400/25 bg-yellow-400/8',
};

export const TechStackGrid = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
      <div>
        <div className="section-label mb-2">Technology Stack</div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
          Tools of the Trade
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            onClick={() => setActive(active === tech.name ? null : tech.name)}
            className="glass-card p-4 flex flex-col items-center gap-2 cursor-pointer relative overflow-hidden group"
            whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
            whileTap={{ scale: 0.97 }}
            style={{ border: active === tech.name ? '1px solid rgba(34,197,94,0.4)' : undefined }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(34,197,94,0.06), transparent 70%)' }} />
            <img
              src={tech.icon}
              alt={tech.name}
              className={`w-7 h-7 object-contain ${tech.needsInvert ? 'dark:invert-0 invert' : ''}`}
            />
            <span className="text-[9px] font-semibold font-heading text-muted text-center uppercase tracking-wide leading-tight">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {active && (() => {
          const tech = techs.find(t => t.name === active)!;
          return (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="glass-card p-6 flex flex-col sm:flex-row gap-6 items-start"
                style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.03)' }}>
                <img src={tech.icon} alt={tech.name}
                  className={`w-12 h-12 object-contain flex-shrink-0 ${tech.needsInvert ? 'dark:invert-0 invert' : ''}`} />
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold font-heading text-foreground">{tech.name}</h3>
                    <span className={`text-[10px] font-semibold font-heading px-2.5 py-0.5 rounded-full border ${categoryColor[tech.category]}`}>
                      {tech.category}
                    </span>
                    <span className="text-xs text-muted font-heading">{tech.experience} experience</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.usedIn.map(p => (
                      <span key={p} className="tech-tag">{p}</span>
                    ))}
                  </div>
                </div>
                <button onClick={() => setActive(null)}
                  className="text-muted hover:text-foreground transition-colors text-xs font-heading self-start flex-shrink-0">
                  ✕ close
                </button>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
