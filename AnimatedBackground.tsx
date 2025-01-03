import React from 'react';
import { AnimatedShape } from './AnimatedShape';

const shapes = [
  { size: 300, color: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)', delay: 0 },
  { size: 200, color: 'linear-gradient(225deg, #000066 0%, #000033 100%)', delay: 2000 },
  { size: 250, color: 'linear-gradient(45deg, #1a1a1a 0%, #000066 100%)', delay: 4000 },
  { size: 180, color: 'linear-gradient(315deg, #000033 0%, #0d0d0d 100%)', delay: 6000 },
];

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape, index) => (
        <AnimatedShape
          key={index}
          size={shape.size}
          color={shape.color}
          delay={shape.delay}
        />
      ))}
    </div>
  );
};