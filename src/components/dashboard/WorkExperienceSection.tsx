"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  status: "Active" | "Done";
  logoUrl?: string;
  logoFallback?: string;
  summary: string;
  details: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "dfw-llc",
    company: "DFW-LLC",
    companyUrl: "https://dfw-llc.com",
    role: "DevOps Engineer",
    period: "July 2026 - Present",
    status: "Active",
    logoUrl: "/dfw-llc.png",
    logoFallback: "DFW",
    summary: "Managing cloud infrastructure, container orchestration, and continuous deployment pipelines.",
    details: [
      "Architected and maintained automated CI/CD pipelines reducing deployment friction and cycle times.",
      "Provisioned and managed containerized microservices using Docker and cloud environments.",
      "Implemented proactive system monitoring, logging, and infrastructure-as-code (IaC) configurations.",
      "Collaborated across engineering teams to ensure high service availability, zero-downtime rollouts, and security standards.",
    ],
    technologies: ["Docker", "CI/CD", "Linux", "AWS", "Bash", "GitHub Actions", "Monitoring"],
  },
  {
    id: "makro-ltd",
    company: "Makro Ltd.",
    companyUrl: "https://makro.com",
    role: "IT Support Technician",
    period: "March 2025 - August 2025",
    status: "Done",
    logoFallback: "MK",
    summary: "Delivered comprehensive IT support, hardware diagnostics, network troubleshooting, and systems administration.",
    details: [
      "Provided Tier-1 and Tier-2 technical support for workstations, network hardware, and peripherals.",
      "Configured and deployed user workstations, operating system images, and security software.",
      "Diagnosed and resolved complex network connectivity, DNS, and hardware performance issues.",
      "Maintained IT asset inventories, documentation, and user provisioning workflows.",
    ],
    technologies: ["IT Support", "Networking", "Windows/Linux Admin", "Hardware Troubleshooting", "Ticketing Systems"],
  },
];

export const WorkExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>("dfw-llc");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-10 pb-6 flex flex-col gap-4">
      {/* Corner Bracket Title */}
      <div className="flex items-center text-xs font-mono text-zinc-400 font-semibold tracking-wider">
        <span>⌜ Work Experience ⌝</span>
      </div>

      {/* Dashed Timeline Card */}
      <div className="rounded-xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 p-4 sm:p-5 relative">
        <div className="flex flex-col gap-6 relative">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isLast = index === experiences.length - 1;

            return (
              <div key={exp.id} className="relative flex gap-4">
                {/* Timeline vertical dashed line & Status Dot */}
                <div className="flex flex-col items-center shrink-0 w-4 relative">
                  {/* Status Indicator Dot */}
                  <div className="mt-4 z-10 flex items-center justify-center">
                    {exp.status === "Active" ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full h-2.5 w-2.5 bg-rose-500/80"></span>
                    )}
                  </div>

                  {/* Vertical Line */}
                  {!isLast && (
                    <div className="w-[1px] h-full border-l border-dashed border-zinc-800 absolute top-7 bottom-0 left-[7px]" />
                  )}
                </div>

                {/* Experience Content Box */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                  {/* Header Row */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="flex items-center justify-between gap-3 cursor-pointer group select-none"
                  >
                    {/* Left: Logo & Company Name + Badge + Role */}
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Company Logo / Avatar */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#141418] border border-zinc-800 flex items-center justify-center shrink-0 overflow-hidden relative p-1">
                        {exp.logoUrl ? (
                          <Image
                            src={exp.logoUrl}
                            alt={exp.company}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-full h-full rounded bg-zinc-900 flex items-center justify-center font-bold text-xs text-zinc-300">
                            {exp.logoFallback || <Briefcase size={16} className="text-zinc-400" />}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-1 truncate">
                            {exp.company}
                            <ExternalLink size={11} className="text-zinc-500 group-hover:text-zinc-300" />
                          </span>

                          {/* Status Pill Badge */}
                          {exp.status === "Active" ? (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              Active
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 text-[10px] font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                              Done
                            </span>
                          )}
                        </div>

                        <span className="text-xs text-zinc-400 font-medium truncate">
                          {exp.role}
                        </span>
                      </div>
                    </div>

                    {/* Right: Date & Accordion Chevron */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] sm:text-xs text-zinc-400 font-mono hidden sm:inline">
                        {exp.period}
                      </span>
                      <div className="p-1 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Date when hidden in right column */}
                  <span className="text-[10px] text-zinc-500 font-mono sm:hidden">
                    {exp.period}
                  </span>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-2"
                      >
                        <div className="p-3.5 rounded-lg bg-[#121216]/60 border border-zinc-800/80 flex flex-col gap-3 text-xs text-zinc-300 leading-relaxed">
                          <p className="text-zinc-300 font-medium">{exp.summary}</p>

                          <ul className="flex flex-col gap-1.5 pl-3 list-disc text-zinc-400">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="leading-normal">
                                {detail}
                              </li>
                            ))}
                          </ul>

                          {/* Technologies Used */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded bg-[#18181f] border border-zinc-800 text-[10px] font-mono text-zinc-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
