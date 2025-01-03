import { useState, useEffect } from 'react';

const getRandomPosition = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min) + min);

export const useAnimatedPosition = (delay: number = 0) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: getRandomPosition(-200, window.innerWidth - 100),
        y: getRandomPosition(-200, window.innerHeight - 100),
      });
    };

    const timeout = setTimeout(() => {
      updatePosition();
      const interval = setInterval(updatePosition, 8000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return position;
};