"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, FileText, Send, Users } from 'lucide-react';
import { getGithubProfile } from '@/lib/github';

const XIcon = () => (
  <svg width={14} height={14} viewBox="0 0 1200 1227" fill="none">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
  </svg>
);

const techIcons = [
  { name: "Solidity",    icon: "https://cdn.simpleicons.org/solidity/22c55e" },
  { name: "Ethereum",    icon: "https://cdn.simpleicons.org/ethereum/9CA3AF" },
  { name: "Chainlink",   icon: "https://cdn.simpleicons.org/chainlink/375BD2" },
  { name: "JavaScript",  icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript",  icon: "https://cdn.simpleicons.org/typescript/3178c6" },
  { name: "Node.js",     icon: "https://cdn.simpleicons.org/nodedotjs/22c55e" },
  { name: "Next.js",     icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Hardhat",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" },
];

const stats = [
  { label: "Repositories", value: "37" },
  { label: "Commits",      value: "1.4k+" },
  { label: "Projects",     value: "15+" },
  { label: "Contracts",    value: "24" },
];

export const ProfileIdentityPanel = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    getGithubProfile('manny-the-great').then(setProfile);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass-card p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center"
      >
        {/* Avatar + Name */}
        <div className="flex items-center gap-5 flex-shrink-0">
          <div className="relative">
            <img
              src={profile?.avatar_url || '/icon.png'}
              alt="Manny"
              className="w-20 h-20 rounded-2xl object-cover border border-white/10"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-[#0D1117]" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading text-white">
              {profile?.name || "Manny D' Great"}
            </h2>
            <p className="text-muted text-sm font-mono mt-0.5">
              @{profile?.login || 'manny-the-great'}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={12} className="text-muted" />
              <span className="text-xs text-muted">{profile?.location || 'Lagos, Nigeria'}</span>
              <span className="w-1 h-1 rounded-full bg-primary inline-block" />
              <span className="text-xs text-primary font-medium">Available for work</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-20 bg-white/8 flex-shrink-0" />

        {/* Stats */}
        <div className="flex gap-6 md:gap-10 flex-wrap">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="text-2xl font-black font-heading text-white">{s.value}</span>
              <span className="text-xs text-muted uppercase tracking-widest font-heading">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-20 bg-white/8 flex-shrink-0" />

        {/* Scrolling tech icons */}
        <div className="flex-1 min-w-0 overflow-hidden relative">
          <div className="pixel-marquee-wrapper">
            <div className="flex gap-6 marquee-track w-max">
              {[...techIcons, ...techIcons, ...techIcons].map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0" title={t.name}>
                  <img src={t.icon} alt={t.name} className="w-7 h-7 object-contain" />
                  <span className="text-[9px] text-muted font-heading uppercase tracking-wide">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-20 bg-white/8 flex-shrink-0" />

        {/* Social links + CTA */}
        <div className="flex flex-col gap-3 flex-shrink-0">
          <div className="flex items-center gap-3">
            <a href={`https://github.com/${profile?.login || 'manny-the-great'}`} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 text-muted hover:text-white hover:border-white/25 transition-all">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 text-muted hover:text-secondary hover:border-secondary/40 transition-all">
              <Linkedin size={16} />
            </a>
            <a href="https://x.com/_mannythegreat_" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 text-muted hover:text-white hover:border-white/25 transition-all">
              <XIcon />
            </a>
            <div className="flex items-center gap-1 text-muted text-xs ml-1">
              <Users size={12} />
              <span className="font-mono">{profile?.followers || 0}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="/cv.pdf" download="Manny_DGreat_CV.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-white/70 hover:text-white hover:border-white/25 transition-all font-heading">
              <FileText size={13} />
              Resume
            </a>
            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-heading transition-all"
              style={{ background: 'var(--primary)', color: '#000' }}
            >
              <Send size={13} />
              Hire Me
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
