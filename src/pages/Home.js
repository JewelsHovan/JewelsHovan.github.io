import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        {/* Add your professional photo here */}
        <h1>Starting My Journey: Where Computer Science, Biology, and AI Converge</h1>
      </div>

      {/* About Me Section */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>I am a recent Computer Science and Biology graduate from McGill University, passionate about leveraging AI and Machine Learning in biological applications. Proficient in R, C++, and Python programming, I have hands-on experience in data mining, web development, and bioinformatics. Eager to apply my analytical and technical skills in data science or analysis roles, I am constantly seeking opportunities to further enhance my expertise.</p>
      </div>

      {/* Skills & Expertise */}
      <div className="skills">
        <h2>Skills & Expertise</h2>
        <ul>
          <li><strong>Programming Languages</strong>: Python, R, C++, MATLAB, Java</li>
          <li><strong>Machine Learning</strong>: Google Colab, Tensor Libraries, Cuda Libraries, TensorFlow, Kaggle Projects</li>
          <li><strong>Web Development</strong>: HTML, CSS, JavaScript, Squarespace, Microsoft Azure, Google Firebase</li>
        </ul>
      </div>

      {/* Recent Work or Featured Projects */}
      <div className="projects">
        <h2>Recent Work or Featured Projects</h2>
        <ul>
          <li><strong>3Genii</strong>: Full Stack Intern, where I collaborated with a team of developers, enhancing my front-end and gaining foundational back-end skills.</li>
          <li><strong>Freelance Front-End Developer</strong>: Developed and deployed websites using React.js framework and utilized Google Firebase for hosting and backend services. Notable projects include GSAikido and Lucca's Booth.</li>
          <li><strong>Research Project</strong>: "Intrinsically disordered Proteins in Drosophila" under Professor Paul Harrison, where I conducted in-depth analysis of Proteomes from 27 Drosophila species, developed a scraper for efficient data extraction from UniProt.org, and applied ML techniques for classification in a bioinformatics context.</li>
          <li><strong>Greenhouse Effect</strong>: Co-founder & Web Developer, where I established and managed the website for 2 years, focusing on UI updates and data analytics.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <p> Thank you for looking at my Page, if you want to contact me for any reason, I welcome it</p>
      </div>
    </div>
  );
};

export default Home;

