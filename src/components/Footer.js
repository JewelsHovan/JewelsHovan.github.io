import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/julien-hovan/', icon: FaLinkedin, label: 'LinkedIn', hoverColor: '#00d4ff' },
  { href: 'https://github.com/JewelsHovan',            icon: FaGithub,   label: 'GitHub',   hoverColor: '#00ff88' },
  { href: 'https://x.com/',                            icon: FaTwitter,  label: 'Twitter',  hoverColor: '#ff00ff' },
];

const Footer = () => (
  <footer className="bg-cyber-bg text-cyber-muted-fg py-10 border-t border-cyber-accent/20 shadow-[0_-1px_10px_#00ff8820]">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-mono text-sm tracking-wider">
        <span className="text-cyber-fg">JULIEN_HOVAN</span>
        <span className="text-cyber-border mx-2">//</span>
        <span>&copy; 2024</span>
        <span className="text-cyber-border mx-2">//</span>
        <span className="text-cyber-accent/50">ALL SYSTEMS OPERATIONAL</span>
      </div>
      <div className="flex space-x-6">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-cyber-muted-fg transition-colors duration-200"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1, color: link.hoverColor, filter: `drop-shadow(0 0 8px ${link.hoverColor})` }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <link.icon size={22} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
