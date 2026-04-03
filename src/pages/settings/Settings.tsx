import { useTheme } from "../../features/theme/useTheme";

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Settings</h1>

      <button onClick={toggleTheme} className="px-4 py-2 border rounded">
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
