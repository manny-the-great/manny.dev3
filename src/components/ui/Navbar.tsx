"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, LayoutGrid, BookOpen, Activity, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: LayoutGrid },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'stars', label: 'Stars', icon: Star },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState('overview');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2 rounded-full outline-none font-header",
              activeTab === item.id 
                ? "text-primary-foreground" 
                : "text-foreground/50 hover:text-foreground"
            )}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <item.icon size={16} />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}

        <div className="w-[1px] h-4 bg-foreground/10 mx-2" />

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full text-foreground/50 hover:text-foreground transition-colors relative"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </motion.nav>
    </div>
  );
}
