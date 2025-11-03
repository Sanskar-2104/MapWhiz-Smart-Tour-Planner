"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SectionContainer from "./components/SectionContainer";

export default function BookingInfoPage() {
  const [activeSection, setActiveSection] = useState<string>("");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Section Area */}
      <main className="flex-1 overflow-y-auto p-6">
        <SectionContainer activeSection={activeSection} />
      </main>
    </div>
  );
}

page