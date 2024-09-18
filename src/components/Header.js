import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container mx-auto py-4">
      <nav className="flex justify-center items-center relative">
        {/* Hamburger menu for mobile */}
        <button onClick={toggleMenu} className="sm:hidden absolute left-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-6">
          <li><Link to="/" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Home</Link></li>
          <li><Link to="/projects" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Projects</Link></li>
          <li><Link to="/tutor" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Tutoring</Link></li>
          <li><Link to="/about" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">About</Link></li>
          <li><Link to="/contact" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 px-4">
          <ul className="flex flex-col w-full">
            <li className="border-b border-gray-200 py-2">
              <Link to="/" className="block text-base text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300 w-full">Home</Link>
            </li>
            <li className="border-b border-gray-200 py-2">
              <Link to="/projects" className="block text-base text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300 w-full">Projects</Link>
            </li>
            <li className="border-b border-gray-200 py-2">
              <Link to="/tutor" className="block text-base text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300 w-full">Tutoring</Link>
            </li>
            <li className="border-b border-gray-200 py-2">
              <Link to="/about" className="block text-base text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300 w-full">About</Link>
            </li>
            <li className="py-2">
              <Link to="/contact" className="block text-base text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300 w-full">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;