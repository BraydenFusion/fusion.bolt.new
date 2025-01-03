import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Fusion.AI
        </div>
        
        <div className="flex space-x-6">
          {[
            { Icon: Twitter, href: '#' },
            { Icon: Github, href: '#' },
            { Icon: Linkedin, href: '#' },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};