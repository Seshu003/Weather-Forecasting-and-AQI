import React from 'react';
import { Wind } from 'lucide-react';
import { AirQualityData, AQI_LEVELS } from '../types/weather';

interface AirQualityCardProps {
  airQuality: AirQualityData;
}

export const AirQualityCard: React.FC<AirQualityCardProps> = ({ airQuality }) => {
  const aqiLevel = AQI_LEVELS[airQuality.aqi as keyof typeof AQI_LEVELS];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md transform transition-all hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Air Quality</h2>
        <Wind className="w-8 h-8 text-blue-500" />
      </div>

      <div className={`text-center p-4 rounded-2xl ${aqiLevel.bg} mb-6`}>
        <span className={`text-xl font-semibold ${aqiLevel.color}`}>
          {aqiLevel.label}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-sm text-blue-600">PM2.5</p>
          <p className="text-xl font-semibold text-blue-900">{airQuality.components.pm2_5} µg/m³</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-sm text-blue-600">PM10</p>
          <p className="text-xl font-semibold text-blue-900">{airQuality.components.pm10} µg/m³</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-sm text-blue-600">NO₂</p>
          <p className="text-xl font-semibold text-blue-900">{airQuality.components.no2} µg/m³</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-sm text-blue-600">O₃</p>
          <p className="text-xl font-semibold text-blue-900">{airQuality.components.o3} µg/m³</p>
        </div>
      </div>
    </div>
  );
};