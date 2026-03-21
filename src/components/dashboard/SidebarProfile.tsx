"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Twitter, Github, Linkedin, Loader2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { getGithubProfile } from '@/lib/github';
import { LagosClock } from './LagosClock';

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
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-80 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        {/* Local Time Clock */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full flex justify-center lg:justify-start"
        >
          <LagosClock />
        </motion.div>

        {/* Avatar */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-foreground/10 glass-card"
        >
          <img 
            src={profile?.avatar_url || "/icon.png"} 
            alt={profile?.name || "Manny"}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name & Username */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center lg:items-start"
        >
          <h1 className="text-2xl font-bold text-foreground font-header">{profile?.name || "Manny D' Great"}</h1>
          <p className="text-xl text-foreground/60 font-medium">{profile?.login || "manny-the-great"}</p>
        </motion.div>

        {/* Title */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-foreground/90 font-semibold text-center lg:text-left"
        >
          {staticInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-foreground/70 text-sm leading-relaxed text-center lg:text-left"
        >
          {profile?.bio || staticInfo.description}
        </motion.p>

        {/* Stats */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center lg:justify-start gap-4 text-sm text-foreground/60"
        >
          <div className="flex items-center gap-1">
            <span className="font-bold text-foreground">{profile?.followers || 0}</span>
            <span>followers</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-foreground">{profile?.following || 0}</span>
            <span>following</span>
          </div>
        </motion.div>

        {/* ... rest of the content ... */}

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
          <button className="w-full py-2 bg-foreground/10 hover:bg-foreground/15 border border-foreground/10 rounded-lg text-sm font-semibold transition-colors">
            View Resume
          </button>
          <button className="w-full py-2 bg-primary hover:bg-primary/90 border border-primary/20 rounded-lg text-sm font-semibold text-background transition-colors">
            Contact
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h3 className="text-sm font-semibold text-foreground font-header">RATING</h3>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <div 
                key={star}
                className="w-10 h-10 rounded-full bg-foreground/5 border border-black/10 dark:border-white/30 flex items-center justify-center group cursor-pointer hover:bg-foreground/10 transition-colors"
                title={`Rating: 5/5`}
              >
                <Star 
                  size={18}
                  fill="currentColor"
                  className="text-primary filter group-hover:brightness-110 transition-all duration-300 group-hover:scale-110" 
                />
              </div>
            ))}
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
          <a href="https://x.com/_mannythegreat_" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <Twitter size={16} />
            <span>@_mannythegreat_</span>
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-johnson-623a69266/" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <Linkedin size={16} />
            <span>emmanuel-johnson-623a69266</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
