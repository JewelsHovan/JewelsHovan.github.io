import React from 'react';
import { motion } from 'framer-motion';
import TextHeader from './TextHeader';
const SkillCard = ({ title, skills }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const skillsData = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "C++", "MATLAB", "Java"]
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "FastAI", "Gradio"]
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "HTML/CSS", "JavaScript"]
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "SQL", "Tableau"]
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <TextHeader level={2} className="text-center">Skills & Expertise</TextHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillSet, index) => (
            <SkillCard key={index} title={skillSet.title} skills={skillSet.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;