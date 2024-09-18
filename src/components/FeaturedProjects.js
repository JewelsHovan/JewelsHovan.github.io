import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageFiller from 'react-image-filler';
import TextHeader from './TextHeader';
import gsaikidoImage from '../assets/images/gsaikido.jpg';
import luccasboothImage from '../assets/images/luccasbooth.jpg';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "GSAikido",
      description: "A website for Granite State Aikido Club, an aikido club in southern New Hampshire run by a small tight-knit community.",
      link: "https://gsaikido.com/",
      codeLink: "#",
      image: gsaikidoImage,
    },
    {
      id: 2,
      title: "LuccasBooth",
      description: "A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.",
      link: "https://luccasartsite.web.app/",
      codeLink: "#",
      image: luccasboothImage,
    },
    {
      id: 3,
      title: "Fresh Meat Classifier",
      description: "A ML model to classify fresh meat types. Built with advanced techniques and hosted on Hugging Face Spaces.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier",
      codeLink: "https://github.com/yourusername/fresh-meat-classifier",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <TextHeader level={2} className="text-center">Featured Projects</TextHeader>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2 h-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <ImageFiller 
                    width={400} 
                    height={200} 
                    text={project.title}
                    background="#f0f0f0"
                    color="#333333"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">Visit Project</a>
                    {project.codeLink && project.codeLink !== "#" && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source Code</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <a href="/projects" className="text-blue-600 hover:underline">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;