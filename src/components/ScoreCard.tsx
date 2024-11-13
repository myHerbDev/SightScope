import React from 'react';
import { type SustainabilityScore } from '../types';
import { Activity, Zap, Users, Search, Leaf } from 'lucide-react';

interface ScoreCardProps {
  score: SustainabilityScore;
}

export function ScoreCard({ score }: ScoreCardProps) {
  const metrics = [
    { icon: Zap, label: 'Performance', value: score.performance },
    { icon: Users, label: 'Accessibility', value: score.accessibility },
    { icon: Activity, label: 'Best Practices', value: score.bestPractices },
    { icon: Search, label: 'SEO', value: score.seo },
    { icon: Leaf, label: 'Carbon Score', value: score.carbon },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-6xl">
      {metrics.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-5 h-5 text-emerald-600" />
            <h3 className="font-medium text-gray-700">{label}</h3>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            <span className="text-gray-500 mb-1">/100</span>
          </div>
        </div>
      ))}
    </div>
  );
}