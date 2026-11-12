"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  Code,
  Briefcase,
  Layers,
  Activity,
  Mail,
  Copy,
  Check,
  Download,
  Github,
  Linkedin,
  ArrowUpRight,
  CornerDownLeft,
  X,
} from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ReactNode;
  subtitle?: string;
  badge?: string;
  onSelect: () => void;
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global keyboard shortcut (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("emmanuel.johnson.ox@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1200);
    } catch {
      setCopied(false);
    }
  };

  const actions: ActionItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Home & Profile",
      subtitle: "Overview, bio, and availability status",
      category: "Navigation",
      icon: <Home size={15} className="text-zinc-400" />,
      onSelect: () => scrollToSection("home"),
    },
    {
      id: "nav-skills",
      title: "My Skills & Tech Stack",
      subtitle: "32 languages, frameworks, databases & tools",
      category: "Navigation",
      icon: <Code size={15} className="text-zinc-400" />,
      onSelect: () => scrollToSection("skills"),
    },
    {
      id: "nav-experience",
      title: "Work Experience",
      subtitle: "DFW-LLC & technical career history",
      category: "Navigation",
      icon: <Briefcase size={15} className="text-zinc-400" />,
      onSelect: () => scrollToSection("experience"),
    },
    {
      id: "nav-projects",
      title: "Featured Projects",
      subtitle: "CryptoVerse, AutoChain & Camaro Showcase",
      category: "Navigation",
      icon: <Layers size={15} className="text-zinc-400" />,
      onSelect: () => scrollToSection("projects"),
    },
    {
      id: "nav-activity",
      title: "GitHub Activity",
      subtitle: "Heatmap & annual contribution graph",
      category: "Navigation",
      icon: <Activity size={15} className="text-zinc-400" />,
      onSelect: () => scrollToSection("activity"),
    },
    {
      id: "nav-contact",
      title: "Contact & Direct Message",
      subtitle: "Send a message directly to Emmanuel",
      category: "Navigation",
      icon: <Mail size={15} className="text-zinc-400" />,
      onSelect: () => scrollToSection("contact"),
    },

    // Actions
    {
      id: "action-copy-email",
      title: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
      subtitle: "emmanuel.johnson.ox@gmail.com",
      category: "Actions",
      badge: copied ? "Copied" : "Clipboard",
      icon: copied ? (
        <Check size={15} className="text-emerald-400" />
      ) : (
        <Copy size={15} className="text-zinc-400" />
      ),
      onSelect: handleCopyEmail,
    },
    {
      id: "action-resume",
      title: "Download Resume / CV",
      subtitle: "Emmanuel-Johnson-CV.pdf",
      category: "Actions",
      badge: "PDF",
      icon: <Download size={15} className="text-zinc-400" />,
      onSelect: () => {
        setIsOpen(false);
        const link = document.createElement("a");
        link.href = "/Emmanuel-Johnson-CV.pdf";
        link.download = "Emmanuel-Johnson-CV.pdf";
        link.click();
      },
    },

    // Social Links
    {
      id: "social-github",
      title: "GitHub Profile",
      subtitle: "github.com/manny-the-great",
      category: "Social",
      badge: "External",
      icon: <Github size={15} className="text-zinc-400" />,
      onSelect: () => {
        setIsOpen(false);
        window.open("https://github.com/manny-the-great", "_blank");
      },
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/emmanuel-johnson",
      category: "Social",
      badge: "External",
      icon: <Linkedin size={15} className="text-zinc-400" />,
      onSelect: () => {
        setIsOpen(false);
        window.open(
          "https://www.linkedin.com/in/emmanuel-johnson-623a69266/",
          "_blank"
        );
      },
    },
    {
      id: "social-x",
      title: "Twitter / X Profile",
      subtitle: "@manny_the_great",
      category: "Social",
      badge: "External",
      icon: <ArrowUpRight size={15} className="text-zinc-400" />,
      onSelect: () => {
        setIsOpen(false);
        window.open("https://x.com", "_blank");
      },
    },
  ];

  // Filter actions based on search
  const filtered = actions.filter((action) => {
    const q = search.toLowerCase();
    return (
      action.title.toLowerCase().includes(q) ||
      (action.subtitle && action.subtitle.toLowerCase().includes(q)) ||
      action.category.toLowerCase().includes(q)
    );
  });

  // Keyboard navigation inside menu
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev <= 0 ? Math.max(0, filtered.length - 1) : prev - 1
      );
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].onSelect();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md">
          {/* Backdrop Click */}
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-full max-w-xl rounded-2xl bg-[#0c0c10] border border-zinc-800 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800/80 bg-[#101014]">
              <Search size={16} className="text-zinc-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyNavigation}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-white text-xs sm:text-sm placeholder-zinc-500 focus:outline-none"
              />
              <span className="px-2 py-0.5 rounded bg-zinc-850 border border-zinc-750 text-[10px] font-mono text-zinc-400 shrink-0">
                ESC
              </span>
            </div>

            {/* Actions List */}
            <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1 scrollbar-none">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-xs text-zinc-500 font-mono">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((action, idx) => {
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={action.id}
                      onClick={action.onSelect}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                        isSelected
                          ? "bg-[#181820] text-white"
                          : "text-zinc-300 hover:bg-[#141418]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? "bg-zinc-800 border-zinc-700 text-white"
                              : "bg-[#121216] border-zinc-800 text-zinc-400"
                          }`}
                        >
                          {action.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-medium tracking-tight truncate">
                            {action.title}
                          </span>
                          {action.subtitle && (
                            <span className="text-[11px] text-zinc-500 truncate font-mono">
                              {action.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {action.badge && (
                          <span className="px-2 py-0.5 rounded bg-[#101014] border border-zinc-800 text-[10px] font-mono text-zinc-400">
                            {action.badge}
                          </span>
                        )}
                        {isSelected && (
                          <CornerDownLeft size={12} className="text-zinc-500" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="px-4 py-2.5 bg-[#09090c] border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-850 text-zinc-400 text-[10px]">
                    ↑↓
                  </span>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-850 text-zinc-400 text-[10px]">
                    ↵
                  </span>
                  Select
                </span>
              </div>
              <span>Emmanuel Johnson • Portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

