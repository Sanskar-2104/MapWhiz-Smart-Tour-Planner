// 'use client'
// import React from "react";
// import Image from "next/image";
// import { Calendar, Clock, Eye, Edit, Share2, Trash2 } from "lucide-react";

// const tours = [
//   {
//     id: 1,
//     title: "Jaipur",
//     days: "5 Days",
//     timeAgo: "2 days ago",
//     image: "/jaipur.jpg", // <-- correct
//   },
//   {
//     id: 2,
//     title: "Manali Getaway",
//     days: "7 Days",
//     timeAgo: "1 week ago",
//     image: "/manali.jpg", // <-- correct
//   },
//   {
//     id: 3,
//     title: "Jammu Mountains",
//     days: "4 Days",
//     timeAgo: "3 weeks ago",
//     image: "/mountain.jpg", // <-- correct
//   },
// ];


// // Main Page Component
// export default function MyToursPage() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-[#0a0f1e] to-[#101828] text-white px-6 py-12">
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold">My Saved Trips</h1>
//         <p className="text-gray-400 mt-2 max-w-xl mx-auto">
//           Discover, organize, and relive your incredible journeys. Your next
//           adventure is just a click away.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="flex justify-center gap-8 mb-14">
//         <StatBox number={tours.length.toString()} label="Total Trips" />
//         <StatBox number="42" label="Days Traveled" />
//         <StatBox number="12" label="Countries" />
//       </div>

//       {/* Trip Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {tours.map((trip) => (
//           <div
//             key={trip.id}
//             className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
//           >
//             {/* Image */}
//             <div className="relative h-48">
//               <Image
//                 src={trip.image}
//                 alt={trip.title}
//                 fill
//                 className="object-cover"
//               />
//               <span className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
//                 {trip.days}
//               </span>
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <p className="font-semibold text-lg">{trip.title}</p>
//               <div className="flex items-center gap-2 text-gray-400 mt-1">
//                 <Calendar size={16} />
//                 <span>{trip.days}</span>
//                 <Clock size={16} />
//                 <span>{trip.timeAgo}</span>
//               </div>

//               {/* Action Icons */}
//               <div className="flex justify-between mt-5 text-gray-300">
//                 <Eye className="cursor-pointer hover:text-white" size={20} />
//                 <Edit className="cursor-pointer hover:text-white" size={20} />
//                 <Share2 className="cursor-pointer hover:text-white" size={20} />
//                 <Trash2 className="cursor-pointer hover:text-red-400" size={20} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Floating Button */}
//       <button className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 p-4 rounded-full shadow-lg">
//         <span className="text-2xl font-bold">+</span>
//       </button>
//     </section>
//   );
// }

// // Stats Box Component
// const StatBox = ({ number, label }: { number: string; label: string }) => (
//   <div className="bg-white/5 px-8 py-6 rounded-xl text-center shadow-md">
//     <p className="text-3xl font-bold text-purple-400">{number}</p>
//     <p className="text-gray-300 text-sm mt-1">{label}</p>
//   </div>
// );


'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, Eye, Edit, Share2, Trash2 } from 'lucide-react';

type ApiDay = {
  id: string;
  tripId: string;
  date: string;
  createdAt?: string;
  dayIndex?: number;
  notes?: string;
  updatedAt?: string;
  places?: any[];
};

type ApiTrip = {
  id: string;
  destination?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;
  days?: ApiDay[];
  // ...other fields
};

type NormalizedTrip = {
  id: string;
  title: string;
  daysLabel: string;   // e.g. "4 Days" or "No days"
  timeAgo: string;
  imageSrc: string;
  raw?: ApiTrip;
};

function daysForTrip(trip: ApiTrip): number {
  // If days array exists and has entries, use that count
  if (Array.isArray(trip.days) && trip.days.length > 0) {
    return trip.days.length;
  }

  // Otherwise, try to compute from startDate/endDate (inclusive)
  if (trip.startDate && trip.endDate) {
    const s = new Date(trip.startDate);
    const e = new Date(trip.endDate);
    if (!isNaN(s.getTime()) && !isNaN(e.getTime())) {
      // compute difference in days, inclusive
      const diffMs = e.getTime() - s.getTime();
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24)) + 1;
      return diffDays > 0 ? diffDays : 0;
    }
  }

  // fallback: 0
  return 0;
}



