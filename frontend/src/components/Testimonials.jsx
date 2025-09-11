import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/testimonials`);
        const data = await response.json();
        setTestimonials(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch testimonials data', error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-text-light mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-text-dark italic mb-4">"{testimonial.quote}"</p>
                <p className="text-blue-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-text-dark col-span-full">No testimonials available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
