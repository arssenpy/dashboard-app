import clsx from "clsx";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(isActive ? "bg-green-300 text-green-500" : "bg-red-300 text-red-500");

export default function Table() {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">Admins</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="py-2 font-semibold">Patrick Bateman</td>
            <td className="font-semibold">bateman@gmail.com</td>
            <td className="text-green-500">Online</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 font-semibold">Dexter Morgan</td>
            <td className="font-semibold">dexter@gmail.com</td>
            <td className="text-red-500">Offline</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
