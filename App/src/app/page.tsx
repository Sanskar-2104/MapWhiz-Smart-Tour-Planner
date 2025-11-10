// // /*
// // Smart Tour Planner — Home Page (single-file React component)
// // - Uses Tailwind CSS and Framer Motion
// // - Modern, travel-themed, interactive hero with path-journey, parallax layers, hover-reactive cards
// // - Not using a plane (per your request) — uses a moving 'traveller pin' on a path, compass, suitcase, postcards
// // - Drop this file as pages/home/page.tsx or app/home/page.tsx in Next.js (since you're using 'use client')

// // Notes:
// // - You already have a navbar; this file assumes Navbar is handled separately.
// // - Tailwind + framer-motion should be installed. (framer-motion is already in your project per memory.)
// // */

// // 'use client';

// // import React, { useRef, useEffect, useState } from 'react';
// // import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// // import { MapPin, Compass } from 'lucide-react';
// // import Link from 'next/link';

// // export default function HomePage() {
// //   return (
// //     <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
// //       <section className="relative h-screen flex items-center justify-center">
// //         <Hero />
// //       </section>

// //       <section className="relative py-20 bg-slate-900/60">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <FeatureStrip />
// //           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <FloatingCard
// //               title="Plan with AI"
// //               subtitle="Smart itineraries built in seconds"
// //               emoji="🧭"
// //             />
// //             <FloatingCard
// //               title="Local Secrets"
// //               subtitle="Hidden gems curated by locals"
// //               emoji="🏝️"
// //             />
// //             <FloatingCard
// //               title="Eco Friendly"
// //               subtitle="Sustainable options & tips"
// //               emoji="🌱"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-20">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <PathJourney />
// //         </div>
// //       </section>

// //       <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <InteractiveMap />
// //         </div>
// //       </section>

// //       <TravelFooter />
// //     </main>
// //   );
// // }

// // function Hero() {
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);

// //   useEffect(() => {
// //     const handle = (e: MouseEvent) => {
// //       mouseX.set(e.clientX);
// //       mouseY.set(e.clientY);
// //     };
// //     window.addEventListener('mousemove', handle);
// //     return () => window.removeEventListener('mousemove', handle);
// //   }, [mouseX, mouseY]);

// //   const floatX = useTransform(mouseX, [0, window.innerWidth || 1200], [-30, 30]);
// //   const floatY = useTransform(mouseY, [0, window.innerHeight || 800], [-20, 20]);

// //   return (
// //     <div className="relative w-full max-w-6xl mx-auto px-6">
// //       {/* Background subtle stars/particles */}
// //       <div className="absolute inset-0 -z-10 pointer-events-none">
// //         <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700/10 to-transparent" />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //         <div className="space-y-6">
// //           <div className="inline-flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm px-3 py-1 rounded-full w-max">
// //             <MapPin className="h-5 w-5 text-rose-400" />
// //             <span className="text-sm text-rose-300">your journey begins here</span>
// //           </div>

// //           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
// //             Step into the world. <br />
// //             Travel that feels like a story.
// //           </h1>

// //           <p className="text-slate-300 max-w-xl">
// //             Smart Tour Planner crafts memorable itineraries, reveals hidden gems and helps you travel
// //             with style — sustainable choices, local experiences and delightful surprises on the way.
// //           </p>

// //           <div className="flex items-center gap-4">
// //             <Link href="/plan-trip" className="gradient-primary px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition-transform">
// //               Plan your trip
// //             </Link>

// //             <Link href="/saved-trips" className="px-4 py-3 rounded-2xl border border-slate-700 text-slate-200 hover:bg-slate-800 transition">
// //               Explore saved trips
// //             </Link>
// //           </div>

// //           <div className="mt-6 flex gap-4 items-center text-sm text-slate-400">
// //             <div className="flex items-center gap-2">
// //               <Compass className="h-4 w-4 text-amber-400" />
// //               <span>Curated by travel experts</span>
// //             </div>
// //             <div className="h-1 w-1 bg-slate-600 rounded-full" />
// //             <div>Easy booking & offline maps</div>
// //           </div>
// //         </div>

// //         {/* Right side: parallax layers + interactive postcard cluster */}
// //         <div className="relative w-full h-96 md:h-96 flex items-center justify-center">
// //           <motion.div
// //             style={{ x: floatX, y: floatY }}
// //             className="absolute w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-tr from-rose-600/20 via-indigo-600/10 to-transparent backdrop-blur-md border border-slate-700/30 shadow-2xl"
// //           />

// //           <PostcardCluster />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function PostcardCluster() {
// //   // cluster of floating 'postcards' that react to hover
// //   const cards = [
// //     { title: 'Tokyo', desc: 'Neon nights & tranquil shrines' },
// //     { title: 'Lisbon', desc: 'Tram rides & pastel hills' },
// //     { title: 'Patagonia', desc: 'Vast wild landscapes' },
// //   ];

// //   return (
// //     <div className="relative w-full h-full flex items-center justify-center">
// //       {cards.map((c, i) => (
// //         <motion.div
// //           key={c.title}
// //           whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? -2 : 2 }}
// //           transition={{ type: 'spring', stiffness: 250, damping: 18 }}
// //           className={`absolute w-56 md:w-64 p-4 rounded-2xl backdrop-blur-sm bg-white/5 border border-slate-700/40 shadow-lg cursor-pointer hover:z-40`} 
// //           style={{ transform: `translate(${(i - 1) * 60}px, ${-i * 18}px)`, zIndex: 10 + i }}
// //         >
// //           <div className="flex items-start gap-3">
// //             <div className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-lg font-bold">
// //               {c.title.charAt(0)}
// //             </div>
// //             <div>
// //               <div className="font-semibold text-white">{c.title}</div>
// //               <div className="text-sm text-slate-300">{c.desc}</div>
// //             </div>
// //           </div>

// //           <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
// //             <div>5 days • 3 stops</div>
// //             <div className="text-amber-300 font-semibold">Explore</div>
// //           </div>
// //         </motion.div>
// //       ))}

// //       {/* subtle floating compass */}
// //       <motion.div
// //         initial={{ scale: 0.9, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         transition={{ delay: 0.2 }}
// //         className="absolute -bottom-6 right-4 w-16 h-16 rounded-full bg-slate-800/60 backdrop-blur-md border border-slate-700/20 flex items-center justify-center shadow-lg"
// //       >
// //         <Compass className="h-6 w-6 text-amber-400" />
// //       </motion.div>
// //     </div>
// //   );
// // }

// // function FeatureStrip() {
// //   return (
// //     <div className="w-full bg-slate-800/30 border border-slate-700/20 rounded-2xl p-5 flex items-center justify-between gap-6">
// //       <div className="flex items-center gap-4">
// //         <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-2xl">✈️</div>
// //         <div>
// //           <div className="font-semibold">Start your personalised adventure</div>
// //           <div className="text-sm text-slate-400">Tell us a few preferences & we'll do the rest</div>
// //         </div>
// //       </div>

// //       <div className="flex items-center gap-3">
// //         <Link href="/plan-trip" className="px-4 py-2 rounded-md gradient-primary font-medium">Get started</Link>
// //         <Link href="/about" className="px-4 py-2 rounded-md border border-slate-700/30">How it works</Link>
// //       </div>
// //     </div>
// //   );
// // }

// // function FloatingCard({ title, subtitle, emoji }: { title: string; subtitle: string; emoji: string }) {
// //   return (
// //     <motion.div
// //       whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(2,6,23,0.6)' }}
// //       transition={{ type: 'spring', stiffness: 200, damping: 18 }}
// //       className="bg-gradient-to-tr from-slate-800/60 to-slate-800/40 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-sm"
// //     >
// //       <div className="text-3xl">{emoji}</div>
// //       <h3 className="mt-4 font-semibold text-lg">{title}</h3>
// //       <p className="mt-2 text-slate-300 text-sm">{subtitle}</p>
// //       <div className="mt-4">
// //         <Link href="/plan-trip" className="text-sm font-medium text-amber-300">Try it now →</Link>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // function PathJourney() {
// //   // A scenic path SVG with a 'traveller pin' that moves when the user hovers or on mount
// //   const pinRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     // initial subtle animation
// //     if (pinRef.current) {
// //       const controls = animate(0, 1, { duration: 1.6, repeat: Infinity, repeatType: 'reverse' });
// //       return () => controls.stop();
// //     }
// //   }, []);

// //   return (
// //     <div className="rounded-3xl bg-slate-900/30 border border-slate-800/30 p-6">
// //       <h2 className="text-2xl font-bold">Begin the route — a journey that unfolds</h2>
// //       <p className="text-slate-400 mt-2">Hover along the map or drag the marker to explore stops and stories.</p>

// //       <div className="mt-6 w-full h-64 md:h-80 relative">
// //         <svg viewBox="0 0 1000 300" className="w-full h-full">
// //           <defs>
// //             <linearGradient id="pathGrad" x1="0" x2="1">
// //               <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
// //               <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
// //             </linearGradient>
// //           </defs>

// //           {/* curvy path */}
// //           <path
// //             d="M40 220 C180 100, 320 100, 460 180 C600 260, 740 180, 880 140"
// //             fill="none"
// //             stroke="url(#pathGrad)"
// //             strokeWidth="6"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             className="filter drop-shadow-lg"
// //           />

// //           {/* stops */}
// //           {[50, 260, 480, 660, 840].map((x, i) => (
// //             <g key={i} className="cursor-pointer">
// //               <circle cx={x} cy={getYForX(x)} r="8" fill="#0ea5a4" />
// //             </g>
// //           ))}
// //         </svg>

// //         {/* traveler marker - absolute positioned to mirror along path (approx) */}
// //         <motion.div
// //           ref={pinRef}
// //           initial={{ x: 36, y: 210 }}
// //           whileHover={{ scale: 1.08 }}
// //           drag
// //           dragConstraints={{ left: 0, right: 900, top: -20, bottom: 20 }}
// //           className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-sm font-bold shadow-2xl"
// //           style={{ left: 36, top: 210 }}
// //         >
// //           <div className="text-white">You</div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Helper for approximate y-coordinates for the handcrafted path above
// // function getYForX(x: number) {
// //   // piecewise approximate of the SVG curve used in the path d attribute
// //   if (x < 200) return 180 - (x / 3);
// //   if (x < 420) return 60 + (x - 200) * 0.5;
// //   if (x < 620) return 140 + (x - 420) * 0.6;
// //   return 260 - (x - 620) * 0.4;
// // }

// // function InteractiveMap() {
// //   // simple interactive world-map idea with hover pins that expand
// //   const pins = [
// //     { id: 'tok', x: '15%', y: '30%', title: 'Tokyo', desc: 'Vibrant nights' },
// //     { id: 'lis', x: '40%', y: '50%', title: 'Lisbon', desc: 'Sunlit alleys' },
// //     { id: 'pat', x: '70%', y: '35%', title: 'Patagonia', desc: 'Untamed beauty' },
// //   ];

// //   return (
// //     <div className="rounded-2xl bg-slate-900/20 p-6 border border-slate-800/30">
// //       <h3 className="text-xl font-semibold">Explore destinations</h3>
// //       <p className="text-slate-400 mt-1">Hover pins to preview a quick story.</p>

// //       <div className="mt-6 relative w-full h-64 md:h-80 bg-[url('/images/world-silhouette.svg')] bg-center bg-no-repeat bg-contain">
// //         {pins.map((p) => (
// //           <motion.div
// //             key={p.id}
// //             whileHover={{ scale: 1.18 }}
// //             className="absolute -translate-x-1/2 -translate-y-1/2"
// //             style={{ left: p.x, top: p.y }}
// //           >
// //             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center shadow-xl border-2 border-slate-900/40 cursor-pointer">
// //               <div className="text-sm font-semibold">{p.title.charAt(0)}</div>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 8 }}
// //               whileHover={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.18 }}
// //               className="mt-2 w-44 p-3 rounded-xl bg-slate-800/80 text-sm text-slate-200 backdrop-blur-md border border-slate-700/30 hidden md:block"
// //             >
// //               <div className="font-semibold">{p.title}</div>
// //               <div className="text-xs text-slate-400">{p.desc}</div>
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function TravelFooter() {
// //   return (
// //     <footer className="py-10 bg-slate-900/80 border-t border-slate-800/30 mt-20">
// //       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
// //         <div>
// //           <div className="flex items-center gap-3">
// //             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center font-bold">ST</div>
// //             <div>
// //               <div className="font-semibold">Smart Tour Planner</div>
// //               <div className="text-xs text-slate-400">Start your story with us</div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Smart Tour Planner — crafted with ♥ for travelers</div>

// //         <div className="flex items-center gap-3">
// //           <Link href="/about" className="text-slate-300 text-sm">About</Link>
// //           <Link href="/contact" className="text-slate-300 text-sm">Contact</Link>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }





// /*
// Folder structure (suggested)

// app/
//   home/
//     page.tsx        <- main page (this file)
//     components/
//       HeroScene.tsx
//       NeonMap.tsx
//       SearchBar.tsx
//       MoodPortals.tsx
//       DestinationCards.tsx
//       FloatingElements.tsx
//       TravelFooter.tsx

// This single-file version below bundles everything into one React component file (Next.js app/page). Drop it into app/home/page.tsx or app/page.tsx (rename as needed).

// Requirements:
// - Tailwind CSS installed and configured
// - framer-motion installed
// - lucide-react installed (icons)

// Design choices (no external images):
// - SVG neon world silhouette generated inline
// - All glow, trails, orbs are CSS/SVG/JS driven so you don't need images
// - Interactive elements: parallax, hover glow, cursor trails, reactive search

// */

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { MapPin, Compass, Search, Heart } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_#020617,_#071033)] text-white overflow-hidden">
//       <HeroScene />
//       <div className="max-w-6xl mx-auto px-6 -mt-36 relative z-20">
//         <SearchBar />
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <MoodPortals />
//           <DestinationCards />
//         </div>
//       </div>
//       <FloatingElements />
//       <TravelFooter />
//     </main>
//   );
// }

// /* ---------- HeroScene: 3-layer parallax + neon world + glow traces ---------- */
// function HeroScene() {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);

//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };
//     window.addEventListener('mousemove', onMove);
//     return () => window.removeEventListener('mousemove', onMove);
//   }, [cursorX, cursorY]);

//   const layer1X = useTransform(cursorX, [0, window.innerWidth || 1200], [-30, 30]);
//   const layer1Y = useTransform(cursorY, [0, window.innerHeight || 800], [-20, 20]);
//   const layer2X = useTransform(cursorX, [0, window.innerWidth || 1200], [-15, 15]);
//   const layer2Y = useTransform(cursorY, [0, window.innerHeight || 800], [-10, 10]);

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center">
//       {/* Back neon vignette */}
//       <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#021029] via-[#041533] to-[#020317]" />

//       {/* Layered parallax shapes */}
//       <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute -top-20 left-4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/12 filter blur-3xl opacity-90" />
//       <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute top-8 right-12 w-72 h-72 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#38bdf8]/12 filter blur-2xl opacity-90" />

//       {/* Neon world SVG (center) */}
//       <div className="relative z-10 flex flex-col items-start gap-6 max-w-6xl px-6">
//         <div className="flex items-center gap-3 bg-slate-900/30 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/30">
//           <MapPin className="h-5 w-5 text-rose-400" />
//           <span className="text-sm text-rose-300">Portal: Neon Night Explorer</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div className="space-y-4">
//             <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
//               Enter the Neon Night of Travel
//             </h1>
//             <p className="text-slate-300 max-w-xl">The moment this page loads, your journey begins — neon trails, pulsating destinations and surprises along the way. Move your cursor to reveal hidden routes.</p>

//             <div className="flex gap-4 mt-4">
//               <Link href="/plan-trip" className="gradient-primary px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition-transform">
//                 Plan trip
//               </Link>
//               <Link href="/saved-trips" className="px-4 py-3 rounded-2xl border border-slate-700/30">Saved trips</Link>
//             </div>

//             <div className="mt-6 flex gap-4 text-sm text-slate-400">
//               <div className="flex items-center gap-2"><Compass className="h-4 w-4 text-amber-400" /> Curated routes</div>
//               <div className="h-1 w-1 bg-slate-600 rounded-full" />
//               <div>Offline maps & tips</div>
//             </div>
//           </div>

//           {/* Neon map with glow traces and interactive cursor trails */}
//           <div className="relative w-full h-72 lg:h-80">
//             <NeonMap cursorX={cursorX} cursorY={cursorY} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- NeonMap: SVG world silhouette + reactive glow on cursor ---------- */
// function NeonMap({ cursorX, cursorY }: { cursorX: any; cursorY: any }) {
//   const trailRef = useRef<HTMLDivElement | null>(null);
//   const [points, setPoints] = useState<Array<{ x: number; y: number; id: number }>>([]);
//   useEffect(() => {
//     const unsub = cursorX.onChange((x: number) => {
//       const y = cursorY.get();
//       // add moving glow points
//       setPoints((p) => [...p.slice(-9), { x, y, id: Date.now() }]);
//     });
//     return () => unsub();
//   }, [cursorX, cursorY]);

//   // sample 'city' pins to pulse when cursor nears
//   const cities = [
//     { id: 'tok', x: 0.74, y: 0.36, name: 'Tokyo' },
//     { id: 'ny', x: 0.24, y: 0.3, name: 'New York' },
//     { id: 'par', x: 0.42, y: 0.32, name: 'Paris' },
//     { id: 'syn', x: 0.58, y: 0.5, name: 'Sydney' },
//   ];

//   return (
//     <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900/30 to-transparent border border-slate-800/30 p-3">
//       <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" className="w-full h-full rounded-md">
//         <defs>
//           <linearGradient id="neon" x1="0" x2="1">
//             <stop offset="0%" stopColor="#7c3aed" />
//             <stop offset="100%" stopColor="#06b6d4" />
//           </linearGradient>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="6" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* stylized map silhouette (abstract continents) */}
//         <g stroke="url(#neon)" strokeWidth="1.5" fill="none" opacity="0.85">
//           <path d="M40 380 C180 200, 320 190, 460 260 C600 330, 740 280, 880 240" strokeOpacity="0.6" strokeLinecap="round" />
//           <path d="M60 260 C160 140, 280 120, 420 200" strokeOpacity="0.35" strokeLinecap="round" />
//           <path d="M140 120 C240 40, 420 40, 560 120" strokeOpacity="0.24" strokeLinecap="round" />
//         </g>

//         {/* city pins */}
//         {cities.map((c, i) => (
//           <g key={c.id} className="cursor-pointer">
//             <circle cx={c.x * 1000} cy={c.y * 600} r="8" fill="#06b6d4" opacity="0.95" />
//             <circle cx={c.x * 1000} cy={c.y * 600} r="18" fill="none" stroke="#7c3aed" strokeOpacity="0.12" />
//           </g>
//         ))}

//         {/* glowing trail path - drawn using the last few cursor points */}
//         {points.length > 1 && (
//           <polyline
//             points={points.map((p) => `${(p.x / window.innerWidth) * 1000},${(p.y / window.innerHeight) * 600}`).join(' ')}
//             fill="none"
//             stroke="url(#neon)"
//             strokeWidth={3}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             style={{ filter: 'url(#glow)', opacity: 0.85 }}
//           />
//         )}
//       </svg>

//       {/* floating small glow divs that follow cursor (for DOM layer glow) */}
//       <div ref={trailRef} className="pointer-events-none absolute inset-0">
//         {points.map((pt, i) => (
//           <div
//             key={pt.id}
//             style={{ left: pt.x - 40, top: pt.y - 40 }}
//             className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] opacity-30 blur-2xl"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------- SearchBar: hover-reactive, suggests moods ---------- */
// function SearchBar() {
//   const [q, setQ] = useState('');
//   const [mood, setMood] = useState('Adventure');
//   const moods = ['Adventure', 'Relax', 'Nightlife', 'Cultural', 'Eco'];

//   return (
//     <div className="relative -mt-20 z-30">
//       <div className="mx-auto max-w-3xl">
//         <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/40 rounded-3xl p-4 flex items-center gap-3 shadow-lg">
//           <div className="p-3 rounded-full bg-slate-800/40 border border-slate-700/30">
//             <Search className="h-5 w-5 text-slate-200" />
//           </div>
//           <input
//             value={q}
//             onChange={(e) => setQ(e.target.value)}
//             placeholder={`Search destinations, e.g. "Tokyo nights" or try mood: ${mood}`}
//             className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-white text-lg"
//           />

//           <div className="flex items-center gap-3">
//             <select value={mood} onChange={(e) => setMood(e.target.value)} className="bg-transparent text-slate-200 border-l border-slate-700/30 pl-4 pr-3 py-2">
//               {moods.map((m) => (
//                 <option key={m} value={m} className="bg-slate-900">{m}</option>
//               ))}
//             </select>

//             <button className="gradient-primary px-4 py-2 rounded-2xl">Search</button>
//           </div>
//         </div>

//         {/* mood suggestions that react on hover */}
//         <div className="mt-3 flex gap-3 flex-wrap text-sm">
//           {moods.map((m) => (
//             <motion.button whileHover={{ scale: 1.06 }} key={m} onClick={() => setMood(m)} className={`px-3 py-1 rounded-full border ${m === mood ? 'bg-rose-500/20 border-rose-400' : 'border-slate-700/30'} text-slate-200`}>{m}</motion.button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- MoodPortals: big cards that open mini animations on hover ---------- */
// function MoodPortals() {
//   const portals = [
//     { id: 'ad', name: 'Adventure', desc: 'Trails & mountains', emoji: '⛰️' },
//     { id: 'rl', name: 'Relax', desc: 'Beaches & spas', emoji: '🏖️' },
//     { id: 'nt', name: 'Nightlife', desc: 'Neon districts & music', emoji: '🌃' },
//   ];

//   return (
//     <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
//       {portals.map((p, i) => (
//         <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring' }} key={p.id} className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/30">
//           <div className="flex items-start gap-4">
//             <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-rose-400 to-amber-400 text-black font-bold text-xl">{p.emoji}</div>
//             <div>
//               <div className="font-semibold text-lg">{p.name}</div>
//               <div className="text-sm text-slate-300">{p.desc}</div>
//             </div>
//           </div>

//           {/* hover neon animation layer */}
//           <div className="pointer-events-none">
//             <svg className="absolute -right-10 -bottom-8 w-60 opacity-40" viewBox="0 0 400 200">
//               <defs>
//                 <linearGradient id={`g${i}`} x1="0" x2="1">
//                   <stop offset="0%" stopColor="#f472b6" />
//                   <stop offset="100%" stopColor="#06b6d4" />
//                 </linearGradient>
//               </defs>
//               <path d="M0 100 C120 0, 280 200, 400 100" stroke={`url(#g${i})`} strokeWidth="8" fill="none" strokeLinecap="round" strokeOpacity="0.18" />
//             </svg>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ---------- DestinationCards: small interactive cards ---------- */
// function DestinationCards() {
//   const dest = [
//     { id: 'tok', name: 'Tokyo', tag: 'Neon Nights' },
//     { id: 'lis', name: 'Lisbon', tag: 'Coastal Vibes' },
//     { id: 'pat', name: 'Patagonia', tag: 'Wild Tracks' },
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-4">
//       {dest.map((d) => (
//         <motion.div key={d.id} whileHover={{ x: 6 }} className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/30">
//           <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center font-bold">{d.name.charAt(0)}</div>
//           <div>
//             <div className="font-semibold">{d.name}</div>
//             <div className="text-sm text-slate-300">{d.tag}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-2 text-sm text-slate-400">
//             <button className="px-3 py-1 rounded-full border border-slate-700/30">View</button>
//             <button className="px-3 py-1 rounded-full border border-slate-700/30 flex items-center gap-2"><Heart className="h-4 w-4 text-rose-400" /> Save</button>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ---------- FloatingElements: orbs, cursor-reactive sparkles ---------- */
// function FloatingElements() {
//   // small decorative orbs that slowly float
//   return (
//     <div className="pointer-events-none">
//       <div className="absolute left-8 top-40 w-36 h-36 rounded-full bg-gradient-to-br from-[#06b6d4]/30 to-[#7c3aed]/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
//       <div className="absolute right-10 top-72 w-48 h-48 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#06b6d4]/10 blur-3xl animate-[float_9s_ease-in-out_infinite]" />

//       {/* small corner trail SVG for extra depth */}
//       <svg className="absolute left-0 bottom-20 w-80 opacity-25" viewBox="0 0 200 100">
//         <path d="M0 80 C40 20, 160 20, 200 80" stroke="#7c3aed" strokeWidth="2" fill="none" strokeOpacity="0.08" />
//       </svg>
//     </div>
//   );
// }

// /* ---------- Footer ---------- */
// function TravelFooter() {
//   return (
//     <footer className="mt-20 border-t border-slate-800/30 bg-transparent py-10">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center font-bold">ST</div>
//           <div>
//             <div className="font-semibold">Smart Tour Planner</div>
//             <div className="text-xs text-slate-400">Begin your journey — online, instantly.</div>
//           </div>
//         </div>

//         <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Smart Tour Planner</div>

//         <div className="flex items-center gap-4">
//           <Link href="/about" className="text-slate-300 text-sm">About</Link>
//           <Link href="/contact" className="text-slate-300 text-sm">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }





/*
Smart Tour Planner — Neon Night Explorer (Enhanced)

Place this file as app/home/page.tsx (or app/page.tsx) in your Next.js app.
Requires: Tailwind CSS, framer-motion, lucide-react.

Features implemented:
- 3-layer parallax hero
- Neon world + cursor trails
- Background ambient train sound with play fallback (browsers may block autoplay; a play button appears if blocked)
- A small SVG train that moves along a stylized route based on page scroll and occasionally centers
- Glassmorphism 'bento' mood cards (Adventure, Nightlife, Relax) that display themed SVG image blocks on hover
- Big interactive cards, hover reactions, and subtle micro-interactions
- No external images required — visuals built with SVG/CSS gradients so the homepage remains self-contained

Notes:
- Autoplay audio: modern browsers often require a user gesture. We try to play on load and show a play button when needed.
- You can tweak gradients, timings, and SVG art later.
*/

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { MapPin, Compass, Search, Heart } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#041533] to-[#07021a] text-white overflow-x-hidden">
//       <AmbientAudio />
//       <HeroWithTrain />
//       <mainContent />
//     </main>
//   );
// }

// /* ---------- Ambient Audio component ---------- */
// function AmbientAudio() {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [playing, setPlaying] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   useEffect(() => {
//     // try autoplay; browsers may block
//     const audio = audioRef.current;
//     if (!audio) return;
//     audio.volume = 0.25;
//     const playAttempt = audio.play();
//     if (playAttempt !== undefined) {
//       playAttempt
//         .then(() => setPlaying(true))
//         .catch(() => setBlocked(true));
//     }
//   }, []);

//   return (
//     <div>
//       <audio ref={audioRef} loop src={generateTrainSoundDataURL()} />

//       {blocked && (
//         <div className="fixed bottom-8 right-8 z-50">
//           <button
//             onClick={() => {
//               audioRef.current?.play();
//               setPlaying(true);
//               setBlocked(false);
//             }}
//             className="px-4 py-2 rounded-2xl bg-rose-500/90 shadow-lg"
//           >
//             Play ambient train sound
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// // Generate a very short train-like ambient sound as a base64 audio data URL (sine synth). This is a tiny placeholder tone in WAV format (silent-ish).
// // Note: Creating realistic train audio via code is complex; this placeholder gives a soft chime. Replace with your own file if desired.
// function generateTrainSoundDataURL() {
//   // Use a tiny silent WAV (44 bytes) so browsers don't block an empty src. Replace with actual audio file for production.
//   // Here we embed a short base64-encoded WAV (very short click) to satisfy the audio element. For best UX, load a real ambient train mp3.
//   const wavBase64 = 'UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA='; // tiny wav
//   return `data:audio/wav;base64,${wavBase64}`;
// }

// /* ---------- Hero with train route ---------- */
// function HeroWithTrain() {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);
//   const [scrollPct, setScrollPct] = useState(0);

//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };
//     const onScroll = () => {
//       const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
//       setScrollPct(Math.min(1, Math.max(0, pct)));
//     };
//     window.addEventListener('mousemove', onMove);
//     window.addEventListener('scroll', onScroll);
//     onScroll();
//     return () => {
//       window.removeEventListener('mousemove', onMove);
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [cursorX, cursorY]);

