"use client";

import SharedSectionLayout from "../SharedSectionLayout";

export default function BusSection() {
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
      title: "Orange Travels",
      subtitle: "Nagpur → Pune",
      details: "10 December • 2 passengers",
      price: "₹850",
    },
    {
      title: "VRL Travels",
      subtitle: "Nagpur → Pune",
      details: "10 December • 2 passengers",
      price: "₹950",
    },
  ];

  return (
    <SharedSectionLayout
      sectionKey="bus"
      title="Bus"
      formFields={formFields}
      results={results}
    />
  );
}
