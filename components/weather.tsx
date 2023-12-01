import { fetchWeatherApi } from "openmeteo";
import Image from "next/image";
import sunny from "public/images/sunny.png";
import night from "public/images/moon.png";
import rainy from "public/images/rainy.png";
export default async function Weather() {
  const params = {
    latitude: 38.5816,
    longitude: -121.4944,
    current: [
      "temperature_2m",
      "is_day",
      "precipitation",
      "rain",
      "wind_speed_10m",
      "wind_direction_10m",
    ],
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
    precipitation_unit: "inch",
    timeformat: "unixtime",
    timezone: "America/Los_Angeles",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const current = response.current()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      isDay: current.variables(1)!.value(),
      precipitation: current.variables(2)!.value(),
      rain: current.variables(3)!.value(),
      windSpeed10m: current.variables(3)!.value(),
      windDirection10m: current.variables(5)!.value(),
    },
  };

  const weatherPicture = () => {
    if (weatherData.current.isDay === 0) return "night";
    if (weatherData.current.precipitation === 0) return "sunny";
    return "rainy";
  };
  const picType = weatherPicture();

  return (
    <>
      <div className="">
        <div>
          <h1>Sacramento Weather</h1>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="w-20 h-20">
            {picType === "sunny" && (
              <Image src={sunny} alt="sun picture" className="bg-transparent" />
            )}
            {picType === "rainy" && (
              <Image
                src={rainy}
                alt="rainy cloud picture"
                className="bg-transparent"
              />
            )}
            {picType === "night" && (
              <Image
                src={night}
                alt="moon picture"
                className="bg-transparent"
              />
            )}
          </div>
          <div>
            <p>
              {/* {weatherData.current.time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}{" "} */}
              {weatherData.current.time.toLocaleString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="pl-2 text-xl font-bold">
              {weatherData.current.temperature2m.toFixed(1)}&deg;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
