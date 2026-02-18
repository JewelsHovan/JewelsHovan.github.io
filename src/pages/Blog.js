import React from 'react';
import { motion } from 'framer-motion';

const placeholderPosts = [
  {
    id: 1,
    timestamp: "2026.02.15 // 14:32:07",
    category: "DATA_ENGINEERING",
    title: "Untitled_Post_001.md",
    body: "[DATA PENDING — TRANSMISSION IN PROGRESS...]",
  },
  {
    id: 2,
    timestamp: "2026.02.10 // 09:17:42",
    category: "ML_RESEARCH",
    title: "Untitled_Post_002.md",
    body: "[DATA PENDING — TRANSMISSION IN PROGRESS...]",
  },
  {
    id: 3,
    timestamp: "2026.02.03 // 21:05:19",
    category: "WEB_DEV",
    title: "Untitled_Post_003.md",
    body: "[DATA PENDING — TRANSMISSION IN PROGRESS...]",
  },
];

const BlogPostCard = ({ post, index }) => (
  <motion.div
    className="bg-cyber-card border border-cyber-border cyber-chamfer overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
  >
    {/* Terminal header bar */}
    <div className="flex items-center gap-2 px-4 py-2 border-b border-cyber-border bg-cyber-bg">
      <span className="flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
      </span>
      <span className="font-mono text-[10px] text-cyber-muted-fg">
        ~/blog/{post.title.toLowerCase().replace(/[_.]/g, '-').replace(/md$/, 'log')}
      </span>
    </div>

    <div className="p-5 space-y-3">
      <p className="font-mono text-[10px] text-cyber-muted-fg">
        {post.timestamp}
      </p>

      <span className="inline-block font-mono text-[10px] px-2 py-0.5 border border-cyber-cyan text-cyber-cyan cyber-chamfer-sm">
        [{post.category}]
      </span>

      <h3 className="font-cyber-heading text-base text-cyber-fg tracking-wide">
        {post.title}
      </h3>

      <p className="font-mono text-sm text-cyber-accent opacity-60">
        {post.body}
      </p>

      {/* Fake progress bar */}
      <div className="w-full h-1 bg-cyber-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyber-accent to-cyber-cyan"
          initial={{ width: "0%" }}
          animate={{ width: `${30 + index * 20}%` }}
          transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
        />
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <motion.div
      className="min-h-screen bg-cyber-bg py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="font-cyber-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cyber-fg tracking-wider mb-4 cyber-glitch"
            data-text="TRANSMISSION_LOG"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TRANSMISSION_LOG
          </motion.h1>
          <motion.p
            className="font-mono text-sm text-cyber-muted-fg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            // system broadcasting... signal_pending
          </motion.p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyber-magenta to-transparent mx-auto mt-6" />
        </div>

        {/* Placeholder post cards */}
        <div className="space-y-6 mb-16">
          {placeholderPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center py-8 border-t border-cyber-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="inline-block bg-cyber-card border border-cyber-border cyber-chamfer px-8 py-4">
            <p className="font-cyber-heading text-sm text-cyber-magenta tracking-[0.2em] mb-2">
              SIGNAL OFFLINE
            </p>
            <p className="font-mono text-xs text-cyber-muted-fg">
              Blog launching soon
              <motion.span
                className="inline-block ml-1 text-cyber-accent"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              >
                _
              </motion.span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
