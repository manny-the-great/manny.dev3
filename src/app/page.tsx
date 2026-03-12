"use client";

import React from 'react';
import { SidebarProfile } from '@/components/dashboard/SidebarProfile';
import { ContributionGraph } from '@/components/dashboard/ContributionGraph';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline';
import { SkillMatrix } from '@/components/dashboard/SkillMatrix';
import { RepositoryTable } from '@/components/dashboard/RepositoryTable';
import { TechStackGrid } from '@/components/dashboard/TechStackGrid';
import { TerminalContact } from '@/components/dashboard/TerminalContact';
import { motion } from 'framer-motion';
import { LayoutGrid, BookOpen, Activity, Cpu, Mail, Star, GitBranch, Layers } from 'lucide-react';

const pinnedProjects = [
  {
    name: "DegenSim",
    description: "Crypto trading simulator for practicing trading with virtual funds. Experience market dynamics without risk.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    language: "TypeScript",
    languageColor: "#3178c6",
    githubUrl: "#",
    demoUrl: "#",
    stars: 124,
    forks: 32
  },
  {
    name: "SecureChat",
    description: "AI powered toxic message detection system. Keeps communities safe from harassment and harmful content.",
    tags: ["Python", "TensorFlow", "React"],
    language: "JavaScript",
    languageColor: "#f1e05a",
    githubUrl: "#",
    demoUrl: "#",
    stars: 89,
    forks: 12
  },
  {
    name: "Chainlink Functions",
    description: "Smart contracts interacting with external APIs via decentralized oracles. True interoperability for Web3.",
    tags: ["Solidity", "Chainlink", "Hardhat"],
    language: "Solidity",
    languageColor: "#AA6746",
    githubUrl: "#",
    stars: 156,
    forks: 45
  },
  {
    name: "CCIP Experiments",
    description: "Cross chain messaging using Chainlink CCIP. Enabling seamless token transfers and data across any chain.",
    tags: ["Solidity", "Cross-chain", "EVM"],
    language: "Solidity",
    languageColor: "#AA6746",
    githubUrl: "#",
    stars: 42,
    forks: 8
  },
  {
    name: "JavaScript Course",
    description: "Personal JavaScript learning projects. A collection of fundamental and advanced JS concepts.",
    tags: ["JavaScript", "Algorithms", "DOM"],
    language: "JavaScript",
    languageColor: "#f1e05a",
    githubUrl: "#",
    stars: 25,
    forks: 5
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <SidebarProfile />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-10">
          
          {/* Header Stats / Nav tabs */}
          <div className="flex items-center gap-6 border-b border-white/10 pb-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-4 -mb-4 px-2">
              <BookOpen size={18} />
              <span>Overview</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/50 hover:text-white transition-colors pb-4 -mb-4 px-2 cursor-pointer">
              <LayoutGrid size={18} />
              <span>Projects</span>
              <span className="bg-white/10 px-1.5 py-0.5 rounded-full text-[10px]">37</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/50 hover:text-white transition-colors pb-4 -mb-4 px-2 cursor-pointer">
              <Activity size={18} />
              <span>Activity</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/50 hover:text-white transition-colors pb-4 -mb-4 px-2 cursor-pointer">
              <Star size={18} />
              <span>Stars</span>
              <span className="bg-white/10 px-1.5 py-0.5 rounded-full text-[10px]">54</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-4 flex flex-col gap-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
                <GitBranch size={40} />
              </div>
              <span className="text-foreground/40 text-xs font-semibold uppercase tracking-wider">Repositories</span>
              <span className="text-2xl font-bold text-white">37</span>
            </div>
            <div className="glass-card p-4 flex flex-col gap-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform text-secondary">
                <Activity size={40} />
              </div>
              <span className="text-foreground/40 text-xs font-semibold uppercase tracking-wider">Total Commits</span>
              <span className="text-2xl font-bold text-white">1,482</span>
            </div>
            <div className="glass-card p-4 flex flex-col gap-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform text-primary">
                <Layers size={40} />
              </div>
              <span className="text-foreground/40 text-xs font-semibold uppercase tracking-wider">Projects Built</span>
              <span className="text-2xl font-bold text-white">15+</span>
            </div>
            <div className="glass-card p-4 flex flex-col gap-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform text-[#a371f7]">
                <Cpu size={40} />
              </div>
              <span className="text-foreground/40 text-xs font-semibold uppercase tracking-wider">Smart Contracts</span>
              <span className="text-2xl font-bold text-white">24</span>
            </div>
          </div>

          {/* Contribution Heatmap */}
          <section>
            <ContributionGraph />
          </section>

          {/* Pinned Projects Section */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Star size={18} className="text-primary" />
                Pinned Projects
              </h2>
              <span className="text-xs text-primary cursor-pointer hover:underline">Customize pins</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pinnedProjects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </section>

          {/* Activity & Repositories Side by Side */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity size={18} className="text-secondary" />
                Latest Activity
              </h2>
              <div className="glass-card p-6">
                <ActivityTimeline />
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                Repositories
              </h2>
              <RepositoryTable />
            </section>
          </div>

          {/* Skill Matrix */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu size={18} className="text-primary" />
              Web3 Skill Matrix
            </h2>
            <SkillMatrix />
          </section>

          {/* Tech Stack Grid */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <LayoutGrid size={18} className="text-secondary" />
              Technology Stack
            </h2>
            <TechStackGrid />
          </section>

          {/* Terminal Contact */}
          <section className="flex flex-col gap-4 mb-20">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              Contact Terminal
            </h2>
            <TerminalContact />
          </section>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
        <div className="flex items-center gap-4">
          <span>© 2026 Manny D' Great</span>
          <span className="hover:text-primary cursor-pointer">Terms</span>
          <span className="hover:text-primary cursor-pointer">Privacy</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-primary cursor-pointer">Docs</span>
          <span className="hover:text-primary cursor-pointer">Support</span>
          <span className="hover:text-primary cursor-pointer">API</span>
          <span className="hover:text-primary cursor-pointer">GitHub Status</span>
        </div>
      </footer>
    </main>
  );
}
