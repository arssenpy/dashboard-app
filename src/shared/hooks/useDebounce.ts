import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debounce, setDebounce] = useState<T>(value);
  useEffect(() => {
    const time = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(time);
  }, [value, delay]);

  return debounce;
}
