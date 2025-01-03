import React from 'react';
import { useAnimatedPosition } from './useAnimatedPosition';

interface AnimatedShapeProps {
  size: number;
  color: string;
  delay: number;
}

export const AnimatedShape: React.FC<AnimatedShapeProps> = ({ size, color, delay }) => {
  const { x, y } = useAnimatedPosition(delay);
  
  return (
    <div
      className="absolute rounded-full blur-3xl mix-blend-multiply"
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.2,
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 8s ease-in-out',
      }}
    />
  );
};