// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import ImageCarousel from './components/ImageCarousel';
import PartnerCarousel from './components/PartnerCarousel';
import Footer from './components/Footer';
import WhyUsSection from './components/WhyUsSection';
import AboutUsPage from './pages/AboutUsPage';
import CategoriesPage from './pages/CategoriesPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsSection from './components/AboutUsSection';  // Added this import
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={
            <>
              <ImageCarousel />
              <AboutUsSection />  {/* Added About Us section back to home */}
              <WhyUsSection />
              <PartnerCarousel />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
