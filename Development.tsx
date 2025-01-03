import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const notifications = [
  "Where do Quokka's live?",
  "Quokka's live on Rottnest Island.",
];

export const Development = () => {
  const [parent] = useAutoAnimate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/20">
      <h3 className="text-[2.5em] font-['Roboto'] font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Development
      </h3>

      {/* Notification stack */}
      <div ref={parent} className="space-y-3 mb-6">
        {notifications.map((text, index) => (
          <div
            key={index}
            className="bg-purple-500/10 rounded-lg p-4 transform transition-all hover:scale-105"
          >
            <p className="text-white/80">{text}</p>
          </div>
        ))}
      </div>

      {/* Query input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Write your prompt..."
          className="w-full bg-purple-500/10 rounded-lg px-4 py-3 pr-12 text-white/80 border border-purple-500/20 focus:outline-none focus:border-purple-500/50"
        />
        <button
          onClick={() => setExpanded(!expanded)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};