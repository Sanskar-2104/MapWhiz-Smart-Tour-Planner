"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrainSection from "./TrainSection";
import BusSection from "./BusSection";
import FlightSection from "./FlightSection";
import Banner from "../Banner";

export default function CityToCitySelector() {
  const [selectedMode, setSelectedMode] = useState<"train" | "bus" | "flight">("train");

  const handleSelect = (mode: "train" | "bus" | "flight") => {
    setSelectedMode(mode);
  };

  const renderSection = () => {
    switch (selectedMode) {
      case "bus":
        return <BusSection />;
      case "flight":
        return <FlightSection />;
      default:
        return <TrainSection />;
    }
  };

  return (
    <div className="w-full">
      {/* ✅ Just pass section instead of image + title */}
      <Banner section={selectedMode} />

      {/* Selector Tabs */}
      <div className="flex justify-center mt-8 space-x-4">
        {["train", "bus", "flight"].map((mode) => (
          <button
            key={mode}
            onClick={() => handleSelect(mode as "train" | "bus" | "flight")}
            className={`px-6 py-2 font-semibold rounded-lg transition duration-300 ${
              selectedMode === mode
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
            }`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>

      {/* Section Transition */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
