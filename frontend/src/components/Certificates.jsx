import React, { useState, useEffect } from 'react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/certificates`);
        const data = await response.json();
        setCertificates(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch certificates data', error);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-text-light mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.length > 0 ? (
            certificates.map((cert, index) => (
              <div key={index} className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-text-dark">{cert.title}</h3>
                <p className="text-xl text-blue-600 mt-2">{cert.issuer}</p>
                <p className="text-text-dark mt-1">{cert.date}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">View Certificate</a>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No certificates available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
