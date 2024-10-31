import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Clock, Download } from 'lucide-react';

// Mock data generation
const generateData = (hours: number) => {
  const data = [];
  for (let i = 0; i < hours * 60; i++) {
    data.push({
      time: i,
      temperature: 37 + Math.sin(i / 30) * 0.5 + (Math.random() - 0.5) * 0.2,
      pH: 7.1 + Math.sin(i / 45) * 0.2 + (Math.random() - 0.5) * 0.1,
      do: 85 + Math.sin(i / 60) * 5 + (Math.random() - 0.5) * 2,
      agitation: 120 + Math.sin(i / 40) * 3 + (Math.random() - 0.5),
    });
  }
  return data;
};

const timeRanges = [
  { label: '1 Hour', value: 1 },
  { label: '4 Hours', value: 4 },
  { label: '8 Hours', value: 8 },
  { label: '24 Hours', value: 24 },
];

const parameters = [
  { id: 'temperature', label: 'Temperature', color: '#ef4444', unit: '°C' },
  { id: 'pH', label: 'pH Level', color: '#3b82f6', unit: 'pH' },
  { id: 'do', label: 'Dissolved Oxygen', color: '#10b981', unit: '%' },
  { id: 'agitation', label: 'Agitation', color: '#8b5cf6', unit: 'RPM' },
];

export default function TrendsScreen() {
  const [timeRange, setTimeRange] = useState(4);
  const [selectedParams, setSelectedParams] = useState(parameters.map(p => p.id));
  const data = generateData(timeRange);

  const toggleParameter = (paramId: string) => {
    setSelectedParams(prev =>
      prev.includes(paramId)
        ? prev.filter(id => id !== paramId)
        : [...prev, paramId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Process Trends</h1>
        <button className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
          <Download className="h-4 w-4" />
          <span>Export Data</span>
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Time Range:</span>
            <div className="flex space-x-2">
              {timeRanges.map(range => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    timeRange === range.value
                      ? 'bg-slate-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: 'Time (minutes)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                labelFormatter={(value) => `Time: ${value} min`}
              />
              <Legend />
              {parameters.map(param => (
                selectedParams.includes(param.id) && (
                  <Line
                    key={param.id}
                    type="monotone"
                    dataKey={param.id}
                    name={`${param.label} (${param.unit})`}
                    stroke={param.color}
                    dot={false}
                    strokeWidth={2}
                  />
                )
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {parameters.map(param => (
            <button
              key={param.id}
              onClick={() => toggleParameter(param.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm ${
                selectedParams.includes(param.id)
                  ? 'bg-slate-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: param.color }} />
              <span>{param.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}