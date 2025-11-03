"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Train, Bus, Plane, Hotel, MapPin } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isCityExpanded, setIsCityExpanded] = useState(false);

  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-4 border-r border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Booking Info</h2>

      {/* City to City Section */}
      <div>
        <button
          onClick={() => setIsCityExpanded(!isCityExpanded)}
          className="flex justify-between items-center w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition"
        >
          <span className="font-medium text-gray-700">City to City</span>
          {isCityExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          )}
        </button>

        <AnimatePresence initial={false}>
          {isCityExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="ml-4 mt-2 space-y-1"
            >
              {[
                { id: "train", label: "Train", icon: <Train className="w-4 h-4" /> },
                { id: "bus", label: "Bus", icon: <Bus className="w-4 h-4" /> },
                { id: "flight", label: "Flight", icon: <Plane className="w-4 h-4" /> },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center gap-2 w-full py-2 px-3 rounded-lg text-sm transition 
                    ${
                      activeSection === id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Local Travel */}
      <div className="mt-4">
        <button
          onClick={() => setActiveSection("local")}
          className={`flex items-center gap-2 w-full py-2 px-3 rounded-lg text-sm transition 
            ${
              activeSection === "local"
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          <MapPin className="w-4 h-4" />
          Local Travel
        </button>
      </div>

      {/* Hotel */}
      <div className="mt-2">
        <button
          onClick={() => setActiveSection("hotel")}
          className={`flex items-center gap-2 w-full py-2 px-3 rounded-lg text-sm transition 
            ${
              activeSection === "hotel"
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          <Hotel className="w-4 h-4" />
          Hotel
        </button>
      </div>
    </aside>
  );
}


