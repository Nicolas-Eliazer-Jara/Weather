"use client";
import { useEffect, useState } from "react";
import { fetchForecast } from "../services/weatherService";

interface ForecastCardProps {
  city: string;
}

interface ForecastItem {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

export default function ForecastCard({ city }: ForecastCardProps) {
  const [isNight, setIsNight] = useState(false);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 20 || hour < 6); // noche entre 20hs y 6hs
  }, []);

  useEffect(() => {
    if (!city) return;
    fetchForecast(city).then((data) => {
      const filtered = data.list.filter((item: ForecastItem) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(filtered);
    });
  }, [city]);

  if (!forecast.length) return null;

  // 🟡 Mapa de íconos animados personalizados
  const iconMap: Record<string, string> = {
    "01d": "day.svg",
    "01n": "night.svg",
    "02d": "cloudy-day-1.svg",
    "02n": "cloudy-night-1.svg",
    "03d": "cloudy.svg",
    "03n": "cloudy.svg",
    "04d": "cloudy.svg",
    "04n": "cloudy.svg",
    "09d": "rainy-1.svg",
    "09n": "rainy-1.svg",
    "10d": "rainy-3.svg",
    "10n": "rainy-3.svg",
    "11d": "thunder.svg",
    "11n": "thunder.svg",
    "13d": "snowy-3.svg",
    "13n": "snowy-3.svg",
    "50d": "fog.svg",
    "50n": "fog.svg",
  };

  return (
    <div className="bg-[#faf2e6] h-full rounded-2xl shadow-inner shadow-gray-300 "> 
      <h3 className="mb-10 pt-2 text-lg  text-black text-center font-semibold">
        Próximos días
      </h3>
      <div className="flex gap-27 w-full overflow-x-auto pl-4 ">
        {forecast.map((item, i) => (
          <div
            key={i}
            className={`${
              isNight ? "bg-[#30312e] text-[#faf2e6]" : "bg-[#faf2e6] text-[#30312e] "
            } rounded-2xl p-3  min-w-[120px] text-center shadow-inner shadow-gray-300`}
          >
            <p className="text-sm">
              {new Date(item.dt_txt).toLocaleDateString("es-AR", {
                weekday: "short",
                day: "numeric",
              })}
            </p>

            {/* ✅ Ícono animado personalizado */}
            <img
              src={`/icons/${iconMap[item.weather[0].icon] || "day.svg"}`}
              alt={item.weather[0].description}
              className="w-30 h-25 mx-auto object-cover"
            />

            <p className="text-sm">{item.weather[0].description}</p>
            <p className="font-bold">{item.main.temp.toFixed(1)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
