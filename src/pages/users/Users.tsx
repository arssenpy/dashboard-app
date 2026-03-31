import { useUsers } from "../../features/users/hooks/useUsers";
import { UsersTable } from "../../features/users/components/UsersTable";
import Stats from "../../widgets/stats/Stats";

export default function Users() {
  const { users, error, loading } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <UsersTable users={users} />;
      <Stats />
    </>
  );
}
