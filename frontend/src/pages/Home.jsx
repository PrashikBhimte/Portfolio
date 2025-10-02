import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjectsPage from '../components/FeaturedProjectsPage';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-6 md:px-12">
        <About />
        <FeaturedProjectsPage />
        <Experience />
        <Education />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;