import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'ABOUT',    path: '/about' },
  { label: 'TUTOR',    path: '/tutor' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'BLOG',     path: '/blog' },
  { label: 'CONTACT',  path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-cyber-bg/90 backdrop-blur-md z-50 px-6 py-4 border-b border-cyber-accent/30 shadow-[0_1px_15px_#00ff8830]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-2xl md:text-3xl font-bold font-cyber-heading text-cyber-accent tracking-widest hover:drop-shadow-[0_0_12px_#00ff88] transition-all duration-300"
        >
          JULIEN_HOVAN
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-cyber-accent hover:drop-shadow-[0_0_8px_#00ff88] transition-all"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        {/* Desktop nav */}
        <ul className="hidden sm:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <motion.button
                onClick={() => handleNavClick(item.path)}
                className={`font-mono text-sm uppercase tracking-widest transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-cyber-accent drop-shadow-[0_0_8px_#00ff88]'
                    : 'text-cyber-muted-fg hover:text-cyber-fg'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {isActive(item.path) && <span className="text-cyber-accent mr-1">&gt;</span>}
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-cyber-accent shadow-[0_0_6px_#00ff88]"
                    layoutId="nav-underline"
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden mt-4 bg-cyber-bg border border-cyber-border cyber-chamfer-sm overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.path} className="border-b border-cyber-border last:border-b-0">
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`block w-full text-left px-4 py-3 font-mono text-sm uppercase tracking-wider transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-cyber-accent bg-cyber-accent/5'
                        : 'text-cyber-muted-fg hover:text-cyber-fg hover:bg-cyber-muted'
                    }`}
                  >
                    <span className="text-cyber-accent mr-2">$</span>
                    {isActive(item.path) && <span className="mr-1">&gt;</span>}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
