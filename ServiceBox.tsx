import React from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, children }) => {
  return (
    <div className="relative group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
      
      <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-white/70 mb-8">
          {description}
        </p>
        
        {children}
      </div>
    </div>
  );
};