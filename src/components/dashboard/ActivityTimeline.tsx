"use client";

import React from 'react';
import { GitCommit, GitPullRequest, GitMerge, Star, Plus } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'commit' | 'pr' | 'merge' | 'star' | 'create';
  title: string;
  repo: string;
  timestamp: string;
  description?: string;
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'create',
    title: 'Created SecureChat AI moderation system',
    repo: 'manny-the-great/secure-chat',
    timestamp: '2 days ago'
  },
  {
    id: '2',
    type: 'commit',
    title: 'Built DegenSim trading simulator core logic',
    repo: 'manny-the-great/degen-sim',
    timestamp: '5 days ago',
    description: 'Implemented the exchange interface and mock order matching engine.'
  },
  {
    id: '3',
    type: 'commit',
    title: 'Integrated Chainlink Functions smart contract',
    repo: 'manny-the-great/Functions',
    timestamp: '1 week ago'
  },
  {
    id: '4',
    type: 'star',
    title: 'Starred Chainlink CCIP experiments',
    repo: 'smartcontractkit/ccip-starter-kit-hardhat',
    timestamp: '2 weeks ago'
  }
];

export const ActivityTimeline = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'commit': return <GitCommit size={14} className="text-secondary" />;
      case 'pr': return <GitPullRequest size={14} className="text-primary" />;
      case 'merge': return <GitMerge size={14} className="text-[#a371f7]" />;
      case 'star': return <Star size={14} className="text-[#e3b341]" />;
      case 'create': return <Plus size={14} className="text-secondary" />;
      default: return <GitCommit size={14} />;
    }
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      {activities.map((item, index) => (
        <div key={item.id} className="relative pl-10 group">
          {/* Vertical Line */}
          {index !== activities.length - 1 && (
            <div className="absolute left-[17px] top-[30px] bottom-[-20px] w-[2px] bg-white/10 group-last:hidden" />
          )}
          
          {/* Node */}
          <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-[#161b22] border border-white/10 flex items-center justify-center z-10">
            {getIcon(item.type)}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-foreground/90 font-medium">{item.title}</span>
              <span className="text-foreground/40 text-xs">{item.timestamp}</span>
            </div>
            <div className="text-xs text-primary/80 hover:underline cursor-pointer">
              {item.repo}
            </div>
            {item.description && (
              <p className="text-xs text-foreground/50 mt-1 max-w-xl">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
