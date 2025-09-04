import React from 'react';
import headshot from '../assets/headshot.png'; // Add your headshot to src/assets

const About = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img src={headshot} alt="Your Name" className="rounded-full w-64 h-64 object-cover border-4 border-accent shadow-lg" />
        </div>
        <div>
          <p className="text-text-dark leading-relaxed">
            Hello! I'm a passionate Machine Learning Engineer and Data Scientist with a knack for turning complex data into actionable insights. My journey into the world of AI began with a deep curiosity for how machines can learn and make decisions. I specialize in building and deploying machine learning models, creating data pipelines, and visualizing data to tell compelling stories. I'm always eager to take on new challenges and contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;