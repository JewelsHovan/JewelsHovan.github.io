import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageFiller from 'react-image-filler';
import TextHeader from './TextHeader';
import gsaikidoImage from '../assets/images/gsaikido.jpg';
import luccasboothImage from '../assets/images/luccas_website.png';
import mangaRecapImage from '../assets/images/manga-recap.png';
import meatImage from '../assets/images/meat-classifier.png';
import gdpImage from '../assets/images/GDP-Life.png';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const FeaturedProjects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const wordLimit = 20; // Set your desired word limit here

  const projects = [
    {
      id: 1,
      title: "GDP and Life Expectancy Analysis",
      description: "Analyzed the relationship between GDP and life expectancy across six countries from 2000-2015 using WHO and World Bank data. Created visualizations and statistical analysis to uncover trends and patterns.",
      link: "https://medium.com/@redhawk1230/exploring-the-relationship-between-gdp-and-life-expectancy-a-comparative-study-of-six-countries-eed6c4301082",
      codeLink: "https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis",
      image: gdpImage,
      tags: ["Python", "Pandas", "Data Analysis", "Visualization"]
    },
    { 
      id: 2,
      title: "Fresh Meat Classification Model",
      description: "Developed a computer vision model using PyTorch and FastAI to classify fresh vs spoiled meat from images. Deployed as a mobile-friendly web app with 95% accuracy to help consumers assess meat quality.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier",
      codeLink: "https://github.com/JewelsHovan/FreshMeatClassifier", 
      image: meatImage,
      tags: ["PyTorch", "FastAI", "Computer Vision", "Gradio"]
    },
    {
      id: 3,
      title: "Manga Recaps Hub",
      description: "A centralized platform that aggregates and organizes YouTube manga recap videos using automated Python scrapers. Helps users easily find and watch recaps of their favorite manga series from various content creators.",
      link: "#",
      codeLink: "https://github.com/JewelsHovan/manga-recap-site",
      image: mangaRecapImage,
      tags: ["Python", "YouTube API", "Web Scraping", "Next.js"]
    },
    {
      id: 4,
      title: "Artist Portfolio Website",
      description: "A responsive portfolio website built with HTML, CSS and JavaScript to showcase an artist's work. Features a dynamic gallery, contact form, and custom animations for an engaging user experience.",
      link: "https://luccasartsite.web.app/",
      codeLink: "https://github.com/JewelsHovan/Luccas-Portfolio",
      image: luccasboothImage,
      tags: ["HTML", "CSS", "JavaScript", "Web Components"]
    },
    {
      id: 5,
      title: "Granite State Aikido Website",
      description: "A modern, responsive website for a local Aikido dojo in New Hampshire. Features class schedules, instructor bios, photo gallery, and beginner information. Built with React and Firebase hosting.",
      link: "https://granitestateaikido.web.app/",
      image: gsaikidoImage,
      tags: ["React", "Firebase", "Tailwind CSS", "Web Design"]
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjusted to show 3 full slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  // Updated helper function to truncate text and add button
  const truncateTextWithButton = (text, limit, id) => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    const truncated = words.slice(0, limit).join(' ');
    return (
      <>
        {truncated}
        {!expanded[id] && '... '}
        <button 
          onClick={() => toggleExpand(id)}
          className="text-accent-cyan hover:text-accent-teal focus:outline-none ml-1 font-medium"
        >
          {expanded[id] ? 'Show Less' : 'Show More'}
        </button>
        {expanded[id] && <span className="ml-1">{words.slice(limit).join(' ')}</span>}
      </>
    );
  };

  return (
    <section id="projects" className="py-16 rounded-3xl bg-slate relative overflow-hidden">
      {/* Tech-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-accent-purple blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-accent-cyan blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 mb-16 relative z-10">
        <TextHeader
          level={2} 
          className="text-center text-4xl font-bold text-text-light mb-8 text-shadow"
        >
          Featured Projects
        </TextHeader>
        <Slider {...settings} className="project-slider">
          {projects.map((project) => (
            <div key={project.id} className="px-2 h-full">
              <div className="bg-card rounded-2xl shadow-md overflow-hidden h-[500px] flex flex-col transform transition-transform duration-300 hover:scale-105 hover:glow-cyan border border-steel-blue mx-auto max-w-sm">
                {project.image ? (
                  <div className="overflow-hidden h-64 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent"></div>
                  </div>
                ) : (
                  <ImageFiller 
                    width={400} 
                    height={256} 
                    text={project.title}
                    background="#242F48"
                    color="#E9ECEF"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-text-light">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-navy text-accent-cyan px-2 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-text-muted mb-4 flex-grow leading-relaxed">
                    {truncateTextWithButton(project.description, wordLimit, project.id)}
                  </p>
                  <div className="mt-auto flex space-x-4">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:text-accent-teal flex items-center">
                        <FaExternalLinkAlt className="mr-1" /> Demo
                      </a>
                    )}
                    {project.codeLink && project.codeLink !== "#" && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:text-accent-teal flex items-center">
                        <FaGithub className="mr-1" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <Link to="/projects" className="text-accent-purple hover:text-accent-teal flex items-center justify-center">
            <span>View All Projects</span>
            <FaExternalLinkAlt className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
