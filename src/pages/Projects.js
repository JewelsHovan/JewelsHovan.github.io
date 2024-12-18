import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TextHeader from "../components/TextHeader";

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-beige-600">
        {project.title}
      </h3>
      <p className="text-charcoal-300 mb-4 flex-grow">{project.description}</p>
      <div className="mt-auto flex justify-between">
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pastel-green-400 hover:text-pastel-green-500 flex items-center transition-colors duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            Visit Project
          </a>
        )}
        {project.codeLink && project.codeLink !== "#" && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pastel-green-400 hover:text-pastel-green-500 flex items-center transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            Source Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectSection = ({ title, projects }) => (
  <section className="mb-16">
    <TextHeader level={2} className="text-beige-500">
      {title}
    </TextHeader>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

const Projects = () => {
  const websiteProjects = [
    {
      title: "GSAikido",
      description: "A website for Granite State Aikido Club.",
      link: "https://granitestateaikido.web.app/",
      codeLink: "#",
    },
    {
      title: "LuccasBooth",
      description:
        "A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.",
      link: "https://luccasartsite.web.app/",
    },
    {
      title: "Manga Recaps",
      description:
        "A full-stack web app that organizes YouTube recaps for novels and manga, allowing users to easily find their favorite recaps. Built using Next.js, TypeScript, Tailwind.css, and Python for scraping YouTube data.",
      link: "#", // Add the live link if available
      codeLink: "https://github.com/JewelsHovan/manga-recap-site", // Add the GitHub link if available
    },
    {
      title: "Repo to Clipboard",
      description:
        "A full-stack web app that allows users to copy code from GitHub repositories to their clipboard. Built using Vite+React.js, Tailwind.css, and working with Github API for access to repositories.",
      link: "https://repotoclipboard.com/", // Add the live link if available
      codeLink: "https://github.com/JewelsHovan/RepoToClipboard", // Add the GitHub link if available
    },
  ];

  const mlProjects = [
    {
      title: "Unraveling Hospital Dynamics",
      description:
        "A capstone project analyzing the impact of COVID-19 on hospital dynamics using the MIMIC-IV dataset and Global Burden of Disease statistics. The project provides insights into hospital operations and patient outcomes during the pandemic.",
      link: "#", // Add the live link if available
      codeLink: "https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis?tab=readme-ov-file#initial-inspection", // Add the GitHub link if available
    },
    {
      title: "AI Essay Detection Classifier",
      description:
        "Developed an AI essay detection model as part of a Kaggle competition. Augmented fake essay datasets to train the detector using NLP techniques like Lexical Diversity (TTR), Sentence Length Variability, and Spelling/Grammar Error analysis. KL Divergence was used to measure how word distributions deviate from expected patterns. Utilized XGBoost for model training.",
      link: "#", // Add the competition link if available
      codeLink: "#", // Add the GitHub link if available
    },
    {
      title: "GDP and Life Expectancy Analysis",
      description:
        "This project examines the relationship between GDP and life expectancy across six countries from 2000 to 2015. Using data from the WHO and World Bank, the analysis explores trends through visualizations like scatter plots and line charts, revealing a positive correlation between economic growth and longevity.",
      link: "https://medium.com/@redhawk1230/exploring-the-relationship-between-gdp-and-life-expectancy-a-comparative-study-of-six-countries-eed6c4301082", // Add the live link if available
      codeLink: "https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis", // Add the GitHub link if available
    },
    {
      title: "Fresh Meat Classifier",
      description:
        "A machine learning model to classify different types of fresh meat. Built using advanced ML techniques and hosted on Hugging Face Spaces with a Gradio interface.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier",
      codeLink: "https://github.com/JewelsHovan/FreshMeatClassifier",
    },
    {
      title: "AI RPG Storyteller Game",
      description:
        "This project uses LangChain and GPT-4o to build an AI-powered text adventure game. The dynamic Storyteller creates unique narratives based on player decisions. Deployed with Streamlit.",
      link: "https://jewelshovan-sds-cp012-ai-adventure-game-app-1ff7rj.streamlit.app/",
      codeLink: "https://github.com/JewelsHovan/SDS-CP012-ai-adventure-game", // Add the GitHub link if available
    },
  ];

  const scrapingProjects = [
    {
      title: "Scraping Reddit Data",
      description:
        "This project is a Python-based Reddit scraper designed to extract data from the r/ChronicPain subreddit. It focuses on collecting posts and their complete comment threads, handling pagination, rate limiting, and nested replies. The scraped data is stored in structured JSON files. An optional, basic web-based visualization tool using D3.js is included to explore the comment tree.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/chronic_reddit_scraper",
    },
    {
      title: "SensCritique Book Collection Scraper",
      description:
        "This Python project scrapes book data from SensCritique using their API, including details like title, author, ratings, and more. It features proxy rotation, checkpoints, and asynchronous processing.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/books_senscritique",
    },
    {
      title: "Architects Register Scraper",
      description:
        "An asynchronous Python web scraper for the UK Architects Register, collecting data on architects with rate limiting, real-time progress tracking, and structured JSON output.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/architects_scrape",
    },
  ];

  return (
    <div className="bg-beige-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TextHeader level={1} className="text-center text-beige-700 mb-12">
          My Projects
        </TextHeader>
        <p className="text-center text-charcoal-500 mb-12">
          I enjoy working on a variety of projects, with a particular focus on web development, machine learning/AI, and data scraping. Here's a showcase of some of my work.
        </p>
        <ProjectSection
          title="Machine Learning and AI Projects"
          projects={mlProjects}
        />
        <ProjectSection title="Website" projects={websiteProjects} />
        <ProjectSection
          title="Scraping Projects"
          projects={scrapingProjects}
        />
      </div>
    </div>
  );
};

export default Projects;
