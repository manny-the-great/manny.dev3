"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const explicitTheme = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const ContributionGraph = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold font-heading text-white">Activity</h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            Real-time GitHub contributions
          </p>
          <div className="flex items-center gap-2 text-xs font-medium">
            <button className="px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/10">
              GITHUB
            </button>
            <button className="px-3 py-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-colors">
              LEETCODE
            </button>
          </div>
        </div>
      </div>

      {/* Graph Wrapper */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[700px] p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm">
          <GitHubCalendar 
            username="manny-the-great" 
            colorScheme="dark"
            theme={explicitTheme}
            blockSize={11}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
};