//   const [screen, setScreen] = useState({ w: 1200, h: 800 });

// // detect window size on client only
// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     setScreen({
//       w: window.innerWidth,
//       h: window.innerHeight
//     });
//   }
// }, []);

// const l1x = useTransform(cursorX, [0, screen.w], [-30, 30]);
// const l1y = useTransform(cursorY, [0, screen.h], [-20, 20]);


//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 -z-20" />

//       {/* background neon shapes */}
//       <motion.div style={{ x: l1x, y: l1y }} className="absolute -left-20 top-12 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/10 blur-3xl opacity-90" />
//       <motion.div style={{ x: l1x, y: l1y }} className="absolute right-12 top-36 w-72 h-72 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#06b6d4]/10 blur-2xl opacity-85" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-3 bg-slate-900/30 px-3 py-1 rounded-full border border-slate-800/30">
//               <MapPin className="h-5 w-5 text-rose-400" />
//               <span className="text-sm text-rose-300">Neon Night Explorer</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">Your journey starts the moment this page loads</h1>
//             <p className="text-slate-300 max-w-lg">Hear the distant arrival, let the neon trails appear under your cursor and follow the train as it traces routes on scroll. Adventure, nightlife and relaxation — pick a mood and watch the scene come alive.</p>

//             <div className="flex gap-4 mt-4">
//               <Link href="/plan-trip" className="gradient-primary px-6 py-3 rounded-2xl font-medium shadow-lg">Plan trip</Link>
//               <Link href="/saved-trips" className="px-4 py-3 rounded-2xl border border-slate-700/30">Saved trips</Link>
//             </div>

//             <div className="mt-6 text-sm text-slate-400 flex gap-4">
//               <div className="flex items-center gap-2"><Compass className="h-4 w-4 text-amber-400" /> Curated routes</div>
//               <div className="h-1 w-1 bg-slate-600 rounded-full" />
//               <div>Offline maps & tips</div>
//             </div>
//           </div>

//           <div className="relative w-full h-80">
//             {/* Neon map with glow trails */}
//             <NeonMap cursorX={cursorX} cursorY={cursorY} />

//             {/* train along route — uses scrollPct to move along path and occasionally center */}
//             <TrainOnRoute scrollPct={scrollPct} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- TrainOnRoute: small SVG train that follows a curve as page scrolls ---------- */
// function TrainOnRoute({ scrollPct }: { scrollPct: number }) {
//   // Path function: map t in [0,1] to (x,y) on SVG coordinate (0..1000, 0..300)
//   function posAt(t: number) {
//     // sample cubic / bezier-like curve
//     const x = 40 + t * 820; // 40..860
//     // create a wave-like y so train goes up/down in middle
//     const y = 200 - Math.sin(t * Math.PI * 2) * 60 - Math.pow(t - 0.5, 2) * 80;
//     return { x, y };
//   }

//   // center effect: every ~15% of scroll, train recenters in middle briefly
//   const centerPulse = Math.abs(Math.sin(scrollPct * Math.PI * 6));
//   const t = Math.min(1, scrollPct * 1.05);
//   const p = posAt(t);
//   const translate = `translate(${p.x - 24}px, ${p.y - 24}px)`;

//   return (
//     <motion.div style={{ transform: translate }} className="absolute left-0 top-0 w-full h-full pointer-events-none">
//       <svg width="60" height="60" viewBox="0 0 60 60" className="absolute" style={{ transform: 'translate(0,0)' }}>
//         <defs>
//           <linearGradient id="gtrain" x1="0" x2="1">
//             <stop offset="0%" stopColor="#f472b6" />
//             <stop offset="100%" stopColor="#06b6d4" />
//           </linearGradient>
//         </defs>
//         <g transform="translate(0,0) scale(1)">
//           <rect x="6" y="14" rx="6" ry="6" width="42" height="24" fill="url(#gtrain)" opacity="0.98" />
//           <circle cx="18" cy="42" r="4" fill="#020617" stroke="#a78bfa" strokeWidth="2" />
//           <circle cx="42" cy="42" r="4" fill="#020617" stroke="#06b6d4" strokeWidth="2" />
//           <rect x="9" y="6" width="10" height="10" rx="2" fill="#0ea5a4" opacity={0.12} />
//         </g>
//       </svg>

//       {/* subtle glow */}
//       <div style={{ left: p.x - 60, top: p.y - 60 }} className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] opacity-20 blur-3xl" />
//     </motion.div>
//   );
// }

// /* ---------- NeonMap (improved): cursor trail + pulsating cities ---------- */
// function NeonMap({ cursorX, cursorY }: { cursorX: any; cursorY: any }) {
//   const trailRef = useRef<HTMLDivElement | null>(null);
//   const [points, setPoints] = useState<Array<{ x: number; y: number; id: number }>>([]);

//   useEffect(() => {
//     const unsub = cursorX.onChange((x: number) => {
//       const y = cursorY.get();
//       setPoints((p) => [...p.slice(-8), { x, y, id: Date.now() }]);
//     });
//     return () => unsub();
//   }, [cursorX, cursorY]);

//   const cities = [
//     { id: 'tok', x: 0.74, y: 0.36, name: 'Tokyo' },
//     { id: 'ny', x: 0.24, y: 0.3, name: 'New York' },
//     { id: 'par', x: 0.42, y: 0.32, name: 'Paris' },
//     { id: 'syn', x: 0.58, y: 0.5, name: 'Sydney' },
//   ];

//   return (
//     <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900/25 to-transparent border border-slate-800/30 p-3 relative overflow-hidden">
//       <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" className="w-full h-full rounded-md">
//         <defs>
//           <linearGradient id="neon2" x1="0" x2="1">
//             <stop offset="0%" stopColor="#7c3aed" />
//             <stop offset="100%" stopColor="#06b6d4" />
//           </linearGradient>
//           <filter id="glo2">
//             <feGaussianBlur stdDeviation="6" result="b" />
//             <feMerge>
//               <feMergeNode in="b" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         <g stroke="url(#neon2)" strokeWidth="1.2" fill="none" opacity="0.95">
//           <path d="M40 380 C180 200, 320 190, 460 260 C600 330, 740 280, 880 240" strokeOpacity="0.55" strokeLinecap="round" />
//           <path d="M40 260 C160 140, 300 100, 460 180" strokeOpacity="0.28" strokeLinecap="round" />
//         </g>

//         {cities.map((c, i) => (
//           <g key={c.id} className="cursor-pointer">
//             <circle cx={c.x * 1000} cy={c.y * 600} r="10" fill="#06b6d4" opacity="0.98" />
//             <circle cx={c.x * 1000} cy={c.y * 600} r="22" fill="none" stroke="#7c3aed" strokeOpacity={0.12 + (i * 0.02)} />
//           </g>
//         ))}

//         {points.length > 1 && (
//           <polyline
//             points={points.map((p) => `${(p.x / window.innerWidth) * 1000},${(p.y / window.innerHeight) * 600}`).join(' ')}
//             fill="none"
//             stroke="url(#neon2)"
//             strokeWidth={3}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             style={{ filter: 'url(#glo2)', opacity: 0.85 }}
//           />
//         )}
//       </svg>

//       <div ref={trailRef} className="pointer-events-none absolute inset-0">
//         {points.map((pt) => (
//           <div key={pt.id} style={{ left: pt.x - 36, top: pt.y - 36 }} className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] opacity-30 blur-2xl" />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------- mainContent component to include SearchBar, Bento cards, Destinations, Footer ---------- */
// function mainContent() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10 pb-40">
//       <SearchBar />

//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <BentoMoodCards />
//         <div className="lg:col-span-2">
//           <DestinationShowcase />
//         </div>
//       </div>

//       <div className="mt-12">
//         <InteractiveRouteDemo />
//       </div>

//       <TravelFooter />
//     </div>
//   );
// }

// /* ---------- SearchBar (refined) ---------- */
// function SearchBar() {
//   const [q, setQ] = useState('');
//   const [mood, setMood] = useState('Adventure');
//   const moods = ['Adventure', 'Nightlife', 'Relax'];

//   return (
//     <div className="relative">
//       <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/30 rounded-3xl p-4 flex items-center gap-3 shadow-lg">
//         <div className="p-3 rounded-full bg-slate-800/40 border border-slate-700/30">
//           <Search className="h-5 w-5 text-slate-200" />
//         </div>
//         <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search places or try "${mood}"`} className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-white text-lg" />
//         <select value={mood} onChange={(e) => setMood(e.target.value)} className="bg-transparent text-slate-200 border-l border-slate-700/30 pl-4 pr-3 py-2">
//           {moods.map((m) => (
//             <option key={m} value={m}>{m}</option>
//           ))}
//         </select>

//         <button className="gradient-primary px-4 py-2 rounded-2xl">Search</button>
//       </div>

//       <div className="mt-3 flex gap-3">
//         {moods.map((m) => (
//           <motion.button whileHover={{ scale: 1.05 }} key={m} onClick={() => setMood(m)} className={`px-4 py-2 rounded-full ${m === mood ? 'bg-rose-500/20 border-rose-400 border' : 'border border-slate-700/20'} text-sm`}>{m}</motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------- BentoMoodCards: glassmorphism with image blocks shown on hover ---------- */
// function BentoMoodCards() {
//   const moods = [
//     { id: 'ad', title: 'Adventure', desc: 'Trails, mountains & wild tracks', theme: 'adventure' },
//     { id: 'nt', title: 'Nightlife', desc: 'Neon districts & late nights', theme: 'nightlife' },
//     { id: 'rl', title: 'Relax', desc: 'Beaches, retreats & slow days', theme: 'relax' },
//   ];

//   return (
//     <div className="space-y-6">
//       {moods.map((m) => (
//         <motion.div key={m.id} whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-3xl p-6 bg-white/5 border border-slate-800/30 backdrop-blur-md">
//           <div className="flex items-start gap-4">
//             <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-black font-bold text-xl">{m.title.charAt(0)}</div>
//             <div>
//               <div className="font-semibold text-lg">{m.title}</div>
//               <div className="text-sm text-slate-300">{m.desc}</div>
//             </div>
//           </div>

//           {/* bento image grid — purely CSS/SVG blocks, shown on hover via group */}
//           <div className="mt-4 grid grid-cols-3 gap-3">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div key={i} className="h-20 rounded-md overflow-hidden border border-slate-700/20 relative group">
//                 <div className={`absolute inset-0 transform transition-transform duration-500 group-hover:scale-105 ${m.theme === 'adventure' ? 'bg-gradient-to-br from-[#065f46] to-[#16a34a]' : m.theme === 'nightlife' ? 'bg-gradient-to-br from-[#7c3aed] to-[#06b6d4]' : 'bg-gradient-to-br from-[#f59e0b] to-[#f97316]'}`}></div>
//                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                   {/* simple SVG silhouettes to hint image types */}
//                   {m.theme === 'adventure' && <path d="M0 80 L20 40 L40 60 L60 20 L80 70 L100 30" stroke="#063f2f" strokeWidth="2" fill="none" strokeOpacity="0.12" />}
//                   {m.theme === 'nightlife' && <circle cx="80" cy="20" r="12" fill="#0ea5a4" opacity="0.08" />}
//                   {m.theme === 'relax' && <rect x="5" y="30" width="50" height="30" rx="6" fill="#fff" opacity="0.03" />}
//                 </svg>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ---------- DestinationShowcase: big glass cards for Adventure / Nightlife with larger visuals ---------- */
// function DestinationShowcase() {
//   const cards = [
//     { id: 'adv', title: 'Adventure Bento', subtitle: 'Hikes, treks and wild escapes', theme: 'adventure' },
//     { id: 'nite', title: 'Nightlife Bento', subtitle: 'Neon lanes & rooftop bars', theme: 'nightlife' },
//   ];

