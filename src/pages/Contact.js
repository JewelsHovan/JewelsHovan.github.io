import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaIdCard, FaPhone } from 'react-icons/fa';
import TextHeader from '../components/TextHeader';

const ContactItem = ({ icon, label, value, link }) => (
  <motion.div
    className="w-full"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full"
    >
      <div className="text-3xl text-blue-600 mr-4">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
      </div>
    </a>
  </motion.div>
);

const Contact = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'JulienH15@icloud.com', link: 'mailto:JulienH15@icloud.com' },
    { icon: <FaInstagram />, label: 'Instagram', value: '@julienhovan', link: 'https://www.instagram.com/julienhovan/' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Julien M. Hovan', link: 'https://www.linkedin.com/in/julien-hovan/' },
    { icon: <FaIdCard />, label: 'Indeed', value: 'Julien Hovan', link: 'https://www.indeed.com/r/Julien-Hovan/' },
    { icon: <FaPhone />, label: 'Phone', value: '603-320-3104', link: 'tel:+16033203104' },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <TextHeader level={1} className="text-center mb-12">Contact Information</TextHeader>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {contactInfo.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
