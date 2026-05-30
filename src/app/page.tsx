"use client";

import React from 'react';
import { HeroSection } from '@/components/dashboard/HeroSection';
import { ProfileIdentityPanel } from '@/components/dashboard/ProfileIdentityPanel';
import { ContributionGraph } from '@/components/dashboard/ContributionGraph';
import { FeaturedProjects } from '@/components/dashboard/FeaturedProjects';
import { BuiltProjects } from '@/components/dashboard/BuiltProjects';
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline';
import { StarsDashboard } from '@/components/dashboard/StarsDashboard';
import { AboutSection } from '@/components/dashboard/AboutSection';
import { TechStackGrid } from '@/components/dashboard/TechStackGrid';
import { NotesSection } from '@/components/dashboard/NotesSection';
import { TerminalContact } from '@/components/dashboard/TerminalContact';
import { StackedCard } from '@/components/ui/StackedCard';

export default function Home() {
  return (
    <>
      {/* Fixed ambient background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <main className="flex flex-col w-full relative pb-[10vh]">
        {/* ─── HERO ──────────────────────────────────────── */}
        <StackedCard>
          <HeroSection />
        </StackedCard>

        {/* ─── Profile Identity Bar ──────────────────────── */}
        <StackedCard>
          <div className="w-full max-w-6xl mx-auto py-12">
            <ProfileIdentityPanel />
          </div>
        </StackedCard>

        {/* ─── Contribution Graph ────────────────────────── */}
        <StackedCard>
          <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <ContributionGraph />
          </div>
        </StackedCard>

        {/* ─── Featured Projects ─────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <FeaturedProjects />
          </div>
        </StackedCard>

        {/* ─── Activity Timeline ─────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <ActivityTimeline />
          </div>
        </StackedCard>

        {/* ─── Case Studies / Built Projects ─────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <BuiltProjects />
          </div>
        </StackedCard>

        {/* ─── Stars Dashboard ───────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <StarsDashboard />
          </div>
        </StackedCard>

        {/* ─── About ─────────────────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <AboutSection />
          </div>
        </StackedCard>

        {/* ─── Tech Stack ────────────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <TechStackGrid />
          </div>
        </StackedCard>

        {/* ─── Notes / Insights ──────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <NotesSection />
          </div>
        </StackedCard>

        {/* ─── Terminal Contact ──────────────────────────── */}
        <StackedCard>
          <div className="w-full py-12">
            <TerminalContact />
          </div>
        </StackedCard>

        {/* ─── Footer ────────────────────────────────────── */}
        <StackedCard isLast>
          <footer className="w-full border-t border-foreground/6 py-10 px-6 mt-12 bg-background/50 rounded-b-[32px]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <span className="text-[9px] font-black text-primary leading-none" style={{ fontFamily: 'var(--font-bricolage), var(--font-poppins)' }}>M</span>
                </div>
                <span className="text-xs text-muted font-heading">
                  © MMXXVI Manny D&apos; Great
                </span>
              </div>
              <div className="flex items-center gap-6 text-xs text-muted/60 font-heading">
                <a href="https://github.com/manny-the-great" target="_blank" rel="noopener noreferrer"
                  className="hover:text-primary transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/" target="_blank" rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors">LinkedIn</a>
                <a href="/cv.pdf" download className="hover:text-primary transition-colors">Resume</a>
              </div>
            </div>
          </footer>
        </StackedCard>
      </main>
    </>
  );
}
