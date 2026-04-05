type Props = {
  data: any;
};

export default function WeatherCard({ data }: Props) {
  if (!data) return null;

  return (
    <div className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur border dark:border-gray-700 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {data.name}
      </h2>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          <img
            className="w-16 h-16"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather"
          />
          <div>
            <p className="text-sm capitalize text-gray-500 dark:text-gray-400">
              {data.weather[0].description}
            </p>
          </div>
        </div>

        <p className="text-5xl font-bold text-gray-900 dark:text-white">
          {Math.round(data.main.temp)}°
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center">
          <p className="text-xs">Humidity</p>
          <p className="font-semibold">{data.main.humidity}%</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center">
          <p className="text-xs">Wind</p>
          <p className="font-semibold">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
