import React from "react";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import "./css/CV.css";

const CV = () => {
  return (
    <Container fluid className="background-image">
      <Container className="cv my-3">
        <Row>
          <Col>
            <h1 className="mb-4">JULIEN M. HOVAN</h1>
            <p>
              34 Ingham Road, Merrimack NH 03054 | 603-320-3104 | <br />
              <Badge
                variant="light"
                className="bg-transparent"
                style={{
                  color: "black",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <a href="mailto:JulienH15@icloud.com">JulienH15@icloud.com</a>
              </Badge>
              <br />
              <Badge
                variant="primary"
                className="bg-transparent"
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 123, 255, 0.6)",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/julien-hovan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </Badge>{" "}
              |{" "}
              <Badge
                variant="dark"
                className="bg-transparent"
                style={{
                  color: "white",
                  backgroundColor: "rgba(52, 58, 64, 0.6)",
                }}
              >
                <a
                  href="https://github.com/julienhovan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Badge>{" "}
              |{" "}
              <Badge
                variant="info"
                className="bg-transparent"
                style={{
                  color: "white",
                  backgroundColor: "rgba(23, 162, 184, 0.6)",
                }}
              >
                <a
                  href="https://julienportfolio-e1395.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </Badge>
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>PROFESSIONAL SUMMARY</h2>
            <p>
              A passionate aspiring Data Scientist with a solid foundation in
              software and web development. Currently enrolled in the Master of
              Applied Data Science program at the University of Michigan, with a
              keen interest in Deep Learning and real-world data analysis.
              Proficient in Python, R, and C++, I excel in extracting,
              analyzing, and leveraging data to make informed decisions. Eager
              to apply my analytical and deep learning skills in roles that
              drive growth and innovation.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="py-2">EDUCATION</h2>
            <ListGroup>
              <ListGroup.Item>
                <p style={{ fontWeight: "bold", fontSize: "larger" }}>
                  University of Michigan, Master of Applied Data Science
                </p>
                <p style={{ fontSize: "large" }}>
                  January 2024 - Expected December 2026
                </p>
                <p>
                  A comprehensive program focusing on applied data science at
                  the intersection of people and technology. The curriculum
                  includes Deep Learning, Machine Learning Pipelines, Natural
                  Language Processing, Cloud Computing for Data Science, and
                  more. The program culminates with capstone projects applying
                  end-to-end data science techniques to real-world scenarios.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p style={{ fontWeight: "bold", fontSize: "larger" }}>
                  McGill University, Montreal, Canada
                </p>
                <p style={{ fontSize: "large" }}>
                  Bachelor of Science in Computer Science and Biology, 2018-2023
                </p>
                Took an interdisciplinary approach, building a solid foundation
                in both computer science and biology. Gained practical
                experience in thinking analytically in the realm of
                bioinformatics.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="py-2">PROFESSIONAL EXPERIENCE</h2>
            <ListGroup>
              <ListGroup.Item>
                <p style={{ fontWeight: "bold", fontSize: "larger" }}>
                  3Genii, Remote | Full Stack Intern (Summer 2021)
                </p>
                Collaborated with a team under the guidance of Founder and Lead
                Developer, Samir Fouzir. Enhanced front-end capabilities and
                acquired foundational back-end skills. Utilized Microsoft Azure
                for development and team collaboration.
              </ListGroup.Item>
              <ListGroup.Item>
                <p style={{ fontWeight: "bold", fontSize: "larger" }}>
                  Freelance Front-End Developer
                </p>
                Developed and deployed websites using the React.js framework.
                Managed hosting and backend services through Google Firebase.
                Notable Client Projects: GSAikido, Luccas Booth Portfolio
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="py-2">RESEARCH & PROJECTS</h2>
            <ListGroup>
              <ListGroup.Item>
                "Intrinsically disordered Proteins in Drosophila" | Under
                Professor Paul Harrison
                <br />
                Analyzed Proteomes from 27 Drosophila species. Developed a
                scraper for efficient data extraction from UniProt.org. Applied
                ML techniques for bioinformatics classification.
              </ListGroup.Item>
              <ListGroup.Item>
                UniProt Scraping Bot (2018)
                <br />
                Designed a selenium-based bot with a GUI for efficient
                interaction with protein databases.
              </ListGroup.Item>
            </ListGroup>

            <h2 className="py-2">RELEVANT EXPERIENCE</h2>
            <ListGroup>
              <ListGroup.Item>
                Greenhouse Effect, Montreal | Co-founder & Web Developer (2019 -
                Present)
                <br />
                Managed the website, focusing on UI updates and data analytics.
                Utilized Google Firebase for traffic monitoring and analytics.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="py-2">SKILLS</h2>
            <ListGroup>
              <ListGroup.Item>
                Programming Languages: Python, R, C++, MATLAB, Java
              </ListGroup.Item>
              <ListGroup.Item>
                Machine Learning: Google Colab, TensorFlow
              </ListGroup.Item>
              <ListGroup.Item>
                Deep Learning: Currently undertaking a comprehensive course on
                Udemy.
              </ListGroup.Item>
              <ListGroup.Item>
                Web Development: React.js, HTML5, Bootstrap/Tailwind.css,
                Javascript, Microsoft Azure, Google Firebase
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="py-2">CERTIFICATIONS</h2>
            <ListGroup>
              <ListGroup.Item>
                IBM: Introduction to Cloud Computing
              </ListGroup.Item>
              <ListGroup.Item>
                Hackerrank: Java (Basic), SQL (Basic), Python (Basic)
              </ListGroup.Item>
              <ListGroup.Item>
                Coursera: IBM Full Stack Developer Professional Certificate (In
                Progress)
              </ListGroup.Item>
              <ListGroup.Item>
                Udemy: Deep-Learning A-Z (In Progress)
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="py-2">EXTRA-CURRICULAR ACTIVITIES</h2>
            <ListGroup>
              <ListGroup.Item>
                <strong>McGill Robotics Team (2021-2023):</strong> Part of the
                software and science division on the Rover Team. Collaborated
                with the team to create a Rock classifier using machine learning
                techniques for the Rover.
              </ListGroup.Item>
              <ListGroup.Item>
                Active participant in Codewars, Hackerrank, and GeeksforGeeks.
              </ListGroup.Item>
              <ListGroup.Item>
                Undertook freelance web design and development projects.
              </ListGroup.Item>
              <ListGroup.Item>
                Wrestling State champion, New Hampshire (2017, 2018). Captain of
                the wrestling team, leading by example and fostering team
                spirit.
              </ListGroup.Item>
              <ListGroup.Item>
                Certified US Judo Federation Junior Coach.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CV;
