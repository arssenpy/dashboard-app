type Props = {
  title: string;
  value: string | number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
      <p className="text-black dark:text-white">{title}</p>
      <p className="text-black dark:text-white">{value}</p>
    </div>
  );
}
