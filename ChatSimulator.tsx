import React, { useState, useEffect } from 'react';

interface Message {
  type: 'user' | 'ai';
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  { type: 'user', text: 'Schedule a Google meeting with John for 3:45PM tomorrow!', time: '8:15 AM' },
  { type: 'ai', text: "I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.", time: '8:15 AM' }
];

export const ChatSimulator = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < initialMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, initialMessages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex * 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 h-[300px] overflow-hidden">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 animate-fade-in ${
              message.type === 'user' ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center
              ${message.type === 'user' ? 'bg-purple-500' : 'bg-blue-500'}`}>
              {message.type === 'user' ? '👤' : '🤖'}
            </div>
            <div className={`flex-1 p-3 rounded-xl ${
              message.type === 'user' ? 'bg-purple-500/20' : 'bg-blue-500/20'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">
                  {message.type === 'user' ? 'You' : 'AI Assistant'}
                </span>
                <span className="text-xs opacity-60">{message.time}</span>
              </div>
              <p className="text-sm opacity-90">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Message AI Assistant..."
          className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-sm border border-white/10 focus:outline-none focus:border-purple-500/50"
          disabled
        />
        <button className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/50">
          ↑
        </button>
      </div>
    </div>
  );
};