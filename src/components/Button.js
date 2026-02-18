import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ href, variant, children, className, onClick }) => {
  const base =
    'inline-block px-6 py-2.5 font-mono text-sm uppercase tracking-widest font-semibold ' +
    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
    'focus:ring-offset-cyber-bg cyber-chamfer-sm';

  const variants = {
    primary:
      'bg-cyber-accent text-cyber-bg hover:shadow-[0_0_15px_#00ff88,0_0_30px_#00ff8860] focus:ring-cyber-accent',
    secondary:
      'bg-transparent text-cyber-magenta border border-cyber-magenta ' +
      'hover:bg-cyber-magenta/10 hover:shadow-[0_0_15px_#ff00ff,0_0_30px_#ff00ff60] focus:ring-cyber-magenta',
    accent:
      'bg-cyber-cyan text-cyber-bg hover:shadow-[0_0_15px_#00d4ff,0_0_30px_#00d4ff60] focus:ring-cyber-cyan',
    dark:
      'bg-transparent text-cyber-accent border border-cyber-accent ' +
      'hover:bg-cyber-accent/10 hover:shadow-[0_0_15px_#00ff88,0_0_30px_#00ff8860] focus:ring-cyber-accent',
  };

  const Tag = href ? 'a' : 'button';
  const extraProps = href ? { href } : { onClick, type: 'button' };

  return (
    <Tag
      {...extraProps}
      className={classNames(base, variants[variant], className)}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'dark']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = { variant: 'primary', className: '' };

export default Button;
