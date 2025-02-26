import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaLaptopCode, FaRobot } from "react-icons/fa";
import TextHeader from "../components/TextHeader";
import mangaRecapImg from "../assets/images/manga-recap.png";
import gsaikidoImg from "../assets/images/gsaikido.jpg";
import luccasBoothImg from "../assets/images/luccas_website.png";
import repoToClipboardImg from "../assets/images/repo-to-clipboard.png";
import architectScrapeImg from "../assets/images/architect-scrape.png";
import redditScrapeImg from "../assets/images/reddit-scrape.png";
import senscritiqueScrapeImg from "../assets/images/senscritique-scrape.png";
import meatClassifierImg from "../assets/images/meat-classifier.png";
import hospitalDynamicsImg from "../assets/images/hospital-dynamics.png";

const ProjectCard = ({ project }) => {
  // Add default tags if none are provided
  const tags = project.tags || [];
  
  return (
    <motion.div
      className="bg-card rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-slate hover:border-accent-cyan"
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
      }}
      transition={{ duration: 0.3 }}
    >
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-text-light">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-navy text-accent-cyan px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-text-muted mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto flex space-x-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-accent-teal flex items-center transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mr-1" /> Demo
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-accent-teal flex items-center transition-colors duration-300"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CategoryHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center mb-8">
    <div className="bg-accent-cyan p-3 rounded-full mr-4">
      <Icon className="text-dark-blue text-2xl" />
    </div>
    <TextHeader level={2} className="text-text-light">
      {title}
    </TextHeader>
  </div>
);

