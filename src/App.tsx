import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BioreactorStatus from './components/BioreactorStatus';
import ControlPanel from './components/ControlPanel';
import TrendsScreen from './components/TrendsScreen';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'trends'>('main');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onViewChange={setCurrentView} currentView={currentView} />
      <main className="container mx-auto pt-20 p-4">
        {currentView === 'main' ? (
          <div className="grid gap-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Bioreactor Status</h1>
              <p className="text-gray-600 mb-4">Real-time monitoring and control interface</p>
              <BioreactorStatus />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ControlPanel />
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Process Overview</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Batch ID</span>
                    <span className="font-medium text-gray-800">BTH-2024-03-15-001</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Process Stage</span>
                    <span className="font-medium text-emerald-500">Growth Phase</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time Remaining</span>
                    <span className="font-medium text-gray-800">23:45:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">System Status</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Running
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <TrendsScreen />
        )}
      </main>
    </div>
  );
}

export default App;