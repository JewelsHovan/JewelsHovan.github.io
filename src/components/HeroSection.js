import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import heroImage from '../assets/backgrounds/hero-image.jpg';
import Button from './Button';
import './css/HeroSection.css'; // Make sure to import the CSS

const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['text-pastel-green-400', 'text-gold-400', 'text-charcoal-300'];

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

  return (
    <section
      className="bg-beige-100 py-16 rounded-3xl pt-24 pb-12 px-4"
      onMouseMove={isMobile ? null : handleMouseMove}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-charcoal-400">
              Where{' '}
              <span className={`${colors[colorIndex]} transition-colors duration-300`}>
                Computer Science
              </span>
              ,{' '}
              <span className={`${colors[(colorIndex + 1) % colors.length]} transition-colors duration-300`}>
                Biology
              </span>
              , and{' '}
              <span className={`${colors[(colorIndex + 2) % colors.length]} transition-colors duration-300`}>
                AI Converge
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-charcoal-300">
              Aspiring Data Scientist with a passion for innovation and problem-solving
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 mt-8">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="text-sm sm:text-base w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-2xl"
                >
                  View Projects
                </Button>
              </Link>
              <Link to="/tutor" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="text-sm sm:text-base w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-2xl"
                >
                  Tutoring Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-md lg:max-w-none mt-10 lg:mt-0 image-container">
            <motion.img
              src={heroImage}
              alt="AI and Biology convergence"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              style={isMobile ? {} : { rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
