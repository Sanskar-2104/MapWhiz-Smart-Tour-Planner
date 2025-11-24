// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Clock,
//   Calendar,
//   Share2,
//   Download,
//   ExternalLink,
//   ArrowLeftRight,
// } from "lucide-react";

// // Tailwind + React component to display a beautiful itinerary.
// // Usage: <ItineraryViewer trip={trip} />

// type Place = {
//   id: string;
//   name: string;
//   description: string;
//   latitude?: number;
//   longitude?: number;
//   startTime?: string | null;
//   endTime?: string | null;
//   order?: number;
// };

// type Day = {
//   id: string;
//   date: string;
//   dayIndex: number;
//   notes?: string;
//   places: Place[];
// };

// type Trip = {
//   title: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   days: Day[];
//   interests?: string[];
//   budget?: number;
//   publicId?: string;
// };

// export default function ItineraryViewer({ trip }: { trip: Trip }) {
//   const [selectedDay, setSelectedDay] = useState<number>(0);

//   function openDirections(p: Place) {
//     if (!p.latitude || !p.longitude) return;
//     const url = `https://www.google.com/maps/search/?api=1&query=${p.latitude},${p.longitude}`;
//     window.open(url, "_blank");
//   }

//   async function handleShare() {
//     if ((navigator as any).share) {
//       try {
//         await (navigator as any).share({
//           title: trip.title,
//           text: `My itinerary: ${trip.title} — ${trip.startDate.split("T")[0]} to ${trip.endDate.split("T")[0]}`,
//           url: window.location.href,
//         });
//       } catch (e) {
//         console.warn("Share canceled", e);
//       }
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied to clipboard");
//     }
//   }

//   function downloadJSON() {
//     const blob = new Blob([JSON.stringify(trip, null, 2)], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${trip.title.replace(/\s+/g, "_")}_itinerary.json`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   const palette = {
//     bg: "bg-gradient-to-br from-slate-900 via-indigo-900 to-rose-900",
//     card: "bg-white/5",
//     accent: "text-rose-400",
//   };

//   return (
//     <div className={`min-h-screen p-6 ${palette.bg} text-slate-100`}>
//       <div className="max-w-6xl mx-auto">
//         <header className="flex items-start justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-3xl font-extrabold tracking-tight">{trip.title}</h1>
//             <p className="text-sm text-slate-300 mt-1 flex items-center gap-3">
//               <MapPin className="w-4 h-4" /> {trip.destination} •
//               <Calendar className="w-4 h-4" /> {new Date(trip.startDate).toLocaleDateString()} — {new Date(trip.endDate).toLocaleDateString()}
//             </p>
//             <div className="mt-3 flex gap-2 flex-wrap">
//               {trip.interests?.map((i) => (
//                 <span key={i} className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium">{i}</span>
//               ))}
//               {typeof trip.budget === 'number' && (
//                 <span className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium">Budget: ₹{trip.budget}</span>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button onClick={handleShare} className="btn-primary">
//               <Share2 className="w-4 h-4 mr-2" /> Share
//             </button>
//             <button onClick={downloadJSON} className="btn-ghost">
//               <Download className="w-4 h-4 mr-2" /> Export JSON
//             </button>
//           </div>
//         </header>

//         <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left column: day list / map */}
//           <section className="md:col-span-1">
//             <div className={`p-4 rounded-2xl shadow-lg ${palette.card} border border-white/6`}> 
//               <h3 className="text-lg font-semibold mb-3">Trip Overview</h3>
//               <p className="text-sm text-slate-300 mb-4">{trip.days.length} days • {trip.destination}</p>

//               <div className="flex gap-2 mb-3 overflow-x-auto">
//                 {trip.days.map((d, idx) => (
//                   <button
//                     key={d.id}
//                     onClick={() => setSelectedDay(idx)}
//                     className={`min-w-[64px] px-3 py-2 rounded-xl text-sm font-semibold transition-shadow ${idx === selectedDay ? 'ring-2 ring-rose-400 bg-white/6' : 'bg-white/3'}`}>
//                     Day {d.dayIndex}
//                     <div className="text-xs text-slate-300 mt-1">{new Date(d.date).toLocaleDateString()}</div>
//                   </button>
//                 ))}
//               </div>

//               <div className="rounded-lg overflow-hidden border border-white/4">
//                 {/* small static map area - interactive button opens Google Maps for the day center */}
//                 <div className="p-3 flex items-center justify-between bg-white/3">
//                   <div>
//                     <div className="text-sm font-medium">Day {trip.days[selectedDay].dayIndex} snapshot</div>
//                     <div className="text-xs text-slate-300 mt-1">{trip.days[selectedDay].notes}</div>
//                   </div>
//                   <div className="flex flex-col items-end gap-2">
//                     <button
//                       onClick={() => {
//                         const p = trip.days[selectedDay].places[0];
//                         if (p && p.latitude && p.longitude) openDirections(p);
//                       }}
//                       className="px-3 py-2 rounded-lg bg-white/6 text-sm font-medium">
//                       Open map
//                     </button>
//                     <div className="text-xs text-slate-300">Tap a place to open directions</div>
//                   </div>
//                 </div>

//                 <div className="p-3 grid gap-2">
//                   {trip.days[selectedDay].places.slice(0,3).map((p) => (
//                     <article key={p.id} className="flex items-center gap-3 p-2 rounded-lg bg-white/4 border border-white/3">
//                       <div className="w-2 h-10 rounded-full bg-rose-400/70" />
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <h4 className="font-semibold">{p.name}</h4>
//                           <div className="text-xs text-slate-300">{p.startTime || '—'} — {p.endTime || '—'}</div>
//                         </div>
//                         <p className="text-sm text-slate-300 truncate">{p.description}</p>
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <button onClick={() => openDirections(p)} title="Directions" className="p-2 rounded-md bg-white/6">
//                           <ExternalLink className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </article>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4 p-4 rounded-2xl shadow-lg bg-white/6 border border-white/5">
//               <h4 className="font-semibold">Quick actions</h4>
//               <div className="mt-3 flex gap-2 flex-wrap">
//                 <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-400/20 to-indigo-400/10 font-semibold">Start Navigation</button>
//                 <button className="px-4 py-2 rounded-xl bg-white/3">Edit Day</button>
//                 <button className="px-4 py-2 rounded-xl bg-white/3">Add Note</button>
//               </div>
//             </div>
//           </section>

//           {/* Middle column: timeline / places */}
//           <section className="md:col-span-2">
//             <div className="p-4 rounded-2xl shadow-xl bg-white/5 border border-white/6">
//               <h3 className="text-xl font-bold mb-3">Day {trip.days[selectedDay].dayIndex} — Detailed Plan</h3>
//               <p className="text-sm text-slate-300 mb-4">{trip.days[selectedDay].notes}</p>

//               <div className="space-y-4">
//                 {trip.days[selectedDay].places.map((p, i) => (
//                   <motion.div
//                     key={p.id}
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.04 }}
//                     className="group p-4 rounded-2xl border border-white/5 bg-gradient-to-r from-white/2 to-white/1 hover:scale-[1.01] hover:shadow-lg transition-transform">
//                     <div className="flex items-start justify-between gap-3">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 rounded-xl bg-white/6 flex items-center justify-center text-rose-300 font-bold">{i + 1}</div>
//                           <div>
//                             <h4 className="font-semibold text-lg">{p.name}</h4>
//                             <div className="text-xs text-slate-300">{p.description}</div>
//                           </div>
//                         </div>

//                         <div className="mt-3 flex items-center gap-4 text-sm text-slate-300">
//                           <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {p.startTime || 'Flexible'}</div>
//                           <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {p.latitude ? `${p.latitude.toFixed(3)}, ${p.longitude?.toFixed(3)}` : 'Location'}</div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col items-end gap-2">
//                         <div className="flex gap-2">
//                           <button onClick={() => openDirections(p)} className="px-3 py-2 rounded-lg bg-white/6 text-sm">Directions</button>
//                           <button onClick={() => alert(p.description)} className="px-3 py-2 rounded-lg bg-white/3 text-sm">Details</button>
//                         </div>
//                         <div className="text-xs text-slate-400">Approx time • {p.startTime || '—'}</div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//             </div>

//             <div className="mt-4 p-4 rounded-2xl shadow-lg bg-white/6 border border-white/5 flex items-center justify-between">
//               <div>
//                 <div className="text-sm text-slate-300">Notes</div>
//                 <div className="text-sm font-medium">{trip.days[selectedDay].notes}</div>
//               </div>

