import React from 'react';
import { motion } from 'framer-motion';
import TextHeader from './TextHeader';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiTensorflow, SiPandas } from 'react-icons/si';

const SkillCard = ({ title, skills, icon: Icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="mr-4 text-3xl text-pastel-green-400"
      >
        <Icon />
      </motion.div>
      <h3 className="text-xl font-semibold text-charcoal-400">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="bg-beige-200 text-charcoal-400 text-sm font-medium px-2.5 py-0.5 rounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const skillsData = [
  {
    title: "Programming Languages",
    icon: FaPython,
    skills: ["Python", "Java", "C++", "R", "MATLAB"]
  },
  {
    title: "Machine Learning",
    icon: SiTensorflow,
    skills: ["TensorFlow", "PyTorch", "FastAI", "Gradio", "Huggingface"]
  },
  {
    title: "Web Development",
    icon: FaReact,
    skills: ["React", "Next.js", "HTML/CSS", "MongoDB"]
  },
  {
    title: "Data Analysis",
    icon: SiPandas,
    skills: ["Pandas", "NumPy", "SQL", "Tableau"]
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-beige-100 mb-8 rounded-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 rounded-3xl">
        <TextHeader level={2} className="text-center mb-12 text-beige-700">Skills & Expertise</TextHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillSet, index) => (
            <SkillCard key={index} title={skillSet.title} skills={skillSet.skills} icon={skillSet.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
