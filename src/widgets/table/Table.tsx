import type { Admins } from "./types";

type Props = {
  data: Admins[];
};

export default function Table({ data }: Props) {
  console.log(data);
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4">
      <h2 className="font-semibold mb-3">Admins</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-t border-gray-200 dark:border-gray-700">
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.email} className="border-t">
              <td className="py-2 font-bold text-gray-500 dark:text-gray-400">
                {item.name}
              </td>
              <td className="font-bold text-gray-500 dark:text-gray-400">
                {item.email}
              </td>
              <td
                className={
                  item.status === "online" ? "text-green-500" : "text-red-500"
                }
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
