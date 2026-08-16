"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Send, Check } from 'lucide-react';

const contactLinks = [
  {
    label: "Email",
    value: "emmanuel.johnson.ox@gmail.com",
    href: "mailto:emmanuel.johnson.ox@gmail.com",
    icon: <Mail size={16} className="text-zinc-400" />,
  },
  {
    label: "GitHub",
    value: "github.com/manny-the-great",
    href: "https://github.com/manny-the-great",
    icon: <Github size={16} className="text-zinc-400" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuel-johnson",
    href: "https://www.linkedin.com/in/emmanuel-johnson-623a69266/",
    icon: <Linkedin size={16} className="text-zinc-400" />,
  },
];

export const TerminalContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (email && message) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-16 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ Contact ⌝</span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Contact Links */}
        <div className="flex flex-col gap-2.5">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 hover:border-zinc-700 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white">
                    {link.label}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {link.value}
                  </span>
                </div>
              </div>
              <ArrowRight size={14} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>

        {/* Message Form */}
        <div className="p-4 sm:p-5 rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-white font-heading">
            Send a direct message
          </h3>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-2 py-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <Check size={18} />
              </div>
              <p className="text-white font-bold text-sm">Message received!</p>
              <p className="text-zinc-400 text-xs">Thanks for getting in touch. I will respond promptly.</p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#121216] border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#121216] border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#121216] border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
              />

              <button
                onClick={handleSend}
                disabled={!email || !message}
                className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
              >
                <Send size={13} />
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
