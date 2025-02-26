import React from "react";
import { motion } from "framer-motion";
import {
  FaHiking,
  FaMountain,
  FaFistRaised,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaChartLine
} from "react-icons/fa";
import Card from "../components/Card";
import TextHeader from "../components/TextHeader";
import headshot from "../assets/images/headshot_hovan.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const sectionIcons = {
    education: FaGraduationCap,
    experience: FaLaptopCode,
    skills: FaCode,
    projects: FaRocket,
    interests: FaMountain,
    goals: FaChartLine,
    contact: FaServer
  };

  return (
    <motion.div 
      className="min-h-screen bg-dark-blue py-16 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <TextHeader 
          level={1} 
          className="text-center mb-12 text-text-light text-shadow"
        >
          About Me
        </TextHeader>
        <div className="mb-8 text-center">
          <div className="w-64 h-64 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-cyan group">
            <img 
              src={headshot} 
              alt="Julien Hovan" 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
            />
          </div>
          <div className="text-accent-cyan font-medium text-lg sm:text-xl tracking-wider uppercase">Julien M. Hovan</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-light leading-tight">
            Data Engineering <span className="text-accent-cyan">Consultant</span>
          </h2>
          <div className="w-24 h-1 bg-accent-teal mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center p-6 bg-dark-blue-lighter rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal">Education</h3>
              <div className="relative pl-8 border-l-2 border-accent-teal">
                <div className="absolute w-4 h-4 bg-accent-cyan rounded-full -left-[9px] top-0"></div>
                <h4 className="text-lg font-semibold text-text-light">McGill University</h4>
                <p className="text-accent-cyan">Bachelor of Science in Computer Science and Biology</p>
                <p className="text-sm text-gray-400">2018 - 2023</p>
              </div>
              <div className="relative pl-8 border-l-2 border-accent-teal mt-6">
                <div className="absolute w-4 h-4 bg-accent-cyan rounded-full -left-[9px] top-0"></div>
                <h4 className="text-lg font-semibold text-text-light">University of Michigan</h4>
                <p className="text-accent-cyan">Master of Applied Data Science</p>
                <p className="text-sm text-gray-400">Current</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-px bg-accent-teal w-16"></div>
            <div className="mx-4 text-accent-cyan"><FaDatabase /></div>
            <div className="h-px bg-accent-teal w-16"></div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center p-6 bg-dark-blue-lighter rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal flex items-center justify-center">
                <span className="mr-3 text-accent-cyan"><FaLightbulb size={24} /></span>
                My Journey
              </h3>
              <div className="text-text-light mx-auto max-w-2xl text-base sm:text-lg space-y-4">
                <p>
                  I discovered my passion for programming in my first Java course. Python quickly became my language of choice, especially for web scraping projects where I enjoyed reverse engineering APIs, scheduling data extraction, and building my own datasets.
                </p>
                <p>
                  During my time at McGill, I also learned R for statistical analysis and test simulations, building a strong foundation in data manipulation and analysis.
                </p>
                <p>
                  After graduating from McGill, I gained valuable experience as an intern at 3Genii, a web development company. There, I expanded my skills to include .NET platform development and C#, broadening my programming toolkit.
                </p>
                <p>
                  In 2023, my interest in deep learning grew from the machine learning foundation I built during my undergraduate studies. This passion led me to pursue a Master's in Applied Data Science, where I've been fascinated learning about the rich history of AI and its evolving applications.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-px bg-accent-teal w-16"></div>
            <div className="mx-4 text-accent-cyan"><FaDatabase /></div>
            <div className="h-px bg-accent-teal w-16"></div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal flex items-center justify-center">
              <span className="mr-3 text-accent-cyan"><FaLaptopCode size={24} /></span>
              Professional Experience
            </h3>
            <p className="text-text-light mx-auto max-w-2xl text-base sm:text-lg">
              I currently work at Compass Analytics as a Data Engineering Consultant, where I help businesses build scalable data architectures and pipelines. I specialize in implementing solutions using Databricks and Dataiku to transform raw data into actionable insights.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 mx-auto max-w-2xl">
              <span className="px-3 py-1 bg-accent-teal bg-opacity-20 text-text-light rounded-full">Python</span>
              <span className="px-3 py-1 bg-accent-cyan bg-opacity-20 text-text-light rounded-full">SQL</span>
              <span className="px-3 py-1 bg-accent-teal bg-opacity-20 text-text-light rounded-full">Databricks</span>
              <span className="px-3 py-1 bg-accent-cyan bg-opacity-20 text-text-light rounded-full">Dataiku</span>
              <span className="px-3 py-1 bg-accent-teal bg-opacity-20 text-text-light rounded-full">AWS</span>
              <span className="px-3 py-1 bg-accent-cyan bg-opacity-20 text-text-light rounded-full">Docker</span>
              <span className="px-3 py-1 bg-accent-teal bg-opacity-20 text-text-light rounded-full">Kubernetes</span>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal flex items-center justify-center">
              <span className="mr-3 text-accent-cyan"><FaRocket size={24} /></span>
              Projects
            </h3>
            <div className="text-text-light mx-auto max-w-2xl text-base sm:text-lg space-y-4">
              <p>
                I enjoy working on diverse projects across the software development spectrum. From building command-line interfaces to developing full-stack web applications, I love creating functional programs and then enhancing them with intuitive web interfaces.
              </p>
              <p>
                One of my specialties is creating web scraping solutions - starting with simple scripts and evolving them into comprehensive systems with fault tolerance, asynchronous requests, and proxy rotation capabilities.
              </p>
              
              <ul className="list-none text-text-light mx-auto max-w-2xl text-base sm:text-lg mt-4 space-y-3">
                <li className="mb-3">Developed scalable data pipelines for enterprise clients using Databricks</li>
                <li className="mb-3">Implemented automated ETL workflows with Dataiku for business intelligence</li>
                <li className="mb-3">Built cloud-based data lakes and warehousing solutions</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal flex items-center justify-center">
              <span className="mr-3 text-accent-cyan"><FaMountain size={24} /></span>
              Interests
            </h3>
            <p className="text-text-light mx-auto max-w-2xl text-base sm:text-lg">
              Outside of work, I enjoy hiking, photography, and exploring new technologies in the data engineering and cloud computing space. I'm also an avid reader, particularly of fantasy fiction like Eastern fantasy novels and LitRPGs. To stay current in my field, I regularly follow and read the latest AI research papers and developments.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal flex items-center justify-center">
              <span className="mr-3 text-accent-cyan"><FaChartLine size={24} /></span>
              Goals
            </h3>
            <p className="text-text-light mx-auto max-w-2xl text-base sm:text-lg">
              My primary goal is to continuously enhance my data engineering skills while helping organizations leverage their data effectively. Looking toward the future, I aspire to create my own products and eventually run my own business, applying my technical expertise to solve real-world problems.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent-teal flex items-center justify-center">
              <span className="mr-3 text-accent-cyan"><FaServer size={24} /></span>
              Contact
            </h3>
            <p className="text-text-light mx-auto max-w-2xl text-base sm:text-lg">
              Feel free to reach out to me at <a href="mailto:JulienH15@icloud.com" className="text-accent-cyan hover:underline">JulienH15@icloud.com</a> or <a href="mailto:julien.hovan@compassdata.ca" className="text-accent-cyan hover:underline">julien.hovan@compassdata.ca</a>, or connect with me on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
