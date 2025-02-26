import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import Button from './Button';

const ContactCTA = () => {
  return (
    <motion.section 
      className="bg-accent-cyan text-dark-blue py-12 rounded-3xl overflow-hidden cursor-pointer max-w-4xl mx-auto relative"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Tech-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-teal blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-purple blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-shadow">Need a Data Engineering Solution?</h2>
        <p className="mb-8 max-w-2xl mx-auto font-medium">Whether you're looking to build scalable data pipelines, optimize your cloud infrastructure, or implement real-time analytics, I can help bring your data vision to life.</p>
        <Link to="/contact">
          <Button
            variant="dark"
            className="px-8 py-3 rounded-full inline-flex items-center space-x-2 font-bold"
          >
            <FaEnvelope />
            <span className="ml-2">Get in Touch</span>
          </Button>
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
