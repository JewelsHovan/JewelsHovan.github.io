import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jh-portfolio-backend-fd79aa55d6cc.herokuapp.com/api/send-email', formData);
      if (response.data.success) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', question: '' }); // Clear form
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const inputClasses = "w-full p-3 mb-4 border border-light-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-green-400 focus:border-transparent transition duration-300";
  const buttonClasses = "px-6 py-3 bg-gold-400 text-white rounded-lg hover:bg-gold-500 transition duration-300 transform hover:scale-105";

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-charcoal-400 text-center">Contact Me</h2>
      <motion.input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className={inputClasses}
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={inputClasses}
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        value={formData.phone}
        onChange={handleChange}
        className={inputClasses}
        whileFocus={{ scale: 1.02 }}
      />
      <motion.textarea
        name="question"
        placeholder="Your question or message"
        value={formData.question}
        onChange={handleChange}
        className={`${inputClasses} h-32 resize-none`}
        required
        whileFocus={{ scale: 1.02 }}
      ></motion.textarea>
      <motion.div 
        className="flex justify-end"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          type="submit"
          className={buttonClasses}
        >
          Send Message
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
