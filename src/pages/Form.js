import React from 'react';
import ContactForm from '../components/ContactForm';

const Form = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Form;