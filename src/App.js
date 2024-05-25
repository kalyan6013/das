import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import ProjectDetails from './components/CompletedProjectDetails'
import logo from '../src/images/logo-DAS.png'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from React Icons

import './App.css'
const App = () => {
  return (
    <Router>
      <div style={{fontFamily:"Eurostile"}}>
      <Navbar  expand="lg" className="justify-content-center my-navbar">
          <Navbar.Brand href="/"><img src={logo} width={200}/></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav>
            <Nav style={{marginLeft:'auto'}}>
            <Nav.Link href="https://www.instagram.com/divyarchitecturestudio?igsh=MW84bmNtaHhxcWV4cA==" target="_blank">
          <FaInstagram />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/divya-s-b29a9224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
          <FaLinkedin />
        </Nav.Link>
       
      </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/projects/:id" component={<ProjectDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
