import type { User } from "../types/User";

type Props = {
  users: User[];
};

export function UsersTable({ users }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
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
              className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {u.id}
              </td>

              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                {u.name}
              </td>

              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                {u.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
