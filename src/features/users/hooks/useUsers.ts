import { useState, useEffect } from "react";
import { getUsers } from "../services/getUsers";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      setError("failed to load users");
    } finally {
      setError(null);
      setLoading(false);
    }
  }

  return { users, loading, error, loadUsers };
}
