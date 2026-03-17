"use client";

import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectProps {
  name: string;
  description: string;
  tags: string[];
  language: string;
  languageColor: string;
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  name,
  description,
  tags,
  language,
  languageColor,
  githubUrl,
  demoUrl,
  stars = 0,
  forks = 0,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="glass-card p-5 flex flex-col gap-4 group relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />

      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Github size={18} className="text-foreground/60" />
          <h3 className="text-lg font-bold text-primary group-hover:underline cursor-pointer">
            {name}
          </h3>
        </div>
        <div className="flex gap-3">
          {demoUrl && demoUrl !== "#" && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>

      <p className="text-sm text-foreground/70 line-clamp-2 min-h-[40px] relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-foreground/5 border border-foreground/10 text-foreground/60 backdrop-blur-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 relative z-10">
        <div className="flex items-center gap-4 text-xs text-foreground/50">
          <div className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full shadow-[0_0_5px_currentColor]`} style={{ backgroundColor: languageColor, color: languageColor }}></div>
            <span>{language}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
            <Star size={14} className="group-hover:text-yellow-500 transition-colors" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
            <GitFork size={14} />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
