import type { ChartItem } from "./types";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: ChartItem[];
};

export default function Chart({ data }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 h-64 dark:border-gray-700">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#111" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
