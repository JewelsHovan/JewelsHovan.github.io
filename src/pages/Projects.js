import React, {useEffect } from "react";
import "./css/Projects.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => {
  // Array of website projects
  const websiteProjects = [
    {
      title: "GSAikido",
      description: "A website for Granite State Aikido Club.",
      link: "https://gsaikido.com/",
      codeLink: "#", // Replace with actual link when available
    },
    {
      title: "LuccasBooth",
      description:
        "A website showcasing Luccas Booth's art portfolio, involving photography, paintings, collage, and drawings.",
      link: "https://luccasartsite.web.app/",
      codeLink: "#", // Replace with actual link when available
    },
    // You can add more projects here in the same format
  ];
  // Initialize your ML projects array
  const mlProjects = [
    {
      title: "Fresh Meat Classifier",
      description:
        "A machine learning model to classify different types of fresh meat. Built using advanced ML techniques and hosted on Hugging Face Spaces with a Gradio interface.",
      link: "https://huggingface.co/spaces/yourusername/fresh-meat-classifier", // Replace with the actual link
      // You can also include a link to the source code if available
      codeLink: "https://github.com/yourusername/fresh-meat-classifier", // Replace with actual GitHub link if available
    },
    // Add more ML projects here in the same format
  ];

  useEffect(() => {
    // Fetch ML projects data from Hugging Face API
    // setMlProjects(fetchedData);
  }, []);

  const renderProjectCard = (project) => (
    <Col xs={12} md={6} lg={4}>
      <Card className="project-card">
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Card.Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Card.Link>
          {project.codeLink && (
            <Card.Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Card.Link>
          )}
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container className="projects">
      <h1>Projects</h1>
      <section>
        <h2>Websites</h2>
        <p>
          Here are some of the freelance websites I've created using React.js
          and Google Firebase:
        </p>
        <Row className="project-grid">
          {websiteProjects.map(renderProjectCard)}
        </Row>
      </section>

      <section>
        <h2>Machine Learning Projects</h2>
        <p>
          Here are some machine learning models I've worked on and deployed to
          Hugging Face Spaces:
        </p>
        <Row className="project-grid">{mlProjects.map(renderProjectCard)}</Row>
      </section>
    </Container>
  );
};

export default Projects;
