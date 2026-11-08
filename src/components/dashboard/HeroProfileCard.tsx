"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  CheckCircle2,
  Mail,
  Linkedin,
  Github,
  Instagram,
  FileText,
  Download,
  QrCode,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const HeroProfileCard = () => {
  const [lagosTime, setLagosTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setLagosTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-6 flex flex-col gap-6">
      {/* Live Availability Radar Beacon */}
      <div className="flex items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.12)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">Available for High-Leverage Roles &amp; Web3 Contracts</span>
        </div>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
        {/* Avatar Container */}
        <div className="relative group shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-zinc-800 bg-[#121216] shadow-2xl relative group-hover:border-zinc-700 transition-colors">
            <Image
              src="/pfp-main.jpg"
              alt="Emmanuel Johnson"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Top-right corner badge */}
            <div className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-400">
              <QrCode size={12} />
            </div>
          </div>
        </div>

        {/* Identity Details */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-1.5">
              Emmanuel Johnson
              <span className="text-base sm:text-lg">🚀</span>
            </h1>
          </div>

          <span className="text-sm font-mono text-zinc-400">@manny-the-great</span>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-300">
            <span className="font-medium text-white">Blockchain Engineer &amp; AI-Powered Software Dev</span>
            <span className="text-zinc-600">•</span>
            <span>Software Developer at <strong className="text-white font-medium">DFW-LLC</strong></span>
            <span className="text-zinc-600">⚙️</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 pt-0.5 font-mono">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-zinc-500" />
              Lagos, Nigeria
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <Clock size={13} className="text-zinc-500" />
              {lagosTime || "05:25:40 pm"}
            </span>
          </div>
        </div>
      </div>

      {/* Core Architectural Pillars / Quick Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        <div className="p-2.5 rounded-xl border border-zinc-800/80 bg-[#0c0c10]/40 flex flex-col gap-0.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">FOCUS</span>
          <span className="text-xs font-semibold text-zinc-200">⛓️ EVM Architecture</span>
        </div>
        <div className="p-2.5 rounded-xl border border-zinc-800/80 bg-[#0c0c10]/40 flex flex-col gap-0.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">BACKEND</span>
          <span className="text-xs font-semibold text-zinc-200">⚡ Scalable APIs</span>
        </div>
        <div className="p-2.5 rounded-xl border border-zinc-800/80 bg-[#0c0c10]/40 flex flex-col gap-0.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">FRONTEND</span>
          <span className="text-xs font-semibold text-zinc-200">🎨 Modern Reactive UI</span>
        </div>
        <div className="p-2.5 rounded-xl border border-zinc-800/80 bg-[#0c0c10]/40 flex flex-col gap-0.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">MISSION</span>
          <span className="text-xs font-semibold text-zinc-200">🚀 Always Shipping</span>
        </div>
      </div>

      {/* Bio Statement */}
      <div className="p-4 rounded-xl border border-dashed border-zinc-800/90 bg-[#0c0c10]/30 text-xs sm:text-sm text-zinc-300 leading-relaxed flex flex-col gap-2">
        <p>
          Specializing in <strong className="text-white font-semibold">decentralized protocols</strong>, smart contract engineering, and high-concurrency full-stack systems. 
        </p>
        <p className="text-zinc-400">
          Software Developer at <strong className="text-white font-medium">DFW-LLC</strong>, turning complex infrastructure into scalable, resilient software with clean code and minimal bloat.
        </p>
      </div>

      {/* Social Banner Cards */}
      <div className="flex flex-col gap-3">
        {/* Twitter/X Card */}
        <div className="p-3.5 sm:p-4 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 hover:border-zinc-700/80 transition-colors flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold text-white truncate">Emmanuel Johnson</span>
                <CheckCircle2 size={14} className="text-[#1D9BF0] fill-[#1D9BF0] text-black shrink-0" />
              </div>
              <span className="text-xs text-zinc-400 font-mono truncate">@manny_the_great</span>
            </div>
          </div>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg border border-dashed border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-xs font-semibold transition-all shrink-0 bg-[#121216]/50 flex items-center gap-1"
          >
            <span>Follow</span>
            <ArrowUpRight size={12} className="text-zinc-400" />
          </a>
        </div>
      </div>

      {/* Action Bar / Social Icons Row */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        {/* Email Me Button */}
        <a
          href="mailto:emmanuel.johnson.ox@gmail.com"
          className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-md active:scale-95"
        >
          <Mail size={14} className="text-black" />
          <span>Email Me</span>
        </a>

        {/* Resume Button */}
        <a
          href="/Emmanuel-Johnson-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Emmanuel-Johnson-CV.pdf"
          className="px-4 py-2 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Download size={14} className="text-zinc-400" />
          <span>Download CV</span>
        </a>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-zinc-800 hidden sm:block" />

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={14} />
          </a>

          <a
            href="https://github.com/manny-the-great"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={14} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram size={14} />
          </a>

          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#141418] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Articles"
            title="Medium Articles"
          >
            <FileText size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
