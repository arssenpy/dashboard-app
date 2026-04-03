import StatCard from "./StatCard";
import type { Stat } from "./types";

type Props = {
  data: Stat[];
};

export default function Stats({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
      {data.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
}
