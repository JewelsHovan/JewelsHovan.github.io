import React from 'react';
import './css/Home.css';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutMe />
      <Skills />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
};

export default Home;
