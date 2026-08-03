"use client";

import React from 'react';
import { HeroSection } from '@/components/dashboard/HeroSection';
import { BuiltProjects } from '@/components/dashboard/BuiltProjects';
import { ContributionGraph } from '@/components/dashboard/ContributionGraph';
import { AboutSection } from '@/components/dashboard/AboutSection';
import { TechStackGrid } from '@/components/dashboard/TechStackGrid';
import { TerminalContact } from '@/components/dashboard/TerminalContact';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-zinc-800 selection:text-white">
      {/* Background radial gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-transparent to-transparent" />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Built Projects Section */}
        <BuiltProjects />

        {/* GitHub Activity Graph (Preserved) */}
        <ContributionGraph />

        {/* About Me Section */}
        <AboutSection />

        {/* Tech Stack Grid Section */}
        <TechStackGrid />

        {/* Contact Section */}
        <TerminalContact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-[#1e1e24] bg-[#08080a] py-8 text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-sm font-bold text-white font-heading">
              Manny Johnson
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-xs text-zinc-500">
              © {new Date().getFullYear()} — Built with Next.js
            </span>
          </div>

          {/* Role Badges */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-semibold tracking-wider font-mono uppercase">
            <span className="px-2.5 py-1 rounded bg-[#121216] border border-zinc-800 text-zinc-400">
              Blockchain Engineer
            </span>
            <span className="px-2.5 py-1 rounded bg-[#121216] border border-zinc-800 text-zinc-400">
              FullStack Developer
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
              Open to work
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/manny-the-great"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:emmanuel.johnson.ox@gmail.com"
              className="p-2 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Resume"
            >
              <Download size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
