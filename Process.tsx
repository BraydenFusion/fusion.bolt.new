import React from 'react';
import { Coffee, Code, Rocket, Search, Zap } from 'lucide-react';

const steps = [
  {
    icon: Coffee,
    title: 'Consultation',
    description: 'We begin with a detailed discussion of your needs and objectives.'
  },
  {
    icon: Search,
    title: 'Analysis',
    description: 'Our team analyzes your requirements and develops a tailored strategy.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build and customize AI solutions specific to your business.'
  },
  {
    icon: Zap,
    title: 'Testing',
    description: 'Rigorous testing ensures optimal performance and reliability.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Seamless deployment and continuous support for your AI systems.'
  }
];

export const Process = () => {
  return (
    <section id="process" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-['Roboto'] font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in border border-purple-500/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-lg flex items-center justify-center group hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20">
                  <step.icon className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};