"use client";
import { useEffect, useState } from "react";
import { fetchForecast } from "../services/weatherService";
import { iconMap } from "../utils/iconMaps"
import Image from "next/image";




export default function ForecastCard({ city }: ForecastCardProps) {
  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  // Obtener datos del pronóstico al cambiar la ciudad
  useEffect(() => {
    if (!city) return;
    fetchForecast(city).then((data) => {
      if (!data?.list) return;
      const filtered: ForecastItem[] = data.list.filter((item: ForecastItem) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(filtered);
    });
  }, [city]);

  if (!forecast.length) return null;


  return (
    <div className=" bg-[#e6e9ee] rounded-2xl shadow-[inset_3px_3px_5px_rgba(181,191,198,0.9)] p-6 mx-6 h-[100%] ">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Forecast for the next five days
      </h3>
      <div className="lg:flex grid grid-cols-2  lg:gap-19 lg:overflow-x-auto  ">
        {forecast.map((item, i) => (
          <div
            key={i}
            className=" rounded-2xl p-4 mb-4 mx-2 min-w-[140px]  text-center shadow-md bg-[#EFF2F9]"
          >
            <p className="text-sm font-medium">
              {new Date(item.dt_txt).toLocaleDateString("es-AR", {
                weekday: "short",
                day: "numeric",
              })}
            </p>

            <Image
              src={`/icons/${iconMap[item.weather[0].icon] || "day.svg"}`}
              alt={item.weather[0].description}
              className="mx-auto w-16 h-16 my-2"
              width={900}
              height={900}
            />

            <p className="text-sm capitalize">{item.weather[0].description}</p>
            <p className="font-bold">{item.main.temp.toFixed(1)}°C</p>
            <p className="text-xs">Humedad: {item.main.humidity}%</p>
            <p className="text-xs">Nubes: {item.clouds.all}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
