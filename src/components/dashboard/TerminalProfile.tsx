"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = [
  {
    cmd: "whoami",
    output: (
      <div className="text-foreground/80 mt-1">
        manny_d_great
      </div>
    ),
    delay: 500,
    typingSpeed: 50
  },
  {
    cmd: "cat profile.json",
    output: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary mt-1 whitespace-pre font-mono">
{`{
  "name": "Manny D' Great",
  "role": "Blockchain Developer",
  "location": "Lagos, NG",
  "status": "Building Web3 🚀"
}`}
      </motion.div>
    ),
    delay: 800,
    typingSpeed: 40
  },
  {
    cmd: "ls -la connections/",
    output: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 flex flex-col gap-1 text-sm font-mono">
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-[#ff5f56]">github</span>
          <a href="https://github.com/manny-the-great" target="_blank" className="text-primary hover:underline">github.com/manny-the-great</a>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-[#ffbd2e]">twitter</span>
          <a href="https://x.com/_mannythegreat_" target="_blank" className="text-primary hover:underline">@_mannythegreat_</a>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-[#27c93f]">linkedin</span>
          <a href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/" target="_blank" className="text-primary hover:underline">Emmanuel Johnson</a>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-[#a89984]">email</span>
          <a href="mailto:contact@manny.dev" className="text-foreground/80 hover:underline">contact@manny.dev</a>
        </div>
      </motion.div>
    ),
    delay: 1000,
    typingSpeed: 60
  }
];

export const TerminalProfile = () => {
  const [history, setHistory] = useState<number[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentCommandIndex >= COMMANDS.length) {
      setIsTyping(false);
      return;
    }

    const command = COMMANDS[currentCommandIndex];
    let i = 0;
    setIsTyping(true);
    setTypedText("");

    // Start typing after initial delay
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setTypedText(command.cmd.slice(0, i + 1));
        i++;
        
        // Scroll to bottom
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }

        if (i >= command.cmd.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Wait a bit before showing output and moving to next command
          setTimeout(() => {
            setHistory(prev => [...prev, currentCommandIndex]);
            setCurrentCommandIndex(prev => prev + 1);
          }, 400);
        }
      }, command.typingSpeed);

      return () => clearInterval(typingInterval);
    }, command.delay);

    return () => clearTimeout(startDelay);
  }, [currentCommandIndex]);

  // Scroll to bottom whenever history updates
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, typedText]);

  return (
    <div className="w-full max-w-4xl mx-auto perspective-1000 px-4 md:px-0">
      <motion.div 
        initial={{ rotateX: 10, opacity: 0, y: 20 }}
        whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-50px" }}
        className="glass-card overflow-hidden border border-foreground/10 bg-black/60 backdrop-blur-xl relative shadow-2xl rounded-xl"
      >
        {/* Terminal Header */}
        <div className="bg-foreground/5 border-b border-foreground/10 px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-sm" />
          </div>
          <div className="text-xs text-foreground/50 font-mono tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            manny@macbook-pro:~
          </div>
          <div className="w-14" /> {/* Spacer for balance */}
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={containerRef}
          className="p-6 font-mono text-sm md:text-base min-h-[320px] max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col gap-4 relative"
        >
          {/* Decorative Scanline */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_51%)] bg-[length:100%_4px] opacity-20 z-10" />

          {history.map((index) => {
            const cmd = COMMANDS[index];
            return (
              <div key={index} className="flex flex-col gap-2 z-20">
                <div className="flex items-center gap-3">
                  <span className="text-[#27c93f] font-bold">➜</span>
                  <span className="text-[#58a6ff] font-bold">~</span>
                  <span className="text-foreground">{cmd.cmd}</span>
                </div>
                {cmd.output}
              </div>
            );
          })}

          {currentCommandIndex < COMMANDS.length && (
            <div className="flex items-center gap-3 z-20">
              <span className="text-[#27c93f] font-bold">➜</span>
              <span className="text-[#58a6ff] font-bold">~</span>
              <span className="text-foreground flex items-center">
                {typedText}
                {isTyping && (
                  <span className="w-2 h-5 bg-foreground/70 ml-1 animate-pulse" />
                )}
              </span>
            </div>
          )}
          
          {!isTyping && currentCommandIndex >= COMMANDS.length && (
            <div className="flex items-center gap-3 z-20 mt-2">
              <span className="text-[#27c93f] font-bold">➜</span>
              <span className="text-[#58a6ff] font-bold">~</span>
              <span className="w-2 h-5 bg-primary animate-pulse" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
