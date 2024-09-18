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
        className="mr-4 text-3xl text-blue-500"
      >
        <Icon />
      </motion.div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-4">
      {skills.map((skill, index) => (
        <li key={index}>
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span className="text-sm text-gray-600">{skill.proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          </div>
        </li>
      ))}
    </ul>
  </motion.div>
);

const skillsData = [
  {
    title: "Programming Languages",
    icon: FaPython,
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "Java", proficiency: 80 },
      { name: "C++", proficiency: 70 },
      { name: "R", proficiency: 75 },
      { name: "MATLAB", proficiency: 65 },
    ]
  },
  {
    title: "Machine Learning",
    icon: SiTensorflow,
    skills: [
      { name: "TensorFlow", proficiency: 85 },
      { name: "PyTorch", proficiency: 80 },
      { name: "FastAI", proficiency: 75 },
      { name: "Gradio", proficiency: 70 },
      { name: "Huggingface", proficiency: 65 },
    ]
  },
  {
    title: "Web Development",
    icon: FaReact,
    skills: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 90 },
      { name: "HTML/CSS", proficiency: 90 },
      { name: "MongoDB", proficiency: 85 },
    ]
  },
  {
    title: "Data Analysis",
    icon: SiPandas,
    skills: [
      { name: "Pandas", proficiency: 90 },
      { name: "NumPy", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "Tableau", proficiency: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <TextHeader level={2} className="text-center mb-12">Skills & Expertise</TextHeader>
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