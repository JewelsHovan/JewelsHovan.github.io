import React from 'react';
import heroImage from '../assets/backgrounds/hero-image.jpg';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">Where Computer Science, Biology, and AI Converge</h1>
            <p className="text-xl mb-6 text-neutral-700">Aspiring Data Scientist with a passion for innovation and problem-solving</p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#projects" variant="primary" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white">View Projects</Button>
              <Button href="#tutoring" variant="secondary" className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-primary-600 border border-primary-600">Tutoring Services</Button>
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