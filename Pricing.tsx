import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$999',
    period: '/month',
    features: [
      '1 Developer',
      'Basic chatbots & Model',
      '5 Monthly  Check Ups',
      'Cancel & pause anytime'
    ]
  },
  {
    name: 'Professional',
    price: '$2,499',
    period: '/month',
    features: [
      '2 developers',
      'Custom chatbots & Models',
      '15 Monthly Check Ups',
      'Cancel & pause anytime',
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      '3 developers',
      'Premium Custom chatbots & Models',
      'Unlimited Check Ups',
      'Cancel & pause anytime',
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Pricing Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-black/20 backdrop-blur-lg border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/60">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-white/80">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg text-white border border-white/10 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};