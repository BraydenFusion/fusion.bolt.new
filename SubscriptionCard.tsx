import React from 'react';
import { Check } from 'lucide-react';

interface SubscriptionCardProps {
  title: string;
  description: string;
  features: string[];
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <div className="p-6 rounded-2xl bg-[#1E1B29] text-center transform hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold text-[#0033FF] mb-5">{title}</h3>
      <p className="text-[#CCCCCC] mb-8">{description}</p>
      
      <a
        href="https://cal.com/fusion-ai/booking"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full py-3 px-6 rounded-lg bg-[#0033FF] text-white font-semibold hover:bg-[#0055FF] transition-colors duration-300 mb-8"
      >
        Book Your Call
      </a>
      
      <ul className="space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#CCCCCC]">
            <Check className="w-5 h-5 mr-3 text-[#0033FF]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}