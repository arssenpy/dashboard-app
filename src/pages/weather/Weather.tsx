import WeatherCard from "../../features/weather/components/WeatherCard";
import ForecastList from "../../features/weather/components/ForecastList";
import { useWeather } from "../../features/weather/hooks/useWeather";

export default function Weather() {
  const { city, setCity, data, forecast, loading, error, fetchWeather } =
    useWeather();

  const daily = forecast.filter((_, i) => i % 8 === 0);

  return (
    <div className="flex flex-col gap-4">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2 rounded dark:bg-gray-800 max-w-4xl mx-auto w-full flex flex-col gap-4"
      />

      <button
        onClick={fetchWeather}
        className="bg-white border dark:bg-gray-800 dark:text-white p-2 rounded max-w-4xl mx-auto w-full flex flex-col gap-4"
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="flex justify-center my-6">
        <WeatherCard data={data} />
      </div>

      <ForecastList data={daily} />
    </div>
  );
}
