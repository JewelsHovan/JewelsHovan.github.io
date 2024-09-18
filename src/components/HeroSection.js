import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/backgrounds/hero-image.jpg';
import Button from './Button';

const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['text-blue-500', 'text-green-500', 'text-red-500', 'text-purple-500'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
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
            <p className="text-xl mb-6 text-gray-600">
              Aspiring Data Scientist with a passion for innovation and problem-solving
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Use Link to handle routing without page reload */}
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link to="/tutor" className="w-full sm:w-auto">
                <Button variant="secondary">Tutoring Services</Button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-none">
            <img src={heroImage} alt="AI and Biology convergence" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;