import React from 'react';
import { scrollToSection } from '../utils/scroll';

export const Navigation = () => {
  const menuItems = ['services', 'process', 'subscriptions', 'FAQ', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 p-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Fusion.AI
        </div>
        
        <div className="bg-black/40 backdrop-blur-xl rounded-full px-6 py-2 border border-purple-500/20">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-white/80 hover:text-white transition-colors duration-300 relative group text-sm"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}