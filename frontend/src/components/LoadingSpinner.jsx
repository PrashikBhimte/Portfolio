import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prevStep => (prevStep + 1) % 3); // Cycle between 0, 1, 2
    }, 1000); // Change text every 1 second to complete in 3 seconds

    return () => clearInterval(timer);
  }, []);

  const Neuron = ({ color = 'bg-blue-500', size = 'w-9 h-9' }) => (
    <div className={`${size} ${color} rounded-full`}></div> // Removed animate-pulse
  );

  const Connection = React.memo(({ startX, startY, endX, endY }) => {
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

    return (
      <div
        className="absolute bg-gray-600 h-0.5 transform origin-left"
        style={{
          left: `${startX}px`,
          top: `${startY}px`,
          width: `${length}px`,
          transform: `rotate(${angle}deg)`, // Re-enable rotation
        }}
      >
        {/* Forward Data Flow */}
        <div
          className="absolute w-2 h-2 bg-green-400 rounded-full animate-data-flow"
          style={{
            animationDelay: `0s`,
            animationDuration: `0.7s`, // Increased speed
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            left: '0px', // Ensure it starts at 0 within the parent
            top: '-3.75px', // Center vertically
          }}
        ></div>
        {/* Removed Backward Data Flow */}
      </div>
    );
  });

  // Define neuron positions for a simple 3-layer network
  const inputNeurons = [
    { x: 50, y: 100 },
    { x: 50, y: 200 },
    { x: 50, y: 300 },
  ];

  const hiddenNeurons = [
    { x: 250, y: 50 },
    { x: 250, y: 150 },
    { x: 250, y: 250 },
    { x: 250, y: 350 },
  ];

  const outputNeurons = [
    { x: 450, y: 150 },
    { x: 450, y: 250 },
  ];

  const connections = [];

  // Input to Hidden connections
  inputNeurons.forEach((inputN, i) => {
    hiddenNeurons.forEach((hiddenN, j) => {
      connections.push({
        startX: inputN.x + 16, // Adjust for neuron size
        startY: inputN.y + 16,
        endX: hiddenN.x + 16,
        endY: hiddenN.y + 16,
        delay: (i * 0.1 + j * 0.05) % 1, // Stagger delays
      });
    });
  });

  // Hidden to Output connections
  hiddenNeurons.forEach((hiddenN, i) => {
    outputNeurons.forEach((outputN, j) => {
      connections.push({
        startX: hiddenN.x + 16,
        startY: hiddenN.y + 16,
        endX: outputN.x + 16,
        endY: outputN.y + 16,
        delay: (i * 0.1 + j * 0.05 + 0.5) % 1, // Stagger delays
      });
    });
  });


  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-bg overflow-hidden">
      <div className="w-[330px] h-[220px] sm:w-[450px] sm:h-[300px] lg:w-[600px] lg:h-[400px]">
        <div className="relative w-[600px] h-[400px] flex items-center justify-center scale-[0.55] sm:scale-75 lg:scale-100 origin-top-left">
          {/* Connections */}
          {connections.map((conn, index) => (
            <Connection key={index} {...conn} />
          ))}

          {/* Input Layer Neurons */}
          {inputNeurons.map((pos, i) => (
            <div key={`input-${i}`} className="absolute" style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
              <Neuron color="border-2 border-accent bg-[#0a192f]" />
            </div>
          ))}

          {/* Hidden Layer Neurons */}
          {hiddenNeurons.map((pos, i) => (
            <div key={`hidden-${i}`} className="absolute" style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
              <Neuron color="border-2 border-accent bg-[#0a192f]" />
            </div>
          ))}

          {/* Output Layer Neurons */}
          {outputNeurons.map((pos, i) => (
            <div key={`output-${i}`} className="absolute" style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
              <Neuron color="border-2 border-accent bg-[#0a192f]" />
            </div>
          ))}
        </div>
      </div>
      <p className="absolute bottom-36 text-text-light text-xl">
        {step === 0 && 'Initializing Network...'}
        {step === 1 && 'Processing Data...'}
        {step === 2 && 'Learning & Adapting...'}
      </p>
    </div>
  );
};

export default LoadingSpinner;