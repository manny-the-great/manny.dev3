"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const explicitTheme = {
  dark: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const ContributionGraph = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold font-heading text-foreground">Activity</h2>
        <p className="text-sm text-foreground/60">
          Real-time GitHub contributions
        </p>
      </div>

      {/* Graph Wrapper */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[700px] p-6 rounded-2xl border border-foreground/5 bg-background/50 backdrop-blur-sm">
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
