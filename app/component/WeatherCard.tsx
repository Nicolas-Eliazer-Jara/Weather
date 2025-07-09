"use client";
import { useEffect, useState } from "react";


export function WeatherCard({ data }: { data: any }) {

  const [isNight, setIsNight] = useState(false);
  
    useEffect(() => {
      const hour = new Date().getHours();
      setIsNight(hour >= 20 || hour < 6); // noche entre 20hs y 6hs
    }, []);

  if (!data) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  

  return (
    <>
    <div className="bg-[#faf2e6] w-[305px] h-[370px] rounded-2xl pl-6 pt-3">
    <div className={`${isNight ? "text-[#30312e] bg-[#faf2e6] "  : "bg-[#faf2e6] text-[#30312e]"} pt-20 mt-4  min-w-[200px] text-center w-[260px] h-[310px] rounded-2xl shadow-inner shadow-gray-400` }>
      
      <img className="mx-auto " src={iconUrl} alt={data.weather[0].description} />
      <p className="text-sm">
              {new Date(data.dt_txt).toLocaleDateString("es-AR", {
                weekday: "short",
                day: "numeric",
              })}
            </p>
      <h2 className="font-bold">{data.name}</h2>
      <p className="text-sm">{data.weather[0].description}</p>
      <p className="font-bold">{data.main.temp}°C</p>
    </div>
    </div>

    </>
  );
}
