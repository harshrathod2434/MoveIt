// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/2.png"
          alt="Slide 1"
          style={{ objectFit: 'cover', height: '500px' }}  // Adjust height as needed
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/3.png"
          alt="Slide 2"
          style={{ objectFit: 'cover', height: '500px' }}  // Adjust height as needed
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4.png"
          alt="Slide 3"
          style={{ objectFit: 'cover', height: '500px' }}  // Adjust height as needed
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
