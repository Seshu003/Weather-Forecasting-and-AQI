import React from 'react';
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudLightning, CloudSnow } from 'lucide-react';
import { WeatherForecast } from '../types/weather';

interface ForecastCardProps {
  forecast: WeatherForecast;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <Sun className="w-8 h-8 text-yellow-500" />;
    case 'clouds':
      return <Cloud className="w-8 h-8 text-blue-400" />;
    case 'rain':
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    case 'drizzle':
      return <CloudDrizzle className="w-8 h-8 text-blue-400" />;
    case 'thunderstorm':
      return <CloudLightning className="w-8 h-8 text-yellow-600" />;
    case 'snow':
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    default:
      return <Cloud className="w-8 h-8 text-blue-400" />;
  }
};

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const date = new Date(forecast.date);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
  const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition-all transform hover:scale-[1.02]">
      <p className="text-lg font-semibold text-blue-900">{dayName}</p>
      <p className="text-sm text-blue-600">{monthDay}</p>
      <div className="my-4">{getWeatherIcon(forecast.condition)}</div>
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl font-bold text-blue-900">{forecast.temperature.max}°</span>
          <span className="text-blue-400">/</span>
          <span className="text-lg text-blue-600">{forecast.temperature.min}°</span>
        </div>
        <p className="text-sm text-blue-500 mt-2">{forecast.condition}</p>
      </div>
    </div>
  );
};