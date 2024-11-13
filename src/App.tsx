import React, { useState } from 'react';
import Header from './components/Header';
import UrlInput from './components/UrlInput';
import { ScoreCard } from './components/ScoreCard';
import { RecommendationList } from './components/RecommendationList';
import { Sprout, TreePine } from 'lucide-react';
import type { SustainabilityScore, Recommendation } from './types';
import { analyzeUrl } from './utils/analyzer';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState<SustainabilityScore | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleAnalyze = async (url: string) => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeUrl(url);
      setScore(result.score);
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {!score ? (
          <>
            <UrlInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
            
            <div className="max-w-6xl mx-auto mt-16 mb-24">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Sustainability"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent rounded-2xl flex items-center">
                  <blockquote className="max-w-lg ml-12 text-white">
                    <p className="text-2xl font-serif italic mb-4">
                      "The greatest threat to our planet is the belief that someone else will save it."
                    </p>
                    <footer className="font-medium">- Robert Swan</footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Sprout className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl font-semibold text-neutral-800">Plant a Tree</h2>
                </div>
                <p className="text-neutral-600 mb-6">
                  Make a real impact by planting a tree through our partnership with Tree-Nation.
                  Each tree helps offset carbon emissions and supports local communities.
                </p>
                <a
                  href="https://tree-nation.com/plant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <TreePine className="w-4 h-4" />
                  Plant Now
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                  Sustainable Resources
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://myherb.co.il"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
                    >
                      myHerb - Sustainable Living Guide
                      <span className="text-xs bg-emerald-100 px-2 py-1 rounded-full">Official Partner</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.myherb.co.il"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      Documentation & Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://greenspark.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      Greenspark - Impact Platform
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-12 animate-fade-in">
            <ScoreCard score={score} />
            <RecommendationList recommendations={recommendations} />
            <button
              onClick={() => {
                setScore(null);
                setRecommendations([]);
                setUrl('');
              }}
              className="mx-auto block px-6 py-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              ← Analyze Another Website
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-24">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-neutral-500">
            Make the web more sustainable, one website at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;