//   return (
//     <div className="space-y-6">
//       {cards.map((c) => (
//         <motion.div key={c.id} whileHover={{ scale: 1.01 }} className="relative overflow-hidden rounded-3xl p-6 bg-white/4 border border-slate-800/30 backdrop-blur-md">
//           <div className="flex items-center gap-4">
//             <div className="flex-1">
//               <div className="font-semibold text-2xl">{c.title}</div>
//               <div className="text-slate-300 mt-2">{c.subtitle}</div>
//             </div>
//             <div className="w-36 h-24 rounded-lg overflow-hidden">
//               {/* big visual block (SVG gradient) */}
//               <svg viewBox="0 0 200 120" className="w-full h-full">
//                 <defs>
//                   <linearGradient id={`big${c.id}`} x1="0" x2="1">
//                     <stop offset="0%" stopColor={c.theme === 'adventure' ? '#16a34a' : '#7c3aed'} />
//                     <stop offset="100%" stopColor={c.theme === 'adventure' ? '#06b6d4' : '#06b6d4'} />
//                   </linearGradient>
//                 </defs>
//                 <rect x="0" y="0" width="200" height="120" fill={`url(#big${c.id})`} opacity="0.9" />
//                 {c.theme === 'adventure' && <path d="M10 100 L40 40 L70 70 L100 20 L140 90 L180 45" stroke="#032f1f" strokeWidth="2" fill="none" strokeOpacity="0.12" />}
//                 {c.theme === 'nightlife' && <g>
//                   <circle cx="160" cy="20" r="12" fill="#0ea5a4" opacity="0.08" />
//                   <rect x="20" y="60" width="40" height="8" rx="2" fill="#000" opacity="0.06" />
//                 </g>}
//               </svg>
//             </div>
//           </div>

//           <div className="mt-4 flex gap-3">
//             <button className="px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-400">Explore</button>
//             <button className="px-4 py-2 rounded-lg border border-slate-700/30">Save</button>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ---------- InteractiveRouteDemo: small demo where the route moves to middle sometimes and scroll affects it ---------- */
// function InteractiveRouteDemo() {
//   const [scroll, setScroll] = useState(0);
//   useEffect(() => {
//     const onScroll = () => setScroll(window.scrollY / (document.body.scrollHeight - window.innerHeight || 1));
//     window.addEventListener('scroll', onScroll);
//     onScroll();
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const x = 20 + scroll * 80; // percent across
//   const center = Math.abs(Math.sin(scroll * Math.PI * 3));

//   return (
//     <div className="rounded-3xl p-6 bg-slate-900/30 border border-slate-800/30">
//       <div className="flex items-center justify-between">
//         <div>
//           <div className="font-semibold">Route demo</div>
//           <div className="text-sm text-slate-400">Scroll to move the route — sometimes it centers to show a waypoint.</div>
//         </div>
//         <div className="text-sm text-slate-300">Scroll: {(scroll * 100).toFixed(0)}%</div>
//       </div>

//       <div className="mt-6 relative h-40 bg-gradient-to-b from-slate-900/10 to-transparent rounded-lg overflow-hidden">
//         <svg viewBox="0 0 1000 200" className="w-full h-full">
//           <path d="M20 160 C180 40, 320 40, 460 120 C600 200, 740 140, 980 80" stroke="#7c3aed" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.6" />
//         </svg>

//         <div style={{ left: `${x}%`, transform: 'translate(-50%, -50%)' }} className={`absolute top-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center shadow-2xl`}>
//           <div className={`w-3 h-3 rounded-full ${center > 0.6 ? 'bg-white' : 'bg-black'}`} />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- Footer ---------- */
// function TravelFooter() {
//   return (
//     <footer className="mt-20 border-t border-slate-800/30 bg-transparent py-10">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center font-bold">ST</div>
//           <div>
//             <div className="font-semibold">Smart Tour Planner</div>
//             <div className="text-xs text-slate-400">Begin your journey — online, instantly.</div>
//           </div>
//         </div>

//         <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Smart Tour Planner</div>

//         <div className="flex items-center gap-4">
//           <Link href="/about" className="text-slate-300 text-sm">About</Link>
//           <Link href="/contact" className="text-slate-300 text-sm">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }







// // app/page.tsx  (or app/home/page.tsx)
// 'use client';

// import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { MapPin, Compass, Search, Heart } from 'lucide-react';

// /*
//  Corrected Neon Night Explorer homepage
//  - Guards against server `window` access
//  - Passes client screen size to NeonMap
//  - Cursor trail / polyline uses screen dims (no window.* in render)
//  - Small, self-contained: requires Tailwind + framer-motion + lucide-react
// */

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#041533] to-[#07021a] text-white overflow-x-hidden">
//       <AmbientAudio />
//       <HeroWithTrain />
//       <section className="py-32 bg-[#020617] text-center">
//   <h2 className="text-4xl font-bold mb-4">Discover Neon Adventures</h2>
//   <p className="text-slate-400 max-w-2xl mx-auto">
//     Explore stunning night routes across cities. Follow neon trails,
//     track trains, and experience a mix of nightlife and tranquility.
//   </p>
// </section>

// <section className="py-24 bg-gradient-to-b from-[#041533] to-[#07021a] text-center">
//   <h2 className="text-4xl font-bold mb-4">Why Choose Neon Night Explorer?</h2>
//   <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//     <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
//       <h3 className="text-xl font-semibold mb-2 text-[#06b6d4]">Immersive Design</h3>
//       <p className="text-slate-400">Enjoy dynamic lighting and smooth animations as you explore.</p>
//     </div>
//     <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
//       <h3 className="text-xl font-semibold mb-2 text-[#7c3aed]">Interactive Map</h3>
//       <p className="text-slate-400">Follow your cursor’s path and see trails light up in real-time.</p>
//     </div>
//     <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
//       <h3 className="text-xl font-semibold mb-2 text-[#f472b6]">Ambient Audio</h3>
//       <p className="text-slate-400">Listen to soothing train ambience while exploring.</p>
//     </div>
//   </div>
// </section>

//     </main>
//   );
// }

// /* ---------- Ambient Audio (keeps same safe behavior) ---------- */
// function AmbientAudio() {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [blocked, setBlocked] = useState(false);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     audio.volume = 0.25;
//     const playAttempt = audio.play();
//     if (playAttempt !== undefined) {
//       playAttempt.catch(() => setBlocked(true));
//     }
//   }, []);

//   return (
//     <div>
//       <audio ref={audioRef} loop src={generateTrainSoundDataURL()} />
//       {blocked && (
//         <div className="fixed bottom-8 right-8 z-50">
//           <button
//             onClick={() => {
//               audioRef.current?.play();
//               setBlocked(false);
//             }}
//             className="px-4 py-2 rounded-2xl bg-rose-500/90 shadow-lg"
//           >
//             Play ambient train sound
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
// function generateTrainSoundDataURL() {
//   const wavBase64 = 'UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';
//   return `data:audio/wav;base64,${wavBase64}`;
// }

// /* ---------- Hero with train route (fixed) ---------- */
// function HeroWithTrain() {
//   // cursor motion values (framer-motion)
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);
//   const [scrollPct, setScrollPct] = useState(0);

//   // keep client screen dims in state — initialized to safe defaults
//   const [screen, setScreen] = useState({ w: 1200, h: 800 });
//   useEffect(() => {
//     // run only on client
//     if (typeof window === 'undefined') return;
//     const update = () =>
//       setScreen({
//         w: window.innerWidth,
//         h: window.innerHeight,
//       });
//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   useEffect(() => {
//     // client only event listeners
//     if (typeof window === 'undefined') return;
//     const onMove = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };
//     const onScroll = () => {
//       const denom = document.body.scrollHeight - window.innerHeight || 1;
//       const pct = window.scrollY / denom;
//       setScrollPct(Math.min(1, Math.max(0, pct)));
//     };
//     window.addEventListener('mousemove', onMove);
//     window.addEventListener('scroll', onScroll);
//     onScroll();
//     return () => {
//       window.removeEventListener('mousemove', onMove);
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [cursorX, cursorY]);

//   // safe transforms using screen state
//   const l1x = useTransform(cursorX, [0, screen.w], [-30, 30]);
//   const l1y = useTransform(cursorY, [0, screen.h], [-20, 20]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
//       <div className="absolute inset-0 -z-20" />

//       {/* simple neon blobs that parallax with cursor */}
//       <motion.div style={{ x: l1x, y: l1y }} className="absolute -left-20 top-12 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/10 blur-3xl opacity-90" />
//       <motion.div style={{ x: l1x, y: l1y }} className="absolute right-12 top-36 w-72 h-72 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#06b6d4]/10 blur-2xl opacity-85" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-3 bg-slate-900/30 px-3 py-1 rounded-full border border-slate-800/30">
//               <MapPin className="h-5 w-5 text-rose-400" />
//               <span className="text-sm text-rose-300">Neon Night Explorer</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">Your journey starts the moment this page loads</h1>
//             <p className="text-slate-300 max-w-lg">Hear the distant arrival, let the neon trails appear under your cursor and follow the train as it traces routes on scroll. Adventure, nightlife and relaxation — pick a mood and watch the scene come alive.</p>

//             <div className="flex gap-4 mt-4">
//               <Link href="/plan-trip" className="gradient-primary px-6 py-3 rounded-2xl font-medium shadow-lg">Plan trip</Link>
//               <Link href="/saved-trips" className="px-4 py-3 rounded-2xl border border-slate-700/30">Saved trips</Link>
//             </div>

