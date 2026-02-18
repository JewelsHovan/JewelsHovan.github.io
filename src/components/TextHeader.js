import React from 'react';

const TextHeader = ({ level = 1, children, className = '', accent = true }) => {
  const baseStyle = 'font-cyber-heading font-bold uppercase tracking-wider text-cyber-fg';
  const sizes = {
    1: 'text-4xl md:text-5xl mb-16',
    2: 'text-3xl md:text-4xl mb-8',
    3: 'text-2xl md:text-3xl mb-6',
    4: 'text-xl md:text-2xl mb-4',
  };

  const glowStyle = level <= 2 ? 'drop-shadow-[0_0_10px_#00ff8880]' : '';
  const Tag = `h${level}`;

  return (
    <div className={accent && level <= 2 ? 'inline-block' : ''}>
      <Tag className={`${baseStyle} ${sizes[level]} ${glowStyle} ${className}`}>
        {children}
      </Tag>
      {accent && level <= 2 && (
        <div className="h-[2px] w-16 bg-cyber-accent mt-2 shadow-[0_0_8px_#00ff88]" />
      )}
    </div>
  );
};

export default TextHeader;
