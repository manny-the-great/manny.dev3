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
      whileHover={{ y: -5 }}
      className="glass-card glass-card-hover p-5 flex flex-col gap-4 group"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Github size={18} className="text-foreground/60" />
          <h3 className="text-lg font-bold text-primary group-hover:underline cursor-pointer">
            {name}
          </h3>
        </div>
        <div className="flex gap-3">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-white transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>

      <p className="text-sm text-foreground/70 line-clamp-2 min-h-[40px]">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/5 border border-white/10 text-foreground/60">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="flex items-center gap-4 text-xs text-foreground/50">
          <div className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: languageColor }}></div>
            <span>{language}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <Star size={14} />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <GitFork size={14} />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
