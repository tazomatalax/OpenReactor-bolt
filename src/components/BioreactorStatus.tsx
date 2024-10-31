import React from 'react';
import { Thermometer, Droplets, Activity, Timer, TestTube, Gauge } from 'lucide-react';

interface ParameterCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
}

function ParameterCard({ title, value, unit, icon, trend }: ParameterCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 font-medium">{title}</span>
        <div className="text-emerald-500">{icon}</div>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-800">{value}</span>
        <span className="ml-1 text-gray-500">{unit}</span>
      </div>
    </div>
  );
}

export default function BioreactorStatus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ParameterCard
        title="Temperature"
        value={37.2}
        unit="°C"
        icon={<Thermometer className="h-5 w-5" />}
      />
      <ParameterCard
        title="pH Level"
        value={7.1}
        unit="pH"
        icon={<Droplets className="h-5 w-5" />}
      />
      <ParameterCard
        title="Dissolved Oxygen"
        value={85}
        unit="%"
        icon={<Activity className="h-5 w-5" />}
      />
      <ParameterCard
        title="Agitation"
        value={120}
        unit="RPM"
        icon={<Gauge className="h-5 w-5" />}
      />
      <ParameterCard
        title="Culture Duration"
        value="48:30"
        unit="hours"
        icon={<Timer className="h-5 w-5" />}
      />
      <ParameterCard
        title="Cell Density"
        value={4.2}
        unit="OD600"
        icon={<TestTube className="h-5 w-5" />}
      />
    </div>
  );
}