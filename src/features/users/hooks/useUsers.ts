import { useState, useEffect } from "react";
import { getUsers } from "../services/getUsers";
import { getUsersStats } from "../services/getUsersStats";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [data, setStats] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const [usersRes, statsRes] = await Promise.all([
        getUsers(),
        getUsersStats(),
      ]);
      setUsers(usersRes.data);
      setStats(statsRes);
    } catch (err) {
      setError("failed to load users");
    } finally {
      setLoading(false);
    }
  }

  return { users, data, loading, error, loadData };
}
