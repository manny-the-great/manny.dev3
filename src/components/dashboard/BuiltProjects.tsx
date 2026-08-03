"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, ExternalLink, Github, FileText, ChevronRight, X } from 'lucide-react';

interface BuiltProject {
  title: string;
  subtitle: string;
  description: string;
  fullDetails?: string;
  icon: React.ReactNode;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'live' | 'in-dev' | 'bot' | 'private';
  year: string;
}

const projects: BuiltProject[] = [
  {
    title: "CryptoVerse",
    subtitle: "Full-stack Web3 tracking and portfolio platform",
    description: "Secure crypto tracking with real-time price feeds, wallet analytics, interactive charts, and Web3 integrations.",
    fullDetails: "CryptoVerse connects directly with blockchain RPC providers to parse wallet balances, contract transactions, and live price movements across EVM networks.",
    icon: <FileText size={20} className="text-zinc-400" />,
    tags: ["Next.js", "TypeScript", "Web3.js", "Tailwind", "Solidity"],
    githubUrl: "https://github.com/manny-the-great/CryptoVerse",
    liveUrl: "https://github.com/manny-the-great/CryptoVerse",
    status: "live",
    year: "2024",
  },
  {
    title: "SafeChat AI",
    subtitle: "AI-powered real-time message moderation",
    description: "Real-time toxic message detection for Web3 and gaming communities powered by TensorFlow classification models.",
    fullDetails: "Built to detect harmful behavior patterns before messages hit community channels. Includes WebSocket support for instant moderation alerts.",
    icon: <Terminal size={20} className="text-zinc-400" />,
    tags: ["React", "Node.js", "TensorFlow", "Socket.io", "Express"],
    githubUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    liveUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    status: "bot",
    year: "2024",
  },
  {
    title: "Camaro Showcase",
    subtitle: "Premium high-performance automotive showcase",
    description: "Cinematic digital showcase for the Chevrolet Camaro featuring spec pages, smooth scroll timelines, and a dark aesthetic.",
    fullDetails: "Custom GSAP scroll triggers and fluid layout transformations designed for maximum visual punch and responsiveness.",
    icon: <Code size={20} className="text-zinc-400" />,
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "UI Design"],
    githubUrl: "https://github.com/manny-the-great/chevrolet",
    liveUrl: "https://github.com/manny-the-great/chevrolet",
    status: "live",
    year: "2025",
  },
  {
    title: "manny.dev3",
    subtitle: "Developer identity & portfolio system",
    description: "High-precision developer portfolio built with Next.js, featuring real-time GitHub activity heatmaps and editorial design.",
    fullDetails: "Custom dark-mode layout engine with zero bloated dependencies. Built with Next.js 15 App Router and Tailwind CSS.",
    icon: <FileText size={20} className="text-zinc-400" />,
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/manny-the-great/manny.dev3",
    liveUrl: "https://github.com/manny-the-great/manny.dev3",
    status: "live",
    year: "2025",
  },
];

const renderStatusBadge = (status: BuiltProject['status']) => {
  switch (status) {
    case 'live':
      return (
        <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
          LIVE
        </span>
      );
    case 'bot':
      return (
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/40 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
            BOT
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/40 text-amber-400 text-[10px] font-bold tracking-widest uppercase">
            IN DEV
          </span>
        </div>
      );
    case 'in-dev':
      return (
        <span className="px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-amber-400 text-[10px] font-bold tracking-widest uppercase">
          IN DEV
        </span>
      );
    default:
      return (
        <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-bold tracking-widest uppercase">
          PRIVATE
        </span>
      );
  }
};

export const BuiltProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<BuiltProject | null>(null);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 pt-16 pb-12 flex flex-col gap-8">
      {/* Section Header with Line */}
      <div className="flex items-center gap-4 text-xs tracking-wider uppercase font-semibold text-zinc-500">
        <span className="flex items-center gap-1 font-mono text-zinc-400">
          &lt;&gt; PROJECTS
        </span>
        <div className="flex-1 h-[1px] bg-zinc-800/80" />
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="p-6 md:p-7 rounded-xl bg-[#0e0e11] border border-[#1e1e24] flex flex-col gap-5 relative group hover:border-zinc-700/70 transition-all duration-300 shadow-xl"
          >
            {/* Top Bar: Icon + Status */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0">
                {project.icon}
              </div>
              {renderStatusBadge(project.status)}
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-white font-heading tracking-tight">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-[#141418] border border-zinc-800/80 text-zinc-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                &lt;&gt; Details
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <ExternalLink size={13} />
                  {project.status === 'bot' ? 'Access Bot' : 'Open App'}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[700] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0e0e11] border border-[#1e1e24] rounded-2xl p-6 sm:p-8 max-w-lg w-full flex flex-col gap-6 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{selectedProject.title}</h3>
                  <p className="text-xs text-zinc-400">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Overview</span>
                <p className="text-sm text-zinc-300 leading-relaxed">{selectedProject.description}</p>
                {selectedProject.fullDetails && (
                  <p className="text-sm text-zinc-400 leading-relaxed pt-2">{selectedProject.fullDetails}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#141418] border border-zinc-800 text-xs text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-white text-black font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-zinc-200"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
