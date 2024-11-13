export interface SustainabilityScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  carbon: number;
}

export interface Recommendation {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'bestPractices' | 'seo' | 'carbon';
}