import { weatherApi } from "../../../shared/api/weather";

export const getForecast = async (city: string) => {
  const res = await weatherApi.get("/forecast", {
    params: { q: city },
  });

  return res.data;
};
