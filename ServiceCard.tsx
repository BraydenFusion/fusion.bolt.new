import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="group relative">
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:scale-[1.02]">
        {/* Icon container with glow effect */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative flex items-center justify-center w-full h-full bg-black/50 backdrop-blur rounded-xl border border-white/10">
            <Icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-white/70 leading-relaxed">
          {description}
        </p>

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};