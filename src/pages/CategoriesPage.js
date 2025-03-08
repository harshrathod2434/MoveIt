// src/pages/CategoriesPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [openCard, setOpenCard] = useState(null);

  const categories = [
    {
      title: 'Residential Moving',
      shortDescription: 'Safe and reliable home moving services.',
      fullDescription: 'We offer comprehensive residential moving services including packing, loading, transportation, and unpacking. Our team ensures that your belongings reach their new home safely and on time.',
      image: '/images/2.png',
    },
    {
      title: 'Commercial Moving',
      shortDescription: 'Efficient office relocation solutions.',
      fullDescription: 'Our commercial moving services minimize downtime and ensure a smooth transition for your business. We handle everything from office furniture to sensitive equipment.',
      image: '/images/3.png',
    },
    {
      title: 'International Moving',
      shortDescription: 'Hassle-free international moving services.',
      fullDescription: 'We manage international moves with comprehensive logistics, customs clearance, and reliable international shipping partners to make your move stress-free.',
      image: '/images/4.png',
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={category.image} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.shortDescription}</Card.Text>
                
                <Collapse in={openCard === index}>
                  <div>
                    <Card.Text className="text-muted">
                      {category.fullDescription}
                    </Card.Text>
                  </div>
                </Collapse>
                
                <Button
                  variant="primary"
                  onClick={() =>
                    setOpenCard(openCard === index ? null : index)
                  }
                  aria-controls="example-collapse-text"
                  aria-expanded={openCard === index}
                >
                  {openCard === index ? 'Show Less' : 'Learn More'}
                </Button>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesPage;
