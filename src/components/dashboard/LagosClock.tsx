"use client";

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { VT323 } from "next/font/google";

const pixelFont = VT323({ weight: "400", subsets: ["latin"] });

export const LagosClock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const lagosTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setTime(lagosTime);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs font-mono font-medium text-foreground/80">
      <div className="flex items-center gap-1.5">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <Clock size={14} className="text-primary" />
      </div>
      <span className="flex items-center gap-1.5">Lagos, NG: <span className={`text-primary text-sm tracking-wider ${pixelFont.className}`}>{time}</span></span>
    </div>
  );
};