//             <div className="mt-6 text-sm text-slate-400 flex gap-4">
//               <div className="flex items-center gap-2"><Compass className="h-4 w-4 text-amber-400" /> Curated routes</div>
//               <div className="h-1 w-1 bg-slate-600 rounded-full" />
//               <div>Offline maps & tips</div>
//             </div>
//           </div>

//           <div className="relative w-full h-80">
//             {/* Neon map with glow trails — pass screen dims so no window access inside NeonMap */}
//             <NeonMap cursorX={cursorX} cursorY={cursorY} screen={screen} />
//             <TrainOnRoute scrollPct={scrollPct} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- TrainOnRoute (unchanged) ---------- */
// function TrainOnRoute({ scrollPct }: { scrollPct: number }) {
//   function posAt(t: number) {
//     const x = 40 + t * 820;
//     const y = 200 - Math.sin(t * Math.PI * 2) * 60 - Math.pow(t - 0.5, 2) * 80;
//     return { x, y };
//   }

//   const t = Math.min(1, scrollPct * 1.05);
//   const p = posAt(t);

//   // place train absolutely inside the parent area (relative parent)
//   return (
//     <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
//       <div style={{ position: 'absolute', left: `${p.x}px`, top: `${p.y}px`, transform: 'translate(-50%, -50%)' }}>
//         <svg width="60" height="60" viewBox="0 0 60 60">
//           <defs>
//             <linearGradient id="gtrain" x1="0" x2="1">
//               <stop offset="0%" stopColor="#f472b6" />
//               <stop offset="100%" stopColor="#06b6d4" />
//             </linearGradient>
//           </defs>
//           <g transform="translate(0,0) scale(1)">
//             <rect x="6" y="14" rx="6" ry="6" width="42" height="24" fill="url(#gtrain)" opacity="0.98" />
//             <circle cx="18" cy="42" r="4" fill="#020617" stroke="#a78bfa" strokeWidth="2" />
//             <circle cx="42" cy="42" r="4" fill="#020617" stroke="#06b6d4" strokeWidth="2" />
//             <rect x="9" y="6" width="10" height="10" rx="2" fill="#0ea5a4" opacity={0.12} />
//           </g>
//         </svg>
//         <div style={{ width: 160, height: 160, borderRadius: '9999px', background: 'radial-gradient(circle at center, rgba(124,58,237,0.22), transparent)', filter: 'blur(20px)' }} />
//       </div>
//     </div>
//   );
// }

// /* ---------- NeonMap (fixed): uses passed `screen` to map cursor points -> SVG coords ---------- */
// function NeonMap({ cursorX, cursorY, screen }: { cursorX: any; cursorY: any; screen: { w: number; h: number } }) {
//   const trailRef = useRef<HTMLDivElement | null>(null);
//   const [points, setPoints] = useState<Array<{ x: number; y: number; id: number }>>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [box, setBox] = useState({ w: 1000, h: 600, left: 0, top: 0 });

//   // listen to cursor updates and record last few points (client-only)
//   useEffect(() => {
//     const unsub = cursorX.onChange((x: number) => {
//       const y = cursorY.get();
//       setPoints((p) => [...p.slice(-8), { x, y, id: Date.now() }]);
//     });
//     return () => unsub();
//   }, [cursorX, cursorY]);

//   // measure container rect on mount + resize (client-only)
//   useLayoutEffect(() => {
//     if (!containerRef.current) return;
//     const el = containerRef.current;
//     const measure = () => {
//       const r = el.getBoundingClientRect();
//       setBox({ w: r.width || 1000, h: r.height || 600, left: r.left || 0, top: r.top || 0 });
//     };
//     measure();
//     if (typeof window !== 'undefined') window.addEventListener('resize', measure);
//     return () => typeof window !== 'undefined' && window.removeEventListener('resize', measure);
//   }, []);

//   const cities = [
//     { id: 'tok', x: 0.74, y: 0.36, name: 'Tokyo' },
//     { id: 'ny', x: 0.24, y: 0.3, name: 'New York' },
//     { id: 'par', x: 0.42, y: 0.32, name: 'Paris' },
//     { id: 'syn', x: 0.58, y: 0.5, name: 'Sydney' },
//   ];

//   // Convert recorded screen points into SVG coordinates based on measured box
//   const polyPoints = points.length > 0 ? points.map((p) => {
//     // clamp fallback to box dims
//     const px = ((p.x - (box.left || 0)) / (box.w || screen.w || 1000)) * 1000;
//     const py = ((p.y - (box.top || 0)) / (box.h || screen.h || 600)) * 600;
//     return `${Math.max(0, Math.min(1000, px))},${Math.max(0, Math.min(600, py))}`;
//   }).join(' ') : '';

//   return (
//     <div ref={containerRef} className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900/25 to-transparent border border-slate-800/30 p-3 relative overflow-hidden">
//       <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" className="w-full h-full rounded-md">
//         <defs>
//           <linearGradient id="neon2" x1="0" x2="1">
//             <stop offset="0%" stopColor="#7c3aed" />
//             <stop offset="100%" stopColor="#06b6d4" />
//           </linearGradient>
//           <filter id="glo2">
//             <feGaussianBlur stdDeviation="6" result="b" />
//             <feMerge>
//               <feMergeNode in="b" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         <g stroke="url(#neon2)" strokeWidth="1.2" fill="none" opacity="0.95">
//           <path d="M40 380 C180 200, 320 190, 460 260 C600 330, 740 280, 880 240" strokeOpacity="0.55" strokeLinecap="round" />
//           <path d="M40 260 C160 140, 300 100, 460 180" strokeOpacity="0.28" strokeLinecap="round" />
//         </g>

//         {cities.map((c, i) => (
//           <g key={c.id} className="cursor-pointer">
//             <circle cx={c.x * 1000} cy={c.y * 600} r="10" fill="#06b6d4" opacity="0.98" />
//             <circle cx={c.x * 1000} cy={c.y * 600} r="22" fill="none" stroke="#7c3aed" strokeOpacity={0.12 + (i * 0.02)} />
//           </g>
//         ))}

//         {polyPoints && (
//           <polyline
//             points={polyPoints}
//             fill="none"
//             stroke="url(#neon2)"
//             strokeWidth={3}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             style={{ filter: 'url(#glo2)', opacity: 0.85 }}
//           />
//         )}
//       </svg>

//       <div className="pointer-events-none absolute inset-0">
//         {points.map((pt) => {
//           // map to measured box for DOM glow placement (use same conversion)
//           const left = ((pt.x - (box.left || 0)) / (box.w || screen.w || 1000)) * 1000;
//           const top = ((pt.y - (box.top || 0)) / (box.h || screen.h || 600)) * 600;
//           return (
//             <div key={pt.id} style={{ left: Math.max(0, Math.min((box.w || screen.w), left - 36)), top: Math.max(0, Math.min((box.h || screen.h), top - 36)) }} className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] opacity-30 blur-2xl" />
//           );
//         })}
//       </div>
//     </div>
//   );
// }











// 'use client';

// import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { MapPin, Compass } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#041533] to-[#07021a] text-white overflow-x-hidden">
//       <AmbientAudio />
//       <HeroWithTrain />
//       <FeaturesSection />
//       <DiscoverSection />
//       <FooterSection />
//     </main>
//   );
// }

// /* ---------- Ambient Train Audio ---------- */
// function AmbientAudio() {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [blocked, setBlocked] = useState(false);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     audio.volume = 0.25;
//     const playAttempt = audio.play();
//     if (playAttempt !== undefined) {
//       playAttempt.catch(() => setBlocked(true));
//     }
//   }, []);

//   return (
//     <>
//       <audio ref={audioRef} loop src={generateTrainSoundDataURL()} />
//       {blocked && (
//         <div className="fixed bottom-8 right-8 z-50">
//           <button
//             onClick={() => {
//               audioRef.current?.play();
//               setBlocked(false);
//             }}
//             className="px-4 py-2 rounded-2xl bg-rose-500/90 shadow-lg hover:bg-rose-500"
//           >
//             Play ambient train sound
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// function generateTrainSoundDataURL() {
//   const wavBase64 = 'UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';
//   return `data:audio/wav;base64,${wavBase64}`;
// }

// /* ---------- Hero Section with Train ---------- */
// function HeroWithTrain() {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);
//   const [scrollPct, setScrollPct] = useState(0);
//   const [screen, setScreen] = useState({ w: 1200, h: 800 });

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const update = () => setScreen({ w: window.innerWidth, h: window.innerHeight });
//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const onMove = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };
//     const onScroll = () => {
//       const denom = document.body.scrollHeight - window.innerHeight || 1;
//       const pct = window.scrollY / denom;
//       setScrollPct(Math.min(1, Math.max(0, pct)));
//     };
//     window.addEventListener('mousemove', onMove);
//     window.addEventListener('scroll', onScroll);
//     onScroll();
//     return () => {
//       window.removeEventListener('mousemove', onMove);
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [cursorX, cursorY]);

//   const l1x = useTransform(cursorX, [0, screen.w], [-30, 30]);
//   const l1y = useTransform(cursorY, [0, screen.h], [-20, 20]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <motion.div style={{ x: l1x, y: l1y }} className="absolute -left-20 top-12 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/10 blur-3xl opacity-90" />
//       <motion.div style={{ x: l1x, y: l1y }} className="absolute right-12 top-36 w-72 h-72 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#06b6d4]/10 blur-2xl opacity-85" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-3 bg-slate-900/30 px-3 py-1 rounded-full border border-slate-800/30">
//               <MapPin className="h-5 w-5 text-rose-400" />
//               <span className="text-sm text-rose-300">Neon Night Explorer</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
//               Your journey starts the moment this page loads
//             </h1>
//             <p className="text-slate-300 max-w-lg">
//               Hear the distant arrival, let the neon trails appear under your cursor and follow the train as it traces routes on scroll. Adventure, nightlife, and relaxation — pick a mood and watch the scene come alive.
//             </p>

