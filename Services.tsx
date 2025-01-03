import React from 'react';
import { Bot, Brain, Database, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Custom automation solutions powered by advanced AI to streamline your business processes.'
  },
  {
    icon: Brain,
    title: 'Custom AI Models',
    description: 'Tailored machine learning models designed specifically for your unique business needs.'
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Intelligent data processing and analysis to unlock valuable insights from your data.'
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description: `Real-time monitoring and analytics to optimize your AI systems' performance.`
  }
];

export const Services = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-black/20 backdrop-blur-lg border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 group"
            >
              <service.icon className="w-12 h-12 mb-4 text-green-400 group-hover:text-blue-400 transition-colors duration-300" />
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};