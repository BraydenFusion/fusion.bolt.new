import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 w-6 h-6 rounded-full mix-blend-difference"
      style={{
        background: 'linear-gradient(135deg, #4ade80 0%, #60a5fa 100%)',
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        transition: 'transform 0.15s ease-out',
        opacity: 0.6,
        boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)',
      }}
    />
  );
};