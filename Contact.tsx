import React from 'react';
import { CalendarWidget } from '../CalendarWidget';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <CalendarWidget />
        </div>
      </div>
    </section>
  );
};