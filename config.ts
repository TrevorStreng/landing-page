import dotenv from "dotenv";
dotenv.config();
export const config = {
  weatherApi: process.env.WEATHER_API_KEY,
};
export const bgColor = "bg-lime-700";
