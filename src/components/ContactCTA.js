import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <motion.section 
      className="bg-blue-600 text-white py-16 rounded-full overflow-hidden cursor-pointer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">Let's discuss how we can help you achieve your goals.</p>
        <Link to="/Form">
          <motion.button 
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 inline-block"
            whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactCTA;