import React from 'react';
import './css/FeaturedProjects.css'; // Separate CSS file for styling

const FeaturedProjects = () => {
    return (
        <div className="featured-projects">
            <h2>Recent Work or Featured Projects</h2>
            <ul>
                <li><strong>3Genii</strong>: Full Stack Intern, where I collaborated with a team of developers, enhancing my front-end and gaining foundational back-end skills.</li>
                <li><strong>Freelance Front-End Developer</strong>: Developed and deployed websites using React.js framework and utilized Google Firebase for hosting and backend services. Notable projects include GSAikido and Lucca's Booth.</li>
                <li><strong>Research Project</strong>: "Intrinsically disordered Proteins in Drosophila" under Professor Paul Harrison, where I conducted in-depth analysis of Proteomes from 27 Drosophila species, developed a scraper for efficient data extraction from UniProt.org, and applied ML techniques for classification in a bioinformatics context.</li>
                <li><strong>Greenhouse Effect</strong>: Co-founder & Web Developer, where I established and managed the website for 2 years, focusing on UI updates and data analytics.</li>
                <li><strong>Fresh Meat Classifier</strong>: Worked on a project to distinguish between Fresh, Half-Fresh and Spoiled meat.</li>
            </ul>
        </div>
    );
};

export default FeaturedProjects;