import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCalculator, FaDna, FaChalkboardTeacher } from 'react-icons/fa';
import Button from '../components/Button';

const SubjectCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Tutor = () => {
  const subjects = [
    { icon: <FaCode className="text-4xl text-blue-500 mb-4" />, title: "Computer Science", description: "From basic programming to advanced algorithms" },
    { icon: <FaCalculator className="text-4xl text-green-500 mb-4" />, title: "Mathematics", description: "Algebra, calculus, and statistics" },
    { icon: <FaDna className="text-4xl text-purple-500 mb-4" />, title: "Biology", description: "Molecular biology, genetics, and more" },
    { icon: <FaChalkboardTeacher className="text-4xl text-red-500 mb-4" />, title: "General Sciences", description: "Physics, chemistry, and earth sciences" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Expert Tutoring Services</h1>
          <p className="text-xl mb-8">Unlock your potential with personalized learning experiences</p>
          <Button href="#contact" variant="secondary">Book a Session</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Subjects I Tutor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Me?</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-2">Experienced Educator</h3>
              <p>With years of tutoring experience and a strong academic background.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p>Tailored lessons to meet your unique learning style and goals.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p>Track record of helping students improve their grades and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tutoring Packages</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Basic Package</h3>
                <p className="text-gray-600 mb-4">4 sessions per month</p>
                <p className="text-2xl font-bold mb-4">$200/month</p>
                <Button href="#contact" variant="primary" className="w-full">Get Started</Button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
                <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
                <p className="text-gray-600 mb-4">8 sessions per month</p>
                <p className="text-2xl font-bold mb-4">$350/month</p>
                <Button href="#contact" variant="primary" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book your first session today and take the first step towards academic success!</p>
          <Button href="/contact" variant="secondary">Contact Me</Button>
        </div>
      </section>
    </div>
  );
};

export default Tutor;