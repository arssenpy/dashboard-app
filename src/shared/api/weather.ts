import axios from "axios";

const API_KEY = "4c721c869ecd4a6cf57f99e47c349a41";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: API_KEY,
    units: "metric",
  },
});
