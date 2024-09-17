import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <motion.section 
      className="bg-blue-600 text-white py-16 rounded-full overflow-hidden cursor-pointer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.8 }}
        >
          Whether you're looking to collaborate on a project or need tutoring assistance, I'm here to help.
        </motion.p>
        <motion.a 
          href="/contact" 
          className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 inline-block"
          whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.section>
  );
};

export default ContactCTA;