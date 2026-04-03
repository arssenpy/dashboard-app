import { NavLink } from "react-router-dom";
import clsx from "clsx";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(
    "block px-4 py-2 rounded-md text-sm transition-colors",
    isActive
      ? "bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-300"
      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
  );

export default function SideBar() {
  return (
    <aside className="w-56 border-r bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3">
      <div className="mb-6 px-2 text-lg font-bold text-black dark:text-white">
        Admin
      </div>

      <nav className="flex flex-col gap-1">
        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          Users
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
