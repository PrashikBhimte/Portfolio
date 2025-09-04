import React from 'react';
import DetailedProjectCard from '../components/DetailedProjectCard';

// Mock data for projects
const projectsData = [
  {
    title: 'Neural Network Visualization',
    description: 'An interactive 3D visualization of a neural network built with Three.js and React. Users can explore different layers, nodes, and connections, with real-time data flow simulation.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Vite'],
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Sentiment Analysis API',
    description: 'A RESTful API developed with Python and Flask that performs sentiment analysis on text data. It uses a pre-trained model from Hugging Face Transformers to classify text as positive, negative, or neutral.',
    technologies: ['Python', 'Flask', 'Hugging Face', 'Docker'],
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'E-commerce Recommendation Engine',
    description: 'A collaborative filtering recommendation engine for an e-commerce platform. Built with Python, Pandas, and Scikit-learn, it suggests products to users based on their past purchase history.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    liveDemo: '#',
    sourceCode: '#',
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-center text-text-light mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <DetailedProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;