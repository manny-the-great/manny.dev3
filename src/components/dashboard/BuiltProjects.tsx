"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Terminal,
  ExternalLink,
  Github,
  FileText,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Zap,
  Globe,
  ShieldCheck,
} from "lucide-react";

interface BuiltProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  domain: string;
  icon: React.ReactNode;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  status: "live" | "bot" | "interactive";
  statusText: string;
  year: string;
  architecture: {
    core: string;
    pipeline: string;
    performance: string;
  };
}

const projects: BuiltProject[] = [
  {
    id: "cryptoverse",
    title: "CryptoVerse",
    subtitle: "The Risk-Free Platform for a Smarter Crypto Future",
    description:
      "Enterprise-grade crypto tracking and portfolio platform featuring real-time price feeds, wallet balance analytics, interactive charts, and seamless multi-asset exchange telemetry.",
    image: "/assets/cryptoverse.jpg",
    domain: "crypto-verse-m.vercel.app",
    icon: <FileText size={16} className="text-amber-400" />,
    tags: ["Next.js", "TypeScript", "Web3.js", "Solidity", "Tailwind CSS"],
    githubUrl: "https://github.com/manny-the-great/CryptoVerse",
    liveUrl: "https://crypto-verse-m.vercel.app/",
    status: "live",
    statusText: "Live on Vercel",
    year: "2026",
    architecture: {
      core: "Connects directly to decentralized RPC nodes with automatic fallback routing to fetch real-time state without centralized database lag.",
      pipeline: "EVM State Parsing → WebSocket Price Stream → Interactive Canvas Charts → Client Cache Hydration.",
      performance: "Sub-100ms state updates with real-time multi-asset portfolio valuation.",
    },
  },
  {
    id: "autochain",
    title: "AutoChain",
    subtitle: "PWA Chain Safety Inspector & Cross-Chain Verifier",
    description:
      "Never send crypto to the wrong chain again. High-speed, offline-ready Web3 PWA that inspects wallet addresses, validates EVM & non-EVM checksums, and computes chain compatibility matrices.",
    image: "/assets/autochain.jpg",
    domain: "auto-blockchain.vercel.app",
    icon: <ShieldCheck size={16} className="text-emerald-400" />,
    tags: ["TypeScript", "PWA", "EVM", "Web3", "Next.js", "Offline-Ready"],
    githubUrl: "https://github.com/manny-the-great/AutoChain",
    liveUrl: "https://auto-blockchain.vercel.app/",
    status: "live",
    statusText: "Live PWA",
    year: "2026",
    architecture: {
      core: "Client-side cryptographic checksum parser and address decoder operating 100% offline via service workers with zero RPC latency.",
      pipeline: "Address Input → Regex & Base58/EIP-55 Checksum Validator → Multi-Chain Compatibility Matrix Engine → Offline Cache Store.",
      performance: "Instant zero-lag validation in < 5ms with full PWA offline support.",
    },
  },
  {
    id: "camaro",
    title: "Camaro Showcase",
    subtitle: "High-performance automotive digital experience",
    description:
      "Cinematic digital automotive showcase engineered with hardware-accelerated 3D scroll physics, dynamic sound integration, and fluid GSAP animation choreographies.",
    image: "/assets/camaro.png",
    domain: "camaro-experience.manny.dev",
    icon: <Code size={16} className="text-cyan-400" />,
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger"],
    githubUrl: "https://github.com/manny-the-great/chevrolet",
    liveUrl: "https://github.com/manny-the-great/chevrolet",
    status: "interactive",
    statusText: "Interactive 3D",
    year: "2025",
    architecture: {
      core: "Custom-orchestrated GSAP timeline matrix with hardware-accelerated transforms for fluid 60fps frame rates on any device.",
      pipeline: "Viewport Scroll Delta → Matrix Transform Normalizer → Layer Composite Rendering.",
      performance: "Locked 60 FPS across desktop and mobile viewports with zero layout shift.",
    },
  },
];

export const BuiltProjects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleArchitecture = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-10 pb-6 flex flex-col gap-5">
      {/* Corner Bracket Title */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ Featured Projects ⌝</span>
        <span className="text-[11px] text-zinc-500 font-mono">03 Flagships</span>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => {
          const isExpanded = expandedId === project.id;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-4 sm:p-5 rounded-2xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 hover:border-zinc-700/80 transition-all flex flex-col gap-4 group shadow-lg"
            >
              {/* Top Row: Icon, Title & Status Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner">
                    {project.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight truncate flex items-center gap-2">
                      {project.title}
                      <span className="text-xs text-zinc-500 font-mono font-normal">
                        ({project.year})
                      </span>
                    </h3>
                    <p className="text-xs text-zinc-400 font-normal truncate">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status Beacon Badge */}
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold tracking-wide shrink-0 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.statusText}
                </span>
              </div>

              {/* Interactive macOS-Style Browser Frame Mockup */}
              <div className="w-full rounded-xl overflow-hidden border border-zinc-800/90 bg-[#121216] shadow-2xl flex flex-col group/frame">
                {/* Browser Frame Titlebar */}
                <div className="px-3.5 py-2 bg-[#16161c] border-b border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-[#0e0e12] border border-zinc-800/70 text-zinc-400 text-[10px]">
                    <Globe size={10} className="text-zinc-500" />
                    <span>{project.domain}</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Real Preview Screenshot */}
                <div className="relative w-full h-48 sm:h-64 bg-zinc-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} Interface Preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover/frame:scale-105"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-[#121216] border border-zinc-800/80 text-zinc-300 text-[11px] font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions & Architecture Toggle Button */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-zinc-850">
                <div className="flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <span>Open Project</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Github size={13} />
                    <span>Source</span>
                  </a>
                </div>

                {/* Architecture Drawer Trigger */}
                <button
                  onClick={() => toggleArchitecture(project.id)}
                  className="px-3 py-1.5 rounded-lg bg-[#121216] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Cpu size={12} className={isExpanded ? "text-emerald-400" : "text-zinc-500"} />
                  <span>Architecture</span>
                  {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>
              </div>

              {/* Inline Architecture Drawer */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#101014] border border-zinc-800/80 flex flex-col gap-3 mt-1 text-xs">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                        <Layers size={12} />
                        <span>Under The Hood &amp; System Architecture</span>
                      </div>

                      {/* Core Logic */}
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                          CORE INNOVATION
                        </span>
                        <p className="text-zinc-300 leading-relaxed font-sans">
                          {project.architecture.core}
                        </p>
                      </div>

                      {/* Pipeline */}
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                          DATA FLOW PIPELINE
                        </span>
                        <code className="p-2 rounded bg-[#0a0a0d] border border-zinc-850 font-mono text-[11px] text-zinc-300 block overflow-x-auto">
                          {project.architecture.pipeline}
                        </code>
                      </div>

                      {/* Performance Metric */}
                      <div className="flex items-center gap-2 pt-1 border-t border-zinc-850/80 text-[11px] font-mono text-zinc-400">
                        <Zap size={11} className="text-amber-400 shrink-0" />
                        <span>{project.architecture.performance}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
