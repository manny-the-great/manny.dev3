"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  icon: string;
  prefix?: string;
}

const skills: SkillItem[] = [
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/FFFFFF" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/627EEA" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
];

export const TechStackGrid = () => {
  return (
    <section id="skills" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ My Skills ⌝</span>
      </div>

      {/* Skills Badges Grid */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.02, duration: 0.25 }}
            className="px-3 py-1.5 rounded-lg bg-[#0e0e12] border border-zinc-800/90 hover:border-zinc-700 flex items-center gap-2 hover:bg-[#15151c] transition-all cursor-default select-none shadow-sm"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-3.5 h-3.5 object-contain flex-shrink-0"
              loading="lazy"
            />
            <span className="text-xs font-medium text-zinc-300 tracking-wide font-sans">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
