"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Twitter, Github, Linkedin, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getGithubProfile } from '@/lib/github';

export const SidebarProfile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getGithubProfile('manny-the-great');
      setProfile(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const staticInfo = {
    title: "Blockchain & Backend Engineer",
    description: "Building scalable Web3 infrastructure using JavaScript, Solidity and smart contracts.",
    skills: ["Solidity", "JavaScript", "TypeScript", "Node.js", "Ethereum", "Chainlink"]
  };

  if (loading) {
    return (
      <div className="w-full lg:w-80 flex flex-col items-center justify-center h-64 glass-card">
        <Loader2 className="animate-spin text-primary" size={24} />
      </div>
    );
  }

  return (
    <div className="w-full lg:w-80 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* Avatar */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/10 glass-card"
        >
          <img 
            src={profile?.avatar_url || "https://avatars.githubusercontent.com/u/manny-the-great"} 
            alt={profile?.name || "Manny"}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name & Username */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl font-bold text-white">{profile?.name || "Manny D' Great"}</h1>
          <p className="text-xl text-foreground/60 font-medium">{profile?.login || "manny-the-great"}</p>
        </div>

        {/* Title */}
        <p className="text-foreground/90 font-semibold text-center lg:text-left">{staticInfo.title}</p>

        {/* Description */}
        <p className="text-foreground/70 text-sm leading-relaxed text-center lg:text-left">
          {profile?.bio || staticInfo.description}
        </p>

        {/* Stats */}
        <div className="flex justify-center lg:justify-start gap-4 text-sm text-foreground/60">
          <div className="flex items-center gap-1">
            <span className="font-bold text-white">{profile?.followers || 0}</span>
            <span>followers</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-white">{profile?.following || 0}</span>
            <span>following</span>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
          {staticInfo.skills.map((skill) => (
            <span 
              key={skill}
              className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 border border-primary/20 text-primary"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-4">
          <button className="w-full py-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-sm font-semibold transition-colors">
            View Resume
          </button>
          <button className="w-full py-2 bg-primary hover:bg-primary/90 border border-primary/20 rounded-lg text-sm font-semibold text-background transition-colors">
            Contact
          </button>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="text-sm font-semibold text-white">Achievements</h3>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1 group cursor-pointer hover:bg-white/10 transition-colors">
              <img src="https://github.githubassets.com/images/modules/profile/badge-pull-shark-64.png" alt="Pull Shark" className="w-full h-full object-contain filter group-hover:brightness-110" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1 group cursor-pointer hover:bg-white/10 transition-colors">
              <img src="https://github.githubassets.com/images/modules/profile/badge-yolo-64.png" alt="YOLO" className="w-full h-full object-contain filter group-hover:brightness-110" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1 group cursor-pointer hover:bg-white/10 transition-colors">
              <img src="https://github.githubassets.com/images/modules/profile/badge-quickdraw-64.png" alt="Quickdraw" className="w-full h-full object-contain filter group-hover:brightness-110" />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3 mt-4 text-sm text-foreground/70">
          {profile?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
          )}
          <a href={`https://github.com/${profile?.login || 'manny-the-great'}`} target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <Github size={16} />
            <span>{profile?.login || 'manny-the-great'}</span>
          </a>
          <a href="https://x.com/mannythegreat_" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <Twitter size={16} />
            <span>@mannythegreat_</span>
          </a>
          <a href="https://linkedin.com/in/emmanuel-johnson" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <Linkedin size={16} />
            <span>emmanuel-johnson</span>
          </a>
        </div>
      </div>
    </div>
  );
};
