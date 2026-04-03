import { useUsers } from "../../features/users/hooks/useUsers";
import { UsersTable } from "../../features/users/components/UsersTable";
import Stats from "../../widgets/stats/Stats";
import Chart from "../../widgets/chart/chart";

export default function Users() {
  const { users, data, error, loading } = useUsers();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <UsersTable users={users} />
      <Stats data={data.stats} />
      <Chart data={data.chart} />
    </>
  );
}
