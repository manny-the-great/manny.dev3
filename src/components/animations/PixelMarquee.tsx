"use client";

import React from "react";

const TEXT = "MANNY D' GREAT";
// Repeat enough copies to ensure seamless looping
const COPIES = 8;

export const PixelMarquee: React.FC = () => {
  return (
    <div className="pixel-marquee-wrapper">
      <div className="pixel-marquee-track">
        {Array.from({ length: COPIES }).map((_, i) => (
          <span key={i} className="pixel-marquee-item">
            {TEXT}
            <span className="pixel-marquee-dot" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
