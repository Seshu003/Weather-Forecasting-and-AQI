import { AxiosError } from 'axios';

export const handleApiError = (error: unknown, service: string): Error => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 404) {
      return new Error('Location not found. Please check the city name and try again.');
    }
    return new Error(`Failed to fetch ${service} data. Please try again later.`);
  }
  return error instanceof Error ? error : new Error('An unexpected error occurred');
};