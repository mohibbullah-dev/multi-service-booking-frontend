import { useEffect, useState } from "react";
import { fetchMe } from "../api/auth";

export function useAuth() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const me = await fetchMe();
        setUser(me);
        localStorage.setItem("user", JSON.stringify(me));
      } catch {
        // Token invalid -> clear it
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    run();
  }, []);

  return { user, loading };
}
