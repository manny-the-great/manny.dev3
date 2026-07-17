"use client";

import React from 'react';
import { HeroSection } from '@/components/dashboard/HeroSection';
import { ProfileIdentityPanel } from '@/components/dashboard/ProfileIdentityPanel';
import { ContributionGraph } from '@/components/dashboard/ContributionGraph';
import { BuiltProjects } from '@/components/dashboard/BuiltProjects';
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline';
import { StarsDashboard } from '@/components/dashboard/StarsDashboard';
import { AboutSection } from '@/components/dashboard/AboutSection';
import { TechStackGrid } from '@/components/dashboard/TechStackGrid';
import { TerminalContact } from '@/components/dashboard/TerminalContact';
import { StackedCard } from '@/components/ui/StackedCard';
import { TechTicker } from '@/components/dashboard/TechTicker';

export default function Home() {
  return (
    <>
      {/* Fixed ambient background orbs — adapt to theme via primary/secondary vars */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <main className="flex flex-col w-full relative">

        {/* ─── HERO ─── full-bleed, no wrapper padding needed */}
        <HeroSection />

        {/* ─── TECH TICKER — diagonal marquee rows ─── */}
        <TechTicker />

        {/* ─── All other sections flow naturally downward ─── */}
        <div className="flex flex-col gap-0 w-full max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">

          {/* Profile Identity */}
          <StackedCard>
            <div className="w-full max-w-6xl mx-auto py-6 md:py-8">
              <ProfileIdentityPanel />
            </div>
          </StackedCard>

          {/* Contribution Graph */}
          <StackedCard>
            <div className="w-full max-w-6xl mx-auto py-6 md:py-8 px-2">
              <ContributionGraph />
            </div>
          </StackedCard>

          {/* Activity Timeline */}
          <StackedCard>
            <div className="w-full py-6 md:py-8">
              <ActivityTimeline />
            </div>
          </StackedCard>

          {/* Built Projects / Case Studies */}
          <StackedCard>
            <div className="w-full py-6 md:py-8">
              <BuiltProjects />
            </div>
          </StackedCard>

          {/* Stars Dashboard */}
          <StackedCard>
            <div className="w-full py-6 md:py-8">
              <StarsDashboard />
            </div>
          </StackedCard>

          {/* About */}
          <StackedCard>
            <div className="w-full py-6 md:py-8">
              <AboutSection />
            </div>
          </StackedCard>

          {/* Tech Stack */}
          <StackedCard>
            <div className="w-full py-6 md:py-8">
              <TechStackGrid />
            </div>
          </StackedCard>

          {/* Terminal Contact */}
          <StackedCard>
            <div className="w-full py-6 md:py-8">
              <TerminalContact />
            </div>
          </StackedCard>

          {/* Footer — Benjamin-style bar, black & white */}
          <footer className="w-full bg-foreground text-background">
            <div className="h-20 flex items-center">
              <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Left: logo + name + email */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 bg-background text-foreground"
                  >
                    MJ.
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>Manny Johnson</p>
                    <p className="text-xs opacity-60">emmanuel.johnson.ox@gmail.com</p>
                  </div>
                </div>

                {/* Right: social icons */}
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="https://github.com/manny-the-great" target="_blank" rel="noreferrer"
                      className="transition-opacity hover:opacity-60 text-background">
                      <svg fill="currentColor" viewBox="0 0 496 512" height="20" width="20">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/" target="_blank" rel="noreferrer"
                      className="transition-opacity hover:opacity-60 text-background">
                      <svg fill="currentColor" viewBox="0 0 448 512" height="20" width="20">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/_mannythegreat_" target="_blank" rel="noreferrer"
                      className="transition-opacity hover:opacity-60 text-background">
                      <svg width="18" height="18" viewBox="0 0 1200 1227" fill="currentColor">
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
