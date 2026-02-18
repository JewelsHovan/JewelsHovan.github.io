import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaDatabase, FaLaptopCode, FaRobot } from "react-icons/fa";
import mangaRecapImg from "../assets/images/manga-recap.png";
import gsaikidoImg from "../assets/images/gsaikido.jpg";
import luccasBoothImg from "../assets/images/luccas_website.png";
import repoToClipboardImg from "../assets/images/repo-to-clipboard.png";
import architectScrapeImg from "../assets/images/architect-scrape.png";
import redditScrapeImg from "../assets/images/reddit-scrape.png";
import senscritiqueScrapeImg from "../assets/images/senscritique-scrape.png";
import meatClassifierImg from "../assets/images/meat-classifier.png";
import hospitalDynamicsImg from "../assets/images/hospital-dynamics.png";

const CategoryHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <Icon className="text-cyber-accent text-xl flex-shrink-0" />
    <h2 className="font-cyber-heading text-lg sm:text-xl tracking-[0.15em] text-cyber-fg uppercase">
      // {title}
    </h2>
    <div className="flex-1 h-px bg-gradient-to-r from-cyber-accent to-transparent opacity-50" />
  </div>
);

const ProjectCard = ({ project }) => {
  const tags = project.tags || [];
  return (
    <motion.div
      className="bg-cyber-card border border-cyber-border cyber-chamfer overflow-hidden h-full flex flex-col group hover:border-cyber-accent transition-colors duration-300"
      whileHover={{
        y: -6,
        boxShadow: "0 0 20px rgba(0,255,136,0.15), 0 20px 40px rgba(0,0,0,0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-cyber-border bg-cyber-bg">
        <span className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </span>
        <span className="font-mono text-[10px] text-cyber-muted-fg truncate">
          ~/{project.title.toLowerCase().replace(/\s+/g, '-')}
        </span>
      </div>

      {project.image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="scanlines absolute inset-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-cyber-heading text-base font-semibold mb-2 text-cyber-fg tracking-wide">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-mono text-[10px] px-2 py-0.5 border border-cyber-border bg-cyber-bg text-cyber-cyan cyber-chamfer-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-cyber-muted-fg mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex gap-3 pt-2 border-t border-cyber-border">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyber-accent hover:text-cyber-bg hover:bg-cyber-accent px-3 py-1 border border-cyber-accent cyber-chamfer-sm transition-all duration-200 flex items-center gap-1.5"
            >
              <FaExternalLinkAlt className="text-[10px]" /> DEMO
            </a>
          )}
          {project.codeLink && project.codeLink !== "#" && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyber-cyan hover:text-cyber-bg hover:bg-cyber-cyan px-3 py-1 border border-cyber-cyan cyber-chamfer-sm transition-all duration-200 flex items-center gap-1.5"
            >
              <FaGithub className="text-[10px]" /> CODE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCategory = ({ title, projects, icon }) => (
  <div className="mb-16">
    <CategoryHeader title={title} icon={icon} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  const websiteProjects = [
    { id: 1, title: "GSAikido", description: "A website for Granite State Aikido Club.", link: "https://granitestateaikido.web.app/", codeLink: "#", tags: ["React", "Firebase", "Tailwind CSS"], image: gsaikidoImg },
    { id: 2, title: "LuccasBooth", description: "A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.", link: "https://luccasartsite.web.app/", tags: ["React", "Firebase", "Gallery"], image: luccasBoothImg },
    { id: 3, title: "Manga Recaps", description: "A full-stack web app that organizes YouTube recaps for novels and manga, allowing users to easily find their favorite recaps. Built using Next.js, TypeScript, Tailwind.css, and Python for scraping YouTube data.", link: "#", codeLink: "https://github.com/JewelsHovan/manga-recap-site", tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"], image: mangaRecapImg },
    { id: 4, title: "Repo to Clipboard", description: "A full-stack web app that allows users to copy code from GitHub repositories to their clipboard. Built using Vite+React.js, Tailwind.css, and working with Github API for access to repositories.", link: "https://repotoclipboard.com/", codeLink: "https://github.com/JewelsHovan/RepoToClipboard", tags: ["Vite", "React", "Tailwind CSS", "GitHub API"], image: repoToClipboardImg },
  ];

  const mlProjects = [
    { id: 5, title: "Unraveling Hospital Dynamics", description: "A capstone project analyzing the impact of COVID-19 on hospital dynamics using the MIMIC-IV dataset and Global Burden of Disease statistics.", link: "#", codeLink: "https://github.com/JewelsHovan/Milestone-I", tags: ["Python", "Data Analysis", "Healthcare", "COVID-19"], image: hospitalDynamicsImg },
    { id: 6, title: "AI Essay Detection Classifier", description: "Developed an AI essay detection model as part of a Kaggle competition using NLP techniques like Lexical Diversity (TTR) and Sentence Length Variability.", link: "#", codeLink: "#", tags: ["NLP", "XGBoost", "Kaggle", "Classification"], image: "https://placehold.co/600x400/0a0a0f/00ff88?text=AI+Essay+Detection" },
    { id: 7, title: "GDP and Life Expectancy Analysis", description: "Examines the relationship between GDP and life expectancy across six countries from 2000 to 2015 using WHO and World Bank data.", link: "https://medium.com/@redhawk1230/exploring-the-relationship-between-gdp-and-life-expectancy-a-comparative-study-of-six-countries-eed6c4301082", codeLink: "https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis", tags: ["Data Viz", "Statistics", "Python", "Pandas"], image: "https://placehold.co/600x400/0a0a0f/00ff88?text=GDP+Analysis" },
    { id: 8, title: "Fresh Meat Classifier", description: "A machine learning model to classify different types of fresh meat using advanced ML techniques, hosted on Hugging Face Spaces with a Gradio interface.", link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier", codeLink: "https://github.com/JewelsHovan/FreshMeatClassifier", tags: ["ML", "Computer Vision", "Gradio", "Hugging Face"], image: meatClassifierImg },
    { id: 9, title: "AI RPG Storyteller Game", description: "Uses LangChain and GPT-4o to build an AI-powered text adventure game with dynamic narratives based on player decisions. Deployed with Streamlit.", link: "https://jewelshovan-sds-cp012-ai-adventure-game-app-1ff7rj.streamlit.app/", codeLink: "https://github.com/JewelsHovan/SDS-CP012-ai-adventure-game", tags: ["LangChain", "GPT-4o", "Streamlit", "AI Game"], image: "https://placehold.co/600x400/0a0a0f/00ff88?text=AI+RPG+Game" },
  ];

  const scrapingProjects = [
    { id: 10, title: "Scraping Reddit Data", description: "Python-based Reddit scraper extracting data from subreddits with complete comment threads, pagination, rate limiting, and nested replies.", link: "#", codeLink: "https://github.com/JewelsHovan/chronic_reddit_scraper", tags: ["Python", "Reddit API", "Data Collection", "JSON"], image: redditScrapeImg },
    { id: 11, title: "SensCritique Book Collection Scraper", description: "Scrapes book data from SensCritique using their API with proxy rotation, checkpoints, and asynchronous processing.", link: "#", codeLink: "https://github.com/JewelsHovan/books_senscritique", tags: ["Python", "Async", "Proxy Rotation", "API"], image: senscritiqueScrapeImg },
    { id: 12, title: "Architects Register Scraper", description: "Asynchronous Python web scraper for the UK Architects Register with rate limiting, real-time progress tracking, and structured JSON output.", link: "#", codeLink: "https://github.com/JewelsHovan/architects_scrape", tags: ["Python", "Async", "Rate Limiting", "Data Extraction"], image: architectScrapeImg },
  ];

  return (
    <div className="bg-cyber-bg min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-cyber-heading text-3xl sm:text-4xl font-bold text-cyber-fg tracking-wider mb-4 cyber-glitch" data-text="PROJECT_ARCHIVE">
            PROJECT_ARCHIVE
          </h1>
          <p className="font-mono text-sm text-cyber-muted-fg max-w-2xl mx-auto">
            // cataloguing builds across data_engineering, web_dev, and machine_learning
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyber-accent to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectCategory title="DATA_ENGINEERING" projects={scrapingProjects} icon={FaDatabase} />
          <ProjectCategory title="WEB_DEVELOPMENT" projects={websiteProjects} icon={FaLaptopCode} />
          <ProjectCategory title="MACHINE_LEARNING" projects={mlProjects} icon={FaRobot} />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