//               <div className="flex gap-2">
//                 <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-400 to-rose-400 font-semibold text-slate-900">Start day</button>
//                 <button className="px-4 py-2 rounded-xl bg-white/3">Share day</button>
//               </div>
//             </div>

//           </section>
//         </main>

//       </div>

//       {/* small helper styles for buttons when not using component library */}
//       <style jsx>{`
//         .btn-primary{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem .75rem;border-radius:.75rem;background:linear-gradient(90deg, rgba(255,112,150,0.12), rgba(124,58,237,0.12));border:1px solid rgba(255,255,255,0.06);backdrop-filter: blur(6px);}
//         .btn-ghost{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem .75rem;border-radius:.75rem;background:transparent;border:1px solid rgba(255,255,255,0.04);}
//       `}</style>
//     </div>
//   );
// }

// // --------------------- Sample usage with the JSON you provided ---------------------
// // Paste the trip JSON into your page and render like below:

// export const SAMPLE_TRIP: Trip = {
//   title: "Jaipur Getaway",
//   destination: "Jaipur",
//   startDate: "2025-12-10T00:00:00.000Z",
//   endDate: "2025-12-13T00:00:00.000Z",
//   interests: ["history", "architecture"],
//   budget: 10000,
//   days: [
//     {
//       id: "cmhtnpcz5000gij84g431fryl",
//       date: "2024-10-10T00:00:00.000Z",
//       dayIndex: 1,
//       notes: "Day 1: Heart of the Pink City. This day focuses on the iconic, closely-located monuments within the walled city. Wear comfortable walking shoes as you'll be exploring a lot on foot.",
//       places: [
//         { id: "460703b8-2555-47fb-81c7-eef8f3bb1229", name: "Hawa Mahal", description: "Start your day with the iconic 'Palace of Winds'...", latitude: 26.9239, longitude: 75.8267, startTime: "09:00", endTime: "10:00" },
//         { id: "1fcef640-9319-487b-9779-7ed1f82c4049", name: "Jantar Mantar", description: "A UNESCO World Heritage site...", latitude: 26.9248, longitude: 75.8245, startTime: "10:15", endTime: "11:30" },
//         { id: "529e0ba7-9acb-45ad-99cf-68d4d693ec5b", name: "City Palace", description: "A vast complex of courtyards...", latitude: 26.9255, longitude: 75.8237, startTime: "11:45", endTime: "14:00" },
//         { id: "ca29e0e7-4306-4b85-9ad8-437f59252862", name: "Johari Bazaar / Bapu Bazaar", description: "Lunch and exploration of Jaipur's famous markets...", latitude: 26.9205, longitude: 75.8262, startTime: "14:30", endTime: "17:00" },
//       ],
//     },
//     // ... other days omitted for brevity (copy remaining days from your JSON)
//   ],
// };

// // Example to render in a page:
// // import ItineraryViewer, { SAMPLE_TRIP } from './ItineraryViewer';
// // <ItineraryViewer trip={SAMPLE_TRIP} />















import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Calendar,
  Share2,
  Download,
  ExternalLink,
} from "lucide-react";

// Pixel‑perfect recreation of the provided screenshot UI
// Uses Tailwind classes + a few inline styles for exact colors

type Place = {
  id: string;
  name: string;
  description: string;
  latitude?: number;
  longitude?: number;
  startTime?: string | null;
  endTime?: string | null;
  order?: number;
};

type Day = {
  id: string;
  date: string;
  dayIndex: number;
  notes?: string;
  places: Place[];
};

type Trip = {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  days: Day[];
  interests?: string[];
  budget?: number;
  publicId?: string;
};

