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
import Card from "../components/Card";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-beige-100 py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-charcoal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-beige-600">Julien M. Hovan</div>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <Card icon={FaGraduationCap} title="Education">
            <ul className="list-disc list-inside text-charcoal-300">
              <li>McGill University - B.Sc. in Computer Science and Biology (2018-2023)</li>
              <li>University of Michigan - Masters of Applied Data Science (Starting January 2024)</li>
            </ul>
          </Card>

          <Card icon={FaLightbulb} title="Interests">
            <p className="text-charcoal-300">
              I'm fascinated by AI tools, particularly large language models and generative AI. I'm always exploring new ways to apply these technologies in practical, innovative projects.
            </p>
          </Card>

          <Card icon={FaRocket} title="Goals">
            <p className="text-charcoal-300">
              My primary goal is to integrate my front-end skills with machine learning, creating interfaces and systems that make complex data accessible and actionable for users across various domains.
            </p>
          </Card>

          <Card icon={FaHiking} title="Hobbies">
            <ul className="list-disc list-inside text-charcoal-300">
              <li>Hiking</li>
              <li>Judo</li>
              <li>Wrestling</li>
            </ul>
          </Card>

          <Card icon={FaFistRaised} title="Passion for Teaching">
            <p className="text-charcoal-300">
              I'm passionate about tutoring and mentoring others. I love sharing knowledge, simplifying complex topics, and helping others develop their own skills in data science, programming, and beyond.
            </p>
          </Card>

          <Card icon={FaMountain} title="Current Pursuits">
            <p className="text-charcoal-300">
              I'm pursuing a Masters of Applied Data Science at the University of Michigan, exploring how machine learning, data visualization, and AI can create functional and innovative solutions. I'm particularly interested in bridging data science and web development, integrating modern machine learning models into responsive, interactive applications.
            </p>
          </Card>

          <Card icon={FaHiking} title="About Me">
            <p className="text-charcoal-300">
              I'm a passionate Computer Science and Biology graduate from McGill University with a strong focus on combining data science and web development to create impactful applications. Currently diving deep into applied data science, honing skills in designing data-driven solutions to solve real-world problems. I enjoy blending technology and data science to develop intuitive, user-friendly applications that bring insights to life.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
