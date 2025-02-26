import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ href, variant, children, className }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-accent-cyan text-dark-blue hover:bg-accent-teal focus:ring-accent-cyan glow-cyan",
    secondary: "bg-slate text-text-light hover:bg-steel-blue focus:ring-slate border border-accent-purple glow-purple",
    accent: "bg-accent-purple text-text-light hover:bg-opacity-90 focus:ring-accent-purple glow-purple",
    dark: "bg-dark-blue text-text-light hover:bg-navy focus:ring-dark-blue border border-accent-cyan",
  };

  return (
    <a href={href} className={classNames(baseClasses, variantClasses[variant], className)}>
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'dark']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  className: '',
};

export default Button;
