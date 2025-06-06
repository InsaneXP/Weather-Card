import React, { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      console.log("Search for:", input);
      // Pass data to WeatherCard through context or props in real app
      setInput("");
    }
  };

  return (
    <div className="flex w-full space-x-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search city..."
        className="flex-grow p-2 rounded-lg bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;
