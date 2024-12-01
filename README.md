# Weather Forecast Application

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS that provides current weather conditions, 5-day forecasts, and air quality information.

## Features

- **Current Weather Display**: Shows temperature, conditions, humidity, and wind speed
- **5-Day Weather Forecast**: Daily temperature ranges and weather conditions
- **Air Quality Information**: AQI levels and detailed pollutant measurements
- **Location Search**: Search weather information for any city
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Error Handling**: Graceful error handling with user-friendly messages
- ![image](https://github.com/user-attachments/assets/9e330a97-5746-4f5c-909b-fd73d4239b03)

- **Default Location**: Kakinada set as the default location

## Technical Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/           # React components
│   ├── AirQualityCard.tsx   # Air quality information display
│   ├── ForecastCard.tsx     # Daily forecast card
│   ├── SearchBar.tsx        # Location search component
│   └── WeatherCard.tsx      # Current weather display
├── config/
│   └── constants.ts      # Configuration constants
├── services/
│   └── weatherApi.ts     # API integration services
├── types/
│   └── weather.ts        # TypeScript interfaces
├── utils/
│   └── errorHandling.ts  # Error handling utilities
└── App.tsx              # Main application component
```

## Components

### App.tsx
- Main application container
- Manages application state
- Coordinates data fetching and display
- Handles error states and loading indicators

### WeatherCard
- Displays current weather information
- Shows temperature, condition, humidity, and wind speed
- Uses Lucide icons for weather representation

### ForecastCard
- Shows daily weather forecasts
- Displays min/max temperatures
- Includes weather condition icons
- Formatted date display

### AirQualityCard
- Shows Air Quality Index (AQI)
- Displays detailed pollutant levels
- Color-coded AQI levels
- Pollutant measurements in µg/m³

### SearchBar
- Location search functionality
- Clean, minimalist design
- Immediate search on submission

## API Integration

### Weather API Service
- Uses OpenWeatherMap API
- Three main endpoints:
  1. Current weather
  2. 5-day forecast
  3. Air quality data
- Metric units for temperature and wind speed
- Error handling for API failures

## Types and Interfaces

### WeatherData
```typescript
interface WeatherData {
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
```

### WeatherForecast
```typescript
interface WeatherForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
}
```

### AirQualityData
```typescript
interface AirQualityData {
  aqi: number;
  components: {
    co: number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
  };
}
```

## Error Handling

- Centralized error handling through `errorHandling.ts`
- Specific error messages for common scenarios:
  - Location not found
  - API failures
  - Network errors
- Graceful fallbacks for missing data

## Styling

- Responsive design using Tailwind CSS
- Custom color schemes for AQI levels
- Hover effects and transitions
- Mobile-first approach
- Consistent spacing and typography

## Best Practices

1. **Component Organization**
   - Single responsibility principle
   - Modular component design
   - Clear component hierarchy

2. **Type Safety**
   - Comprehensive TypeScript interfaces
   - Strict type checking
   - Type guards where necessary

3. **Error Management**
   - Centralized error handling
   - User-friendly error messages
   - Graceful degradation

4. **Performance**
   - Efficient state management
   - Optimized re-renders
   - Proper error boundaries

5. **Code Quality**
   - Consistent code style
   - Clear naming conventions
   - Comprehensive documentation

## Future Enhancements

1. **Features**
   - Weather alerts and notifications
   - Historical weather data
   - Multiple location saving
   - More detailed weather information

2. **Technical**
   - Unit tests implementation
   - Performance optimization
   - Offline support
   - Progressive Web App (PWA) capabilities

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Required environment variables:
- `WEATHER_API_KEY`: OpenWeatherMap API key

## Build and Deployment

To build the application:
```bash
npm run build
```

The build output will be in the `dist` directory.
