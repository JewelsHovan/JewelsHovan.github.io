import React from 'react';
import './css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHiking, FaMountain, FaFistRaised, FaGraduationCap, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <Container className="about px-3 py-3">
      <h1>About Julien M. Hovan</h1>
      <Row>
        <Col md={6}>
          <p>
            A dynamic Computer Science and Biology graduate from McGill University, I blend my passion for biological research with the power of AI and Machine Learning. With hands-on experience in data mining, web development, and bioinformatics, I've crafted solutions from the ground up, from React.js websites to intricate data analysis projects. My journey has been driven by curiosity, leading me to explore the intricacies of the Drosophila genome or design sleek, user-friendly websites. As I continue to delve into the world of data science and web development, I'm always eager to take on new challenges and collaborate on innovative projects.
          </p>
        </Col>
        <Col md={6}>
          <h2>Hobbies</h2>
          <ul className="hobbies-list">
            <li>
              <FaHiking className="hobby-icon" />
              Hiking
            </li>
            <li>
              <FaFistRaised className="hobby-icon" />
              Judo
            </li>
            <li>
              <FaMountain className="hobby-icon" />
              Wrestling
            </li>
          </ul>
        </Col>
      </Row>

      <h2>Education <FaGraduationCap className="section-icon" /></h2>
      <p>McGill University Bachelors of Science in Computer Science and Biology 2018-2023</p>

      <h2>Interests <FaLightbulb className="section-icon" /></h2>
      <p>I like learning about AI tools, such as large language models and generative AI. I enjoy creating software and understanding how computers work physically.</p>

      <h2>Goals <FaRocket className="section-icon" /></h2>
      <p>Full Stack Developer, Software Engineer, Data Scientist. I want to eventually work with designing and utilizing generative AI, hoping my biology and computer science interdisciplinary background will help me.</p>
    </Container>
  );
};

export default About;