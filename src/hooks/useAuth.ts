import { useEffect, useState } from "react";

export function useAuth() {
  const [auth, setAuth] = useState({ state: false, name: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("loggedIn");
      if (raw) {
        const parsed = JSON.parse(raw);
        setAuth({
          state: parsed?.state ?? false,
          name: parsed?.name ?? "",
        });
      }
    } catch {
      localStorage.removeItem("loggedIn");
      setAuth({ state: false, name: "" });
    }
  }, []);

  return auth;
}
