import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-beige-100 text-charcoal-400 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 text-xl text-charcoal md:mb-0">&copy; 2024 Julien Hovan. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/julien-hovan/"
            className="text-beige-700 hover:text-pastel-green-400 transition-colors duration-200"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/JewelsHovan"
            className="text-beige-700 hover:text-pastel-green-400 transition-colors duration-200"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/"
            className="text-beige-700 hover:text-pastel-green-400 transition-colors duration-200"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
