import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const automationTools = [
  { name: 'Make', icon: '⚡' },
  { name: 'Stack', icon: '📚' },
  { name: 'Zendesk', icon: '🎯' },
  { name: 'Notion', icon: '📝' },
  { name: 'Zapier', icon: '🔄' },
];

export const WorkflowAutomation = () => {
  const [parent] = useAutoAnimate();

  return (
    <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/20">
      <h3 className="text-[2.5em] font-['Roboto'] font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Workflow Automation
      </h3>

      {/* Circular counter */}
      <div className="relative w-32 h-32 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border-2 border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-white/60">Automations</div>
          </div>
        </div>
      </div>

      {/* Animated tool rows */}
      <div ref={parent} className="space-y-4 mb-6">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className={`flex gap-4 animate-scroll-${row % 2 ? 'left' : 'right'}`}
          >
            {automationTools.map((tool, index) => (
              <div
                key={`${row}-${index}`}
                className="flex items-center gap-2 bg-purple-500/10 rounded-lg px-4 py-2"
              >
                <span>{tool.icon}</span>
                <span className="text-white/80">{tool.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="text-white/70">
        We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.
      </p>
    </div>
  );
};