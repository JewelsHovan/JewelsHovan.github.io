import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
    <header className="fixed top-0 left-0 right-0 bg-beige bg-opacity-80 backdrop-blur-sm z-50 px-6 py-4 text-charcoal">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold">
          <button 
            onClick={() => handleNavClick('/')} 
            className={`text-pastel-green-400 hover:text-pastel-green-500 transition-colors relative ${isActive('/') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-pastel-green-400' : ''}`}
          >
            Julien Hovan
          </button>
        </div>

        <button onClick={toggleMenu} className="sm:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden sm:flex space-x-8 text-xl">
          <li>
            <button 
              onClick={() => handleNavClick('/about')} 
              className={`text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors relative ${isActive('/about') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-pastel-green-400' : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('/tutor')} 
              className={`text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors relative ${isActive('/tutor') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-pastel-green-400' : ''}`}
            >
              Tutor
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('/projects')} 
              className={`text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors relative ${isActive('/projects') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-pastel-green-400' : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('/contact')} 
              className={`text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors relative ${isActive('/contact') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-pastel-green-400' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden mt-4 px-4">
          <ul className="flex flex-col w-full text-xl">
            <li className="border-b border-light-gray-200 py-2">
              <button 
                onClick={() => handleNavClick('/about')} 
                className={`block w-full text-left text-pastel-green-400 hover:text-pastel-green-500 text-xl transition-colors ${isActive('/about') ? 'font-bold' : ''}`}
              >
                About
              </button>
            </li>
            <li className="border-b border-light-gray-200 py-2">
              <button 
                onClick={() => handleNavClick('/tutor')} 
                className={`block w-full text-left text-pastel-green-400 hover:text-pastel-green-500 text-xl transition-colors ${isActive('/tutor') ? 'font-bold' : ''}`}
              >
                Tutor
              </button>
            </li>
            <li className="border-b border-light-gray-200 py-2">
              <button 
                onClick={() => handleNavClick('/projects')} 
                className={`block w-full text-left text-pastel-green-400 hover:text-pastel-green-500 text-xl transition-colors ${isActive('/projects') ? 'font-bold' : ''}`}
              >
                Projects
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleNavClick('/contact')} 
                className={`block w-full text-left text-pastel-green-400 hover:text-pastel-green-500 text-xl transition-colors ${isActive('/contact') ? 'font-bold' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
