import { useEffect, useState } from "react";
import { getDashboardData } from "../api/getDashboard";

export function useDashboard() {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      setLoading(true);
      const res = await getDashboardData();
      setData(res);
    } catch (err) {
      setError("Failed to load");
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    error,
    loading,
    reload: load,
  };
}
