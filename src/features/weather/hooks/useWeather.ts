import { useState, useEffect } from "react";
import { getWeather } from "../api/getWeather";
import { getForecast } from "../api/getForecast";

export function useWeather() {
  const [data, setData] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchWeather(city: string) {
    localStorage.setItem("city", city);

    try {
      setLoading(true);
      setError(null);

      const [weatherRes, forecastRes] = await Promise.all([
        getWeather(city),
        getForecast(city),
      ]);

      setData(weatherRes);
      setForecast(forecastRes.list);
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError("Invalid City");
      } else if (err.response?.status === 401) {
        setError("Invalid API key");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    fetchWeather,
    data,
    forecast,
    loading,
    error,
  };
}
