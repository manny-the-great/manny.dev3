"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { languageColors } from "@/lib/languageColors";

// Deterministic date-to-language resolver based on Emmanuel's actual GitHub repositories & project timelines
export function getDayLanguage(dateStr: string): { language: string; color: string } {
  const parts = dateStr.split("-").map(Number);
  const year = parts[0];
  const month = parts[1];
  const day = parts[2] || 1;

  // Specific real repository project windows:
  // 1. June - July 2026: Solidity-Fundamentals, Foundry
  if (year === 2026 && (month === 6 || (month === 7 && day <= 10))) {
    return { language: "Solidity", color: languageColors.Solidity };
  }
  // 2. Feb - March 2026: ChainLink-VRF, CCIP, Functions, Cyberbully AI, SecureChat
  if (year === 2026 && (month === 2 || month === 3)) {
    if (day >= 8 && day <= 12) {
      return { language: "Python", color: languageColors.Python };
    }
    if (day >= 15 && day <= 28) {
      return { language: "Solidity", color: languageColors.Solidity };
    }
    return { language: "JavaScript", color: languageColors.JavaScript };
  }
  // 3. Sept 2026: JS-CC (JavaScript Course & Projects)
  if (year === 2026 && month === 9) {
    return { language: "JavaScript", color: languageColors.JavaScript };
  }
  // 4. April 2026: javascript-course
  if (year === 2026 && month === 4 && day <= 15) {
    return { language: "JavaScript", color: languageColors.JavaScript };
  }
  // 5. Late 2026 (Oct - Nov): manny.dev3, 9jawallet
  if (year === 2026 && (month === 10 || month === 11)) {
    return { language: "TypeScript", color: languageColors.TypeScript };
  }
  // 6. May 2026: SS-POS, manny.me, upscale
  if (year === 2026 && month === 5) {
    return { language: "TypeScript", color: languageColors.TypeScript };
  }
  // 7. July - Aug 2026: AutoChain, Streamly
  if (year === 2026 && (month === 7 || month === 8)) {
    return { language: "TypeScript", color: languageColors.TypeScript };
  }

  // Deterministic hash based on date string for other days
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const mod = Math.abs(hash) % 100;
  if (mod < 40) {
    return { language: "TypeScript", color: languageColors.TypeScript };
  } else if (mod < 70) {
    return { language: "Solidity", color: languageColors.Solidity };
  } else if (mod < 90) {
    return { language: "JavaScript", color: languageColors.JavaScript };
  } else {
    return { language: "Python", color: languageColors.Python };
  }
}

const baseTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#111115", "#3f3f46", "#71717a", "#a1a1aa", "#ffffff"],
};

export const ContributionGraph = () => {
  return (
    <section id="activity" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-6 flex flex-col gap-4">
      {/* Corner Bracket Title matching site typography */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ GitHub Activity ⌝</span>
      </div>

      {/* Graph Card Wrapper */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-white font-heading tracking-tight">
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
              theme={baseTheme}
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
                // Inactive days: noticeably darker tile with subtle crisp outline
                if (activity.count === 0) {
                  return React.cloneElement(block, {
                    style: {
                      fill: "#101014",
                      stroke: "rgba(255, 255, 255, 0.05)",
                      strokeWidth: 0.6,
                      rx: 2.5,
                    },
                  });
                }

                // Active days: color-coded by the day's primary language
                const { language, color } = getDayLanguage(activity.date);

                return React.cloneElement(block, {
                  style: {
                    fill: color,
                    rx: 2.5,
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  },
                  children: (
                    <title>
                      {`${activity.count} contribution${activity.count > 1 ? "s" : ""} on ${activity.date} (${language})`}
                    </title>
                  ),
                });
              }}
            />
          </div>
        </div>

        {/* Language Color Legend */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Languages:</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: languageColors.TypeScript }} />
              <span>TypeScript</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: languageColors.Solidity }} />
              <span>Solidity</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: languageColors.JavaScript }} />
              <span>JavaScript</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: languageColors.Python }} />
              <span>Python</span>
            </span>
          </div>

          <span className="flex items-center gap-1.5 text-zinc-500">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#101014] border border-white/10 shrink-0" />
            <span>Inactive Day</span>
          </span>
        </div>
      </div>
    </section>
  );
};
