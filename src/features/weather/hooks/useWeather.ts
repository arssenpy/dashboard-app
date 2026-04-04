import { useState } from "react";
import { getWeather } from "../api/getWeather";
import { getForecast } from "../api/getForecast";

export function useWeather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchWeather() {
    if (!city) return;

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
      setCity("");
      setLoading(false);
    }
  }

  return {
    city,
    setCity,
    data,
    forecast,
    loading,
    error,
    fetchWeather,
  };
}
