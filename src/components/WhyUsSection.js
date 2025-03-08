// src/components/WhyUsSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhyUsSection.css'; // Import the CSS file for animations

const WhyUsSection = () => {
  const cards = [
    {
      id: 1,
      icon: '💼',
      title: 'Professional',
      text: 'Our team of professional movers are trained to prioritize efficiency, organization, and attention to detail.'
    },
    {
      id: 2,
      icon: '🚚',
      title: 'Countrywide',
      text: 'We offer a range of services to suit your individual needs, whether you’re moving locally or across the country.'
    },
    {
      id: 3,
      icon: '💖',
      title: 'Personal Touch',
      text: 'We believe that moving should be an exciting and positive experience, not a stressful one.'
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Why Move With Us?</h2>
      <Row className="g-4">
        {cards.map(card => (
          <Col md={4} key={card.id}>
            <Card className="why-us-card">
              <Card.Body>
                <div className="icon mb-3">{card.icon}</div>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUsSection;
