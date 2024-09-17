import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageFiller from 'react-image-filler';

const FeaturedProjects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    { id: 3, title: 'Project 3', description: 'Description for Project 3' },
    { id: 4, title: 'Project 4', description: 'Description for Project 4' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ImageFiller 
                  width={400} 
                  height={200} 
                  text={`Project ${project.id}`}
                  background="#f0f0f0"
                  color="#333333"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="/projects" className="text-blue-600 hover:underline">Learn More</a>
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