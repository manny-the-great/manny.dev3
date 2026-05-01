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
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Here&apos;s What I&apos;ve Built
          </h2>
        </div>
        <span className="text-xs text-muted font-heading">
          {new Date().getFullYear()} · {projects.length} projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const s = statusConfig[project.status];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="glass-card glass-card-hover group flex flex-col overflow-hidden cursor-default relative"
            >
              {/* Image */}
              <div className="relative w-full h-44 overflow-hidden bg-foreground/3">
                <motion.img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top"
                  animate={{ scale: hovered === i ? 1.06 : 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold font-heading px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  {s.label}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/50 text-foreground/60 border border-foreground/10 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-base font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2 pt-3 border-t border-foreground/6">
                  <span className="flex items-center gap-1.5 text-xs font-semibold font-heading text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                    View Project <ArrowRight size={12} />
                  </span>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors ml-auto font-heading">
                      <Github size={13} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
