import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change: number;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, change }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <span className={`ml-2 text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  );
};

export default MetricsCard;
