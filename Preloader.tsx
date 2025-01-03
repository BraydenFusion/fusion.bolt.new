import React, { useEffect, useState } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);
  const [showHello, setShowHello] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHello(true), 500);
    const timer2 = setTimeout(() => setShowLine(true), 1000);
    const timer3 = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/40 to-blue-900/40 backdrop-blur-xl">
      <div className="relative text-center">
        <h1 
          className={`text-6xl font-['Roboto'] font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 transform transition-all duration-1000 ${
            showHello ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Hello
        </h1>
        <div 
          className={`h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform transition-all duration-1000 ${
            showLine ? 'w-32' : 'w-0'
          } mx-auto`}
        />
      </div>
    </div>
  );
};