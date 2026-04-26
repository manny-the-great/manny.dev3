"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface BuiltProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'live' | 'in-progress' | 'private';
  year: string;
}

const projects: BuiltProject[] = [
  {
    title: "CryptoVerse",
    description: "A full-stack crypto tracking and portfolio management platform. Real-time price feeds, interactive charts, and wallet analytics powered by Web3 integrations.",
    image: "/assets/cryptoverse.png",
    tags: ["Next.js", "TypeScript", "Web3.js", "Tailwind"],
    githubUrl: "https://github.com/manny-the-great/CryptoVerse",
    liveUrl: "#",
    status: "live",
    year: "2024",
  },
  {
    title: "SafeChat",
    description: "AI-powered chat application with real-time toxic message detection. Keeps communities safe using a TensorFlow classification model trained on harmful content patterns.",
    image: "/assets/safechat.png",
    tags: ["React", "Node.js", "TensorFlow", "Socket.io"],
    githubUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    liveUrl: "#",
    status: "live",
    year: "2024",
  },
  {
    title: "Camaro Website",
    description: "A premium automotive showcase website for the Chevrolet Camaro. Cinematic hero animations, model spec pages, and a sleek dark dealership aesthetic.",
    image: "/assets/camaro.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "https://github.com/manny-the-great/chevrolet",
    liveUrl: "#",
    status: "live",
    year: "2025",
  },
  {
    title: "manny.dev3 — Portfolio",
    description: "This very portfolio — a GitHub-inspired developer dashboard built with Next.js. Features live GitHub stats, contribution heatmaps, skill matrices, and a terminal contact form.",
    image: "/assets/portfolio.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/manny-the-great/manny.dev3",
    liveUrl: "#",
    status: "live",
    year: "2025",
  },
];

const statusConfig = {
  live: { label: "Live", className: "bg-green-500/15 text-green-400 border-green-500/30" },
  "in-progress": { label: "In Progress", className: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30" },
  private: { label: "Private", className: "bg-foreground/10 text-foreground/50 border-foreground/20" },
};

export const BuiltProjects: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const status = statusConfig[project.status];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="glass-card overflow-hidden flex flex-col group cursor-default relative"
            >
              {/* Hover overlay glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Screenshot */}
              <div className="relative w-full h-44 overflow-hidden bg-foreground/5">
                <motion.img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top"
                  animate={{ scale: hovered === i ? 1.05 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Status badge */}
                <span className={`absolute top-3 left-3 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${status.className}`}>
                  {status.label}
                </span>

                {/* Year badge */}
                <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-background/60 text-foreground/60 border border-foreground/10 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1 relative z-10">
                <h3 className="text-base font-bold text-foreground font-header leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-foreground/5 border border-foreground/10 text-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center gap-3 mt-2 pt-3 border-t border-foreground/8">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors"
                  >
                    View Project
                    <ArrowRight size={13} />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground transition-colors ml-auto"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
