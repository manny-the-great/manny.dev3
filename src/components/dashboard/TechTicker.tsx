"use client";

import React from "react";

const row1Items = [
  "Solidity", "Ethereum", "TypeScript", "Next.js", "Node.js",
  "Hardhat", "Chainlink", "React", "Solidity", "Ethereum",
  "TypeScript", "Next.js", "Node.js", "Hardhat", "Chainlink", "React",
];

const row2Items = [
  "Smart Contracts", "DeFi", "Web3", "API Design", "System Architecture",
  "CI/CD", "Docker", "Smart Contracts", "DeFi", "Web3",
  "API Design", "System Architecture", "CI/CD", "Docker",
];

export function TechTicker() {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Row 1 — green background, rotated slightly up-left */}
      <div className="w-[200%] py-4 whitespace-nowrap -rotate-2 mb-6"
        style={{ background: "rgb(144,255,3)", color: "#000" }}>
        <div className="flex items-center gap-10 font-semibold text-sm md:text-base uppercase tracking-wider ticker-row-1">
          {row1Items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/40 inline-block" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — dark background, green text, rotated up-right */}
      <div
        className="w-[200%] py-4 whitespace-nowrap rotate-2"
        style={{
          background: "#0a0a0a",
          color: "rgb(144,255,3)",
          borderTop: "1px solid rgba(144,255,3,0.2)",
          borderBottom: "1px solid rgba(144,255,3,0.2)",
        }}
      >
        <div className="flex items-center gap-10 font-semibold text-sm md:text-base uppercase tracking-wider ticker-row-2">
          {row2Items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full inline-block opacity-60" style={{ background: "rgb(144,255,3)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
