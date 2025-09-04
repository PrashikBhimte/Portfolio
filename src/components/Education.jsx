import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaGraduationCap />,
    title: 'M.S. in Computer Science',
    institution: 'Stanford University',
    year: '2019',
  },
  {
    icon: <FaCertificate />,
    title: 'AWS Certified Machine Learning - Specialty',
    institution: 'Amazon Web Services',
    year: '2022',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">Education & Certifications</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {educationData.map((edu, index) => (
          <div key={index} className="text-center">
            <div className="text-accent text-5xl mb-4 mx-auto">{edu.icon}</div>
            <h3 className="text-xl font-bold text-text-light">{edu.title}</h3>
            <p className="text-text-dark">{edu.institution} - {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;