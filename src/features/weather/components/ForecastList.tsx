type Props = {
  data: any[];
};

export default function ForecastList({ data }: Props) {
  if (!data.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {data.map((item, index) => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString("en-US", { weekday: "short" });
        const fullDate = date.toLocaleDateString();

        return (
          <div
            key={item.dt}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {index === 0 ? "Today" : day}
            </p>

            <p className="text-xs text-gray-400 mb-2">{fullDate}</p>

            <img
              className="mx-auto w-12 h-12"
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather"
            />

            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {Math.round(item.main.temp)}°
            </p>

            <p className="text-xs capitalize text-gray-500 dark:text-gray-400 mt-1">
              {item.weather[0].description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
