import React from 'react';

const TestingValidationIcon = ({ className = "w-full h-full max-w-[400px] max-h-[400px]" }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} pointer-events-none drop-shadow-2xl`}
      style={{ overflow: 'visible' }}
    >
      {/* 1. STATIC BASE: The Optical Measurement Grid (Maintains consistency across the set) */}
      <g stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.8">
        <line x1="250" y1="50" x2="250" y2="450" />
        <line x1="50" y1="250" x2="450" y2="250" />
        <circle cx="250" cy="250" r="4" fill="none" />
      </g>

      {/* 2. THE SCANNING PULSE: Sine-wave scaling radius */}
      <circle cx="250" cy="250" r="60" fill="none" stroke="#FFC800" strokeWidth="1" strokeDasharray="8 8">
        {/* Smoothly pulses the radius out and back */}
        <animate 
          attributeName="r" 
          values="60; 130; 60" 
          keyTimes="0; 0.5; 1" 
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" 
          calcMode="spline" 
          dur="3s" 
          repeatCount="indefinite" 
        />
        {/* Fades out as it expands to look like a laser scan */}
        <animate 
          attributeName="opacity" 
          values="0.8; 0; 0.8" 
          keyTimes="0; 0.5; 1" 
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" 
          calcMode="spline" 
          dur="3s" 
          repeatCount="indefinite" 
        />
      </circle>

      {/* 3. THE CNC PROBE: High-speed snapping target */}
      <g>
        {/* The mechanical "snap" animation mimicking a robotic stepper motor moving to test points */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 80,-70; -60,90; 40,60; 0,0"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
          keySplines="0.8 0 0.2 1; 0.8 0 0.2 1; 0.8 0 0.2 1; 0.8 0 0.2 1"
          calcMode="spline"
          dur="5s"
          repeatCount="indefinite"
        />
        
        {/* Crosshair Geometry */}
        <g stroke="#ffffff" strokeWidth="1.5">
          {/* Laser Sight Lines */}
          <line x1="220" y1="250" x2="240" y2="250" />
          <line x1="260" y1="250" x2="280" y2="250" />
          <line x1="250" y1="220" x2="250" y2="240" />
          <line x1="250" y1="260" x2="250" y2="280" />
        </g>
        
        {/* Target Lock Rings */}
        <circle cx="250" cy="250" r="12" fill="none" stroke="#ffffff" strokeWidth="1" />
        <circle cx="250" cy="250" r="16" fill="none" stroke="#FFC800" strokeWidth="0.5" strokeDasharray="2 4" />
        
        {/* Absolute Dead Center Laser Dot */}
        <circle cx="250" cy="250" r="2" fill="#FFC800" />
      </g>
    </svg>
  );
};

export default TestingValidationIcon;
