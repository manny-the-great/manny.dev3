"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "Smart Contracts", level: 90 },
  { name: "Solidity", level: 85 },
  { name: "Backend Systems", level: 95 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Web3 Infrastructure", level: 80 },
  { name: "Node.js", level: 92 },
  { name: "Next.js", level: 88 },
];

export const SkillMatrix = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="glass-card p-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
            <span className="text-xs text-primary">{skill.level}%</span>
          </div>
          <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
