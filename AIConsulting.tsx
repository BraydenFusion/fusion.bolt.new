import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const efficiencyData = [60, 65, 75, 85, 95, 103];
const costData = [100, 90, 80, 75, 70, 67];

export const AIConsulting = () => {
  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Efficiency',
        data: efficiencyData,
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Cost',
        data: costData,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  };

  return (
    <div className="p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/20">
      <h3 className="text-[2.5em] font-['Roboto'] font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        AI Consulting
      </h3>

      <div className="h-[200px] mb-6">
        <Line data={chartData} options={options} />
      </div>

      <p className="text-white/70">
        Our experts provide strategic enabling your business to implement AI solutions that drive transformative growth.
      </p>
    </div>
  );
};