import React from 'react';

const Button = ({ children, href, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-6 py-2 rounded-lg text-center transition duration-300 ease-in-out';
  const variantClasses = {
    // Updated primary colors to darker blue
    primary: 'bg-blue-700 text-white hover:bg-blue-800',
    // Updated secondary border and text color
    secondary: 'bg-white text-blue-700 border border-blue-700 hover:bg-neutral-100',
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
};

export default Button;
