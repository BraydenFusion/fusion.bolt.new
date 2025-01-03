import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: `We work with businesses of all sizes across various industries. Our AI solutions are customized to meet the specific needs of each client, whether you're a startup or an enterprise.`
  },
  {
    question: 'How long does it take to implement an AI solution?',
    answer: 'Implementation timelines vary based on the complexity of your needs. Typically, basic automation solutions can be implemented within 2-4 weeks, while more complex systems may take 2-3 months.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we provide comprehensive ongoing support for all our AI solutions. This includes regular maintenance, updates, and technical support to ensure optimal performance.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We implement industry-leading security measures and follow best practices for data protection. All data is encrypted, and we comply with relevant data protection regulations.'
  },
  {
    question: 'Can you integrate with existing systems?',
    answer: 'Yes, our AI solutions are designed to integrate seamlessly with your existing systems and workflows. We ensure compatibility and smooth operation with your current infrastructure.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="FAQ" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          FAQ
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-black/20 backdrop-blur-lg border border-white/10 overflow-hidden"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-white/60" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white/60" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-6 pt-0 text-white/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};