"use client";

import { useMemo } from "react";

const distances = [
    { date: "Sep 18, 2025", value: 10 },
    { date: "Sep 19, 2025", value: 20 },
];


export default function BikeProgress() {
  const goal = 10000; // total goal in km
  //   const [distance, setDistance] = useState(10);
  //

  const distance = distances.reduce((sum, d) => sum + d.value, 0)

  const percentage = useMemo(() => {
    return Math.min((distance / goal) * 100, 100).toFixed(2);
  }, [distance, goal]);

  return (
    <div className="max-w-[1600px] mx-auto bg-white shadow-lg rounded-2xl p-6">
      {/* Left-aligned heading + progress text */}
      <h2 className="text-2xl font-bold mb-2">🚴 My Biking Journey</h2>
      <p className="text-gray-600 mb-4">
        {distance} km / {goal} km
      </p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Percentage still centered */}
      <p className="text-center mt-2 text-gray-700 font-medium">
        {percentage}% completed
      </p>

      {/* Update controls */}
      {/* <div className="mt-4 flex gap-2">
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Update distance"
        />
        <button
          onClick={() => setDistance(distance)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Update
        </button>
      </div> */}
    </div>
  );
}
