
// WeatherCard.tsx
"use client";
import Image from "next/image";
import { iconMap } from "../utils/iconMaps";
import { Wind, Droplets, Thermometer, Cloud, Eye, Gauge } from "lucide-react";

export function WeatherCard({ data }: { data: WeatherData }) {
  if (!data) return null;

  const icon = iconMap[data.weather[0].icon] || "day.svg";

  return (
    <div className="w-full h-auto rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition">
      <div className="flex flex-col items-center text-center px-10">
        {/* Icono y ciudad */}
        <Image
          className="w-24 h-24 mb-3"
          src={`/icons/${icon}`}
          alt={data.weather[0].description}
          height={900}
          width={900}
        />
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
        <p className="text-lg capitalize text-gray-600">
          {data.weather[0].description}
        </p>
        <p className="text-4xl font-bold text-[#6d2040] mt-2">
          {data.main.temp.toFixed(1)}°C
        </p>
      </div>

      {/* Datos extras */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-orange-500" />
          <span>Sensación: {data.main.feels_like.toFixed(1)}°C</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-blue-500" />
          <span>Humedad: {data.main.humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-gray-500" />
          <span>Presión: {data.main.pressure} hPa</span>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4 text-teal-500" />
          <span>Viento: {data.wind.speed} m/s</span>
        </div>
        <div className="flex items-center gap-2">
          <Cloud className="w-4 h-4 text-gray-400" />
          <span>Nubes: {data.clouds.all}%</span>
        </div>
        {data.visibility && (
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-indigo-500" />
            <span>Visibilidad: {(data.visibility / 1000).toFixed(1)} km</span>
          </div>
        )}
      </div>
    </div>
  );
}
