"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Note {
  title: string;
  excerpt: string;
  tag: string;
  tagColor: string;
  date: string;
}

const notes: Note[] = [
  {
    title: "Why Every Developer Should Understand the EVM",
    excerpt: "The Ethereum Virtual Machine is the beating heart of Web3. Understanding its execution model changes how you think about gas, state, and contract design forever.",
    tag: "Web3",
    tagColor: "pill-tag",
    date: "Apr 2026",
  },
  {
    title: "On Learning Solidity After JavaScript",
    excerpt: "The mental model shift from JS to Solidity is real. Value types vs reference types, gas consciousness, and immutability — here's how I navigated the transition.",
    tag: "Engineering",
    tagColor: "pill-tag",
    date: "Mar 2026",
  },
  {
    title: "Chainlink CCIP: Cross-Chain Without the Headache",
    excerpt: "Cross-chain messaging used to be a painful security nightmare. CCIP abstracts away the complexity while maintaining trustless guarantees. A breakdown.",
    tag: "Chainlink",
    tagColor: "pill-tag-blue",
    date: "Feb 2026",
  },
  {
    title: "The Case for Building in Public",
    excerpt: "Shipping imperfect work publicly, documenting your learning, and being visible in technical communities compounds faster than almost anything else a developer can do.",
    tag: "Career",
    tagColor: "pill-tag",
    date: "Jan 2026",
  },
  {
    title: "Smart Contract Security: What I Wish I Knew Earlier",
    excerpt: "Reentrancy, integer overflow, front-running — a practical guide to the vulnerabilities that cost protocols millions, and how to audit your own code.",
    tag: "Security",
    tagColor: "pill-tag-blue",
    date: "Dec 2025",
  },
  {
    title: "Next.js App Router: A Backend Developer's Perspective",
    excerpt: "Coming from a Node.js background, Server Components and the new data-fetching model felt surprisingly natural. Here's the mental model that made it click.",
    tag: "Frontend",
    tagColor: "pill-tag",
    date: "Nov 2025",
  },
];

export const NotesSection = () => (
  <section className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <div className="section-label mb-2">Thoughts & Insights</div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
          Notes
        </h2>
      </div>
      <p className="text-muted text-sm max-w-xs leading-relaxed">
        Fragments from the learning process — Web3 deep dives, engineering patterns, and career reflections.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {notes.map((note, i) => (
        <motion.div
          key={note.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          className="glass-card glass-card-hover group p-6 flex flex-col gap-4 cursor-pointer relative overflow-hidden"
        >
          {/* Subtle top glow on hover */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex items-center justify-between">
            <span className={note.tagColor}>{note.tag}</span>
            <span className="text-[10px] text-muted font-heading">{note.date}</span>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-sm font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
              {note.title}
            </h3>
            <p className="text-xs text-muted leading-relaxed line-clamp-3">
              {note.excerpt}
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold font-heading text-muted group-hover:text-primary transition-colors">
            Read more
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
