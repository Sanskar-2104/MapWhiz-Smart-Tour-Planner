"use client";

import Banner from "./Banner";
import TrainSection from "./CityToCitySection/TrainSection";
import BusSection from "./CityToCitySection/BusSection";
import FlightSection from "./CityToCitySection/FlightSection";
import LocalTravelSection from "./LocalTravelSection";
import HotelSection from "./HotelBookingSection";

interface SectionContainerProps {
  activeSection: string;
}

export default function SectionContainer({ activeSection }: SectionContainerProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "train":
        return <TrainSection />;
      case "bus":
        return <BusSection />;
      case "flight":
        return <FlightSection />;
      case "local":
        return <LocalTravelSection />;
      case "hotel":
        return <HotelSection />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p className="text-lg font-medium">
              Select a booking option from the sidebar to begin
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full bg-[#070B16] text-white overflow-y-auto rounded-xl shadow-sm">
      {/* Banner */}
      <Banner section={activeSection} />

      {/* Dynamic content (form area) */}
      <div className="p-10 pt-6">{renderSection()}</div>
    </div>
  );
}

