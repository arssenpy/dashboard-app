import type { ActivityItem } from "./types";

type Props = {
  data: ActivityItem[];
};

export default function Activity({ data }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
      <h2 className="font-semibold mb-3">Recent Activity</h2>

      <ul className="text-gray-500 dark:text-gray-400">
        {data.map((item) => (
          <li key={item.id} className="font-bold">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