//             <div className="flex gap-4 mt-4">
//               <Link href="/plan-trip" className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition">
//                 Plan trip
//               </Link>
//               <Link href="/saved-trips" className="px-4 py-3 rounded-2xl border border-slate-700/30 hover:bg-slate-800/30">
//                 Saved trips
//               </Link>
//             </div>

//             <div className="mt-6 text-sm text-slate-400 flex gap-4">
//               <div className="flex items-center gap-2"><Compass className="h-4 w-4 text-amber-400" /> Curated routes</div>
//               <div className="h-1 w-1 bg-slate-600 rounded-full" />
//               <div>Offline maps & tips</div>
//             </div>
//           </div>

//           <div className="relative w-full h-80">
//             <NeonMap cursorX={cursorX} cursorY={cursorY} screen={screen} />
//             <TrainOnRoute scrollPct={scrollPct} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Train Animation ---------- */
// function TrainOnRoute({ scrollPct }: { scrollPct: number }) {
//   function posAt(t: number) {
//     const x = 40 + t * 820;
//     const y = 200 - Math.sin(t * Math.PI * 2) * 60 - Math.pow(t - 0.5, 2) * 80;
//     return { x, y };
//   }

//   const t = Math.min(1, scrollPct * 1.05);
//   const p = posAt(t);

//   return (
//     <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
//       <div style={{ position: 'absolute', left: `${p.x}px`, top: `${p.y}px`, transform: 'translate(-50%, -50%)' }}>
//         <svg width="60" height="60" viewBox="0 0 60 60">
//           <defs>
//             <linearGradient id="gtrain" x1="0" x2="1">
//               <stop offset="0%" stopColor="#f472b6" />
//               <stop offset="100%" stopColor="#06b6d4" />
//             </linearGradient>
//           </defs>
//           <rect x="6" y="14" rx="6" ry="6" width="42" height="24" fill="url(#gtrain)" opacity="0.98" />
//           <circle cx="18" cy="42" r="4" fill="#020617" stroke="#a78bfa" strokeWidth="2" />
//           <circle cx="42" cy="42" r="4" fill="#020617" stroke="#06b6d4" strokeWidth="2" />
//         </svg>
//       </div>
//     </div>
//   );
// }

// /* ---------- Neon Map ---------- */
// function NeonMap({ cursorX, cursorY, screen }: { cursorX: any; cursorY: any; screen: { w: number; h: number } }) {
//   const [points, setPoints] = useState<Array<{ x: number; y: number; id: number }>>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [box, setBox] = useState({ w: 1000, h: 600, left: 0, top: 0 });

//   useEffect(() => {
//     const unsub = cursorX.onChange((x: number) => {
//       const y = cursorY.get();
//       setPoints((p) => [...p.slice(-8), { x, y, id: Date.now() }]);
//     });
//     return () => unsub();
//   }, [cursorX, cursorY]);

//   useLayoutEffect(() => {
//     if (!containerRef.current) return;
//     const el = containerRef.current;
//     const measure = () => {
//       const r = el.getBoundingClientRect();
//       setBox({ w: r.width || 1000, h: r.height || 600, left: r.left || 0, top: r.top || 0 });
//     };
//     measure();
//     window.addEventListener('resize', measure);
//     return () => window.removeEventListener('resize', measure);
//   }, []);

//   const polyPoints = points.map((p) => {
//     const px = ((p.x - box.left) / box.w) * 1000;
//     const py = ((p.y - box.top) / box.h) * 600;
//     return `${Math.max(0, Math.min(1000, px))},${Math.max(0, Math.min(600, py))}`;
//   }).join(' ');

//   return (
//     <div ref={containerRef} className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900/25 to-transparent border border-slate-800/30 p-3 relative overflow-hidden">
//       <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" className="w-full h-full rounded-md">
//         <defs>
//           <linearGradient id="neon2" x1="0" x2="1">
//             <stop offset="0%" stopColor="#7c3aed" />
//             <stop offset="100%" stopColor="#06b6d4" />
//           </linearGradient>
//           <filter id="glo2">
//             <feGaussianBlur stdDeviation="6" result="b" />
//             <feMerge>
//               <feMergeNode in="b" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         <path d="M40 380 C180 200, 320 190, 460 260 C600 330, 740 280, 880 240" stroke="url(#neon2)" strokeWidth="1.5" fill="none" filter="url(#glo2)" opacity="0.5" />
//         {polyPoints && (
//           <polyline points={polyPoints} fill="none" stroke="url(#neon2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#glo2)', opacity: 0.85 }} />
//         )}
//       </svg>
//     </div>
//   );
// }

// /* ---------- Features Section ---------- */
// function FeaturesSection() {
//   return (
//     <section className="py-32 bg-[#020617] text-center">
//       <h2 className="text-4xl font-bold mb-8">Discover Neon Adventures</h2>
//       <p className="text-slate-400 max-w-2xl mx-auto mb-12">
//         Explore stunning night routes across cities. Follow neon trails, track trains, and experience a mix of nightlife and tranquility.
//       </p>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {[
//           { title: 'Immersive Design', desc: 'Enjoy dynamic lighting and smooth animations as you explore.' },
//           { title: 'Interactive Map', desc: 'Follow your cursor’s path and see trails light up in real-time.' },
//           { title: 'Ambient Audio', desc: 'Listen to soothing train ambience while exploring.' }
//         ].map((f, i) => (
//           <div key={i} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:scale-105 transition">
//             <h3 className="text-xl font-semibold mb-2 text-[#06b6d4]">{f.title}</h3>
//             <p className="text-slate-400">{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------- Discover Section ---------- */
// function DiscoverSection() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-[#041533] to-[#07021a] text-center">
//       <h2 className="text-4xl font-bold mb-8">Why Choose Neon Night Explorer?</h2>
//       <p className="text-slate-400 max-w-2xl mx-auto mb-10">
//         Designed for dreamers, travelers, and those who find beauty in motion.
//       </p>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-4xl mx-auto text-slate-300 leading-relaxed px-6"
//       >
//         Experience a new kind of journey — where movement meets art, sound blends with scenery, and every scroll feels like a ride through neon-lit nights.
//       </motion.div>
//     </section>
//   );
// }

// /* ---------- Footer ---------- */
// function FooterSection() {
//   return (
//     <footer className="py-10 text-center border-t border-slate-800/50 text-slate-500">
//       <p>© 2025 Neon Night Explorer — Designed with 💜 and React.</p>
//     </footer>
//   );
// }








// 'use client';

// import React, { useEffect } from 'react';
// import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
// import Link from 'next/link';
// import { MapPin, Compass } from 'lucide-react';

// /* ------------------------ HOME PAGE ------------------------ */
// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_#010511,_#050a1f)] text-white overflow-hidden">
//       <HeroScene />
//       <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-20">
//         <SearchBar />
//         <MoodPortals />
//         <DestinationCards />
//       </div>
//       <FloatingElements />
//       <TravelFooter />
//     </main>
//   );
// }

// /* ------------------------ HERO SCENE ------------------------ */
// function HeroScene() {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);

//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };
//     window.addEventListener('mousemove', onMove);
//     return () => window.removeEventListener('mousemove', onMove);
//   }, [cursorX, cursorY]);

//   const layer1X = useTransform(cursorX, [0, window.innerWidth || 1200], [-30, 30]);
//   const layer1Y = useTransform(cursorY, [0, window.innerHeight || 800], [-20, 20]);
//   const layer2X = useTransform(cursorX, [0, window.innerWidth || 1200], [-15, 15]);
//   const layer2Y = useTransform(cursorY, [0, window.innerHeight || 800], [-10, 10]);

//   return (
//     <section className="relative h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-16 px-8">
//       {/* Background gradients */}
//       <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#020c24] via-[#040a1a] to-[#01040a]" />
//       <motion.div
//         style={{ x: layer1X, y: layer1Y }}
//         className="absolute -top-20 left-4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/12 blur-3xl opacity-80"
//       />
//       <motion.div
//         style={{ x: layer2X, y: layer2Y }}
//         className="absolute top-8 right-12 w-72 h-72 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#38bdf8]/12 blur-2xl opacity-80"
//       />

//       {/* Left content */}
//       <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
//         <div className="flex items-center gap-3 bg-slate-900/30 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/30">
//           <MapPin className="h-5 w-5 text-cyan-400" />
//           <span className="text-sm text-cyan-300">Portal: MapWhiz Explorer</span>
//         </div>

//         <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
//           Navigate the World with <span className="text-cyan-400">MapWhiz</span>
//         </h1>
//         <p className="text-slate-300 max-w-xl">
//           Discover destinations that match your vibe — powered by real-time trends, mood insights, and
//           interactive maps. Let MapWhiz be your compass for every adventure.
//         </p>

//         <div className="flex gap-4 mt-4">
//           <Link
//             href="/plan-trip"
//             className="bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition-transform"
//           >
//             Start Exploring
//           </Link>
//           <Link
//             href="/saved-trips"
//             className="px-4 py-3 rounded-2xl border border-slate-700/30 hover:bg-slate-800/30 transition"
//           >
//             Saved Trips
//           </Link>
//         </div>
//       </div>

//       {/* Right — Interactive Compass */}
//       <div className="relative w-72 h-72 flex items-center justify-center">
//         <FlickeringCompass />
//       </div>
//     </section>
//   );
// }

// /* ------------------------ COMPASS COMPONENT ------------------------ */
// function FlickeringCompass() {
//   const controls = useAnimation();

//   useEffect(() => {
//     const animateNeedle = async () => {
//       while (true) {
//         const angle = Math.random() * 8 - 4; // flicker ±4 degrees
//         await controls.start({ rotate: angle, transition: { duration: 0.3, ease: 'easeInOut' } });
//       }
//     };
//     animateNeedle();
//   }, [controls]);

//   return (
//     <motion.div
//       className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-500/30 shadow-[0_0_40px_-10px_#06b6d4] flex items-center justify-center"
//       whileHover={{ scale: 1.05, rotate: 2 }}
//       transition={{ type: 'spring', stiffness: 100 }}
//     >
//       {/* Outer glow ring */}
//       <div className="absolute inset-0 rounded-full border border-cyan-400/20 blur-sm" />
//       <div className="absolute inset-1 rounded-full border border-cyan-500/10" />

