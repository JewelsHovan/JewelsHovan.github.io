import React from "react";
import "./css/About.css"; // Ensure your CSS file includes the new styles
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHiking,
  FaMountain,
  FaFistRaised,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <Container className="about px-3 py-3">
      <h1 className="title">About Julien M. Hovan</h1>

      <Row>
        <Col md={6}>
          <h2 className="about-title">About Me</h2>
          <div className="about-content">
            <p>
              I am a dynamic Computer Science and Biology graduate from McGill
              University, blending my passion for biological research with the
              power of AI and Machine Learning. With hands-on experience in data
              mining, web development, and bioinformatics, I have crafted
              solutions from React.js websites to intricate data analysis
              projects. My journey has been driven by curiosity, exploring the
              intricacies of the Drosophila genome and designing sleek,
              user-friendly websites. As I continue to delve into the world of
              data science and web development, I am always eager to take on new
              challenges and collaborate on innovative projects.
            </p>
          </div>
        </Col>

        <Col md={6}>
          <h2 className="hobby-title">Hobbies</h2>
          <div className="about-content">
            {" "}
            {/* Used the same style for consistency */}
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
          </div>
        </Col>
      </Row>

      <div className="education">
        <h2 className="education-title">
          Education <FaGraduationCap className="section-icon" />
        </h2>
        <p>
          McGill University Bachelors of Science in Computer Science and Biology
          2018-2023
        </p>
        <p>
          Prospective Student in the Masters of Applied Data Science (MADS) at
          University of Michigan starting in January 2024
        </p>
      </div>

      <div className="interests">
        <h2 className="interests-title">
          Interests <FaLightbulb className="section-icon" />
        </h2>
        <p>
          I like learning about AI tools, such as large language models and
          generative AI...
        </p>
      </div>

      <div className="goals">
        <h2 className="goals-title">
          Goals <FaRocket className="section-icon" />
        </h2>
        <p>
          Integrating my Front-End Skills with Machine Learning creating
          interfaces and systems...
        </p>
      </div>
    </Container>
  );
};

export default About;
