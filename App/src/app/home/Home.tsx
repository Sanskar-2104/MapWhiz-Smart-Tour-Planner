"use client";
import { motion } from "framer-motion";
import { Plane, MapPin, Search } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 via-slate-900 to-slate-950" />

      {/* Floating animated dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center pt-32 px-6 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold drop-shadow-md"
        >
          Explore the world  
          <span className="text-indigo-400"> your way</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 max-w-xl text-slate-300"
        >
          Find the fastest, cheapest, and smoothest routes between any two cities. Let the journey begin.
        </motion.p>

        {/* Search box */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4 max-w-md w-full shadow-xl border border-slate-700"
        >
          <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-xl">
            <MapPin size={20} className="text-indigo-400" />
            <input
              type="text"
              placeholder="From"
              className="bg-transparent outline-none flex-1 text-slate-100"
            />
          </div>

          <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-xl">
            <MapPin size={20} className="text-indigo-400" />
            <input
              type="text"
              placeholder="To"
              className="bg-transparent outline-none flex-1 text-slate-100"
            />
          </div>

          <Link
            href="/booking-info"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl transition-all"
          >
            <Search size={18} /> Search Route
          </Link>
        </motion.div>

      </div>

      {/* Featured Routes */}
      <div className="relative z-10 mt-24 px-6">
        <h2 className="text-3xl font-semibold">Popular Routes</h2>

        <div className="mt-6 flex gap-5 overflow-x-auto pb-4 hide-scrollbar snap-x">
          {["Mumbai to Delhi", "Chennai to Pune", "Hyderabad to Bangalore", "Jaipur to Kolkata"].map(
            (route, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="min-w-[260px] snap-start bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-2 text-indigo-400">
                  <Plane size={18} />
                  <p className="font-semibold">{route}</p>
                </div>
                <p className="mt-2 text-slate-300 text-sm">
                  Live distance, timings, and transport options.
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>

    </div>
  );
}
