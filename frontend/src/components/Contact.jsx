import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [contact, setContact] = useState({ email: '', phone: '', address: '' });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Failed to fetch contact data', error);
      }
    };
    fetchContact();
  }, []);

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-text-light mb-12">Contact</h2>
        <div className="p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <p className="text-lg text-text-dark text-center mb-6">Feel free to reach out to me through the following channels:</p>
          <div className="space-y-4 text-center">
            {contact.email && (
              <p className="text-2xs text-blue-600"><i className="fas fa-envelope mr-2"></i> {contact.email}</p>
            )}
            {contact.phone && (
              <p className="text-2xs text-blue-600"><i className="fas fa-phone mr-2"></i> {contact.phone}</p>
            )}
            {contact.address && (
              <p className="text-2xs text-blue-600"><i className="fas fa-map-marker-alt mr-2"></i> {contact.address}</p>
            )}
            {!contact.email && !contact.phone && !contact.address && (
              <p className="text-text-dark">Contact information not available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
