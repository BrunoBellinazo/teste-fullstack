import axios from 'axios';
import { WeatherResponse } from '../types/weather';

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function getWeather(city: string): Promise<{ temp: number; isRaining: boolean }> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await axios.get<WeatherResponse>(url);

  const temp = response.data.main.temp;
  const isRaining = response.data.weather.some(w => w.main.toLowerCase().includes('rain'));

  return { temp, isRaining };
}