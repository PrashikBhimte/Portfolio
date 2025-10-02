import React, { useState, useEffect, useRef } from 'react';

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

  const AbstractBackground = () => {
    const svgRef = useRef(null);
    const circlesRef = useRef([]);
    const linesRef = useRef([]);
    const mouse = useRef({ x: 0, y: 0, radius: 100 }); // Mouse position and interaction radius

    useEffect(() => {
      const svg = svgRef.current;
      if (!svg) return;

      const circles = [];
      const lines = [];

      const createAnimatedCircle = (x, y) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "1");
        circle.setAttribute("fill", "var(--grid-color)");
        circle.style.opacity = 0.3;
        svg.appendChild(circle);
        circles.push({ element: circle, originalR: 1, x, y });
      };

      const createAnimatedLine = (x1, y1, x2, y2) => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "var(--grid-color)");
        line.setAttribute("stroke-width", "0.5");
        line.style.opacity = 0.7;
        svg.appendChild(line);
        lines.push({ element: line, originalStrokeWidth: 0.5, x1, y1, x2, y2 });
      };

      const gridSize = 50;
      const numRows = Math.ceil(window.innerHeight / gridSize);
      const numCols = Math.ceil(window.innerWidth / gridSize);

      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const x = j * gridSize + gridSize / 2;
          const y = i * gridSize + gridSize / 2;

          createAnimatedCircle(x, y);

          if (j < numCols - 1) {
            createAnimatedLine(x, y, x + gridSize, y);
          }
          if (i < numRows - 1) {
            createAnimatedLine(x, y, x, y + gridSize);
          }
        }
      }

      circlesRef.current = circles;
      linesRef.current = lines;

      let animationFrameId = null;

      const handleMouseMove = (e) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;

        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(updateElements);
        }
      };

      const updateElements = () => {
        circlesRef.current.forEach(circle => {
          const dist = Math.sqrt(Math.pow(mouse.current.x - circle.x, 2) + Math.pow(mouse.current.y - circle.y, 2));
          if (dist < mouse.current.radius) {
            const scale = 1 + (1 - dist / mouse.current.radius) * 2;
            circle.element.setAttribute("r", circle.originalR * scale);
            circle.element.style.fill = `rgba(37, 99, 235, ${Math.min(1, (1 - dist / mouse.current.radius) * 1.5)})`;
          } else {
            circle.element.setAttribute("r", circle.originalR);
            circle.element.style.fill = "var(--grid-color)";
          }
        });

        linesRef.current.forEach(line => {
          const midX = (line.x1 + line.x2) / 2;
          const midY = (line.y1 + line.y2) / 2;
          const dist = Math.sqrt(Math.pow(mouse.current.x - midX, 2) + Math.pow(mouse.current.y - midY, 2));
          if (dist < mouse.current.radius) {
            const width = line.originalStrokeWidth + (1 - dist / mouse.current.radius) * 2;
            line.element.setAttribute("stroke-width", width);
            line.element.style.stroke = `rgba(37, 99, 235, ${Math.min(1, (1 - dist / mouse.current.radius) * 1.5)})`;
          } else {
            line.element.setAttribute("stroke-width", line.originalStrokeWidth);
            line.element.style.stroke = "var(--grid-color)";
          }
        });

        animationFrameId = null;
      };

      const handleMouseLeave = () => {
        circlesRef.current.forEach(circle => {
          circle.element.setAttribute("r", circle.originalR);
          circle.element.style.fill = "var(--grid-color)";
        });
        linesRef.current.forEach(line => {
          line.element.setAttribute("stroke-width", line.originalStrokeWidth);
          line.element.style.stroke = "var(--grid-color)";
        });
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      };

      svg.addEventListener('mousemove', handleMouseMove);
      svg.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        svg.removeEventListener('mousemove', handleMouseMove);
        svg.removeEventListener('mouseleave', handleMouseLeave);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        while (svg.firstChild) {
          svg.removeChild(svg.firstChild);
        }
      };
    }, []);

    return (
      <svg ref={svgRef} width="100%" height="100%" className="absolute inset-0 z-0 opacity-70"></svg>
    );
  };

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <AbstractBackground />
      <div className="z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-mono font-bold text-text-light mb-4">{hero.title}</h1>
        <p className="text-xl md:text-2xl text-text-dark mb-8">{hero.subtitle}</p>
        <a href="/projects" className="bg-accent text-white font-bold py-3 px-8 rounded hover:bg-opacity-80 transition-all duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;