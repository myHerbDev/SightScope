import React from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              EcoWeb Metrics
            </span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="text-neutral-600 hover:text-emerald-600 transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-emerald-600 transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-emerald-600 transition-colors">Resources</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}