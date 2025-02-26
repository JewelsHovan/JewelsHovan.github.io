import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-navy text-text-light py-12 border-t border-slate">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 text-xl text-text-muted md:mb-0">&copy; 2024 Julien Hovan. All rights reserved.</p>
        <div className="flex space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/julien-hovan/"
            className="text-text-light hover:text-accent-cyan transition-colors duration-200"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/JewelsHovan"
            className="text-text-light hover:text-accent-purple transition-colors duration-200"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://x.com/"
            className="text-text-light hover:text-accent-teal transition-colors duration-200"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
