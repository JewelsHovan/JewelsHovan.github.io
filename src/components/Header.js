import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-beige bg-opacity-80 backdrop-blur-sm z-50 px-6 py-4 text-charcoal">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold">
          <Link to="/" className="text-pastel-green-400 hover:text-pastel-green-500 transition-colors">Julien Hovan</Link>
        </div>

        <button onClick={toggleMenu} className="sm:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden sm:flex space-x-8 text-xl">
          <li><Link to="/about" className="text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors">About</Link></li>
          <li><Link to="/tutor" className="text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors">Tutor</Link></li>
          <li><Link to="/projects" className="text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="text-pastel-green-400 hover:text-pastel-green-500 text-2xl transition-colors">Contact</Link></li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden mt-4 px-4">
          <ul className="flex flex-col w-full text-xl"> {/* Changed text-lg to text-xl for larger text */}
            <li className="border-b border-light-gray-200 py-2">
              <Link to="/about" className="block hover:text-pastel-green-400 text-xl">About</Link> {/* Added text-xl for larger text */}
            </li>
            <li className="border-b border-light-gray-200 py-2">
              <Link to="/tutor" className="block hover:text-pastel-green-400 text-xl">Tutor</Link> {/* Added text-xl for larger text */}
            </li>
            <li className="border-b border-light-gray-200 py-2">
              <Link to="/projects" className="block hover:text-pastel-green-400 text-xl">Projects</Link> {/* Added text-xl for larger text */}
            </li>
            <li className="py-2">
              <Link to="/contact" className="block hover:text-pastel-green-400 text-xl">Contact</Link> {/* Added text-xl for larger text */}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
