import React from 'react';

const TextHeader = ({ level = 1, children, className = '' }) => {
  const baseStyle = 'font-bold text-text-light tracking-tight';
  const sizes = {
    1: 'text-4xl md:text-5xl mb-16',
    2: 'text-3xl md:text-4xl mb-8',
    3: 'text-2xl md:text-3xl mb-6',
    4: 'text-xl md:text-2xl mb-4',
  };

  const Tag = `h${level}`;

  return (
    <Tag className={`${baseStyle} ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default TextHeader;
