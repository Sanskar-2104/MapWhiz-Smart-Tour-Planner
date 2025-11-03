"use client";

import SharedSectionLayout from "../SharedSectionLayout";
//import TrainPath from "../animations/TrainPath";

export default function TrainSection() {
  const formFields = (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-600 dark:text-gray-300 text-sm mb-1">From</label>
        <input
          type="text"
          placeholder="Enter City"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
        />
      </div>
      <div>
        <label className="block text-gray-600 dark:text-gray-300 text-sm mb-1">To</label>
        <input
          type="text"
          placeholder="Enter City"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 dark:text-gray-300 text-sm mb-1">Departure</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block text-gray-600 dark:text-gray-300 text-sm mb-1">Return</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-600 dark:text-gray-300 text-sm mb-1">Passengers</label>
        <input
          type="number"
          placeholder="Enter number of passengers"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
        />
      </div>
    </div>
  );

  const results = [
    {
      title: "Duranto Express",
      subtitle: "Nagpur → Mumbai",
      details: "10 December • 4 guests",
      price: "₹1200",
    },
    {
      title: "Rajdhani Express",
      subtitle: "Nagpur → Mumbai",
      details: "10 December • 4 guests",
      price: "₹1450",
    },
  ];

  return (
    <SharedSectionLayout
      sectionKey="train"
      title="Train"
      formFields={formFields}
      results={results}
    />
  );
}
