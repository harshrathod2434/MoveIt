// src/components/CustomNavbar.js
import './CustomNavbar.css';

import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo/move_logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="navbar-text text-white fw-bold">Move It</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
        
          
          <input
            type="text"
            placeholder="Search"
            className="custom-search-bar"
          />
          <Button variant="outline-light" style={{ marginLeft: '10px' }}>Search</Button>
          






        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
