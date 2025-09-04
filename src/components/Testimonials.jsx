import React from 'react';

const testimonials = [
  {
    quote: "Working with [Your Name] was a game-changer. Their expertise in machine learning helped us unlock new potentials in our data.",
    name: "Jane Doe",
    title: "CEO, Tech Innovations Inc."
  },
  {
    quote: "An exceptional data scientist who combines technical skill with a deep understanding of business needs. Highly recommended.",
    name: "John Smith",
    title: "Product Manager, Data Insights Co."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-primary-bg p-6 rounded-lg border border-accent shadow-lg shadow-accent/10">
            <p className="text-text-dark italic">"{testimonial.quote}"</p>
            <div className="mt-4 text-right">
              <p className="font-bold text-text-light">{testimonial.name}</p>
              <p className="text-sm text-text-dark">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;