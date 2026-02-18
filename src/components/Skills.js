import React from 'react';
import { motion } from 'framer-motion';
import TextHeader from './TextHeader';
import { FaPython, FaAws, FaDatabase } from 'react-icons/fa';
import { SiApachespark } from 'react-icons/si';

const SkillCard = ({ title, skills, icon: Icon }) => (
  <motion.div
    className="bg-cyber-card p-6 border border-cyber-border cyber-chamfer"
    whileHover={{
      y: -5,
      borderColor: '#00ff88',
      boxShadow: '0 0 15px #00ff8840',
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-5">
      {/* Icon in neon-bordered square */}
      <div className="w-12 h-12 flex items-center justify-center border border-cyber-accent mr-4 shadow-[0_0_8px_#00ff8840]">
        <Icon className="text-2xl text-cyber-accent" />
      </div>
      <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-cyber-fg">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 border border-cyber-border text-cyber-muted-fg hover:text-cyber-accent hover:border-cyber-accent hover:shadow-[0_0_6px_#00ff8840] transition-all duration-200 cursor-default"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <span className="text-cyber-accent mr-1">&gt;</span>
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const skillsData = [
  {
    title: 'Data Engineering',
    icon: FaDatabase,
    skills: ['ETL/ELT', 'Data Pipelines', 'Data Modeling', 'SQL', 'NoSQL', 'Data Warehousing', 'Data Lakes'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: FaAws,
    skills: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Big Data Technologies',
    icon: SiApachespark,
    skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'dbt', 'Databricks'],
  },
  {
    title: 'Programming & Tools',
    icon: FaPython,
    skills: ['Python', 'SQL', 'Bash', 'Git', 'REST APIs', 'GraphQL', 'Java'],
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-cyber-bg relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-cyber-cyan rounded-full blur-[100px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyber-accent rounded-full blur-[100px] opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <TextHeader level={2}>SKILLS &amp; EXPERTISE</TextHeader>
        </div>
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
