import Stats from "../../widgets/stats/Stats";
import Table from "../../widgets/table/Table";
import Activity from "../../widgets/activity/activity";
import Chart from "../../widgets/chart/chart";
import { useDashboard } from "../../features/dashboard/hooks/useDashboard";

export default function Dashboard() {
  const { data, loading, error } = useDashboard();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-6">
      <Stats data={data.stats} />
      <Chart data={data.chart} />
      <Table data={data.admins} />
      <Activity data={data.activity} />
    </div>
  );
}
