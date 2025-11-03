"use client";

import SharedSectionLayout from "./SharedSectionLayout";
import { useState } from "react";

export default function HotelSection() {
  const [formFields] = useState(
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="City or Destination"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white placeholder-gray-400 outline-none"
        />
        <input
          type="date"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white outline-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="date"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white outline-none"
        />
        <input
          type="number"
          placeholder="Guests"
          className="w-full p-3 rounded-lg bg-[#1c2a44] text-white placeholder-gray-400 outline-none"
        />
      </div>
    </>
  );

  const [results] = useState([
    {
      title: "The Grand Palace",
      subtitle: "5-Star Hotel",
      details: "Near City Center, includes breakfast",
      price: "₹8,999/night",
    },
    {
      title: "Cozy Stay Inn",
      subtitle: "3-Star Hotel",
      details: "2 km from station, Free WiFi",
      price: "₹4,299/night",
    },
  ]);

  return (
    <SharedSectionLayout
      sectionKey="hotel" // ✅ added this line
      title="Hotel"
      formFields={formFields}
      results={results}
    />
  );
}

