"use client";

import React, { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, GitMerge, Star, Plus, Loader2 } from 'lucide-react';
import { getGithubEvents } from '@/lib/github';

export const ActivityTimeline = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getGithubEvents('manny-the-great');
      setEvents(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'PushEvent': return <GitCommit size={14} className="text-secondary" />;
      case 'PullRequestEvent': return <GitPullRequest size={14} className="text-primary" />;
      case 'WatchEvent': return <Star size={14} className="text-[#e3b341]" />;
      case 'CreateEvent': return <Plus size={14} className="text-secondary" />;
      case 'IssueCommentEvent': return <GitMerge size={14} className="text-[#a371f7]" />;
      default: return <GitCommit size={14} />;
    }
  };

  const formatEventTitle = (event: any) => {
    switch (event.type) {
      case 'PushEvent': return `Pushed to ${event.repo.name}`;
      case 'PullRequestEvent': return `Opened PR in ${event.repo.name}`;
      case 'WatchEvent': return `Starred ${event.repo.name}`;
      case 'CreateEvent': return `Created ${event.payload.ref_type || 'repository'} in ${event.repo.name}`;
      case 'IssueCommentEvent': return `Commented on issue in ${event.repo.name}`;
      default: return `${event.type.replace('Event', '')} in ${event.repo.name}`;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <Loader2 className="animate-spin text-secondary" size={24} />
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-10 text-sm text-foreground/40">
        No recent activity found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 py-4">
      {events.map((event, index) => (
        <div key={event.id} className="relative pl-10 group">
          {/* Vertical Line */}
          {index !== events.length - 1 && (
            <div className="absolute left-[17px] top-[30px] bottom-[-20px] w-[2px] bg-white/10" />
          )}
          
          {/* Node */}
          <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-[#161b22] border border-white/10 flex items-center justify-center z-10">
            {getIcon(event.type)}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-foreground/90 font-medium">{formatEventTitle(event)}</span>
              <span className="text-foreground/40 text-xs">
                {new Date(event.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="text-xs text-primary/80 hover:underline cursor-pointer">
              {event.repo.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
