"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const ContributionGraph = () => {
  // Mock data for the heatmap
  // 52 weeks * 7 days
  const weeks = 52;
  const daysPerWeek = 7;
  
  const contributions = useMemo(() => {
    return Array.from({ length: weeks * daysPerWeek }, () => Math.floor(Math.random() * 5));
  }, []);

  const getDayDetails = (weekIndex: number, dayIndex: number) => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday...
    const diffToLastSaturday = dayOfWeek === 6 ? 0 : -(dayOfWeek + 1);
    
    // Total days to go back from the last Saturday in the grid
    const daysBack = ((weeks - 1 - weekIndex) * 7) + (6 - dayIndex);
    const date = new Date();
    date.setDate(today.getDate() + diffToLastSaturday - daysBack);
    return date;
  };

  const getColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-black/5 dark:bg-white/10'; // None
      case 1: return 'bg-[#0e4429]'; // Low
      case 2: return 'bg-[#006d32]'; // Medium-Low
      case 3: return 'bg-[#26a641]'; // Medium-High
      case 4: return 'bg-[#39d353]'; // High
      default: return 'bg-black/5 dark:bg-white/10';
    }
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="glass-card p-6 w-full overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">1,248 contributions in the last year</h3>
        <div className="text-xs text-foreground/50">Total activity</div>
      </div>

      <div className="flex flex-col gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {/* Month Labels */}
        <div className="flex text-[10px] text-foreground/40 mb-1 ml-6">
          {months.map((month, i) => (
            <div key={month} style={{ width: `${100 / 12}%`, minWidth: '40px' }}>
              {month}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Day Labels */}
          <div className="flex flex-col gap-1 text-[10px] text-foreground/40 pr-2 pt-1">
            <span>Mon</span>
            <span className="invisible">Tue</span>
            <span>Wed</span>
            <span className="invisible">Thu</span>
            <span>Fri</span>
          </div>

          {/* Grid */}
          <div className="flex gap-[3px] flex-1">
            {Array.from({ length: weeks }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {Array.from({ length: daysPerWeek }).map((_, dayIndex) => {
                  const level = contributions[weekIndex * 7 + dayIndex];
                  const date = getDayDetails(weekIndex, dayIndex);
                  return (
                    <motion.div
                      key={dayIndex}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: (weekIndex * 7 + dayIndex) * 0.0005 }}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                      className={`w-[11px] h-[11px] rounded-[2px] ${getColor(level)} transition-colors cursor-pointer relative group`}
                    >
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-foreground/10 text-[10px] text-foreground rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                        <span className="font-bold">{level === 0 ? 'No' : level} contributions</span> on {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-foreground/40">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-black/5 dark:bg-white/10"></div>
        <div className="w-3 h-3 rounded-sm bg-[#0e4429]"></div>
        <div className="w-3 h-3 rounded-sm bg-[#006d32]"></div>
        <div className="w-3 h-3 rounded-sm bg-[#26a641]"></div>
        <div className="w-3 h-3 rounded-sm bg-[#39d353]"></div>
        <span>More</span>
      </div>
    </div>
  );
};
