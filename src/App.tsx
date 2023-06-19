import React from 'react';
import MetricsCard from './components/Dashboard/MetricsCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">AI Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricsCard title="Total Inference" value="1.2M" change={12} />
        <MetricsCard title="Avg Latency" value="45ms" change={-5} />
        <MetricsCard title="Accuracy" value="99.2%" change={0.4} />
      </div>
    </div>
  );
}

export default App;
