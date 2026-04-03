import AppRoutes from "./app/providers/router";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
