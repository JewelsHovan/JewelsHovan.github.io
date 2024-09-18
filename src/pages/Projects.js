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
      <h3 className="text-xl font-semibold mb-2 text-paynes_gray-500">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      <div className="mt-auto flex justify-between">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-moonstone-500 hover:text-moonstone-700 flex items-center"
        >
          <FaExternalLinkAlt className="mr-2" />
          Visit Project
        </a>
        {project.codeLink && project.codeLink !== "#" && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-moonstone-500 hover:text-moonstone-700 flex items-center"
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
    <TextHeader level={2}>{title}</TextHeader>
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
      link: "https://gsaikido.com/",
      codeLink: "#",
    },
    {
      title: "LuccasBooth",
      description:
        "A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.",
      link: "https://luccasartsite.web.app/",
      codeLink: "#",
    },
    // Add more website projects here
  ];

  const mlProjects = [
    {
      title: "Fresh Meat Classifier",
      description:
        "A machine learning model to classify different types of fresh meat. Built using advanced ML techniques and hosted on Hugging Face Spaces with a Gradio interface.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier",
      codeLink: "https://github.com/yourusername/fresh-meat-classifier",
    },
    // Add more ML projects here
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <TextHeader level={1} className="text-center">My Projects</TextHeader>
      <ProjectSection title="Website Projects" projects={websiteProjects} />
      <ProjectSection title="Machine Learning Projects" projects={mlProjects} />
    </div>
  );
};

export default Projects;
