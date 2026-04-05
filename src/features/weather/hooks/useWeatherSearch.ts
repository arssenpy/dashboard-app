import { useEffect, useState } from "react";
import { useDebounce } from "../../../shared/hooks/useDebounce";

export function useWeatherSearch() {
  const [city, setCity] = useState("");

  const debouncedCity = useDebounce(city, 400);

  useEffect(() => {
    const saved = localStorage.getItem("city");
    if (saved) setCity(saved);
  }, []);

  return { city, setCity, debouncedCity };
}
