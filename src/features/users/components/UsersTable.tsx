import type { User } from "../types/User";

type Props = {
  users: User[];
};

export function UsersTable({ users }: Props) {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr className="text-left">
            <th className="px-4 py-3 font-medium">ID</th>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3">{u.id}</td>
              <td className="px-4 py-3 font-medium text-gray-900">{u.name}</td>
              <td className="px-4 py-3 text-gray-600">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
