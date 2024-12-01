import React, { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { AirQualityCard } from './components/AirQualityCard';
import {
  getWeatherData,
  getWeatherForecast,
  getAirQuality,
} from './services/weatherApi';
import { WeatherData, WeatherForecast, AirQualityData } from './types/weather';
import { DEFAULT_LOCATION } from './config/constants';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (location: string) => {
    setLoading(true);
    setError(null);

    try {
      const weatherData = await getWeatherData(location);
      const [forecastData, airQualityData] = await Promise.all([
        getWeatherForecast(location),
        getAirQuality(weatherData.coordinates.lat, weatherData.coordinates.lon),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);
      setAirQuality(airQualityData);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
      setWeather(null);
      setForecast([]);
      setAirQuality(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(DEFAULT_LOCATION);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Weather Forecast & AQI
          </h1>
          <p className="text-blue-600 text-lg">
            Get real-time weather updates and forecasts
          </p>
        </header>

        <div className="max-w-md mx-auto mb-12">
          <SearchBar onSearch={fetchData} />
        </div>

        {error && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
              {weather && <WeatherCard weather={weather} />}
              {airQuality && <AirQualityCard airQuality={airQuality} />}
            </div>

            {forecast.length > 0 && (
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                  5-Day Forecast
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {forecast.map((day, index) => (
                    <ForecastCard key={index} forecast={day} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
