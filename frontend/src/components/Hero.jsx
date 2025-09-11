import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hero`);
        const data = await response.json();
        setHero(data);
      } catch (error) {
        console.error('Failed to fetch hero data', error);
      }
    };

    fetchHero();
  }, []);

  // A simple SVG to create an abstract background pattern
  const AbstractBackground = () => (
    <svg width="100%" height="100%" className="absolute inset-0 z-0 opacity-10">
      <defs>
        <pattern id="pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#64ffda" />
          <path d="M 10 10 L 40 40" stroke="#64ffda" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="1" fill="#64ffda" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <AbstractBackground />
      <div className="z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-mono font-bold text-text-light mb-4">{hero.title}</h1>
        <p className="text-xl md:text-2xl text-text-dark mb-8">{hero.subtitle}</p>
        <a href="/projects" className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;