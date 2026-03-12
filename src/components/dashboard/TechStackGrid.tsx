"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: "Solidity", icon: "💎", description: "Smart contract development and security." },
  { name: "Ethereum", icon: "Ξ", description: "Decentralized applications and protocols." },
  { name: "Chainlink", icon: "⬡", description: "Oracle integration and data feeds." },
  { name: "JavaScript", icon: "JS", description: "Fullstack development and scripting." },
  { name: "TypeScript", icon: "TS", description: "Type-safe application architecture." },
  { name: "Node.js", icon: "", description: "Scalable backend services." },
  { name: "Next.js", icon: "▲", description: "Performant frontend experiences." },
  { name: "Hardhat", icon: "👷", description: "Ethereum development environment." },
  { name: "TailwindCSS", icon: "🌊", description: "Utility-first modern styling." },
];

export const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {techs.map((tech) => (
        <motion.div
          key={tech.name}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card p-4 flex flex-col items-center justify-center gap-2 text-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-2xl mb-1">{tech.icon}</span>
          <span className="text-xs font-bold text-foreground/80">{tech.name}</span>
          
          <div className="absolute inset-0 flex items-center justify-center bg-background/95 p-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-[10px] text-foreground/70">{tech.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
