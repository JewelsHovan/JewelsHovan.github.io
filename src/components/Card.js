import React from 'react';
import { motion } from 'framer-motion';

const glowColors = {
  green:   { border: '#00ff88', shadow: '0 0 15px #00ff88, 0 0 30px #00ff8840' },
  magenta: { border: '#ff00ff', shadow: '0 0 15px #ff00ff, 0 0 30px #ff00ff40' },
  cyan:    { border: '#00d4ff', shadow: '0 0 15px #00d4ff, 0 0 30px #00d4ff40' },
};

const Card = ({ icon: Icon, title, children, className = '', glow = 'green' }) => {
  const { border, shadow } = glowColors[glow] ?? glowColors.green;
  return (
    <motion.div
      className={`bg-cyber-card p-6 border border-cyber-border cyber-chamfer cursor-pointer overflow-hidden ${className}`}
      whileHover={{ y: -8, borderColor: border, boxShadow: shadow }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        {Icon && (
          <motion.div className="mr-4 text-3xl text-cyber-accent">
            <Icon />
          </motion.div>
        )}
        <h3 className="font-mono text-lg font-semibold uppercase tracking-wider text-cyber-fg">
          {title}
        </h3>
      </div>
      <div className="text-cyber-muted-fg font-mono text-sm leading-relaxed">{children}</div>
    </motion.div>
  );
};

export default Card;
