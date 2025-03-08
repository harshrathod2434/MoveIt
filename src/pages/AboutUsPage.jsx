// src/pages/AboutUsPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <Container className="about-us-page my-5">
      <h2 className="text-center mb-4">About Us</h2>
      
      {/* Company Overview Section */}
      <Row className="mb-5">
        <Col md={6}>
          <img
            src={`${process.env.PUBLIC_URL}/images/about_us.png`}   
            alt="Our Company"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h4>Welcome to Move It!</h4>
          <p className="about-us-text">
            At <strong>Move It</strong>, we are dedicated to making your relocation experience smooth, efficient, and stress-free.
            With years of experience in the industry, we specialize in providing top-notch packing, moving, and unpacking services
            for both residential and commercial clientssss.
          </p>
          <p className="about-us-text">
            Our professional team is trained to handle your belongings with utmost care, ensuring that every move is executed
            with precision and reliability. We pride ourselves on our transparent pricing, timely deliveries, and exceptional customer service.
          </p>
        </Col>
      </Row>

      {/* Core Values Section */}
      <Row className="mb-5">
        <h2 className="text-center mb-4">Our Core Values</h2>
        <Col md={4}>
          <Card className="core-value-card">
            <Card.Body>
              <h5 className="text-primary">Trust & Integrity</h5>
              <p>
                We believe in building long-term relationships with our clients based on honesty, integrity, and mutual trust.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="core-value-card">
            <Card.Body>
              <h5 className="text-primary">Customer Focus</h5>
              <p>
                Our customers are at the heart of everything we do. We listen, understand, and tailor our services to meet their needs.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="core-value-card">
            <Card.Body>
              <h5 className="text-primary">Excellence</h5>
              <p>
                We strive for excellence in every move, ensuring high standards of service and meticulous attention to detail.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Team Section */}
      <Row className="mb-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <Col md={4} className="text-center">
          <div className="team-member">
            <img
              src={`/images/p3.png`}   
              alt="Team Member"
              className="team-img"   
            />
            <h6>John Doe</h6>
            <p>Founder & CEO</p>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <div className="team-member">
            <img
              src={`/images/p1.jpg`}   
              alt="Team Member"
              className="team-img"  
            />
            <h6>Jane Smith</h6>
            <p>Operations Manager</p>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <div className="team-member">
            <img
              src={`/images/p2.png`}   
              alt="Team Member"
              className="team-img"   // Use .team-img class for consistent style
            />
            <h6>Michael Brown</h6>
            <p>Customer Relations</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
