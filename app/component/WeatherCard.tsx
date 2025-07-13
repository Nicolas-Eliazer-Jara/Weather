"use client";
import Image from "next/image";
import {iconMap} from "../utils/iconMaps"

export function WeatherCard({ data }: { data: WeatherData }) {
  if (!data) return null;

  const icon = iconMap[data.weather[0].icon] || "day.svg";

  return (
    <div className="bg-[#EFF2F9]  w-[100%] h-[330px] lg:h-[370px] rounded-2xl pt-3">
      <div className="text-[#6E7F8D] bg-[#EFF2F9] pt-6 min-w-[200px] text-center w-[90%]  h-[310px] rounded-2xl shadow-[inset_3px_3px_5px_2px_rgba(181,191,198,0.9)] mx-auto">
        <Image
          className="mx-auto w-20 h-20"
          src={`/icons/${icon}`}
          alt={data.weather[0].description}
          height={900}
          width={900}
        />


        <h2 className="font-bold text-lg">{data.name}</h2>
        <p className="text-sm capitalize">{data.weather[0].description}</p>
        <p className="font-bold text-2xl">{data.main.temp.toFixed(1)}°C</p>

        {/* Datos extra */}
        <div className="flex justify-center pt-5">
        <div className="pr-6">
        <p className="text-xs pt-1 ">Sensación: {data.main.feels_like.toFixed(1)}°C</p>
        <p className="text-xs pt-1">Humedad: {data.main.humidity}%</p>
        <p className="text-xs pt-1">Presión: {data.main.pressure} hPa</p>
        </div>
        <div className="pl-6 ">
        <p className="text-xs pt-1">Viento: {data.wind.speed} m/s</p>
        <p className="text-xs pt-1">Nubes: {data.clouds.all}%</p>
        {data.visibility && (
          <p className="text-xs pt-1">Visibilidad: {(data.visibility / 1000).toFixed(1)} km</p>
        )}
        </div>
      </div>
        </div>
    </div>
  );
}
