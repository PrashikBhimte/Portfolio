import React from 'react';
import { Link } from 'react-router-dom';

// We'll move this to a separate data file later
const allProjects = [
  { id: 'project-1', title: 'Awesome ML Model' },
  { id: 'project-2', title: 'Portfolio Website v1' },
  { id: 'project-3', title: 'E-commerce Platform' },
  { id: 'project-4', title: 'Data Visualization Dashboard' },
  { id: 'project-5', title: 'Python Automation Script' },
];

export default function Projects() {
  return (
    <div className='w-full h-full bg-[_#001D38] text-white' style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl font-bold mb-8 text-center'>All Projects</h1>
        <ul className='space-y-4'>
          {allProjects.map(project => (
            <li key={project.id} className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors'>
              <Link to={`/projects/${project.id}`} className='text-2xl'>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}