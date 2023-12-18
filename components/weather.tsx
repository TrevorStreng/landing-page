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
      <div className="flex justify-evenly items-center w-3/4">
        <div className="w-1/3">
          <h1 className="text-center">Weather in Sacramento: </h1>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <div id="weatherInfo">{weather.location.localtime}</div>
          <Image
            src={imageUrl}
            alt="current weather icon"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div id="weatherInfo">{weather.current.condition.text}</div>
          <div id="weatherInfo">{weather.current.temp_f}&deg;F</div>
        </div>
      </div>
    </>
  );
}
