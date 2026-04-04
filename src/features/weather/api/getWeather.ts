import { weatherApi } from "../../../shared/api/weather";

export const getWeather = async (city: string) => {
  const res = await weatherApi.get("/weather", {
    params: { q: city },
  });

  return res.data;
};
