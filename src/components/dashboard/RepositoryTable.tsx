"use client";

import React from 'react';
import { Star, Circle, Loader2 } from 'lucide-react';
import { getGithubRepos, GithubRepo } from '@/lib/github';
import { motion } from 'framer-motion';

export const RepositoryTable = () => {
  const [repos, setRepos] = React.useState<GithubRepo[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getGithubRepos('manny-the-great');
      setRepos(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center glass-card">
        <Loader2 className="animate-spin text-primary" size={24} />
      </div>
    );
  }

  return (
    <div className="w-full border border-foreground/10 rounded-xl overflow-hidden glass-card">
      <div className="bg-foreground/5 px-4 py-3 border-b border-foreground/10 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Popular Repositories</h3>
        <a 
          href="https://github.com/manny-the-great?tab=repositories" 
          target="_blank" 
          className="text-xs text-primary cursor-pointer hover:underline"
        >
          View all repositories
        </a>
      </div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="divide-y divide-foreground/10"
      >
        {repos.length > 0 ? repos.map((repo) => (
          <motion.a 
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 }
            }}
            key={repo.name} 
            href={repo.html_url}
            target="_blank"
            className="block p-4 hover:bg-foreground/5 transition-colors group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-bold text-primary group-hover:underline">{repo.name}</h4>
              <div className="flex items-center gap-3 text-xs text-foreground/40">
                <div className="flex items-center gap-1">
                  <Star size={12} />
                  <span>{repo.stargazers_count}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-foreground/60 mb-3 line-clamp-1">
              {repo.description || "No description provided."}
            </p>
            <div className="flex items-center gap-4 text-[10px] text-foreground/40">
              <div className="flex items-center gap-1">
                <Circle size={10} className="text-secondary fill-secondary" />
                <span>{repo.language || "Unknown"}</span>
              </div>
              <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.a>
        )) : (
          <div className="p-8 text-center text-sm text-foreground/40">
            No repositories found.
          </div>
        )}
      </motion.div>
    </div>
  );
};
