import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCalculator, FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';
import Button from '../components/Button';

const CodeBlock = ({ children }) => (
  <motion.div
    className="bg-gray-800 text-green-400 p-4 rounded-lg shadow-lg font-mono text-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

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
    { icon: <FaCode className="text-4xl text-blue-500 mb-4" />, title: "Computer Science", description: "Data Structures, Algorithms, and Python Programming" },
    { icon: <FaCalculator className="text-4xl text-green-500 mb-4" />, title: "Mathematics & Statistics", description: "For data science and programming applications" },
    { icon: <FaLaptopCode className="text-4xl text-purple-500 mb-4" />, title: "UMSI Courses", description: "SI 106, SI 206, SI 506, SI 507, SIADS 505" },
    { icon: <FaChalkboardTeacher className="text-4xl text-red-500 mb-4" />, title: "General Python Support", description: "From basics to advanced concepts" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-beige-500 text-white py-8 px-6">
            <h1 className="text-4xl font-bold mb-4">Julien Hovan - UMSI Programming Peer Tutor</h1>
            <p className="text-xl mb-4">Unlock your potential with personalized Python and Data Science tutoring</p>
            <Button href="mailto:jhovan@umich.edu" variant="secondary">Book a Session</Button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-beige-700">About Me</h2>
                <p className="mb-4">
                  Hi! I'm a current MADS student, with an undergraduate background in Bioinformatics. I first learned Python six years ago and have been enamored by its capabilities ever since. I'm here to help with everything from basic Python to more advanced concepts.
                </p>
                <p className="mb-4">
                  I believe in using small, concrete examples to gain intuition before diving into more mathematical terms. When I'm not coding, you can find me reading a good book (usually fiction), practicing Jiu-Jitsu, or enjoying the outdoors on a hike.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button href="https://calendar.app.google/Ehw9Ta5TH5DVNRv87" variant="primary" className="w-full sm:w-auto">View My Availability</Button>
                  <Button href="mailto:jhovan@umich.edu" variant="secondary" className="w-full sm:w-auto">Contact Me</Button>
                </div>
              </div>
              <div>
                <CodeBlock>
                  {`def tutor_session(student):
    knowledge = student.current_knowledge
    goals = student.learning_goals
    
    while not goals.achieved:
        lesson = plan_lesson(knowledge, goals)
        knowledge = teach(student, lesson)
        goals.update_progress(knowledge)
    
    return student.success()`}
                </CodeBlock>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-beige-700">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <SubjectCard key={index} {...subject} />
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-beige-700">Why Choose Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Experienced Educator</h3>
                <p>UMSI Programming Peer Tutor with 6+ years of Python experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Diverse Background</h3>
                <p>Web Developer, Data Scientist, and Bioinformatics graduate.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Top-Tier Education</h3>
                <p>McGill University (CS) and University of Michigan (MADS) alumnus.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutor;
