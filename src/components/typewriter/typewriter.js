import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const textArray = [
    "Web Development",
    "Mobile App Development",
    "Data Scraping",
    "Automation Solutions"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // Function to generate the backspace effect 
  const delWriter = (text, i, cb) => {
    if (i >= 0) {
      setDisplayText(text.substring(0, i));
      const rndBack = 10 + Math.random() * 100; // Random backspace delay
      setTimeout(() => {
        delWriter(text, i - 1, cb);
      }, rndBack);
    } else if (typeof cb === 'function') {
      setTimeout(cb, 1000); // Pause before typing next text
    }
  };

  // Function to generate the key hitting effect
  const typeWriter = (text, i, cb) => {
    if (i < text.length + 1) {
      setDisplayText(text.substring(0, i));
      const rndTyping = 250 - Math.random() * 100; // Random typing delay
      setTimeout(() => {
        typeWriter(text, i + 1, cb);
      }, rndTyping);
    } else if (i === text.length + 1) {
      setTimeout(() => {
        delWriter(text, i, cb);
      }, 1000);
    }
  };

  // The main writer function
  const startWriter = (i) => {
    if (typeof textArray[i] === "undefined") {
      setTimeout(() => {
        startWriter(0);
      }, 1000);
    } else {
      typeWriter(textArray[i], 0, () => {
        startWriter(i + 1);
      });
    }
  };

  useEffect(() => {
    // Start the typewriter effect after component mounts
    const timer = setTimeout(() => {
      startWriter(0);
    }, 1000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default Typewriter;
