"use client";
import { useState } from "react";
import { fetchWeather } from "./services/weatherService";
import ForecastCard from "./component/ForecastCard";
import { SearchBar } from "./component/SearchBar";
import { WeatherCard } from "./component/WeatherCard";
import dynamic from "next/dynamic";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<any>(null);

  const WeatherMap = dynamic(() => import("./component/WeatherMap"), {
    ssr: false,
  });

  const handleSearch = async (newCity: string) => {
    setCity(newCity);
    const data = await fetchWeather(newCity);
    setWeather(data);
  };

  return (
    <div className=" w-[95%]  bg-[#EFF2F9] mx-auto rounded-2xl pt-10 pb-4 shadow-2xl">
      <div className=" w-[95%] h-full relative  text-[#6E7F8D] mx-auto p-4 ">
        <div className="bg-[#EFF2F9] h-[80px] ">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="">
          {weather && (
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="w-full md:w-2/4">
                <WeatherCard data={weather} />
              </div>
              {weather.coord && (
                <div className="w-full  md:w-2/4 px-6 pb-6">
                  <WeatherMap lat={weather.coord.lat} lon={weather.coord.lon} />
                </div>
              )}
            </div>
          )}
        </div>
        <div className=" ">
          <ForecastCard city={city} />
        </div>
      </div>
    </div>
  );
}
