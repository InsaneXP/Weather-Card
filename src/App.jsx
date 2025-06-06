import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBox from "./components/SearchBox";
import ToggleControls from "./components/ToggleControls";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        <div className="container mx-auto px-4 py-6 max-w-md flex flex-col items-center space-y-6">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">
              🌤️ Weather
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <SearchBox />
          <ToggleControls />
          <WeatherCard />

          <footer className="pt-6 text-sm text-center opacity-60">
            <p>Made by Rohit | @Powered by OpenWeather</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
