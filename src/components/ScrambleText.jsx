import React, { useState, useEffect, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';

const ScrambleText = ({ text, trigger }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    if (trigger === true) {
      scramble();
    } else if (trigger === false) {
      clearInterval(intervalRef.current);
      setDisplayText(text);
    }
    
    return () => clearInterval(intervalRef.current);
  }, [trigger, text]);

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (letter === ' ' || letter === '\n') return letter;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("")
      );
      
      if (iteration >= text.length) { 
        clearInterval(intervalRef.current);
      }
      
      // Controls speed of reveal
      iteration += 1 / 2; 
    }, 30);
  };

  return (
    <span 
      onMouseEnter={scramble} 
      className="inline-block"
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
