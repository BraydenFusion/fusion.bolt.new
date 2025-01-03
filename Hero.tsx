import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';
import { scrollToSection } from '../utils/scroll';

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold mb-6">
        <TypewriterEffect text="Fusion.AI" />
      </h1>
      
      <p className="text-xl text-white/80 mb-12 animate-fade-in">
        Empowering Businesses with Custom AI Automation Solutions
      </p>
      
      <div className="flex space-x-6">
        <button 
          onClick={() => scrollToSection('services')}
          className="px-8 py-3 rounded-lg bg-black/20 backdrop-blur-lg text-white border border-white/10 hover:bg-black/30 transition-all duration-300 hover:scale-105 animate-pulse"
        >
          Our Services
        </button>
        
        <a
          href="https://cal.com/fusion-ai/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg text-white border border-white/10 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105 animate-pulse flex items-center space-x-2"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};