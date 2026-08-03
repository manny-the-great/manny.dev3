"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const darkTheme = {
  dark: ['#141418', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const ContributionGraph = () => {
  return (
    <section id="activity" className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
      {/* Section Header with Line */}
      <div className="flex items-center gap-4 text-xs tracking-wider uppercase font-semibold text-zinc-500">
        <span className="flex items-center gap-1 font-mono text-zinc-400">
          &lt;&gt; ACTIVITY
        </span>
        <div className="flex-1 h-[1px] bg-zinc-800/80" />
      </div>

      {/* Graph Card Wrapper */}
      <div className="p-6 md:p-8 rounded-xl bg-[#0e0e11] border border-[#1e1e24] flex flex-col gap-6 shadow-xl overflow-hidden">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-white font-heading">
            GitHub Contributions
          </h3>
          <p className="text-xs text-zinc-400">
            Real-time activity heatmap for @manny-the-great
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-2">
          <div className="min-w-[700px] flex items-center justify-center py-2">
            <GitHubCalendar 
              username="manny-the-great" 
              colorScheme="dark"
              theme={darkTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
