"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const darkTheme = {
  dark: ['#141418', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const ContributionGraph = () => {
  return (
    <section id="activity" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-6 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ GitHub Activity ⌝</span>
      </div>

      {/* Graph Card Wrapper */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 flex flex-col gap-4 overflow-hidden">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm sm:text-base font-bold text-white font-heading">
            Contributions Heatmap
          </h3>
          <p className="text-xs text-zinc-400 font-mono">
            @manny-the-great on GitHub
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
          <div className="min-w-[650px] flex items-center justify-center py-2">
            <GitHubCalendar 
              username="manny-the-great" 
              colorScheme="dark"
              theme={darkTheme}
              blockSize={11}
              blockMargin={3.5}
              fontSize={11}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
