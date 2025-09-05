interface WeatherData {
    name: string;
    weather: { description: string; icon: string }[];
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    wind: { speed: number };
    clouds: { all: number };
    visibility?: number;
    coord?: { lat: number; lon: number };
    cod?: number | string;
  }
 interface ForecastItem {
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
  }

  interface ForecastCardProps {
    city: string;
  }