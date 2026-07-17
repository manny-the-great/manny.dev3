"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Send } from 'lucide-react';

const XIcon = () => (
  <svg width={16} height={16} viewBox="0 0 1200 1227" fill="none">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
  </svg>
);

const links = [
  { label: "GitHub",   href: "https://github.com/manny-the-great",                    icon: <Github size={18} />,   color: "hover:text-foreground hover:border-foreground/30" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-johnson-623a69266/",icon: <Linkedin size={18} />, color: "hover:text-secondary hover:border-secondary/40" },
  { label: "X / Twitter", href: "https://x.com/_mannythegreat_",                      icon: <XIcon />,              color: "hover:text-foreground hover:border-foreground/30" },
  { label: "Email",    href: "mailto:contact@manny.dev",                               icon: <Mail size={18} />,     color: "hover:text-primary hover:border-primary/40" },
];

export const TerminalContact = () => {
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);

  const handleSend = () => {
    if (email && message) { setSent(true); }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
      <div>
        <div className="section-label mb-2">Let&apos;s Connect</div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
          Build Something Meaningful
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left — Clean Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 flex flex-col gap-6 justify-between"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold font-heading text-foreground">
              Emmanuel Johnson
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Based in Lagos, Nigeria. Specializing in Web3 engineering, Solidity smart contracts, and backend architectures. Get in touch to collaborate on personal projects, open-source initiatives, or just to chat about tech.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold font-heading text-muted uppercase tracking-widest">
              Find Me On
            </span>
            <div className="flex flex-wrap gap-3">
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-foreground/10 text-foreground/80 hover:text-foreground text-sm font-heading transition-all duration-200 ${l.color}`}
                >
                  {l.icon}
                  {l.label}
                  <ExternalLink size={11} className="opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 flex flex-col gap-6 justify-between"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold font-heading text-foreground">
              Have a project in mind?
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Open to high-leverage collaborations, freelance contracts, and full-time
              blockchain engineering roles. Let&apos;s make the first conversation easy.
            </p>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 py-12 text-center"
            >
              <span className="text-4xl">✓</span>
              <p className="text-primary font-semibold font-heading">Message sent!</p>
              <p className="text-muted text-sm">I&apos;ll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold font-heading text-muted uppercase tracking-widest">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/4 text-foreground text-sm font-mono placeholder-muted/40 focus:outline-none focus:border-primary/50 focus:bg-foreground/6 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold font-heading text-muted uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project, role, or idea..."
                  className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/4 text-foreground text-sm font-mono placeholder-muted/40 focus:outline-none focus:border-primary/50 focus:bg-foreground/6 transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!email || !message}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm font-heading transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                <Send size={15} />
                Send Message
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
