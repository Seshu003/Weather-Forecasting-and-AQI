import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 pl-14 text-lg text-blue-900 bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-2xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all placeholder:text-blue-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-400" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};