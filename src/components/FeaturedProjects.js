import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import TextHeader from './TextHeader';
import gsaikidoImage from '../assets/images/gsaikido.jpg';
import luccasboothImage from '../assets/images/luccas_website.png';
import mangaRecapImage from '../assets/images/manga-recap.png';
import meatImage from '../assets/images/meat-classifier.png';
import gdpImage from '../assets/images/GDP-Life.png';

const projects = [
  {
    id: 1,
    title: 'GDP & Life Expectancy Analysis',
    description:
      'Analyzed the relationship between GDP and life expectancy across six countries from 2000-2015 using WHO and World Bank data. Created visualizations and statistical analysis to uncover trends and patterns.',
    link: 'https://medium.com/@redhawk1230/exploring-the-relationship-between-gdp-and-life-expectancy-a-comparative-study-of-six-countries-eed6c4301082',
    codeLink: 'https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis',
    image: gdpImage,
    tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
  },
  {
    id: 2,
    title: 'Fresh Meat Classification Model',
    description:
      'Developed a computer vision model using PyTorch and FastAI to classify fresh vs spoiled meat from images. Deployed as a mobile-friendly web app with 95% accuracy.',
    link: 'https://huggingface.co/spaces/yourusername/fresh-meat-classifier',
    codeLink: 'https://github.com/JewelsHovan/FreshMeatClassifier',
    image: meatImage,
    tags: ['PyTorch', 'FastAI', 'Computer Vision', 'Gradio'],
  },
  {
    id: 3,
    title: 'Manga Recaps Hub',
    description:
      'A centralized platform that aggregates and organizes YouTube manga recap videos using automated Python scrapers. Helps users find and watch recaps easily.',
    link: '#',
    codeLink: 'https://github.com/JewelsHovan/manga-recap-site',
    image: mangaRecapImage,
    tags: ['Python', 'YouTube API', 'Web Scraping', 'Next.js'],
  },
  {
    id: 4,
    title: 'Artist Portfolio Website',
    description:
      'A responsive portfolio website built with HTML, CSS and JavaScript to showcase an artist\'s work. Features a dynamic gallery, contact form, and custom animations.',
    link: 'https://luccasartsite.web.app/',
    codeLink: 'https://github.com/JewelsHovan/Luccas-Portfolio',
    image: luccasboothImage,
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Components'],
  },
  {
    id: 5,
    title: 'Granite State Aikido Website',
    description:
      'A modern, responsive website for a local Aikido dojo in New Hampshire. Features class schedules, instructor bios, photo gallery, and beginner information.',
    link: 'https://granitestateaikido.web.app/',
    codeLink: null,
    image: gsaikidoImage,
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Web Design'],
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-cyber-card border border-cyber-border cyber-chamfer overflow-hidden flex flex-col h-full group"
    whileHover={{
      borderColor: '#00ff88',
      boxShadow: '0 0 20px #00ff8830',
    }}
    transition={{ duration: 0.3 }}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-cyber-muted flex items-center justify-center font-mono text-cyber-border text-sm uppercase">
          {project.title}
        </div>
      )}
      <div className="scanlines absolute inset-0 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-cyber-fg mb-3">
        {project.title}
      </h3>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-cyber-border text-cyber-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="font-mono text-xs text-cyber-muted-fg leading-relaxed mb-4 flex-grow line-clamp-3">
        {project.description}
      </p>

      <div className="mt-auto flex space-x-4 pt-3 border-t border-cyber-border">
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-cyber-cyan hover:text-cyber-accent hover:drop-shadow-[0_0_6px_#00ff88] flex items-center gap-1 transition-all duration-200"
          >
            <FaExternalLinkAlt size={10} /> DEMO
          </a>
        )}
        {project.codeLink && project.codeLink !== '#' && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-cyber-cyan hover:text-cyber-accent hover:drop-shadow-[0_0_6px_#00ff88] flex items-center gap-1 transition-all duration-200"
          >
            <FaGithub size={12} /> CODE
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16 bg-cyber-bg relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyber-magenta rounded-full blur-[100px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-cyber-cyan rounded-full blur-[100px] opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <TextHeader level={2}>FEATURED PROJECTS</TextHeader>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cyber-magenta hover:text-cyber-accent hover:drop-shadow-[0_0_8px_#00ff88] transition-all duration-300"
          >
            VIEW ALL PROJECTS
            <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
