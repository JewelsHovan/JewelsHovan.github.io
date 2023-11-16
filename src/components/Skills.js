import React from 'react';
import './css/Skills.css'; // Separate CSS file for styling

const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills & Expertise</h2>
            <ul>
                <li><strong>Programming Languages</strong>: Python, R, C++, MATLAB, Java</li>
                <li><strong>Machine Learning</strong>: TensorFlow, Pytorch, FastAI, Gradio</li>
                <li><strong>Web Development</strong>: HTML, CSS, JavaScript, Squarespace, Google Firebase</li>
                <li><strong>Cloud Services</strong>: Microsoft Azure, AWS</li>
            </ul>
        </div>
    );
};

export default Skills;