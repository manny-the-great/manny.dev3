"use client";

import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';

const explicitTheme = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const ContributionGraph = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold font-heading text-foreground">Activity</h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            Real-time GitHub contributions
          </p>
          <div className="flex items-center gap-2 text-xs font-medium">
            <button className="px-3 py-1.5 rounded-full bg-foreground/10 text-foreground border border-foreground/10">
              GITHUB
            </button>
            <button className="px-3 py-1.5 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-colors">
              LEETCODE
            </button>
          </div>
        </div>
      </div>

      {/* Graph Wrapper */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[700px] p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
          {mounted && (
            <GitHubCalendar 
              username="manny-the-great" 
              colorScheme={resolvedTheme === 'light' ? 'light' : 'dark'}
              theme={explicitTheme}
              blockSize={11}
              blockMargin={4}
              fontSize={12}
            />
          )}
        </div>
      </div>
    </div>
  );
};


