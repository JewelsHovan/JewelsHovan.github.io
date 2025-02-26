import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import heroImage from '../assets/backgrounds/hero-image.jpg';
import Button from './Button';
import './css/HeroSection.css';
import { FaDatabase, FaCode, FaChartLine } from 'react-icons/fa';

const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['text-accent-cyan', 'text-accent-purple', 'text-accent-teal'];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval);
  }, [colors.length]);

  // Initialize window dimensions
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [0, windowDimensions.height], [15, -15]);
  const rotateY = useTransform(x, [0, windowDimensions.width], [-15, 15]);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  const isMobile = windowDimensions.width < 768;

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section
      className="bg-navy py-16 rounded-3xl pt-24 pb-12 px-4 relative overflow-hidden"
      onMouseMove={isMobile ? null : handleMouseMove}
    >
      {/* Tech-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent-cyan blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent-purple blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-teal blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start mb-4 gap-2"
            >
              <span className="px-3 py-1 bg-accent-cyan text-dark-blue rounded-full text-sm font-semibold">Data Engineer</span>
              <span className="px-3 py-1 bg-slate text-text-light rounded-full text-sm">Full Stack Developer</span>
              <span className="px-3 py-1 bg-accent-purple text-text-light rounded-full text-sm">Web Scraping Hobbyist</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-light text-shadow">
              Where{' '}
              <span className={`${colors[colorIndex]} transition-colors duration-300 font-bold`}>
                Data Engineering
              </span>
              ,{' '}
              <span className={`${colors[(colorIndex + 1) % colors.length]} transition-colors duration-300 font-bold`}>
                Cloud Architecture
              </span>
              , and{' '}
              <span className={`${colors[(colorIndex + 2) % colors.length]} transition-colors duration-300 font-bold`}>
                AI Converge
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-text-muted leading-relaxed">
              Building scalable data pipelines and cloud solutions to transform raw data into actionable insights
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-slate bg-opacity-40 px-3 py-2 rounded-lg">
                <FaDatabase className="text-accent-cyan text-xl" />
                <span className="text-text-light font-medium">Data Pipelines</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate bg-opacity-40 px-3 py-2 rounded-lg">
                <FaCode className="text-accent-purple text-xl" />
                <span className="text-text-light font-medium">Cloud Architecture</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate bg-opacity-40 px-3 py-2 rounded-lg">
                <FaChartLine className="text-accent-teal text-xl" />
                <span className="text-text-light font-medium">Analytics Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate bg-opacity-40 px-3 py-2 rounded-lg">
                <FaCode className="text-accent-cyan text-xl" />
                <span className="text-text-light font-medium">Web Development</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-6 mt-8">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="text-sm sm:text-base w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-2xl"
                >
                  View Projects
                </Button>
              </Link>
              <a href="/contact" onClick={handleContactClick} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="text-sm sm:text-base w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-2xl"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-md lg:max-w-none mt-10 lg:mt-0 image-container z-10">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg glow-teal"
              style={isMobile ? {} : { rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={heroImage}
                alt="Data Engineering and AI"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-blue/60 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
