"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalContact = () => {
  const [text, setText] = useState("");
  const fullText = "> contact Manny";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full glass-card overflow-hidden font-mono text-sm">
      <div className="bg-foreground/10 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-xs text-foreground/40 ml-2">bash — 80x24</div>
      </div>
      <div className="p-6 flex flex-col gap-4 min-h-[220px]">
        <div className="flex items-center gap-2">
          <span className="text-secondary">➜</span>
          <span className="text-primary">~</span>
          <span className="text-foreground">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-primary"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col gap-3"
        >
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-foreground/40">GitHub:</span>
            <a href="https://github.com/manny-the-great" target="_blank" className="text-primary hover:underline">github.com/manny-the-great</a>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-foreground/40">Twitter:</span>
            <a href="https://x.com/_mannythegreat_" target="_blank" className="text-primary hover:underline">@_mannythegreat_</a>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-foreground/40">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/" target="_blank" className="text-primary hover:underline">Emmanuel Johnson</a>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <span className="text-foreground/40">Email:</span>
            <a href="mailto:contact@manny.dev" className="text-secondary hover:underline">contact@manny.dev</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-2 text-foreground/40 italic"
        >
          {/* Waiting for input... */}
          <span className="animate-pulse">_</span>
        </motion.div>
      </div>
    </div>
  );
};
