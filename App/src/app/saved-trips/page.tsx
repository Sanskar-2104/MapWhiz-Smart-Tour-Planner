'use client'
import React from "react";
import Image from "next/image";
import { Calendar, Clock, Eye, Edit, Share2, Trash2 } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Jaipur",
    days: "5 Days",
    timeAgo: "2 days ago",
    image: "/jaipur.jpg", // <-- correct
  },
  {
    id: 2,
    title: "Manali Getaway",
    days: "7 Days",
    timeAgo: "1 week ago",
    image: "/manali.jpg", // <-- correct
  },
  {
    id: 3,
    title: "Jammu Mountains",
    days: "4 Days",
    timeAgo: "3 weeks ago",
    image: "/mountain.jpg", // <-- correct
  },
];


// Main Page Component
export default function MyToursPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0f1e] to-[#101828] text-white px-6 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Saved Trips</h1>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Discover, organize, and relive your incredible journeys. Your next
          adventure is just a click away.
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 mb-14">
        <StatBox number={tours.length.toString()} label="Total Trips" />
        <StatBox number="42" label="Days Traveled" />
        <StatBox number="12" label="Countries" />
      </div>

      {/* Trip Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tours.map((trip) => (
          <div
            key={trip.id}
            className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            {/* Image */}
            <div className="relative h-48">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                {trip.days}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="font-semibold text-lg">{trip.title}</p>
              <div className="flex items-center gap-2 text-gray-400 mt-1">
                <Calendar size={16} />
                <span>{trip.days}</span>
                <Clock size={16} />
                <span>{trip.timeAgo}</span>
              </div>

              {/* Action Icons */}
              <div className="flex justify-between mt-5 text-gray-300">
                <Eye className="cursor-pointer hover:text-white" size={20} />
                <Edit className="cursor-pointer hover:text-white" size={20} />
                <Share2 className="cursor-pointer hover:text-white" size={20} />
                <Trash2 className="cursor-pointer hover:text-red-400" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Button */}
      <button className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 p-4 rounded-full shadow-lg">
        <span className="text-2xl font-bold">+</span>
      </button>
    </section>
  );
}

// Stats Box Component
const StatBox = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-white/5 px-8 py-6 rounded-xl text-center shadow-md">
    <p className="text-3xl font-bold text-purple-400">{number}</p>
    <p className="text-gray-300 text-sm mt-1">{label}</p>
  </div>
);
