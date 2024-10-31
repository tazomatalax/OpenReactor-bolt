import React from 'react';
import { Activity, AlertCircle, Settings, BarChart2 } from 'lucide-react';

interface NavbarProps {
  onViewChange: (view: 'main' | 'trends') => void;
  currentView: 'main' | 'trends';
}

export default function Navbar({ onViewChange, currentView }: NavbarProps) {
  return (
    <nav className="bg-slate-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onViewChange('main')}>
          <Activity className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">BioreactorHMI</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
            <AlertCircle className="h-5 w-5" />
            <span>Alarms</span>
          </button>
          <button 
            className={`flex items-center space-x-1 transition-colors ${
              currentView === 'trends' ? 'text-emerald-400' : 'hover:text-emerald-400'
            }`}
            onClick={() => onViewChange('trends')}
          >
            <BarChart2 className="h-5 w-5" />
            <span>Trends</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </nav>
  );
}