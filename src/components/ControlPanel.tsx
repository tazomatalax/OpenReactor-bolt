import React from 'react';
import { Play, Pause, Power, RotateCw } from 'lucide-react';

export default function ControlPanel() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Control Panel</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center space-x-2 bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600 transition-colors">
          <Play className="h-5 w-5" />
          <span>Start Process</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-amber-500 text-white p-3 rounded-lg hover:bg-amber-600 transition-colors">
          <Pause className="h-5 w-5" />
          <span>Pause Process</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors">
          <Power className="h-5 w-5" />
          <span>Emergency Stop</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
          <RotateCw className="h-5 w-5" />
          <span>Reset System</span>
        </button>
      </div>
    </div>
  );
}