//       {/* Compass needle */}
//       <motion.div
//         animate={controls}
//         className="absolute w-1 h-24 bg-gradient-to-b from-cyan-400 to-pink-500 origin-bottom"
//         style={{ y: -20 }}
//       />

//       {/* Center glow */}
//       <div className="absolute w-6 h-6 rounded-full bg-cyan-400 blur-sm" />
//       <div className="absolute w-4 h-4 rounded-full bg-pink-400 animate-pulse" />

//       {/* Direction markers */}
//       {['N', 'E', 'S', 'W'].map((d, i) => (
//         <div
//           key={d}
//           className="absolute text-cyan-300 font-semibold"
//           style={{
//             transform: `rotate(${i * 90}deg) translateY(-110px) rotate(-${i * 90}deg)`,
//           }}
//         >
//           {d}
//         </div>
//       ))}
//     </motion.div>
//   );
// }

// /* ------------------------ SEARCH BAR ------------------------ */
// function SearchBar() {
//   const [query, setQuery] = React.useState('');
//   const [mood, setMood] = React.useState('Adventure');
//   const moods = ['Adventure', 'Relax', 'Nightlife', 'Cultural', 'Eco'];

//   return (
//     <div className="relative z-30 mt-10">
//       <div className="mx-auto max-w-3xl">
//         <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/40 rounded-3xl p-4 flex items-center gap-3 shadow-lg">
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder={`Search destinations or moods like "${mood}"`}
//             className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-white text-lg"
//           />
//           <select
//             value={mood}
//             onChange={(e) => setMood(e.target.value)}
//             className="bg-transparent text-slate-200 border-l border-slate-700/30 pl-4 pr-3 py-2"
//           >
//             {moods.map((m) => (
//               <option key={m} value={m} className="bg-slate-900">
//                 {m}
//               </option>
//             ))}
//           </select>
//           <button className="bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 rounded-2xl font-medium">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ------------------------ MOOD PORTALS ------------------------ */
// function MoodPortals() {
//   const portals = [
//     { id: 'ad', name: 'Adventure', desc: 'Trails & mountains', emoji: '⛰️' },
//     { id: 'rl', name: 'Relax', desc: 'Beaches & spas', emoji: '🏖️' },
//     { id: 'nt', name: 'Nightlife', desc: 'Neon lights & vibes', emoji: '🌃' },
//   ];
//   return (
//     <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {portals.map((p, i) => (
//         <motion.div
//           key={p.id}
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: 'spring' }}
//           className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/30 hover:border-cyan-400/30 transition-all"
//         >
//           <div className="flex items-start gap-4">
//             <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 to-violet-400 text-black font-bold text-xl">
//               {p.emoji}
//             </div>
//             <div>
//               <div className="font-semibold text-lg">{p.name}</div>
//               <div className="text-sm text-slate-300">{p.desc}</div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ------------------------ DESTINATION CARDS ------------------------ */
// function DestinationCards() {
//   const destinations = [
//     { id: 'tok', name: 'Tokyo', tag: 'Neon Nights' },
//     { id: 'lis', name: 'Lisbon', tag: 'Coastal Vibes' },
//     { id: 'pat', name: 'Patagonia', tag: 'Wild Tracks' },
//   ];
//   return (
//     <div className="mt-10 grid grid-cols-1 gap-4">
//       {destinations.map((d) => (
//         <motion.div
//           key={d.id}
//           whileHover={{ x: 6 }}
//           className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/30 hover:border-cyan-400/20 transition-all"
//         >
//           <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-400 flex items-center justify-center font-bold text-black">
//             {d.name.charAt(0)}
//           </div>
//           <div>
//             <div className="font-semibold">{d.name}</div>
//             <div className="text-sm text-slate-300">{d.tag}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-2 text-sm text-slate-400">
//             <button className="px-3 py-1 rounded-full border border-slate-700/30 hover:border-cyan-400/30">
//               View
//             </button>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ------------------------ FLOATING ELEMENTS ------------------------ */
// function FloatingElements() {
//   return (
//     <div className="pointer-events-none">
//       <div className="absolute left-8 top-40 w-36 h-36 rounded-full bg-gradient-to-br from-[#06b6d4]/25 to-[#7c3aed]/15 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
//       <div className="absolute right-10 top-72 w-48 h-48 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#06b6d4]/10 blur-3xl animate-[float_9s_ease-in-out_infinite]" />
//     </div>
//   );
// }

// /* ------------------------ FOOTER ------------------------ */
// function TravelFooter() {
//   return (
//     <footer className="mt-20 border-t border-slate-800/30 bg-transparent py-10">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-bold">
//             MW
//           </div>
//           <div>
//             <div className="font-semibold">MapWhiz</div>
//             <div className="text-xs text-slate-400">Your Smart Travel Compass</div>
//           </div>
//         </div>
//         <div className="text-slate-400 text-sm">© {new Date().getFullYear()} MapWhiz</div>
//       </div>
//     </footer>
//   );
// }




'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

/* ------------------------ HOME PAGE ------------------------ */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_#010511,_#050a1f)] text-white overflow-hidden">
      <HeroScene />
    </main>
  );
}

/* ------------------------ HERO SCENE ------------------------ */
function HeroScene() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [cursorX, cursorY]);

  const layer1X = useTransform(cursorX, [0, window.innerWidth || 1200], [-30, 30]);
  const layer1Y = useTransform(cursorY, [0, window.innerHeight || 800], [-20, 20]);
  const layer2X = useTransform(cursorX, [0, window.innerWidth || 1200], [-15, 15]);
  const layer2Y = useTransform(cursorY, [0, window.innerHeight || 800], [-10, 10]);

  return (
    <section className="relative h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-16 px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#020c24] via-[#040a1a] to-[#01040a]" />
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute -top-20 left-4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/12 blur-3xl opacity-80"
      />
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute top-8 right-12 w-72 h-72 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#38bdf8]/12 blur-2xl opacity-80"
      />

      {/* 🌌 Dhruv Tara + Saptarishi Constellation */}
      <ConstellationBackground />

      {/* Left content */}
      <div className="relative z-10 flex flex-col gap-6 max-w-2xl text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 bg-slate-900/30 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/30">
          <MapPin className="h-5 w-5 text-cyan-400" />
          <span className="text-sm text-cyan-300">Portal: MapWhiz Explorer</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Navigate the World with <span className="text-cyan-400">MapWhiz</span>
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto lg:mx-0">
          Discover destinations that match your vibe — powered by real-time trends, mood insights, and
          interactive maps. Let MapWhiz be your compass for every adventure.
        </p>

        <div className="flex gap-4 mt-4 justify-center lg:justify-start">
          <Link
            href="/plan-trip"
            className="bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition-transform"
          >
            Start Exploring
          </Link>
          <Link
            href="/saved-trips"
            className="px-4 py-3 rounded-2xl border border-slate-700/30 hover:bg-slate-800/30 transition"
          >
            Saved Trips
          </Link>
        </div>
      </div>

      {/* Right — Interactive Compass */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        <FlickeringCompass />
      </div>
    </section>
  );
}

/* ------------------------ CONSTELLATION BACKGROUND ------------------------ */



function ConstellationBackground() {
  const stars = [
    { x: 100, y: 400, size: 2 },
    { x: 200, y: 300, size: 3 },
    { x: 300, y: 320, size: 2.5 },
    { x: 400, y: 250, size: 3 },
    { x: 500, y: 260, size: 2.5 },
    { x: 600, y: 200, size: 3 },
    { x: 700, y: 150, size: 5, isDhruvTara: true },
  ];

  return (
    <motion.svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full z-10 pointer-events-none" // 🔹 z-10 = above gradients, below compass
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background for clarity */}
      <rect width="100%" height="100%" fill="transparent" />

      {/* Connecting lines */}
      <motion.polyline
        points="100,400 200,300 300,320 400,250 500,260 600,200 700,150"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.circle
          key={i}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill={star.isDhruvTara ? "#00e6ff" : "#ffffff"}
          filter={star.isDhruvTara ? "url(#glow)" : "url(#starGlow)"}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: star.isDhruvTara ? [1, 1.6, 1] : [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.isDhruvTara ? 3 : 2 + Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dhruv Tara Halo */}
      <motion.circle
        cx="700"
        cy="150"
        r="14"
        stroke="#00e6ff"
        strokeWidth="0.8"
        fill="none"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* Glow Filters */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
}



/* ------------------------ COMPASS COMPONENT ------------------------ */
function FlickeringCompass() {
  const controls = useAnimation();

  useEffect(() => {
    const animateNeedle = async () => {
      while (true) {
        const angle = Math.random() * 8 - 4; // flicker ±4 degrees
        await controls.start({ rotate: angle, transition: { duration: 0.3, ease: 'easeInOut' } });
      }
    };
    animateNeedle();
  }, [controls]);

  return (
    <motion.div
      className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-500/30 shadow-[0_0_40px_-10px_#06b6d4] flex items-center justify-center"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/20 blur-sm" />
      <div className="absolute inset-1 rounded-full border border-cyan-500/10" />

      {/* Compass needle */}
      <motion.div
        animate={controls}
        className="absolute w-1 h-24 bg-gradient-to-b from-cyan-400 to-pink-500 origin-bottom"
        style={{ y: -20 }}
      />

      {/* Center glow */}
      <div className="absolute w-6 h-6 rounded-full bg-cyan-400 blur-sm" />
      <div className="absolute w-4 h-4 rounded-full bg-pink-400 animate-pulse" />

      {/* Direction markers */}
      {['N', 'E', 'S', 'W'].map((d, i) => (
        <div
          key={d}
          className="absolute text-cyan-300 font-semibold"
          style={{
            transform: `rotate(${i * 90}deg) translateY(-110px) rotate(-${i * 90}deg)`,
          }}
        >
          {d}
        </div>
      ))}
    </motion.div>
  );
}
