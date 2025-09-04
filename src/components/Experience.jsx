import React from 'react';

const experiences = [
  {
    role: 'Senior Machine Learning Engineer',
    company: 'Tech Innovations Inc.',
    duration: '2021 - Present',
    description: 'Led the development of a real-time fraud detection system, reducing fraudulent transactions by 25%. Designed and implemented scalable data pipelines using AWS services.'
  },
  {
    role: 'Data Scientist',
    company: 'Data Insights Co.',
    duration: '2019 - 2021',
    description: 'Developed predictive models to forecast customer churn, resulting in a 15% increase in customer retention. Created interactive dashboards with Tableau for business stakeholders.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">Work Experience</h2>
      <div className="relative border-l-2 border-accent ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-primary-bg">
              {/* Glowing Node */}
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-text-light">{exp.role}</h3>
            <p className="block mb-2 text-sm font-normal leading-none text-text-dark">{exp.company} | {exp.duration}</p>
            <p className="mb-4 text-base font-normal text-text-dark">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;