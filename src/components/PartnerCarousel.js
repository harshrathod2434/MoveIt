// src/components/PartnerCarousel.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PartnerCarousel = () => {
  // Updated to use your actual logo files
  const partners = [
    { id: 1, logo: '/logo/A1.jpg' },
    { id: 2, logo: '/logo/A2.png' },
    { id: 3, logo: '/logo/A3.jpg' },
    { id: 4, logo: '/logo/A4.jpg' },
    { id: 5, logo: '/logo/A5.jpg' },
    { id: 6, logo: '/logo/A6.png' },
    { id: 7, logo: '/logo/A7.jpg' },
    { id: 8, logo: '/logo/A8.jpg' },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <div className="my-5">
      <h2 className="text-center mb-4">Our Partners</h2>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {partners.map((partner) => (
          <div key={partner.id} className="p-2">
            <img
              src={partner.logo}
              alt={`Partner ${partner.id}`}
              className="img-fluid"
              style={{ maxWidth: '150px', margin: '0 auto', borderRadius: '8px' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PartnerCarousel;
