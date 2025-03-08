// src/pages/ContactUsPage.js
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '600' }}>Contact Us</h2>
      
      {/* Get in Touch Card */}

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="text-primary mb-3 text-center" style={{ fontSize: '24px', fontWeight: '600' }}>Send Us a Message</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ fontSize: '16px' }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" style={{ fontSize: '16px', borderRadius: '5px' }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ fontSize: '16px' }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" style={{ fontSize: '16px', borderRadius: '5px' }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ fontSize: '16px' }}>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" style={{ fontSize: '16px', borderRadius: '5px' }} />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" style={{ fontSize: '16px' }}>
                  Send Message
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>   
      <br></br>    

      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="p-4 rounded shadow-sm mb-4" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="text-primary mb-3 text-center" style={{ fontSize: '24px', fontWeight: '600' }}>Get in Touch</h4>
            <p style={{ fontSize: '16px', textAlign: 'center' }}>If you have any questions, feel free to reach out to us. Our team is ready to assist you!</p>
            
            <p style={{ fontSize: '16px', textAlign: 'center' }}><strong>Phone:</strong> +91 12345 67890</p>
            <p style={{ fontSize: '16px', textAlign: 'center' }}><strong>Email:</strong> contact@moveit.com</p>
            <p style={{ fontSize: '16px', textAlign: 'center' }}><strong>Address:</strong> 1234 Moving Dadar, Mumbai, India</p>
            
            <hr />
            
            <h5 className="text-primary mb-2 text-center" style={{ fontSize: '20px', fontWeight: '600' }}>Working Hours</h5>
            <p style={{ fontSize: '16px', textAlign: 'center' }}>
              <strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM <br />
              <strong>Sat:</strong> 10:00 AM - 4:00 PM <br />
              <strong>Sun:</strong> Closed
            </p>
            
            <hr />
            
            <h5 className="text-primary mb-2 text-center" style={{ fontSize: '20px', fontWeight: '600' }}>Follow Us</h5>
            <div className="text-center mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary mx-2">Facebook</a> | 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary mx-2">Twitter</a> | 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary mx-2">Instagram</a>
            </div>

            <hr />

            <h5 className="text-primary mb-2 text-center" style={{ fontSize: '20px', fontWeight: '600' }}>Location</h5>
            <p className="text-center" style={{ fontSize: '16px' }}>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                View on Google Maps
              </a>
            </p>
          </Card>
        </Col>
      </Row>

      {/* Send Us a Message Card */}
      
    </Container>
  );
};

export default ContactUsPage;
