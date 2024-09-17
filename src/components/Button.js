import React from 'react';

const Button = ({ children, href, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-6 py-2 rounded-lg text-center transition duration-300 ease-in-out';
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-white text-primary-600 border border-primary-600 hover:bg-neutral-100',
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
};

export default Button;
