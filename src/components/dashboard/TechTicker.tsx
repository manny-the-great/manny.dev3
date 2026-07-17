"use client";

import React from "react";

const row1Base = [
  "JavaScript", "TypeScript", "React", "Python", "Node.js",
  "Hardhat", "Solidity", "Chainlink", "Ethereum",
];
const row2Base = [
  "System Architecture", "CI/CD", "Next.js", "API Design",
  "Web3", "Smart Contracts", "MongoDB", "Firebase",
];

// 8 copies ensures seamless fill on any screen width
const row1Items = Array(8).fill(row1Base).flat();
const row2Items = Array(8).fill(row2Base).flat();

export function TechTicker() {
  return (
    <div className="py-6 md:py-10 relative overflow-hidden select-none">

      {/* Row 1 — white background, black text, tilts up-left */}
      <div
        className="w-full py-4 overflow-hidden -rotate-2 mb-5 bg-foreground text-background"
      >
        <div
          className="flex items-center gap-10 font-semibold text-sm md:text-base uppercase tracking-wider"
          style={{
            width: "max-content",
            animation: "ticker-left 35s linear infinite",
            willChange: "transform",
          }}
        >
          {row1Items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span>{item}</span>
              <span
                className="inline-block rounded-full w-[5px] h-[5px] bg-background/35 shrink-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — black background, white text, tilts up-right */}
      <div
        className="w-full py-4 overflow-hidden rotate-2 bg-background text-foreground border-y border-foreground/10"
      >
        <div
          className="flex items-center gap-10 font-semibold text-sm md:text-base uppercase tracking-wider"
          style={{
            width: "max-content",
            animation: "ticker-right 40s linear infinite",
            willChange: "transform",
          }}
        >
          {row2Items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span>{item}</span>
              <span
                className="inline-block rounded-full w-[5px] h-[5px] bg-foreground/35 shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
