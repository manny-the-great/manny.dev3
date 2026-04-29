"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, Plus, GitMerge, Loader2, ExternalLink } from 'lucide-react';
import { getGithubEvents } from '@/lib/github';

const iconMap: Record<string, React.ReactNode> = {
  PushEvent:         <GitCommit  size={13} className="text-primary" />,
  PullRequestEvent:  <GitPullRequest size={13} className="text-secondary" />,
  WatchEvent:        <Star       size={13} className="text-yellow-400" />,
  CreateEvent:       <Plus       size={13} className="text-primary" />,
  IssueCommentEvent: <GitMerge   size={13} className="text-muted" />,
};

const colorMap: Record<string, string> = {
  PushEvent:         'border-primary/30  bg-primary/10',
  PullRequestEvent:  'border-secondary/30 bg-secondary/10',
  WatchEvent:        'border-yellow-400/30 bg-yellow-400/10',
  CreateEvent:       'border-primary/30  bg-primary/10',
  IssueCommentEvent: 'border-white/10    bg-white/5',
};

const formatTitle = (e: any) => {
  const repo = e.repo?.name ?? '';
  switch (e.type) {
    case 'PushEvent':         return { action: 'Pushed to',          repo };
    case 'PullRequestEvent':  return { action: 'Opened PR in',        repo };
    case 'WatchEvent':        return { action: 'Starred',             repo };
    case 'CreateEvent':       return { action: `Created ${e.payload?.ref_type || 'repository'} in`, repo };
    case 'IssueCommentEvent': return { action: 'Commented on issue in', repo };
    default:                  return { action: e.type.replace('Event','') + ' in', repo };
  }
};

const timeAgo = (iso: string) => {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60)   return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s/60)}m ago`;
  if (s < 86400) return `${Math.floor(s/3600)}h ago`;
  return `${Math.floor(s/86400)}d ago`;
};

export const ActivityTimeline = () => {
  const [events, setEvents]   = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGithubEvents('manny-the-great').then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="activity" className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
      {/* Header */}
      <div>
        <div className="section-label mb-2">GitHub Timeline</div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
          Recent Activity
        </h2>
      </div>

      <div className="glass-card p-6 md:p-8">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="animate-spin text-primary" size={24} />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-16 text-muted text-sm font-heading">
            No recent public activity found.
          </div>
        ) : (
          <div className="flex flex-col">
            {events.map((event, i) => {
              const { action, repo } = formatTitle(event);
              const nodeColor = colorMap[event.type] ?? colorMap.IssueCommentEvent;
              const icon      = iconMap[event.type]  ?? <GitCommit size={13} />;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Vertical connector */}
                  {i !== events.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
                  )}

                  {/* Node */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center z-10 ${nodeColor}`}>
                    {icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1.5 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="text-sm text-muted font-heading">{action}</span>
                      <a
                        href={`https://github.com/${repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold font-mono text-white hover:text-primary transition-colors flex items-center gap-1 group"
                      >
                        {repo}
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    <span className="text-xs text-muted/60 font-heading">
                      {timeAgo(event.created_at)}  ·  {new Date(event.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
