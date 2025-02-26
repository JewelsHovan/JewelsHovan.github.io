import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, children, className = '' }) => {
  return (
    <motion.div
      className={`bg-card rounded-lg shadow-md p-6 cursor-pointer overflow-hidden border border-slate ${className}`}
      whileHover={{ 
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderColor: 'var(--color-accent-cyan)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        {Icon && (
          <motion.div
            className="mr-4 text-3xl text-accent-cyan"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon />
          </motion.div>
        )}
        <h3 className="text-xl font-semibold text-text-light mb-2">{title}</h3>
      </div>
      <div className="text-text-muted mt-4">{children}</div>
    </motion.div>
  );
};

export default Card;
