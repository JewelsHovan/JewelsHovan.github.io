import React from 'react';
import ContactForm from '../components/ContactForm';
import TextHeader from '../components/TextHeader';

const Form = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-dark-blue min-h-screen">
      <TextHeader level={1} className="text-center mb-12 text-text-light text-shadow">Contact Me</TextHeader>
      <ContactForm />
    </div>
  );
};

export default Form;