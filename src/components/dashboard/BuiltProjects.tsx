"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

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
    description: "Full-stack crypto tracking and portfolio management platform. Real-time price feeds, interactive charts, and wallet analytics powered by Web3 integrations.",
    image: "/assets/cryptoverse.png",
    tags: ["Next.js", "TypeScript", "Web3.js", "Tailwind"],
    githubUrl: "https://github.com/manny-the-great/CryptoVerse",
    liveUrl: "#",
    status: "live",
    year: "2024",
  },
  {
    title: "SafeChat",
    description: "AI-powered chat application with real-time toxic message detection. TensorFlow classification model trained on harmful content patterns keeps communities safe.",
    image: "/assets/safechat.png",
    tags: ["React", "Node.js", "TensorFlow", "Socket.io"],
    githubUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    liveUrl: "#",
    status: "live",
    year: "2024",
  },
  {
    title: "Camaro Website",
    description: "Premium automotive showcase for the Chevrolet Camaro. Cinematic hero animations, model spec pages, and a sleek dark dealership aesthetic.",
    image: "/assets/camaro.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "https://github.com/manny-the-great/chevrolet",
    liveUrl: "#",
    status: "live",
    year: "2025",
  },
  {
    title: "manny.dev3",
    description: "This portfolio — a premium developer identity system built with Next.js. Live GitHub stats, contribution heatmaps, Web3 branding, and editorial design.",
    image: "/assets/portfolio.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/manny-the-great/manny.dev3",
    liveUrl: "#",
    status: "live",
    year: "2025",
  },
];

const statusConfig = {
  live:          { label: "Live",        dot: "bg-primary",    text: "text-primary",    border: "border-primary/25",    bg: "bg-primary/8" },
  "in-progress": { label: "In Progress", dot: "bg-yellow-400", text: "text-yellow-400", border: "border-yellow-400/25", bg: "bg-yellow-400/8" },
  private:       { label: "Private",     dot: "bg-muted",      text: "text-muted",      border: "border-foreground/10",      bg: "bg-foreground/5" },
};

export const BuiltProjects: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="section-label mb-2">Case Studies</div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 font-heading">
            Selected Projects
          </h2>
        </div>
        <span className="text-xs text-muted font-heading">
          {new Date().getFullYear()} · {projects.length} projects
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => {
          const s = statusConfig[project.status];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="glass-card glass-card-hover group p-5 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden"
            >
              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`flex items-center gap-1.5 text-[10px] font-semibold font-heading px-2 py-0.5 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-foreground/5 text-muted border border-foreground/10">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-sm text-muted leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Capsule Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <a 
                  href={project.liveUrl} 
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-bold font-heading text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Live Preview <ArrowRight size={14} />
                </a>
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground/5 hover:bg-foreground/10 text-foreground font-bold font-heading text-xs rounded-full border border-foreground/10 hover:border-foreground/20 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
