import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Julien Hovan</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as ={Link} to="/cv">CV</Nav.Link>
        <Nav.Link as ={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as ={Link} to="/about">About Me</Nav.Link>
        <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;