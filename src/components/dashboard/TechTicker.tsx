"use client";

import React from "react";

// Duplicate items enough times so the track always fills even ultrawide screens
const row1Base = [
  "Solidity", "Ethereum", "TypeScript", "Next.js", "Node.js",
  "Hardhat", "Chainlink", "React", "JavaScript", "PostgreSQL",
];
const row2Base = [
  "Smart Contracts", "DeFi", "Web3", "API Design",
  "System Architecture", "CI/CD", "Docker", "REST / GraphQL",
];

// 8 copies ensures seamless fill on any screen width
const row1Items = Array(8).fill(row1Base).flat();
const row2Items = Array(8).fill(row2Base).flat();

export function TechTicker() {
  return (
    <div className="py-16 relative overflow-hidden select-none">

      {/* Row 1 — white background, black text, tilts up-left */}
      <div
        className="w-full py-4 overflow-hidden -rotate-2 mb-5"
        style={{ background: "#fff", color: "#000" }}
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
                className="inline-block rounded-full"
                style={{ width: 5, height: 5, background: "rgba(0,0,0,0.35)", flexShrink: 0 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — black background, white text, tilts up-right */}
      <div
        className="w-full py-4 overflow-hidden rotate-2"
        style={{
          background: "#050505",
          color: "#fff",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
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
                className="inline-block rounded-full"
                style={{ width: 5, height: 5, background: "rgba(255,255,255,0.35)", flexShrink: 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
