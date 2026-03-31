import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Users" value={120} />
      <StatCard title="Revenue" value="$3,400" />
      <StatCard title="Orders" value={89} />
      <StatCard title="Growth" value="+12%" />
    </div>
  );
}
