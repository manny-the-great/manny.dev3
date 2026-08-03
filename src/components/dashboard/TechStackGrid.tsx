"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
}

const techStack: TechItem[] = [
  { name: "React.js",       icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind CSS",  icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "JavaScript",    icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript",    icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "HTML5",         icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3",          icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "Next.js",       icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Vite",          icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Solidity",      icon: "https://cdn.simpleicons.org/solidity/22C55E" },
  { name: "Python",        icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Node.js",       icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Web3.js",       icon: "https://cdn.simpleicons.org/web3dotjs/F16822" },
  { name: "Chainlink",     icon: "https://cdn.simpleicons.org/chainlink/375BD2" },
  { name: "API Integration", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
  { name: "Git",           icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub",        icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Vercel",        icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Postman",       icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "VS Code",       icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
  { name: "Linux Environments", icon: "https://cdn.simpleicons.org/linux/FCC624" },
];

export const TechStackGrid = () => {
  return (
    <section id="tech-stack" className="w-full max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col gap-8">
      {/* Section Header with Line */}
      <div className="flex items-center gap-4 text-xs tracking-wider uppercase font-semibold text-zinc-500">
        <span className="flex items-center gap-1 font-mono text-zinc-400">
          &lt;&gt; TECH STACK
        </span>
        <div className="flex-1 h-[1px] bg-zinc-800/80" />
      </div>

      {/* Grid of Tech Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
            className="px-4 py-3 rounded-xl bg-[#0e0e11] border border-[#1e1e24] flex items-center gap-3 hover:border-zinc-700/80 hover:bg-[#131318] transition-all duration-200 cursor-pointer shadow-md"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-5 h-5 object-contain flex-shrink-0"
              loading="lazy"
            />
            <span className="text-xs font-semibold text-zinc-300 tracking-wide font-heading truncate">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
