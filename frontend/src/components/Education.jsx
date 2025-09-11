import React, { useState, useEffect } from 'react';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/education`);
        const data = await response.json();
        setEducation(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch education data', error);
      }
    };
    fetchEducation();
  }, []);

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.length > 0 ? (
            education.map((edu, index) => (
              <div key={index} className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-text-dark">{edu.institution}</h3>
                <p className="text-xl text-blue-600 mt-2">{edu.degree}</p>
                <p className="text-text-dark mt-1">{edu.date}</p>
                <p className="text-text-dark mt-4">{edu.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No education details available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
