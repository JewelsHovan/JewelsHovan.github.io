import React from 'react';
import { motion } from 'framer-motion';
import TextHeader from './TextHeader';
import { FaPython, FaAws, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiApachekafka, SiApachespark, SiTerraform, SiGooglecloud } from 'react-icons/si';

const SkillCard = ({ title, skills, icon: Icon }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-md border border-slate card-improved"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="mr-4 text-3xl text-accent-cyan"
      >
        <Icon />
      </motion.div>
      <h3 className="text-xl font-bold text-text-light">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="bg-navy text-text-light text-sm font-medium px-2.5 py-0.5 rounded border border-steel-blue hover:bg-slate hover:text-accent-cyan transition-colors duration-200"
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
    title: "Data Engineering",
    icon: FaDatabase,
    skills: ["ETL/ELT", "Data Pipelines", "Data Modeling", "SQL", "NoSQL", "Data Warehousing", "Data Lakes"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: FaAws,
    skills: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Big Data Technologies",
    icon: SiApachespark,
    skills: ["Apache Spark", "Hadoop", "Kafka", "Airflow", "dbt", "Databricks"]
  },
  {
    title: "Programming & Tools",
    icon: FaPython,
    skills: ["Python", "SQL", "Bash", "Git", "REST APIs", "GraphQL", "Java"]
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-navy mb-8 rounded-3xl relative overflow-hidden">
      {/* Tech-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent-teal blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent-cyan blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 rounded-3xl relative z-10">
        <TextHeader level={2} className="text-center mb-12 text-text-light text-shadow">Skills & Expertise</TextHeader>
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
