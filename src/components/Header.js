import React from 'react';

const Header = () => {
  return (
    <header className="container mx-auto py-4">
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-6">
          <li><a href="/" className="text-neutral-500 hover:text-primary-400">Home</a></li>
          <li><a href="/projects" className="text-neutral-500 hover:text-primary-400">Projects</a></li>
          <li><a href="#tutoring" className="text-neutral-500 hover:text-primary-400">Tutoring</a></li>
          <li><a href="/about" className="text-neutral-500 hover:text-primary-400">About</a></li>
          <li><a href="/contact" className="text-neutral-500 hover:text-primary-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;