"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";

// Monochrome dark theme with clearly visible inactive tiles matching your site aesthetic
const monoTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "#222227", // Level 0: Clearly defined inactive tile with high visibility on dark card
    "#3f3f46", // Level 1: Dark zinc
    "#71717a", // Level 2: Mid zinc
    "#a1a1aa", // Level 3: Silver zinc
    "#ffffff", // Level 4: Pure white peak
  ],
};

export const ContributionGraph = () => {
  return (
    <section id="activity" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-6 flex flex-col gap-4">
      {/* Corner Bracket Title matching site typography */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ GitHub Activity ⌝</span>
      </div>

      {/* Graph Card Wrapper matching site design pattern */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-white font-heading tracking-tight">
            GitHub Activity
          </h3>
          <span className="text-xs text-zinc-400 font-mono">
            @manny-the-great
          </span>
        </div>

        {/* Heatmap with horizontal scroll container for mobile */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none select-none">
          <div className="min-w-[660px] flex items-center justify-center py-1">
            <GitHubCalendar
              username="manny-the-great"
              colorScheme="dark"
              theme={monoTheme}
              blockSize={11.5}
              blockMargin={3.5}
              blockRadius={2.5}
              fontSize={11}
              showWeekdayLabels={false}
              labels={{
                totalCount: "{{count}} contributions in the last year",
                legend: {
                  less: "Less",
                  more: "More",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
