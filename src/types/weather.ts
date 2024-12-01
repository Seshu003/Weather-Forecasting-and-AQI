export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface WeatherForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
}

export interface AirQualityData {
  aqi: number;
  components: {
    co: number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
  };
}

export const AQI_LEVELS = {
  1: { label: 'Good', color: 'text-green-500', bg: 'bg-green-100' },
  2: { label: 'Fair', color: 'text-yellow-500', bg: 'bg-yellow-100' },
  3: { label: 'Moderate', color: 'text-orange-500', bg: 'bg-orange-100' },
  4: { label: 'Poor', color: 'text-red-500', bg: 'bg-red-100' },
  5: { label: 'Very Poor', color: 'text-purple-500', bg: 'bg-purple-100' }
};