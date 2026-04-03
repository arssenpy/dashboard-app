import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
  }
  return { theme, toggleTheme };
}
