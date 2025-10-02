import React, { useState, useEffect } from 'react';
import headshot from '../assets/headshot.png'; // Add your headshot to src/assets
import { FaFileDownload } from 'react-icons/fa';

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/about`);
        const data = await response.json();
        setAbout(data);
      } catch (error) {
        console.error('Failed to fetch about data', error);
      }
    };

    fetchAbout();
  }, []);

  if (!about) {
    return <div>Loading...</div>;
  }

  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">{about.title}</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img 
            src={headshot} 
            alt="Your Name" 
            className="w-96 h-64 object-cover rounded-lg shadow-lg shadow-text-dark/20" 
            // style={{ maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}
          />
        </div>
        <div>
          <p className="text-text-dark leading-relaxed mb-8">
            {about.description}
          </p>
          <a
            href="https://drive.google.com/file/d/17lUuY3-YpB6eb6Zf8ktjVZbjPTnZCGAA/view?usp=sharing" // Make sure to place your resume in the `public` folder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border-2 border-accent text-accent font-bold py-2 px-6 rounded hover:bg-accent hover:text-white hover:bg-opacity-10 transition-all duration-300"
          >
            <FaFileDownload className="mr-2" />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;