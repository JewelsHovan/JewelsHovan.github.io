import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/backgrounds/hero-image.jpg';
import Button from './Button';
import { FaDatabase, FaCode, FaChartLine } from 'react-icons/fa';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-cyber-bg pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Circuit grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-cyber-accent rounded-full blur-[120px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-cyber-magenta rounded-full blur-[120px] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-12">

          {/* Left content — 60% */}
          <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-[58%]">
            {/* Role tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start mb-6 gap-2"
            >
              <span className="px-3 py-1 border border-cyber-accent text-cyber-accent font-mono text-xs uppercase tracking-wider cyber-chamfer-sm">
                DATA ENGINEER
              </span>
              <span className="px-3 py-1 border border-cyber-magenta text-cyber-magenta font-mono text-xs uppercase tracking-wider cyber-chamfer-sm">
                FULL STACK DEV
              </span>
              <span className="px-3 py-1 border border-cyber-cyan text-cyber-cyan font-mono text-xs uppercase tracking-wider cyber-chamfer-sm">
                WEB SCRAPING
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6 text-cyber-fg uppercase leading-tight"
            >
              <span className="cyber-glitch" data-text="WHERE">WHERE</span>{' '}
              <span className="text-cyber-accent drop-shadow-[0_0_10px_#00ff88]">DATA ENGINEERING</span>
              ,{' '}
              <span className="text-cyber-cyan drop-shadow-[0_0_10px_#00d4ff]">CLOUD ARCHITECTURE</span>
              , AND{' '}
              <span className="text-cyber-magenta drop-shadow-[0_0_10px_#ff00ff]">AI CONVERGE</span>
            </motion.h1>

            {/* Terminal subtitle with blinking cursor */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-base sm:text-lg mb-8 text-cyber-muted-fg leading-relaxed"
            >
              <span className="text-cyber-accent">&gt;</span> Building scalable data pipelines and
              cloud solutions to transform raw data into actionable insights
              <span
                className={`inline-block w-2.5 h-5 bg-cyber-accent ml-1 align-middle transition-opacity duration-100 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.p>

            {/* Skill chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {[
                { icon: FaDatabase, label: 'DATA_PIPELINES' },
                { icon: FaCode, label: 'CLOUD_ARCH' },
                { icon: FaChartLine, label: 'ANALYTICS' },
                { icon: FaCode, label: 'WEB_DEV' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center space-x-2 px-3 py-1.5 border border-cyber-border bg-cyber-card font-mono text-xs uppercase tracking-wider"
                >
                  <Icon className="text-cyber-accent" />
                  <span className="text-cyber-fg">#{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
            >
              <Link to="/projects">
                <Button variant="primary" className="w-full sm:w-auto">
                  VIEW PROJECTS
                </Button>
              </Link>
              <a href="/contact" onClick={handleContactClick}>
                <Button variant="secondary" className="w-full sm:w-auto">
                  CONTACT ME
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right image — 40% */}
          <div className="w-full lg:w-[42%] max-w-md lg:max-w-none mt-10 lg:mt-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Neon corner frame */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyber-accent shadow-[0_0_6px_#00ff88] z-20" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyber-accent shadow-[0_0_6px_#00ff88] z-20" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyber-accent shadow-[0_0_6px_#00ff88] z-20" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyber-accent shadow-[0_0_6px_#00ff88] z-20" />

              <div className="overflow-hidden cyber-chamfer relative">
                <img
                  src={heroImage}
                  alt="Data Engineering and AI"
                  className="w-full h-auto object-cover"
                />
                <div className="scanlines absolute inset-0 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-bg/70 to-transparent" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
