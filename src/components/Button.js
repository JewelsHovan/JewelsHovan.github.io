import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ href, variant, children, className }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-pastel-green text-charcoal hover:bg-pastel-green-dark focus:ring-pastel-green",
    secondary: "bg-beige text-charcoal hover:bg-beige-dark focus:ring-beige",
    gold: "bg-gold text-white hover:bg-gold-dark focus:ring-gold",
  };

  return (
    <a href={href} className={classNames(baseClasses, variantClasses[variant], className)}>
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'gold']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  className: '',
};

export default Button;
