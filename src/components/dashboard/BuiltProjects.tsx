"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, ExternalLink, Github, FileText, X } from 'lucide-react';

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
    icon: <FileText size={18} className="text-zinc-300" />,
    tags: ["Next.js", "TypeScript", "Web3.js", "Solidity"],
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
    icon: <Terminal size={18} className="text-zinc-300" />,
    tags: ["React", "Node.js", "TensorFlow", "Express"],
    githubUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    liveUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    status: "bot",
    year: "2024",
  },
  {
    title: "Camaro Showcase",
    subtitle: "High-performance automotive digital experience",
    description: "Cinematic digital showcase for the Chevrolet Camaro featuring spec pages and smooth scroll timelines.",
    fullDetails: "Custom GSAP scroll triggers and fluid layout transformations designed for maximum visual punch and responsiveness.",
    icon: <Code size={18} className="text-zinc-300" />,
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    githubUrl: "https://github.com/manny-the-great/chevrolet",
    liveUrl: "https://github.com/manny-the-great/chevrolet",
    status: "live",
    year: "2025",
  },
];

const renderStatusBadge = (status: BuiltProject['status']) => {
  switch (status) {
    case 'live':
      return (
        <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
          LIVE
        </span>
      );
    case 'bot':
      return (
        <span className="px-2 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold tracking-wider uppercase">
          BOT
        </span>
      );
    case 'in-dev':
      return (
        <span className="px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-[10px] font-bold tracking-wider uppercase">
          IN DEV
        </span>
      );
    default:
      return (
        <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-bold tracking-wider uppercase">
          PRIVATE
        </span>
      );
  }
};

export const BuiltProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<BuiltProject | null>(null);

  return (
    <section id="projects" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-10 pb-6 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ Projects ⌝</span>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="p-4 sm:p-5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 hover:border-zinc-700 transition-all flex flex-col gap-3 group"
          >
            {/* Top Bar: Icon + Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading tracking-tight flex items-center gap-1.5">
                    {project.title}
                  </h3>
                  <span className="text-xs text-zinc-400 font-normal">{project.subtitle}</span>
                </div>
              </div>
              {renderStatusBadge(project.status)}
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded bg-[#141418] border border-zinc-800/80 text-zinc-300 text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-3.5 py-1.5 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                Details
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <ExternalLink size={12} />
                  {project.status === 'bot' ? 'Access Bot' : 'Open Project'}
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
              className="bg-[#0e0e11] border border-zinc-800 rounded-2xl p-6 max-w-md w-full flex flex-col gap-5 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X size={15} />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">{selectedProject.title}</h3>
                  <p className="text-xs text-zinc-400">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">Overview</span>
                <p className="text-xs text-zinc-300 leading-relaxed">{selectedProject.description}</p>
                {selectedProject.fullDetails && (
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">{selectedProject.fullDetails}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">Technologies</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#141418] border border-zinc-800 text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg bg-white text-black font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-zinc-200"
                  >
                    <Github size={14} /> View on GitHub
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
