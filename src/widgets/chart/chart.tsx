import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "test", value: 1 },
  { name: "test", value: 2 },
  { name: "test", value: 3 },
  { name: "test", value: 4 },
  { name: "test", value: 5 },
];

export default function Chart() {
  return (
    <div className="border rounded-lg p-4 bg-white h-64">
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
