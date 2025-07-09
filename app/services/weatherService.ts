// app/services/weatherService.ts

export async function fetchWeather(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=es`
  );
  return res.json();
}

export async function fetchForecast(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=es`
  );
  return res.json();
}
