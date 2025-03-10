// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark text-white pt-4 pb-3">
      <Container>
        <Row className="align-items-center text-center">
          
          {/* Quick Links in One Line - Centered */}
          <Col md={6} className="mb-3">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-3">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link to="/about-us" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link to="/categories" className="text-white text-decoration-none">Categories</Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </Col>

          {/* Follow Us Section Aligned and Centered */}
          <Col md={6} className="text-center">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={28} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-white my-3" />

        {/* Copyright and Back to Top */}
        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Move It. All rights reserved.</p>
            <button className="btn btn-outline-light btn-sm mt-2" onClick={scrollToTop}>
              <FaArrowUp /> Back to Toppp
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
//add comment
export default Footer;
