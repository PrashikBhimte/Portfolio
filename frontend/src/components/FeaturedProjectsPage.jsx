import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const FeaturedProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/featured`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="featured-projects" className="py-24">
      <h2 className="text-3xl font-mono font-bold text-center text-text-light mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={handleOpenModal} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/projects" className="bg-primary-light text-background-dark font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors">
          View More
        </Link>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default FeaturedProjectsPage;