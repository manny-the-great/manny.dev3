"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";

// Monochrome grayscale theme matching the reference image exactly
const monoTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: [
    "#18181c", // Level 0: Inactive day tile
    "#3f3f46", // Level 1: Low contributions
    "#71717a", // Level 2: Medium contributions
    "#a1a1aa", // Level 3: High contributions
    "#ffffff", // Level 4: Peak white contributions
  ],
};

export const ContributionGraph = () => {
  return (
    <section id="activity" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-6 flex flex-col gap-4">
      {/* Corner Bracket Title matching site typography */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ GitHub Activity ⌝</span>
      </div>

      {/* Graph Card Wrapper */}
      <div className="p-5 sm:p-6 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 flex flex-col gap-5 overflow-hidden">
        {/* Native Heading using Bricolage Grotesque (your design typography) */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading tracking-tight">
            GitHub Activity
          </h3>
          <span className="text-xs text-zinc-400 font-mono">
            @manny-the-great
          </span>
        </div>

        {/* Heatmap with horizontal scroll container */}
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
              renderBlock={(block, activity) => {
                // Inactive days: distinct, easy-to-spot dark tile with subtle border outline
                if (activity.count === 0) {
                  return React.cloneElement(block, {
                    style: {
                      fill: "#18181c",
                      stroke: "rgba(255, 255, 255, 0.07)",
                      strokeWidth: 0.7,
                      rx: 2.5,
                    },
                  });
                }

                // Active days: clean rounded corners
                return React.cloneElement(block, {
                  style: {
                    rx: 2.5,
                    cursor: "pointer",
                  },
                });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
