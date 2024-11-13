import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface RecommendationsProps {
  score: number;
}

export default function Recommendations({ score }: RecommendationsProps) {
  const recommendations = [
    {
      title: 'Image Optimization',
      status: score > 75,
      description: 'Compress and properly size images to reduce page load.'
    },
    {
      title: 'Efficient Hosting',
      status: score > 85,
      description: 'Use green hosting providers powered by renewable energy.'
    },
    {
      title: 'Cache Policy',
      status: score > 70,
      description: 'Implement browser caching to reduce server requests.'
    },
    {
      title: 'Code Minification',
      status: score > 80,
      description: 'Minify CSS, JavaScript, and HTML files.'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-neutral-800 mb-6">Recommendations</h2>
      
      <div className="grid gap-6">
        {recommendations.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {item.status ? (
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            )}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}