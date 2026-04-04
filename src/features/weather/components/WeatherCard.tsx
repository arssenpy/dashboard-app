type Props = {
  data: any;
};

export default function WeatherCard({ data }: Props) {
  if (!data) return null;

  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {data.name}
      </h2>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather"
        />
        <p className="text-4xl font-bold text-gray-900 dark:text-white">
          {Math.round(data.main.temp)}°C
        </p>
      </div>

      <p className="text-gray-500 dark:text-gray-400 capitalize mt-2">
        {data.weather[0].description}
      </p>

      <div className="flex gap-6 mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span>💧 {data.main.humidity}%</span>
        <span>💨 {data.wind.speed} m/s</span>
      </div>
    </div>
  );
}
