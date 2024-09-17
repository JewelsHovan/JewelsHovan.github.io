import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CV from './CV';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Tutor from './Tutor';

const RoutesContainer = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutor" element={<Tutor />} />
      </Routes>
    );
  };
  
  export default RoutesContainer;

  