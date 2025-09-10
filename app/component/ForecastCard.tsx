"use client";
import { useEffect, useState } from "react";
import { fetchForecast } from "../services/weatherService";
import { iconMap } from "../utils/iconMaps";
import type { ForecastItem, ForecastCardProps } from "../types/weather";
import Image from "next/image";


export default function ForecastCard({ city }: ForecastCardProps) {

  const [forecast, setForecast] = useState<ForecastItem[]>([]);

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
    <div className="bg-white/20 rounded-2xl shadow-md p-6 mx-6 mt-4 text-[#6d2040]" >
      <h3 className="text-xl font-semibold mb-4 text-center text-[#6d2040]">
        Pronóstico 5 días
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-2 justify-between">
        {forecast.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 min-w-[140px] text-center bg-white shadow hover:shadow-lg transition"
          >
            <p className="text-sm font-medium text-gray-700">
              {new Date(item.dt_txt).toLocaleDateString("es-AR", {
                weekday: "short",
                day: "numeric",
              })}
            </p>

            <Image
              src={`/icons/${iconMap[item.weather[0].icon] || "day.svg"}`}
              alt={item.weather[0].description}
              className="mx-auto w-14 h-14 my-3"
              width={900}
              height={900}
            />

            <p className="text-sm capitalize text-gray-600">
              {item.weather[0].description}
            </p>
            <p className="font-bold text-lg text-[#6d2040]">
              {item.main.temp.toFixed(1)}°C
            </p>
            <p className="text-xs text-gray-500">💧 {item.main.humidity}%</p>
            <p className="text-xs text-gray-500">☁ {item.clouds.all}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
