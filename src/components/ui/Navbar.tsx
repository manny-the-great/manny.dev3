"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero',     label: 'Overview' },
  { id: 'projects', label: 'Projects'  },
  { id: 'activity', label: 'Activity'  },
  { id: 'stars',    label: 'Stars'     },
];

export function Navbar() {
  const [activeTab, setActiveTab]   = useState('hero');
  const { theme, setTheme }         = useTheme();
  const [mounted, setMounted]       = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 130;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= pos) { setActiveTab(navItems[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className={cn(
          'pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300',
          scrolled
            ? 'bg-[#0D1117]/90 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/60'
            : 'bg-white/5 backdrop-blur-xl border-white/8'
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 sm:px-3 mr-0 sm:mr-1 border-r border-white/10 flex-shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-primary/30 overflow-hidden flex items-center justify-center">
            <img src="https://github.com/manny-the-great.png" alt="Manny" className="w-full h-full object-cover" />
          </div>
        </div>

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={cn(
              'relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full outline-none flex-shrink-0',
              'font-heading',
              activeTab === item.id ? 'text-black' : 'text-white/50 hover:text-white'
            )}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
              />
            )}
            <span className="hidden sm:inline">{item.label}</span>
            <span className="sm:hidden">{item.label}</span>
          </button>
        ))}

        <div className="w-px h-4 bg-white/10 mx-1" />

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full text-white/50 hover:text-white transition-colors"
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
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </motion.nav>
    </div>
  );
}
