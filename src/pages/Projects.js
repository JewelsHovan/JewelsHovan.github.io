import React from 'react';
import './css/Projects.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className="projects">
      <h1>Projects</h1>
      <p>Here are some of the freelance websites I've created using React.js and Google Firebase:</p>
      
      <Row className="project-grid">
        {/* GSAikido */}
        <Col xs={12} md={6} lg={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>GSAikido</Card.Title>
              <Card.Text>
                A website for Granite State Aikido Club.
              </Card.Text>
              <Card.Link href="https://gsaikido.com/" target="_blank" rel="noopener noreferrer">Visit Website</Card.Link>
              <Card.Link href="#" target="_blank" rel="noopener noreferrer">Source Code (Coming Soon)</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* LuccasBooth */}
        <Col xs={12} md={6} lg={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>LuccasBooth</Card.Title>
              <Card.Text>
                A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.
              </Card.Text>
              <Card.Link href="https://luccasartsite.web.app/" target="_blank" rel="noopener noreferrer">Visit Website</Card.Link>
              <Card.Link href="#" target="_blank" rel="noopener noreferrer">Source Code (Coming Soon)</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2>Coding Projects</h2>
      <p>Here are some coding projects I've worked on:</p>

      <ul>
        <li>
          <strong>GPT-Formatter:</strong> Using OpenAI API, using GPT-3 Model to summarize a long piece of text. 
          <a href="https://github.com/username/gpt-formatter" target="_blank" rel="noopener noreferrer">Source Code</a>
        </li>
        <li>
          <strong>MinervaCourseBot:</strong> A software using Selenium and PyQt to automate enrolling in courses at McGill University through the Minerva site. 
          <a href="https://github.com/username/minervacoursebot" target="_blank" rel="noopener noreferrer">Source Code</a>
        </li>
      </ul>
    </Container>
  );
};

export default Projects;