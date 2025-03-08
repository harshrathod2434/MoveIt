import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './AboutUsSection.css';

const AboutUsSection = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  return (
    <Container className="about-us-container my-5">
      <Row className="g-4 d-flex align-items-stretch">
        <Col md={6} className="d-flex">
          <Card className="about-card flex-fill">
            <Row className="g-0">
              <Col md={5}>
                <img
                  src="/images/about.jpg"
                  alt="About Us"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h2 className="text-center mb-4">ABOUT US</h2> 
                  <p>
                    Welcome to <strong>Move It</strong> — your trusted partner for seamless relocations! 
                    We ensure a stress-free and efficient moving experience.
                  </p>
                  <p>
                    Our professional team handles everything from packing to unpacking with utmost care, 
                    so you can settle into your new space effortlessly.
                  </p>
                  <p className="text-muted">
                    <em>"Moving made simple, with care and precision — that's our promise to you."</em>
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/about-us')}  // Redirect to About Us page
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        
        <Col md={6} className="d-flex">
          <Card className="enquire-card flex-fill">
            <Card.Body className="text-center d-flex flex-column justify-content-center">
              <h4 className="text-primary">ENQUIRE NOW</h4>
              <p className="mb-4">
                "Planning your next move? Get a free quote today and experience a hassle-free relocation with us! 🚚📦"
              </p>
              <ul className="list-unstyled mb-4">
                <li>✔️ Affordable and Transparent Pricing</li>
                <li>✔️ Safe and Secure Packing</li>
                <li>✔️ Timely Delivery Guaranteed</li>
              </ul>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="primary">Get a Quote</Button>
                <Button
                  variant="outline-primary"
                  onClick={() => navigate('/contact-us')}  // Redirect to Contact Us page
                >
                  Contact Us
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection;
