import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-blue bg-opacity-90 backdrop-blur-md z-50 px-6 py-4 text-text-light border-b border-slate">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold">
          <button 
            onClick={() => handleNavClick('/')} 
            className={`gradient-text hover:opacity-80 transition-colors relative ${isActive('/') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent-cyan' : ''}`}
          >
            Julien Hovan
          </button>
        </div>

        <button onClick={toggleMenu} className="sm:hidden text-accent-cyan hover:text-accent-teal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden sm:flex space-x-8 text-xl">
          <li>
            <motion.button 
              onClick={() => handleNavClick('/about')} 
              className={`text-text-light hover:text-accent-cyan text-lg transition-colors relative ${isActive('/about') ? 'text-accent-cyan after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent-cyan' : ''}`}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              About
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => handleNavClick('/tutor')} 
              className={`text-text-light hover:text-accent-cyan text-lg transition-colors relative ${isActive('/tutor') ? 'text-accent-cyan after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent-cyan' : ''}`}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Tutor
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => handleNavClick('/projects')} 
              className={`text-text-light hover:text-accent-cyan text-lg transition-colors relative ${isActive('/projects') ? 'text-accent-cyan after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent-cyan' : ''}`}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Projects
            </motion.button>
          </li>
          <li>
            <motion.button 
              onClick={() => handleNavClick('/contact')} 
              className={`text-text-light hover:text-accent-cyan text-lg transition-colors relative ${isActive('/contact') ? 'text-accent-cyan after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent-cyan' : ''}`}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact
            </motion.button>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <motion.div 
          className="sm:hidden mt-4 px-4 bg-navy rounded-lg shadow-lg border border-slate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col w-full text-xl">
            <li className="border-b border-slate py-2">
              <button 
                onClick={() => handleNavClick('/about')} 
                className={`block w-full text-left text-text-light hover:text-accent-cyan text-lg transition-colors ${isActive('/about') ? 'text-accent-cyan font-bold' : ''}`}
              >
                About
              </button>
            </li>
            <li className="border-b border-slate py-2">
              <button 
                onClick={() => handleNavClick('/tutor')} 
                className={`block w-full text-left text-text-light hover:text-accent-cyan text-lg transition-colors ${isActive('/tutor') ? 'text-accent-cyan font-bold' : ''}`}
              >
                Tutor
              </button>
            </li>
            <li className="border-b border-slate py-2">
              <button 
                onClick={() => handleNavClick('/projects')} 
                className={`block w-full text-left text-text-light hover:text-accent-cyan text-lg transition-colors ${isActive('/projects') ? 'text-accent-cyan font-bold' : ''}`}
              >
                Projects
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleNavClick('/contact')} 
                className={`block w-full text-left text-text-light hover:text-accent-cyan text-lg transition-colors ${isActive('/contact') ? 'text-accent-cyan font-bold' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
