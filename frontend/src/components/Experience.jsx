import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/experience');
        const data = await response.json();
        setExperiences(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch experience', error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">Work Experience</h2>
      <div className="relative border-l-2 border-accent ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-primary-bg">
              {/* Glowing Node */}
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-text-light">{exp.title}</h3>
            <p className="block mb-2 text-sm font-normal leading-none text-text-dark">{exp.company} | {exp.date}</p>
            <p className="mb-4 text-base font-normal text-text-dark">{exp.description}</p>
          </div>
        )) || <p className="text-text-dark">No experience found.</p>}
      </div>
    </section>
  );
};

export default Experience;