const ProjectCategory = ({ title, projects, icon }) => {
  return (
    <div className="mb-16">
      <CategoryHeader title={title} icon={icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  // Add tags to all projects and placeholder images
  const websiteProjects = [
    {
      id: 1,
      title: "GSAikido",
      description: "A website for Granite State Aikido Club.",
      link: "https://granitestateaikido.web.app/",
      codeLink: "#",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: gsaikidoImg
    },
    {
      id: 2,
      title: "LuccasBooth",
      description:
        "A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.",
      link: "https://luccasartsite.web.app/",
      tags: ["React", "Firebase", "Gallery"],
      image: luccasBoothImg
    },
    {
      id: 3,
      title: "Manga Recaps",
      description:
        "A full-stack web app that organizes YouTube recaps for novels and manga, allowing users to easily find their favorite recaps. Built using Next.js, TypeScript, Tailwind.css, and Python for scraping YouTube data.",
      link: "#", 
      codeLink: "https://github.com/JewelsHovan/manga-recap-site",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
      image: mangaRecapImg
    },
    {
      id: 4,
      title: "Repo to Clipboard",
      description:
        "A full-stack web app that allows users to copy code from GitHub repositories to their clipboard. Built using Vite+React.js, Tailwind.css, and working with Github API for access to repositories.",
      link: "https://repotoclipboard.com/",
      codeLink: "https://github.com/JewelsHovan/RepoToClipboard",
      tags: ["Vite", "React", "Tailwind CSS", "GitHub API"],
      image: repoToClipboardImg
    },
  ];

  const mlProjects = [
    {
      id: 5,
      title: "Unraveling Hospital Dynamics",
      description:
        "A capstone project analyzing the impact of COVID-19 on hospital dynamics using the MIMIC-IV dataset and Global Burden of Disease statistics. The project provides insights into hospital operations and patient outcomes during the pandemic.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/Milestone-I",
      tags: ["Python", "Data Analysis", "Healthcare", "COVID-19"],
      image: hospitalDynamicsImg
    },
    {
      id: 6,
      title: "AI Essay Detection Classifier",
      description:
        "Developed an AI essay detection model as part of a Kaggle competition. Augmented fake essay datasets to train the detector using NLP techniques like Lexical Diversity (TTR), Sentence Length Variability, and Spelling/Grammar Error analysis.",
      link: "#",
      codeLink: "#",
      tags: ["NLP", "XGBoost", "Kaggle", "Classification"],
      image: "https://placehold.co/600x400/1E2A45/38AECC?text=AI+Essay+Detection"
    },
    {
      id: 7,
      title: "GDP and Life Expectancy Analysis",
      description:
        "This project examines the relationship between GDP and life expectancy across six countries from 2000 to 2015. Using data from the WHO and World Bank, the analysis explores trends through visualizations like scatter plots and line charts.",
      link: "https://medium.com/@redhawk1230/exploring-the-relationship-between-gdp-and-life-expectancy-a-comparative-study-of-six-countries-eed6c4301082",
      codeLink: "https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis",
      tags: ["Data Visualization", "Statistical Analysis", "Python", "Pandas"],
      image: "https://placehold.co/600x400/1E2A45/38AECC?text=GDP+Analysis"
    },
    {
      id: 8,
      title: "Fresh Meat Classifier",
      description:
        "A machine learning model to classify different types of fresh meat. Built using advanced ML techniques and hosted on Hugging Face Spaces with a Gradio interface.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier",
      codeLink: "https://github.com/JewelsHovan/FreshMeatClassifier",
      tags: ["Machine Learning", "Computer Vision", "Gradio", "Hugging Face"],
      image: meatClassifierImg
    },
    {
      id: 9,
      title: "AI RPG Storyteller Game",
      description:
        "This project uses LangChain and GPT-4o to build an AI-powered text adventure game. The dynamic Storyteller creates unique narratives based on player decisions. Deployed with Streamlit.",
      link: "https://jewelshovan-sds-cp012-ai-adventure-game-app-1ff7rj.streamlit.app/",
      codeLink: "https://github.com/JewelsHovan/SDS-CP012-ai-adventure-game",
      tags: ["LangChain", "GPT-4o", "Streamlit", "AI Game"],
      image: "https://placehold.co/600x400/1E2A45/38AECC?text=AI+RPG+Game"
    },
  ];

  const scrapingProjects = [
    {
      id: 10,
      title: "Scraping Reddit Data",
      description:
        "This project is a Python-based Reddit scraper designed to extract data from the r/ChronicPain subreddit. It focuses on collecting posts and their complete comment threads, handling pagination, rate limiting, and nested replies.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/chronic_reddit_scraper",
      tags: ["Python", "Reddit API", "Data Collection", "JSON"],
      image: redditScrapeImg
    },
    {
      id: 11,
      title: "SensCritique Book Collection Scraper",
      description:
        "This Python project scrapes book data from SensCritique using their API, including details like title, author, ratings, and more. It features proxy rotation, checkpoints, and asynchronous processing.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/books_senscritique",
      tags: ["Python", "Async", "Proxy Rotation", "API"],
      image: senscritiqueScrapeImg
    },
    {
      id: 12,
      title: "Architects Register Scraper",
      description:
        "An asynchronous Python web scraper for the UK Architects Register, collecting data on architects with rate limiting, real-time progress tracking, and structured JSON output.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/architects_scrape",
      tags: ["Python", "Async", "Rate Limiting", "Data Extraction"],
      image: architectScrapeImg
    },
  ];

  return (
    <div className="bg-dark-blue min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <TextHeader level={1} className="text-text-light mb-6 text-shadow">
            My Projects
          </TextHeader>
          <p className="text-text-muted max-w-3xl mx-auto">
            Here's a collection of my projects, showcasing my skills in data engineering, web development, and machine learning. 
            Each project demonstrates different aspects of my technical abilities and problem-solving approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectCategory 
            title="Data Engineering Projects" 
            projects={scrapingProjects} 
            icon={FaDatabase} 
          />
          
          <ProjectCategory 
            title="Web Development Projects" 
            projects={websiteProjects} 
            icon={FaLaptopCode} 
          />
          
          <ProjectCategory 
            title="Machine Learning Projects" 
            projects={mlProjects} 
            icon={FaRobot} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
