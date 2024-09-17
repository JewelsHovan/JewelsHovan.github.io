import React from 'react';
import './css/Home.css';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div className="home bg-white max-w-full mx-auto my-4 sm:my-6 md:my-8 p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <Skills />
        <FeaturedProjects />
        <ContactCTA />
      </div>
    </div>
  );
};

export default Home;
