import React from "react";
import { motion } from "framer-motion";
import {
  FaHiking,
  FaMountain,
  FaFistRaised,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        variants={itemVariants}
      >
        About Julien M. Hovan
      </motion.h1>

      <motion.section 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I'm a passionate Computer Science and Biology graduate from McGill University with a strong focus on combining data science and web development to create impactful applications. My current journey involves diving deep into applied data science, where I'm honing my skills in designing data-driven solutions to solve real-world problems. I enjoy blending my love for technology and data science to develop intuitive, user-friendly applications that bring insights to life.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Current Pursuits</h2>
        <p className="text-gray-600 leading-relaxed">
          Currently, I'm pursuing a Masters of Applied Data Science at the University of Michigan, where I'm exploring how machine learning, data visualization, and AI can be harnessed to create solutions that are both functional and innovative. I'm particularly interested in building projects that bridge the gap between data science and web development, integrating modern machine learning models into responsive, interactive applications.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Passion for Teaching</h2>
        <p className="text-gray-600 leading-relaxed">
          In addition to my technical interests, I'm also passionate about tutoring and mentoring others. I love sharing knowledge, simplifying complex topics, and helping others develop their own skills in data science, programming, and beyond.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hobbies</h2>
        <ul className="flex justify-center space-x-8">
          <motion.li className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
            <FaHiking className="text-4xl text-blue-500 mb-2" />
            <span>Hiking</span>
          </motion.li>
          <motion.li className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
            <FaFistRaised className="text-4xl text-blue-500 mb-2" />
            <span>Judo</span>
          </motion.li>
          <motion.li className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
            <FaMountain className="text-4xl text-blue-500 mb-2" />
            <span>Wrestling</span>
          </motion.li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
          <FaGraduationCap className="mr-2 text-blue-500" />
          Education
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>McGill University - B.Sc. in Computer Science and Biology (2018-2023)</li>
          <li>University of Michigan - Masters of Applied Data Science (Starting January 2024)</li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
          <FaLightbulb className="mr-2 text-blue-500" />
          Interests
        </h2>
        <p className="text-gray-600">
          I'm fascinated by AI tools, particularly large language models and generative AI. I'm always exploring new ways to apply these technologies in practical, innovative projects.
        </p>
      </motion.section>

      <motion.section 
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
          <FaRocket className="mr-2 text-blue-500" />
          Goals
        </h2>
        <p className="text-gray-600">
          My primary goal is to integrate my front-end skills with machine learning, creating interfaces and systems that make complex data accessible and actionable for users across various domains.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default About;
