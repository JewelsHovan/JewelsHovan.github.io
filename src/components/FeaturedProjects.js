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

const FeaturedProjects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const wordLimit = 20; // Set your desired word limit here

  const projects = [
    {
      id: 1,
      title: "GSAikido",
      description: "A website for Granite State Aikido Club, fostering a close-knit community in southern New Hampshire.",
      link: "https://gsaikido.com/",
      codeLink: "#",
      image: gsaikidoImage,
    },
    {
      id: 2,
      title: "LuccasBooth",
      description: "Showcases Luccas Booth's diverse art portfolio, including photography, paintings, collages, and drawings.",
      link: "https://luccasbooth.com/",
      codeLink: "#",
      image: luccasboothImage,
    },
    {
      id: 3,
      title: "Fresh Meat Classifier",
      description: "An ML model that classifies fresh meat types using advanced techniques, deployed on Hugging Face Spaces.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier",
      codeLink: "https://github.com/yourusername/fresh-meat-classifier",
      image: meatImage,
    },
    {
      id: 4,
      title: "Manga Recaps",
      description: "A full-stack web app organizing YouTube recaps for novels and manga, built with Next.js, TypeScript, Tailwind CSS, and Python for data scraping.",
      link: "#", // Add the live link if available
      codeLink: "https://github.com/JewelsHovan/manga-recap-site",
      image: mangaRecapImage,
    },
    {
      id: 5,
      title: "GDP & Life Expectancy Analysis",
      description: "Analyzes the correlation between GDP and life expectancy across six countries (2000-2015) using WHO and World Bank data.",
      link: "https://medium.com/@redhawk1230/exploring-the-relationship-between-gdp-and-life-expectancy-a-comparative-study-of-six-countries-eed6c4301082",
      codeLink: "https://github.com/JewelsHovan/GDP_LifeExpectancy-Analysis",
      image: gdpImage,
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
          className="text-pastel-green-400 hover:text-pastel-green-500 focus:outline-none ml-1 font-medium"
        >
          {expanded[id] ? 'Show Less' : 'Show More'}
        </button>
        {expanded[id] && <span className="ml-1">{words.slice(limit).join(' ')}</span>}
      </>
    );
  };

  return (
    <section id="projects" className="py-16 rounded-3xl bg-beige-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 mb-16">
        <TextHeader
          level={2} 
          className="text-center text-4xl font-bold text-beige-700 mb-8"
        >
          Featured Projects
        </TextHeader>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2 h-full">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[500px] flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-4 border-beige-200 mx-auto max-w-sm">
                {project.image ? (
                  <div className="overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ) : (
                  <ImageFiller 
                    width={400} 
                    height={256} 
                    text={project.title}
                    background="#F5F2EB"
                    color="#333333"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3 text-charcoal-400">{project.title}</h3>
                  <p className="text-charcoal-300 mb-4 flex-grow">
                    {truncateTextWithButton(project.description, wordLimit, project.id)}
                  </p>
                  <div className="mt-auto flex space-x-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pastel-green-400 hover:text-pastel-green-500">
                      Visit Project
                    </a>
                    {project.codeLink && project.codeLink !== "#" && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-pastel-green-400 hover:text-pastel-green-500">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <Link to="/projects" className="text-gold-400 hover:text-gold-500">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
