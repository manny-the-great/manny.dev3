"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

const row1Skills: SkillItem[] = [
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/627EEA" },
  { name: "Ethereum", icon: "https://cdn.simpleicons.org/ethereum/627EEA" },
  { name: "Chainlink", icon: "https://cdn.simpleicons.org/chainlink/375BD2" },
  { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" },
  { name: "Foundry", icon: "https://cdn.simpleicons.org/solidity/627EEA" },
  { name: "Web3.js", icon: "https://cdn.simpleicons.org/web3dotjs/F16822" },
  { name: "Ethers.js", icon: "https://cdn.simpleicons.org/ethereum/627EEA" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const row2Skills: SkillItem[] = [
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/FFFFFF" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
  { name: "C / C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Blockchain",
    skills: [
      "Solidity",
      "EVM Architecture",
      "Smart Contracts",
      "Hardhat",
      "Foundry",
      "Ethers.js",
      "Web3.js",
      "Chainlink",
      "Ethereum",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Next.js", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Cloudinary", "Supabase"],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "CI/CD",
      "Vercel",
      "Netlify",
      "Render",
      "Postman",
      "Notion",
      "C / C++",
    ],
  },
];

const rawTechStackText = `▸ Blockchain   │ Solidity, EVM Architecture, Smart Contracts, Hardhat, Foundry, Ethers.js, Web3.js, Chainlink, Ethereum
▸ Backend      │ Node.js, Express.js, Next.js, Python
▸ Frontend     │ React, JavaScript, TypeScript, HTML5, CSS3
▸ Databases    │ MySQL, MongoDB, Firebase, Cloudinary, Supabase
▸ DevOps       │ Docker, Git, Linux, Postman, C / C++, Render, Netlify, Vercel, CI/CD, Notion, GitHub`;

// Quadruple items to create a seamless infinite marquee on any viewport width
const repeatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
const repeatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

export const TechStackGrid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawTechStackText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section id="skills" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ My Skills ⌝</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white px-2 py-1 rounded bg-[#121216] border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
          title="Copy raw tech stack text"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span className="font-sans">Copy Raw</span>
            </>
          )}
        </button>
      </div>

      {/* Layered Moving Strips Container */}
      <div className="relative overflow-hidden w-full flex flex-col gap-3 py-1 select-none">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        {/* Strip 1: Moving Left */}
        <div className="w-full overflow-hidden flex items-center">
          <div
            className="flex items-center gap-2.5 hover:[animation-play-state:paused]"
            style={{
              width: "max-content",
              animation: "ticker-left 36s linear infinite",
              willChange: "transform",
            }}
          >
            {repeatedRow1.map((skill, index) => (
              <div
                key={`r1-${skill.name}-${index}`}
                className="px-3 py-1.5 rounded-lg bg-[#0e0e12] border border-zinc-800/90 hover:border-zinc-700 flex items-center gap-2 hover:bg-[#15151c] transition-colors shrink-0 shadow-sm cursor-default"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-3.5 h-3.5 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-zinc-300 tracking-wide font-sans whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strip 2: Moving Right */}
        <div className="w-full overflow-hidden flex items-center">
          <div
            className="flex items-center gap-2.5 hover:[animation-play-state:paused]"
            style={{
              width: "max-content",
              animation: "ticker-right 40s linear infinite",
              willChange: "transform",
            }}
          >
            {repeatedRow2.map((skill, index) => (
              <div
                key={`r2-${skill.name}-${index}`}
                className="px-3 py-1.5 rounded-lg bg-[#0e0e12] border border-zinc-800/90 hover:border-zinc-700 flex items-center gap-2 hover:bg-[#15151c] transition-colors shrink-0 shadow-sm cursor-default"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-3.5 h-3.5 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-zinc-300 tracking-wide font-sans whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Tech Stack Card */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 flex flex-col gap-3.5">
        <div className="flex items-center gap-2 pb-1 border-b border-zinc-800/60 text-xs font-mono text-zinc-400">
          <Terminal size={13} className="text-zinc-500" />
          <span>Core Architecture &amp; Tech Stack</span>
        </div>

        <div className="flex flex-col gap-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 py-1 border-b border-zinc-900/80 last:border-0"
            >
              {/* Category label */}
              <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-300 shrink-0 sm:w-28">
                <span className="text-zinc-600">▸</span>
                <span>{category.title}</span>
              </div>

              {/* Vertical separator */}
              <span className="text-zinc-700 hidden sm:inline-block font-mono text-xs select-none">
                │
              </span>

              {/* Skills pill list */}
              <div className="flex flex-wrap items-center gap-1.5 flex-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-[#121216] border border-zinc-800/80 hover:border-zinc-700 hover:text-white text-zinc-300 text-xs font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
