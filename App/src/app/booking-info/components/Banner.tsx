"use client";

import { motion, AnimatePresence } from "framer-motion";
import { bannerImages } from "./data/bannerImages";

interface BannerProps {
  section: string;
}

export default function Banner({ section }: BannerProps) {
  const imageSrc = bannerImages[section as keyof typeof bannerImages] || bannerImages.default;
  const titleMap: Record<string, string> = {
    train: "Train Booking",
    bus: "Bus Booking",
    flight: "Flight Booking",
    local: "Local Travel",
    hotel: "Hotel Booking",
  };

  const title = titleMap[section] || "Booking Information";

  return (
    <div className="relative w-full h-70 rounded-xl overflow-hidden shadow-md mb-6">
      <AnimatePresence mode="wait">
        <motion.img
          key={imageSrc}
          src={imageSrc}
          alt={`${section || "default"} banner`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

      {/* Title text */}
      <div className="absolute bottom-4 left-6 text-white">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
    </div>
  );
}
