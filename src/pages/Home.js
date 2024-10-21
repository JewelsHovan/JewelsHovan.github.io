import React from 'react';
import './css/Home.css';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div className="bg-beige-50">
      <section className="py-16">
        <HeroSection />
      </section>
      <section className="py-16">
        <FeaturedProjects />
      </section>
      <section className="py-16">
        <Skills />
      </section>
      <section className="py-8">
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;
