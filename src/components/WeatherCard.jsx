import React from "react";

function WeatherCard() {
  const temp = "28°C";
  const condition = "Sunny";
  const city = "New York";
  const time = new Date().toLocaleString();

  const conditionIconMap = {
    Sunny: "ri-sun-fill text-yellow-400",
    Clouds: "ri-cloudy-line text-gray-300",
    Rain: "ri-rainy-line text-blue-400",
    Snow: "ri-snowy-line text-blue-200",
    Thunderstorm: "ri-thunderstorms-fill text-yellow-500",
    Drizzle: "ri-drizzle-line text-blue-300",
    Clear: "ri-sun-fill text-yellow-400",
    Mist: "ri-foggy-line text-gray-400",
  };

  const iconClass =
    conditionIconMap[condition] || "ri-weather-fill text-blue-300";

  return (
    <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white w-full p-6 rounded-lg shadow-xl flex flex-col items-center space-y-4 border border-white/20">
      <h2 className="text-lg font-semibold">📍 {city}</h2>
      <p className="text-sm opacity-80">{time}</p>
      <i className={`${iconClass} text-5xl animate-pulse`}></i>
      <h3 className="text-4xl font-bold">{temp}</h3>
      <p className="text-md tracking-wide">{condition}</p>
    </div>
  );
}

export default WeatherCard;
