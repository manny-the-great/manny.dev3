"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitCommit } from 'lucide-react';

const weeks = 52;
const days  = 7;
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const getColor = (level: number) => {
  switch (level) {
    case 0: return { bg: 'rgba(255,255,255,0.05)', glow: false };
    case 1: return { bg: '#0e4429', glow: false };
    case 2: return { bg: '#006d32', glow: false };
    case 3: return { bg: '#26a641', glow: true  };
    case 4: return { bg: '#39d353', glow: true  };
    default: return { bg: 'rgba(255,255,255,0.05)', glow: false };
  }
};

const getDayDate = (weekIdx: number, dayIdx: number) => {
  const today = new Date();
  const diff   = today.getDay() === 6 ? 0 : -(today.getDay() + 1);
  const back   = ((weeks - 1 - weekIdx) * 7) + (6 - dayIdx);
  const d = new Date();
  d.setDate(today.getDate() + diff - back);
  return d;
};

export const ContributionGraph = () => {
  const contributions = useMemo(
    () => Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5)),
    []
  );

  const total = contributions.reduce((a, b) => a + b, 0);

  return (
    <div className="glass-card p-6 md:p-8 w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="section-label mb-1">Proof of Work</div>
          <div className="flex items-center gap-2">
            <GitCommit size={16} className="text-primary" />
            <h3 className="font-bold text-foreground font-heading text-lg">
              {total.toLocaleString()} contributions
              <span className="text-muted font-normal text-sm ml-2">in the last year</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted font-heading">
          <span>Less</span>
          {[0,1,2,3,4].map(l => {
            const { bg } = getColor(l);
            return <div key={l} className="w-3 h-3 rounded-sm" style={{ background: bg }} />;
          })}
          <span>More</span>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[640px]">
          {/* Month labels */}
          <div className="flex text-[10px] text-muted mb-2 ml-7 font-heading">
            {months.map(m => (
              <div key={m} style={{ width: `${100 / 12}%`, minWidth: 42 }}>{m}</div>
            ))}
          </div>

          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] text-[10px] text-muted pr-2 pt-0.5 font-heading">
              <span>Mon</span>
              <span className="invisible">·</span>
              <span>Wed</span>
              <span className="invisible">·</span>
              <span>Fri</span>
            </div>

            {/* Cells */}
            <div className="flex gap-[3px] flex-1">
              {Array.from({ length: weeks }).map((_, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {Array.from({ length: days }).map((_, di) => {
                    const level = contributions[wi * days + di];
                    const { bg, glow } = getColor(level);
                    const date = getDayDate(wi, di);
                    return (
                      <motion.div
                        key={di}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (wi * days + di) * 0.0003, duration: 0.3 }}
                        whileHover={{ scale: 1.5, zIndex: 20 }}
                        className="relative group cursor-pointer"
                        style={{
                          width: 11, height: 11,
                          borderRadius: 2,
                          background: bg,
                          boxShadow: glow ? `0 0 6px rgba(34,197,94,0.5)` : 'none',
                        }}
                      >
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 rounded-lg border border-foreground/10 text-[10px] text-foreground font-heading bg-[#1C2128] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity shadow-xl">
                          <span className="font-semibold text-primary">{level === 0 ? 'No' : level}</span>{' '}
                          {level === 1 ? 'contribution' : 'contributions'}
                          <span className="text-muted ml-1">
                            on {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
