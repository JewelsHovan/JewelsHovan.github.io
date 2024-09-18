import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container mx-auto py-4">
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Home</Link></li>
          <li><Link to="/projects" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Projects</Link></li>
          <li><Link to="/tutor" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Tutoring</Link></li>
          <li><Link to="/about" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">About</Link></li>
          <li><Link to="/contact" className="text-lg text-neutral-500 hover:text-primary-400 dark:text-neutral-400 dark:hover:text-primary-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;