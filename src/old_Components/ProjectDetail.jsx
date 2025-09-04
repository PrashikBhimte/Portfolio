import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { projectId } = useParams();

  return (
    <div className='w-full h-full bg-[_#001D38] text-white' style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl font-bold mb-4'>Project: {projectId}</h1>
        <p>Details for this amazing project will go here. You can fetch project data based on the ID.</p>
      </div>
    </div>
  );
}