export default function MyToursPage() {
  const [trips, setTrips] = useState<NormalizedTrip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const totalDaysTraveled = React.useMemo(() => {
  if (!Array.isArray(trips) || trips.length === 0) return 0;
  // trips here is the raw API trips (ApiTrip[]) OR normalized list depending on your code.
  // If you're using normalized trips where you only kept daysLabel, adapt to use raw: t.raw
  // Example below assumes you have `raw` on each normalized trip: trip.raw: ApiTrip
  // If you're using the ApiTrip[] directly, remove `.raw`.
  return trips.reduce((sum, t: any) => {
    const apiTrip: ApiTrip = t.raw ?? t; // works for normalized or raw arrays
    return sum + daysForTrip(apiTrip);
  }, 0);
}, [trips]);

  useEffect(() => {
    let mounted = true;
    (async function load() {
      try {
        const res = await fetch('/api/trips');
        if (!res.ok) throw new Error(`API returned ${res.status}`);
        const data: ApiTrip[] = await res.json();

        console.info('API /api/trips raw:', data);

        const normalized: NormalizedTrip[] = (Array.isArray(data) ? data : []).map((t) => {
          const id = String(t.id ?? Math.random().toString());
          const title = String(t.title ?? t.destination ?? 'Untitled trip');

          // daysLabel -> prefer number of days if days is array
          let daysLabel = 'No days';
          if (Array.isArray(t.days) && t.days.length > 0) {
            daysLabel = `${t.days.length} ${t.days.length === 1 ? 'Day' : 'Days'}`;
          } else if (t.startDate && t.endDate) {
            try {
              const s = new Date(t.startDate);
              const e = new Date(t.endDate);
              const diffDays = Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)) + 1;
              daysLabel = `${diffDays} ${diffDays === 1 ? 'Day' : 'Days'}`;
            } catch {
              daysLabel = '—';
            }
          }

          // timeAgo: compute from createdAt (fallback to updatedAt)
          const created = t.createdAt ?? t.updatedAt;
          const timeAgo = created ? `${humanDiff(new Date(), new Date(created))} ago` : 'some time ago';

          // image: try /images/<destination>.jpg or fallback
          let imageSrc = '/images/placeholder.jpg';
          if (typeof t.destination === 'string' && t.destination.trim()) {
            const safe = t.destination.toLowerCase().replace(/\s+/g, '-');
            imageSrc = `/images/${safe}.jpg`;
          }

          return { id, title, daysLabel, timeAgo, imageSrc, raw: t };
        });

        if (mounted) {
          setTrips(normalized);
          setError(null);
        }
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(String(err.message ?? err));
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0f1e] to-[#101828] text-white px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Saved Trips</h1>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Discover, organize, and relive your incredible journeys. Your next
          adventure is just a click away.
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-14">
        <StatBox number={trips.length.toString()} label="Total Trips" />
        <StatBox number={ totalDaysTraveled.toString() } label="Days Traveled" />
        <StatBox number="12" label="Countries" />
      </div>

      {loading && <div className="text-center text-gray-400">Loading trips...</div>}
      {error && <div className="text-center text-red-400">Error: {error}</div>}

      {!loading && !error && (
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trips.map((trip) => (
            <article key={trip.id} className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
              <div className="relative h-48">
                <Image src={trip.imageSrc} alt={trip.title} fill className="object-cover" />
                <span className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  {trip.daysLabel}
                </span>
              </div>

              <div className="p-5">
                <p className="font-semibold text-lg">{trip.title}</p>

                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <Calendar size={16} />
                  <span>{trip.daysLabel}</span>
                  <Clock size={16} />
                  <span>{trip.timeAgo}</span>
                </div>

                <div className="flex justify-between mt-5 text-gray-300">
                  <Eye className="cursor-pointer hover:text-white" size={20} />
                  <Edit className="cursor-pointer hover:text-white" size={20} />
                  <Share2 className="cursor-pointer hover:text-white" size={20} />
                  <Trash2 className="cursor-pointer hover:text-red-400" size={20} />
                </div>

                {/* optional debugging — uncomment to inspect raw object */}
                {/* <pre className="mt-3 text-xs text-gray-300">{JSON.stringify(trip.raw, null, 2)}</pre> */}
              </div>
            </article>
          ))}
        </div>
      )}

      <button className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 p-4 rounded-full shadow-lg">
        <span className="text-2xl font-bold">+</span>
      </button>
    </section>
  );
}

/** small human-friendly diff helper */
function humanDiff(now: Date, earlier: Date) {
  const ms = Math.abs(now.getTime() - earlier.getTime());
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo`;
  return `${Math.floor(mo / 12)}y`;
}

const StatBox = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-white/5 px-8 py-6 rounded-xl text-center shadow-md">
    <p className="text-3xl font-bold text-purple-400">{number}</p>
    <p className="text-gray-300 text-sm mt-1">{label}</p>
  </div>
);
