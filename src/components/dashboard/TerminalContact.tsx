"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Send, Check } from 'lucide-react';

const contactLinks = [
  {
    label: "Email",
    value: "emmanuel.johnson.ox@gmail.com",
    href: "mailto:emmanuel.johnson.ox@gmail.com",
    icon: <Mail size={18} className="text-zinc-400" />,
  },
  {
    label: "GitHub",
    value: "github.com/manny-the-great",
    href: "https://github.com/manny-the-great",
    icon: <Github size={18} className="text-zinc-400" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuel-johnson",
    href: "https://www.linkedin.com/in/emmanuel-johnson-623a69266/",
    icon: <Linkedin size={18} className="text-zinc-400" />,
  },
];

export const TerminalContact = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);

  const handleSend = () => {
    if (email && message) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col gap-8">
      {/* Section Header with Line */}
      <div className="flex items-center gap-4 text-xs tracking-wider uppercase font-semibold text-zinc-500">
        <span className="flex items-center gap-1 font-mono text-zinc-400">
          &lt;&gt; CONTACT
        </span>
        <div className="flex-1 h-[1px] bg-zinc-800/80" />
      </div>

      <div className="flex flex-col gap-6">
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Let&apos;s build something together.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
            I&apos;m open to Web3 engineering roles, smart contract development, and high-impact full-stack projects. Drop a message — I respond fast.
          </p>
        </div>

        {/* Contact Links Grid / Cards Stack */}
        <div className="flex flex-col gap-3 pt-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0e0e11] border border-[#1e1e24] hover:border-zinc-700/80 hover:bg-[#131318] flex items-center justify-between transition-all duration-200 group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white font-heading">
                    {link.label}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {link.value}
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>

        {/* Send Message Form Card Container */}
        <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-[#0e0e11] border border-[#1e1e24] flex flex-col gap-6 shadow-xl">
          <h3 className="text-lg font-bold text-white font-heading">
            Send a message
          </h3>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 py-10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <Check size={20} />
              </div>
              <p className="text-white font-bold font-heading text-lg">Message sent successfully!</p>
              <p className="text-zinc-400 text-xs">Thank you for reaching out. I will get back to you shortly.</p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1e1e24] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1e1e24] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1e1e24] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSend}
                disabled={!email || !message}
                className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg active:scale-95"
              >
                <Send size={15} />
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
