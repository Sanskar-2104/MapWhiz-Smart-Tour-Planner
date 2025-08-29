"use client";

import React from "react";

const CityscapeBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-hero">
      <svg
        aria-hidden
        viewBox="0 0 1200 300"
        className="absolute bottom-0 left-1/2 h-48 w-[140%] -translate-x-1/2 opacity-20"
        preserveAspectRatio="none"
      >
        <path
          d="M0 250 L50 230 L90 240 L140 210 L190 220 L240 190 L280 200 L330 170 L380 180 L430 160 L480 170 L520 150 L560 160 L600 140 L640 150 L680 140 L720 145 L760 130 L800 140 L840 120 L880 130 L920 110 L960 120 L1000 100 L1040 110 L1080 90 L1120 95 L1160 80 L1200 85 L1200 300 L0 300 Z"
          fill="hsl(var(--primary) / 0.15)"
        />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,hsl(var(--gradient-accent-from)/0.2),transparent)]" />
    </div>
  );
};

export default CityscapeBackground;
