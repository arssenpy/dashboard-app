import Stats from "../../widgets/stats/Stats";
import Table from "../../widgets/table/Table";
import Activity from "../../widgets/activity/activity";
import Chart from "../../widgets/chart/chart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <Stats />
      <Chart />
      <Table />
      <Activity />
    </div>
  );
}
