import React from "react";

function ToggleControls() {
  return (
    <div className="w-full flex justify-between items-center">
      <button className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
        📍 Use My Location
      </button>
      <button className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
        🌡️ °C / °F
      </button>
    </div>
  );
}

export default ToggleControls;
