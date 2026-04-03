export default function Header() {
  return (
    <header className="h-14 border-b bg-white dark:bg-gray-800 flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
        Dashboard
      </h1>

      <div className="text-sm text-gray-500 dark:text-gray-400">User</div>
    </header>
  );
}
