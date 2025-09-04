import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-6 md:px-12">
        <About />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;