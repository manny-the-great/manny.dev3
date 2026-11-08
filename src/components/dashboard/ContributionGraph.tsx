"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";

// Grayscale monochromatic dark theme matching the exact screenshot reference
const monoTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "#161618", // Level 0: dark empty tile
    "#38383e", // Level 1: subtle dark gray
    "#6e6e76", // Level 2: medium gray
    "#b0b0b8", // Level 3: silver gray
    "#ffffff", // Level 4: bright white peak
  ],
};

export const ContributionGraph = () => {
  return (
    <section id="activity" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-6 flex flex-col gap-4">
      {/* Container card matching the screenshot */}
      <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800/80 bg-[#0a0a0d]/90 backdrop-blur-sm flex flex-col gap-6 overflow-hidden shadow-2xl">
        {/* Editorial Serif Header matching image */}
        <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-normal font-normal">
          GitHub Activity
        </h2>

        {/* Heatmap with horizontal scroll container for mobile */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none select-none">
          <div className="min-w-[660px] flex items-center justify-center">
            <GitHubCalendar
              username="manny-the-great"
              colorScheme="dark"
              theme={monoTheme}
              blockSize={11.5}
              blockMargin={3.5}
              blockRadius={2.5}
              fontSize={12}
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
