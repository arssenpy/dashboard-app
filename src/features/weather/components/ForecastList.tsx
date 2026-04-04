type Props = {
  data: any[];
};

export default function ForecastList({ data }: Props) {
  if (!data.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {data.map((item) => (
        <div
          key={item.dt}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-4 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(item.dt * 1000).toLocaleDateString()}
          </p>

          <img
            className="mx-auto"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt="weather"
          />

          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {Math.round(item.main.temp)}°C
          </p>
        </div>
      ))}
    </div>
  );
}
