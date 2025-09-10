"use client";
import { useState } from "react";
import { fetchWeather } from "./services/weatherService";
import ForecastCard from "./component/ForecastCard";
import { SearchBar } from "./component/SearchBar";
import { WeatherCard } from "./component/WeatherCard";
import dynamic from "next/dynamic";
import type { WeatherData } from "./types/weather"

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [error, setError] = useState<string | null>(null);

  const WeatherMap = dynamic(() => import("./component/WeatherMap"), {
    ssr: false,
  });

  const handleSearch = async (newCity: string) => {
    setCity(newCity);
    setError(null);
  
    if (!newCity) {
      setWeather(null);
      setError("Por favor ingrese una ciudad"); // mismo estilo de error
      return;
    }
  
    try {
      const data = await fetchWeather(newCity);
      if (!data || data.cod === "404") {
        setWeather(null);
        setError("Ciudad no encontrada");
        return;
      }
      setWeather(data);
    } catch (err) {
      console.error(err);
      setWeather(null);
      setError("Ocurrió un error al buscar la ciudad");
    }
  };
  

  return (
    <div>
    <div className="w-[95%] bg-white/20 backdrop-blur mx-auto rounded-2xl pt-10 pb-4 shadow-2xl">
      <div className="w-[95%] h-full relative text-[#6E7F8D] mx-auto p-4">
        <div className=" h-[80px]">
          <SearchBar onSearch={handleSearch} />
        </div>
       


        {/* Mostrar clima solo si no hay error */}
        {weather && !error && (
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="w-full md:w-2/4">
              <WeatherCard data={weather} />
            </div>
            {weather.coord && (
              <div className="w-full md:w-2/4 px-6 pb-6">
                <WeatherMap lat={weather.coord.lat} lon={weather.coord.lon} />
              </div>
            )}
          </div>
        )}

        {/* Mostrar forecast solo si no hay error */}
        {!error && <ForecastCard city={city} />}
      </div>

    </div>

{/* Mostrar mensaje de error si hay */}
{error && (
          <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-lg max-w-sm mx-auto mt-10">
          <p className="text-[#6d2040] text-center">{error}</p>
          </div>
        )}

</div>
    
  );
}
