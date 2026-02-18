import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaIdCard, FaPhone, FaGithub } from 'react-icons/fa';

const ContactItem = ({ icon, label, value, link, neonColor }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-cyber-card border border-cyber-border cyber-chamfer p-5 group transition-all duration-300"
    whileHover={{
      y: -4,
      boxShadow: `0 0 20px ${neonColor}26, 0 12px 24px rgba(0,0,0,0.3)`,
    }}
    whileTap={{ scale: 0.98 }}
    style={{ '--hover-color': neonColor }}
  >
    {/* Terminal header */}
    <div className="flex items-center gap-2 mb-3 border-b border-cyber-border pb-2">
      <span className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
      </span>
      <span className="font-mono text-[10px] text-cyber-muted-fg">
        ~/{label.toLowerCase()}
      </span>
    </div>

    <div className="flex items-center gap-4">
      <div
        className="text-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--hover-color)]"
        style={{ color: neonColor }}
      >
        {icon}
      </div>
      <div>
        <p className="font-mono text-xs text-cyber-muted-fg uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-semibold text-cyber-fg group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  </motion.a>
);

const Contact = () => {
  const contactInfo = [
    { icon: <FaEnvelope />,  label: 'Email',     value: 'JulienH15@icloud.com',         link: 'mailto:JulienH15@icloud.com',                     neonColor: '#00ff88' },
    { icon: <FaInstagram />, label: 'Instagram',  value: '@julienhovan',                 link: 'https://www.instagram.com/julienhovan/',           neonColor: '#ff00ff' },
    { icon: <FaLinkedin />,  label: 'LinkedIn',   value: 'Julien M. Hovan',              link: 'https://www.linkedin.com/in/julien-hovan/',        neonColor: '#00d4ff' },
    { icon: <FaGithub />,    label: 'GitHub',     value: 'JewelsHovan',                  link: 'https://github.com/JewelsHovan',                   neonColor: '#e0e0e0' },
    { icon: <FaIdCard />,    label: 'Indeed',     value: 'Julien Hovan',                 link: 'https://www.indeed.com/r/Julien-Hovan/',           neonColor: '#ffbd2e' },
    { icon: <FaPhone />,     label: 'Phone',      value: '603-320-3104',                 link: 'tel:+16033203104',                                 neonColor: '#00ff88' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-cyber-bg py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-cyber-heading text-3xl sm:text-4xl font-bold text-cyber-fg tracking-wider mb-3 cyber-glitch" data-text="CONTACT_INTERFACE">
            CONTACT_INTERFACE
          </h1>
          <p className="font-mono text-sm text-cyber-accent">
            &gt; CONNECT
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyber-accent to-transparent mx-auto mt-4" />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <ContactItem {...item} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="font-mono text-xs text-cyber-muted-fg">
            // all channels monitored — response_time &lt; 24h
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
