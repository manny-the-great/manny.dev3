"use client";

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

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
      <Clock size={14} className="text-primary animate-pulse" />
      <span>Lagos, NG: <span className="text-primary">{time}</span></span>
    </div>
  );
};
