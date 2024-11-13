import React from 'react';
import { type Recommendation } from '../types';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface RecommendationListProps {
  recommendations: Recommendation[];
}

export function RecommendationList({ recommendations }: RecommendationListProps) {
  const getImpactColor = (impact: Recommendation['impact']) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
    }
  };

  const getIcon = (impact: Recommendation['impact']) => {
    switch (impact) {
      case 'high':
        return AlertCircle;
      case 'medium':
        return Info;
      case 'low':
        return CheckCircle;
    }
  };

  return (
    <div className="w-full max-w-6xl space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Recommendations</h2>
      <div className="grid gap-4">
        {recommendations.map((rec, index) => {
          const Icon = getIcon(rec.impact);
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${getImpactColor(rec.impact)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{rec.title}</h3>
                  <p className="text-gray-600">{rec.description}</p>
                  <span className="inline-block mt-2 text-sm font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {rec.category}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}