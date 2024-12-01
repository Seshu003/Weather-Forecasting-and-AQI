import axios from 'axios';
import { WeatherData, WeatherForecast, AirQualityData } from '../types/weather';
import { WEATHER_API_KEY, BASE_URL } from '../config/constants';
import { handleApiError } from '../utils/errorHandling';

export const getWeatherData = async (location: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: WEATHER_API_KEY,
        units: 'metric'
      }
    });

    if (!response.data) {
      throw new Error('No data received from weather API');
    }

    return {
      temperature: Math.round(response.data.main.temp),
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed * 3.6),
      location: response.data.name,
      coordinates: {
        lat: response.data.coord.lat,
        lon: response.data.coord.lon
      }
    };
  } catch (error) {
    throw handleApiError(error, 'weather');
  }
};

export const getAirQuality = async (lat: number, lon: number): Promise<AirQualityData | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/air_pollution`, {
      params: {
        lat,
        lon,
        appid: WEATHER_API_KEY
      }
    });

    if (!response.data?.list?.[0]) {
      return null;
    }

    const data = response.data.list[0];
    return {
      aqi: data.main.aqi,
      components: {
        co: Math.round(data.components.co),
        no2: Math.round(data.components.no2),
        o3: Math.round(data.components.o3),
        pm2_5: Math.round(data.components.pm2_5),
        pm10: Math.round(data.components.pm10)
      }
    };
  } catch (error) {
    console.warn('Air quality data not available:', error);
    return null;
  }
};

export const getWeatherForecast = async (location: string): Promise<WeatherForecast[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: location,
        appid: WEATHER_API_KEY,
        units: 'metric'
      }
    });

    if (!response.data?.list) {
      throw new Error('No forecast data available');
    }

    const dailyForecasts = new Map<string, { temps: number[]; conditions: string[] }>();
    
    response.data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!dailyForecasts.has(date)) {
        dailyForecasts.set(date, { temps: [], conditions: [] });
      }
      const forecast = dailyForecasts.get(date)!;
      forecast.temps.push(item.main.temp);
      forecast.conditions.push(item.weather[0].main);
    });

    return Array.from(dailyForecasts.entries())
      .slice(0, 5)
      .map(([date, data]) => ({
        date,
        temperature: {
          min: Math.round(Math.min(...data.temps)),
          max: Math.round(Math.max(...data.temps))
        },
        condition: data.conditions[Math.floor(data.conditions.length / 2)]
      }));
  } catch (error) {
    throw handleApiError(error, 'forecast');
  }
};