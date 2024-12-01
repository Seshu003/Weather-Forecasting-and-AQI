import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-6 mt-8 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 text-gray-700">
          <span>Developed</span>
          {/* <Heart className="w-4 h-4 text-red-500 animate-pulse" /> */}
          <span>by</span>
          <span className="font-semibold">Seshu</span>
          <span>and</span>
          <span className="font-semibold">Yaswanth</span>
        </div>
      </div>
    </footer>
  );
};
