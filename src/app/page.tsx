"use client";

import React from 'react';
import { HeroProfileCard } from '@/components/dashboard/HeroProfileCard';
import { TechStackGrid } from '@/components/dashboard/TechStackGrid';
import { WorkExperienceSection } from '@/components/dashboard/WorkExperienceSection';
import { BuiltProjects } from '@/components/dashboard/BuiltProjects';
import { ContributionGraph } from '@/components/dashboard/ContributionGraph';
import { TerminalContact } from '@/components/dashboard/TerminalContact';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-zinc-800 selection:text-white">
      {/* Subtle background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/15 via-transparent to-transparent" />

      {/* Main Content Feed matching the screenshot */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Hero / Profile Section */}
        <HeroProfileCard />

        {/* My Skills Section */}
        <TechStackGrid />

        {/* Work Experience Section */}
        <WorkExperienceSection />

        {/* Built Projects */}
        <BuiltProjects />

        {/* GitHub Activity Heatmap */}
        <ContributionGraph />

        {/* Contact Section */}
        <TerminalContact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900 bg-[#08080a] py-6 text-zinc-400">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-white">Emmanuel Johnson</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-500 font-mono">© {new Date().getFullYear()}</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/manny-the-great"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:emmanuel.johnson.ox@gmail.com"
              className="p-1.5 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#121216] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Resume"
            >
              <Download size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
