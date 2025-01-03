import React, { useEffect, useState } from 'react';

export const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
      {displayText}
    </span>
  );
};