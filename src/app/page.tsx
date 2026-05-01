"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
import { PageLoader } from '@/components/animations/PageLoader';

/* Reusable section wrapper with scroll-triggered fade-up */
const Section = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <>
      <PageLoader />

      {/* Fixed ambient background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <main className="flex flex-col w-full">

        {/* ─── HERO ──────────────────────────────────────── */}
        <HeroSection />

        {/* ─── Profile Identity Bar ──────────────────────── */}
        <Section delay={0.05}>
          <div className="pb-16">
            <ProfileIdentityPanel />
          </div>
        </Section>

        {/* ─── Contribution Graph ────────────────────────── */}
        <Section>
          <div className="w-full max-w-6xl mx-auto px-6 pb-20">
            <ContributionGraph />
          </div>
        </Section>

        {/* ─── Featured Projects ─────────────────────────── */}
        <Section>
          <div className="pb-20">
            <FeaturedProjects />
          </div>
        </Section>

        {/* ─── Activity Timeline ─────────────────────────── */}
        <Section>
          <div className="pb-20">
            <ActivityTimeline />
          </div>
        </Section>

        {/* ─── Case Studies / Built Projects ─────────────── */}
        <Section>
          <div className="pb-20">
            <BuiltProjects />
          </div>
        </Section>

        {/* ─── Stars Dashboard ───────────────────────────── */}
        <Section>
          <div className="pb-20">
            <StarsDashboard />
          </div>
        </Section>

        {/* ─── About ─────────────────────────────────────── */}
        <Section>
          <div className="pb-20">
            <AboutSection />
          </div>
        </Section>

        {/* ─── Tech Stack ────────────────────────────────── */}
        <Section>
          <div className="pb-20">
            <TechStackGrid />
          </div>
        </Section>

        {/* ─── Notes / Insights ──────────────────────────── */}
        <Section>
          <div className="pb-20">
            <NotesSection />
          </div>
        </Section>

        {/* ─── Terminal Contact ──────────────────────────── */}
        <Section>
          <div className="pb-20">
            <TerminalContact />
          </div>
        </Section>

        {/* ─── Footer ────────────────────────────────────── */}
        <footer className="w-full border-t border-foreground/6 py-10 px-6">
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
      </main>
    </>
  );
}
