"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Blocks } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'live' | 'in-progress' | 'private';
  year: string;
  type: string;
}

const projects: Project[] = [
  {
    title: "DegenSim",
    description: "Crypto trading simulator for practicing with virtual funds. Experience market dynamics, study price action, and hone your strategy without real risk.",
    image: "/assets/cryptoverse.png",
    tags: ["Next.js", "TypeScript", "Web3.js", "Tailwind"],
    githubUrl: "https://github.com/manny-the-great/CryptoVerse",
    liveUrl: "#",
    status: "live",
    year: "2024",
    type: "DeFi · Simulator",
  },
  {
    title: "SecureChat",
    description: "AI-powered chat with real-time toxic message detection. TensorFlow classification model keeps communities safe from harassment and harmful content.",
    image: "/assets/safechat.png",
    tags: ["React", "Node.js", "TensorFlow", "Socket.io"],
    githubUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    liveUrl: "#",
    status: "live",
    year: "2024",
    type: "AI · Safety",
  },
  {
    title: "Chainlink Functions",
    description: "Smart contracts that interact with external APIs via decentralised oracles. True on-chain interoperability for any Web3 protocol.",
    image: "/assets/portfolio.png",
    tags: ["Solidity", "Chainlink", "Hardhat", "EVM"],
    githubUrl: "#",
    status: "private",
    year: "2025",
    type: "Web3 · Oracle",
  },
  {
    title: "CCIP Experiments",
    description: "Cross-chain messaging using Chainlink CCIP. Enabling seamless token transfers and arbitrary data across any EVM-compatible network.",
    image: "/assets/camaro.png",
    tags: ["Solidity", "CCIP", "Cross-chain", "EVM"],
    githubUrl: "#",
    status: "in-progress",
    year: "2025",
    type: "Web3 · Cross-chain",
  },
];

const statusConfig = {
  live:          { label: "Live",        dot: "bg-primary",    text: "text-primary",    border: "border-primary/25",    bg: "bg-primary/10" },
  "in-progress": { label: "In Progress", dot: "bg-yellow-400", text: "text-yellow-400", border: "border-yellow-400/25", bg: "bg-yellow-400/10" },
  private:       { label: "Private",     dot: "bg-muted",      text: "text-muted",      border: "border-white/10",      bg: "bg-white/5" },
};

export const FeaturedProjects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="section-label mb-2">Selected Works</div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
            What I&apos;ve Built
          </h2>
        </div>
        <p className="text-muted text-sm max-w-xs leading-relaxed">
          A curated selection of projects where technical depth and design clarity had to move together.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const s = statusConfig[project.status];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="glass-card glass-card-hover group flex flex-col overflow-hidden cursor-default relative"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 80px rgba(34,197,94,0.04)' }} />

              {/* Image area */}
              <div className="relative w-full h-48 overflow-hidden bg-white/3">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  animate={{ scale: hovered === i ? 1.06 : 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border} font-heading`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </div>
                <span className="absolute top-3 right-3 text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/50 text-white/60 border border-white/10 backdrop-blur-sm font-heading">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted font-mono flex-shrink-0">{project.year}</span>
                </div>

                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-2 pt-3 border-t border-white/6">
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold font-heading text-white/70 hover:text-primary transition-colors">
                      View Project <ArrowRight size={12} />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-semibold font-heading text-white/70 hover:text-primary transition-colors cursor-pointer">
                      View Project <ArrowRight size={12} />
                    </span>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors ml-auto font-heading">
                      <Github size={13} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* "More work" link */}
      <div className="flex justify-center">
        <a href="https://github.com/manny-the-great" target="_blank" rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-semibold font-heading text-muted hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5">
          Explore all repositories on GitHub
          <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
