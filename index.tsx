import React from 'react';
import { WorkflowAutomation } from './WorkflowAutomation';
import { Development } from './Development';
import { AIConsulting } from './AIConsulting';

export const AdditionalServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <WorkflowAutomation />
      <Development />
      <AIConsulting />
    </div>
  );
};