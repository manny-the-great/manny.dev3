"use client";

import React from "react";

interface SkillItem {
  name: string;
  icon: string;
}

const row1Skills: SkillItem[] = [
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Chainlink", icon: "https://cdn.simpleicons.org/chainlink/375BD2" },
  { name: "Ethereum", icon: "https://cdn.simpleicons.org/ethereum/627EEA" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
];

const row2Skills: SkillItem[] = [
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/627EEA" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/FFFFFF" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
];

// Quadruple items to create a seamless infinite marquee on any viewport width
const repeatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
const repeatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

export const TechStackGrid = () => {
  return (
    <section id="skills" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ My Skills ⌝</span>
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
              animation: "ticker-left 32s linear infinite",
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
              animation: "ticker-right 36s linear infinite",
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
    </section>
  );
};
