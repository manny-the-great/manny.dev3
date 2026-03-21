"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/white", description: "Smart contract development and security.", needsInvert: true },
  { name: "Ethereum", icon: "https://cdn.simpleicons.org/ethereum/white", description: "Decentralized applications and protocols.", needsInvert: true },
  { name: "Chainlink", icon: "https://cdn.simpleicons.org/chainlink", description: "Oracle integration and data feeds." },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", description: "Fullstack development and scripting." },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", description: "Type-safe application architecture." },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", description: "Scalable backend services." },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", description: "Performant frontend experiences.", needsInvert: true },
  { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg", description: "Ethereum development environment." },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss", description: "Utility-first modern styling." },
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
          <div className="w-8 h-8 mb-2 flex items-center justify-center">
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className={`w-full h-full object-contain filter group-hover:brightness-125 transition-all ${tech.needsInvert ? 'invert dark:invert-0' : ''}`} 
            />
          </div>
          <span className="text-xs font-bold text-foreground/80 font-header">{tech.name}</span>
          
          <div className="absolute inset-0 flex items-center justify-center bg-background/95 p-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-[10px] text-foreground/70">{tech.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
