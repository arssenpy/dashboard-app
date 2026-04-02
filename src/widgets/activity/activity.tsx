import type { ActivityItem } from "./types";

type Props = {
  data: ActivityItem[];
};

export default function Activity({ data }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">Recent Activity</h2>

      <ul className="text-sm text-gray-600 space-y-2">
        {data.map((item) => (
          <li key={item.id} className="font-bold">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