export default function ItineraryViewer({ trip }: { trip: Trip }) {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  function openDirections(p: Place) {
    if (!p.latitude || !p.longitude) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${p.latitude},${p.longitude}`;
    window.open(url, "_blank");
  }

  async function handleShare() {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({
          title: trip.title,
          text: `My itinerary: ${trip.title} — ${trip.startDate.split("T")[0]} to ${trip.endDate.split("T")[0]}`,
          url: window.location.href,
        });
      } catch (e) {
        console.warn("Share canceled", e);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  }

  function downloadJSON() {
    const blob = new Blob([JSON.stringify(trip, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    // avoid regex in replacement to prevent escape issues
    a.download = `${trip.title.split(' ').join('_')}_itinerary.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // exact color tokens approximated from screenshot
  const styles = {
    pageBg: `linear-gradient(180deg,#081023 0%, #0f0b1a 35%, #0f0816 100%)`,
    heroGradient: `linear-gradient(90deg, rgba(18,35,78,0.35), rgba(95,64,158,0.18))`,
  };

  return (
    <div className="min-h-screen p-6 text-slate-100" style={{ background: styles.pageBg, backgroundAttachment: 'fixed' }}>
      {/* subtle background image (screenshot supplied) */}
      <div
        className="absolute inset-0 opacity-6 pointer-events-none"
        style={{
          backgroundImage: "url('/mnt/data/Screenshot 2025-11-24 181412.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(14px) brightness(.35)'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <header className="flex items-start justify-between gap-6 mb-6 z-10 relative">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
              {trip.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-slate-300">
              <div className="flex items-center gap-2 bg-white/3 px-3 py-2 rounded-full border border-white/6">
                <MapPin className="w-4 h-4 text-rose-300" /> {trip.destination}
              </div>

              <div className="flex items-center gap-2 bg-white/3 px-3 py-2 rounded-full border border-white/6">
                <Calendar className="w-4 h-4 text-amber-300" /> {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
              </div>

              {typeof trip.budget === 'number' && (
                <div className="flex items-center gap-2 bg-white/3 px-3 py-2 rounded-full border border-white/6">
                  <span className="text-rose-300">₹</span> {trip.budget.toLocaleString()}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 z-20 relative">
            <button onClick={handleShare} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0e0a17] border border-white/6 shadow-sm">
              <Share2 className="w-4 h-4 text-slate-100" />
              <span className="text-sm">Share</span>
            </button>
            <button onClick={downloadJSON} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6b5bff] to-[#7c4dd6] text-slate-900 font-semibold shadow">
              <Download className="w-4 h-4" />
              <span className="text-sm">Export JSON</span>
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="p-4 rounded-2xl border border-white/6 bg-gradient-to-b from-white/3 to-transparent shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Trip Overview</h3>
              <p className="text-sm text-slate-300 mb-4">{trip.days.length} days • {trip.destination}</p>

              <div className="space-y-3">
                {trip.days.map((d, idx) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDay(idx)}
                    className={`w-full text-left p-4 rounded-xl flex items-start gap-3 transition-shadow ${idx === selectedDay ? 'bg-gradient-to-r from-[#5aa8ff] to-[#a07bff] text-white shadow-xl ring-1 ring-white/20' : 'bg-white/3 text-slate-200 border border-white/3'}`}>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">Day {d.dayIndex}</div>
                      <div className="text-xs mt-1 text-slate-300 line-clamp-2">{d.notes}</div>
                    </div>
                    <div className="text-xs text-slate-300">{new Date(d.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</div>
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-lg overflow-hidden border border-white/4">
                <div className="p-3 flex items-center justify-between bg-white/3">
                  <div>
                    <div className="text-sm font-medium">Day {trip.days[selectedDay].dayIndex} snapshot</div>
                    <div className="text-xs text-slate-300 mt-1 truncate w-48">{trip.days[selectedDay].notes}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => {
                        const p = trip.days[selectedDay].places[0];
                        if (p && p.latitude && p.longitude) openDirections(p);
                      }}
                      className="px-3 py-2 rounded-lg bg-white/6 text-sm font-medium">
                      Open map
                    </button>
                    <div className="text-xs text-slate-300">Tap a place to open directions</div>
                  </div>
                </div>

                <div className="p-3 grid gap-2">
                  {trip.days[selectedDay].places.slice(0,3).map((p) => (
                    <article key={p.id} className="flex items-center gap-3 p-2 rounded-lg bg-white/4 border border-white/3">
                      <div className="w-2 h-10 rounded-full bg-gradient-to-b from-[#9f5cff] to-[#ff7896]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{p.name}</h4>
                          <div className="text-xs text-slate-300">{p.startTime || '—'} — {p.endTime || '—'}</div>
                        </div>
                        <p className="text-sm text-slate-300 truncate">{p.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => openDirections(p)} title="Directions" className="p-2 rounded-md bg-white/6">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

              </div>

              <div className="mt-4 p-4 rounded-2xl bg-white/6 border border-white/5">
                <h4 className="font-semibold">Quick actions</h4>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#b87b2f] to-[#6b4c3a] font-semibold">Start Navigation</button>
                  <button className="px-4 py-2 rounded-xl bg-white/3">Edit Day</button>
                  <button className="px-4 py-2 rounded-xl bg-white/3">Add Note</button>
                </div>
              </div>

            </div>
          </aside>

          {/* Main column */}
          <section className="md:col-span-9">
            <div className="p-6 rounded-2xl shadow-xl bg-white/6 border border-white/6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5aa8ff] to-[#a07bff] flex items-center justify-center text-white font-bold">★</div>
                    <div>
                      <h3 className="text-2xl font-bold">Day {trip.days[selectedDay].dayIndex}</h3>
                      <div className="text-sm text-amber-300">{new Date(trip.days[selectedDay].date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    </div>
                  </div>
                </div>

                <div className="text-slate-300">&nbsp;</div>
              </div>

              <p className="text-slate-300 mt-4">{trip.days[selectedDay].notes}</p>

              <div className="mt-6 space-y-4">
                {trip.days[selectedDay].places.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="group p-4 rounded-2xl border border-white/5 bg-gradient-to-r from-white/2 to-white/1 hover:scale-[1.01] hover:shadow-lg transition-transform"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b5bff] to-[#ff8ab3] flex items-center justify-center text-white font-bold">{i + 1}</div>
                          <div>
                            <h4 className="font-semibold text-lg">{p.name}</h4>
                            <div className="text-xs text-slate-300">{p.description}</div>
                            <div className="mt-3 flex items-center gap-4 text-sm text-slate-300">
                              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {p.startTime || 'Flexible'}</div>
                              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {p.latitude ? `${p.latitude.toFixed(4)}, ${p.longitude?.toFixed(4)}` : 'Location'}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <div className="flex gap-2">
                          <button onClick={() => openDirections(p)} className="px-3 py-2 rounded-lg bg-white/6 text-sm">Directions</button>
                          <button onClick={() => alert(p.description)} className="px-3 py-2 rounded-lg bg-white/3 text-sm">Details</button>
                        </div>
                        <div className="text-xs text-slate-400">Approx time • {p.startTime || '—'}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            <div className="mt-6 p-4 rounded-2xl shadow-lg bg-white/6 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-300">Notes</div>
                <div className="text-sm font-medium">{trip.days[selectedDay].notes}</div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6b5bff] to-[#a07bff] font-semibold text-slate-900">Start day</button>
                <button className="px-4 py-2 rounded-xl bg-white/3">Share day</button>
              </div>
            </div>

          </section>
        </main>

      </div>

      <style jsx>{`
        .line-clamp-2{ display: -webkit-box; -webkit-line-clamp:2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
}

// --------------------- Sample trip data ---------------------
export const SAMPLE_TRIP: Trip = {
  title: "Jaipur Getaway",
  destination: "Jaipur",
  startDate: "2025-12-10T00:00:00.000Z",
  endDate: "2025-12-13T00:00:00.000Z",
  interests: ["history", "architecture"],
  budget: 10000,
  days: [
    {
      id: "cmhtnpcz5000gij84g431fryl",
      date: "2024-10-10T00:00:00.000Z",
      dayIndex: 1,
      notes: "Day 1: Heart of the Pink City. This day focuses on the iconic, closely-located monuments within the walled city. Wear comfortable walking shoes as you'll be exploring a lot on foot.",
      places: [
        { id: "460703b8-2555-47fb-81c7-eef8f3bb1229", name: "Hawa Mahal", description: "Start your day with the iconic 'Palace of Winds'...", latitude: 26.9239, longitude: 75.8267, startTime: "09:00", endTime: "10:00" },
        { id: "1fcef640-9319-487b-9779-7ed1f82c4049", name: "Jantar Mantar", description: "A UNESCO World Heritage site...", latitude: 26.9248, longitude: 75.8245, startTime: "10:15", endTime: "11:30" },
        { id: "529e0ba7-9acb-45ad-99cf-68d4d693ec5b", name: "City Palace", description: "A vast complex of courtyards...", latitude: 26.9255, longitude: 75.8237, startTime: "11:45", endTime: "14:00" },
        { id: "ca29e0e7-4306-4b85-9ad8-437f59252862", name: "Johari Bazaar / Bapu Bazaar", description: "Lunch and exploration of Jaipur's famous markets...", latitude: 26.9205, longitude: 75.8262, startTime: "14:30", endTime: "17:00" },
      ],
    },
    // you can append remaining days as needed
  ],
};
