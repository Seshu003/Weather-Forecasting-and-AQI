import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md transform transition-all hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">{weather.location}</h2>
          <p className="text-blue-600 mt-1">{weather.condition}</p>
        </div>
        <Cloud className="w-12 h-12 text-blue-500" />
      </div>
      
      <div className="text-center my-8">
        <span className="text-7xl font-bold text-blue-900">
          {weather.temperature}°
        </span>
        <span className="text-3xl text-blue-700">C</span>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <Droplets className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-blue-600">Humidity</p>
              <p className="text-xl font-semibold text-blue-900">{weather.humidity}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <Wind className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm text-blue-600">Wind Speed</p>
              <p className="text-xl font-semibold text-blue-900">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};