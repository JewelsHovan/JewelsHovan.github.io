import React from 'react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactCTA from '../components/ContactCTA';

const NeonDivider = () => (
  <div className="relative py-8 flex items-center justify-center">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-40" />
    <div className="relative w-2 h-2 rotate-45 border border-cyber-accent bg-cyber-bg" />
  </div>
);

const Home = () => {
  return (
    <div className="bg-cyber-bg min-h-screen">
      <section className="relative py-16 tech-grid-bg">
        <HeroSection />
      </section>

      <NeonDivider />

      <section className="py-16">
        <FeaturedProjects />
      </section>

      <NeonDivider />

      <section className="py-16">
        <Skills />
      </section>

      <NeonDivider />

      <section className="py-8">
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;
