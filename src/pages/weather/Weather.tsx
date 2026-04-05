import { useEffect } from "react";
import { useWeather } from "../../features/weather/hooks/useWeather";
import { useWeatherSearch } from "../../features/weather/hooks/useWeatherSearch";
import WeatherCard from "../../features/weather/components/WeatherCard";
import ForecastList from "../../features/weather/components/ForecastList";

export default function Weather() {
  const { city, setCity, debouncedCity } = useWeatherSearch();
  const { data, forecast, loading, error, fetchWeather } = useWeather();

  const daily = forecast.filter((_, i) => i % 8 === 0);

  useEffect(() => {
    if (!debouncedCity) return;

    fetchWeather(debouncedCity);
    localStorage.setItem("city", debouncedCity);
  }, [debouncedCity]);

  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2 rounded dark:bg-gray-800 w-full"
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <WeatherCard data={data} />
      <ForecastList data={daily} />
    </div>
  );
}
