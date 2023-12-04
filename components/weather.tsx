import Image from "next/image";
import { config } from "./../config";

export default async function Weather() {
  const weatherApiKey = config.weatherApi;
  const params = {
    key: weatherApiKey,
    q: "Sacramento",
  };
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${params.key}&q=${params.q}&aqi=no`,
    { next: { revalidate: 60 } }
  );
  const weather = await res.json();
  // console.log(weather);
  const imageUrl = `http:${weather.current.condition.icon}`;

  return (
    <>
      <div className="flex">
        <Image
          src={imageUrl}
          alt="current weather icon"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <div id="weatherInfo">{weather.location.localtime}</div>
          <div id="weatherInfo">{weather.current.condition.text}</div>
          <div id="weatherInfo">{weather.current.temp_f}</div>
        </div>
      </div>
    </>
  );
}
