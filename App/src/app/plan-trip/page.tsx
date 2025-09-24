// 'use client';
// type InterestKey = 'Nature' | 'Adventure' | 'Spiritual' | 'Cultural' | 'Foodie' | 'Relaxing';

// type FormState = {
//     startLocation: string;
//     destination: string;
//     startDate: string;
//     numDays: number;
//     numPeople: number;
//     budget: number;
//     interests: Record<InterestKey, boolean>;
// };

// import React, { useState } from 'react';
// import { Map } from 'lucide-react';

// export default function HomePage() {
//     const [formState, setFormState] = useState<FormState>({
//         startLocation: '',
//         destination: '',
//         startDate: '',
//         numDays: 1,
//         numPeople: 1,
//         budget: 1000,
//         interests: {
//             Nature: false,
//             Adventure: false,
//             Spiritual: false,
//             Cultural: false,
//             Foodie: false,
//             Relaxing: false,
//         },
//     });


//     const [tourGenerated, setTourGenerated] = useState(false);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value, type } = e.target;
//         setFormState(prev => ({
//             ...prev,
//             [name]: type === 'number' ? Number(value) : value,
//         }));
//     };

//     const handleInterestClick = (interest: InterestKey) => {
//         setFormState(prev => ({
//             ...prev,
//             interests: {
//                 ...prev.interests,
//                 [interest]: !prev.interests[interest],
//             },
//         }));
//     };


//     const handleGenerateTour = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Tour details:', formState);
//         setTourGenerated(true);
//     };

//     const getBudgetDescription = (budget: number) => {
//         if (budget < 5000) return 'Economy';
//         if (budget < 15000) return 'Standard';
//         if (budget < 30000) return 'Premium';
//         return 'Luxury';
//     };

//     return (
//         <div className="flex items-center justify-center p-4">
//             <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl mx-auto">
//                 <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
//                     Plan Your Perfect Tour
//                 </h2>
//                 <form onSubmit={handleGenerateTour} className="space-y-6">
//                     {/* Starting & Destination */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">
//                                 Starting Location
//                             </label>
//                             <input
//                                 type="text"
//                                 name="startLocation"
//                                 value={formState.startLocation}
//                                 onChange={handleChange}
//                                 placeholder="e.g., New York, NY"
//                                 required
//                                 className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">
//                                 Destination
//                             </label>
//                             <input
//                                 type="text"
//                                 name="destination"
//                                 value={formState.destination}
//                                 onChange={handleChange}
//                                 placeholder="e.g., Paris, France"
//                                 required
//                                 className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>
//                     </div>

//                     {/* Date, Days, People */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">
//                                 Starting Date
//                             </label>
//                             <input
//                                 type="date"
//                                 name="startDate"
//                                 value={formState.startDate}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">
//                                 Number of Days
//                             </label>
//                             <input
//                                 type="number"
//                                 name="numDays"
//                                 value={formState.numDays}
//                                 onChange={handleChange}
//                                 min={1}
//                                 required
//                                 className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">
//                                 Number of People
//                             </label>
//                             <input
//                                 type="number"
//                                 name="numPeople"
//                                 value={formState.numPeople}
//                                 onChange={handleChange}
//                                 min={1}
//                                 required
//                                 className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             />
//                         </div>
//                     </div>

//                     {/* Budget */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-1">
//                             Budget
//                         </label>
//                         <div className="flex items-center space-x-4">
//                             <span className="text-sm text-gray-600">Low</span>
//                             <input
//                                 type="range"
//                                 name="budget"
//                                 value={formState.budget}
//                                 onChange={handleChange}
//                                 min={1000}
//                                 max={50000}
//                                 step={100}
//                                 className="w-full h-2 bg-gray-300 rounded-lg"
//                             />
//                             <span className="text-sm text-gray-600">High</span>
//                             <span className="w-24 text-right text-lg font-bold text-indigo-500">
//                                 ${formState.budget}
//                             </span>
//                         </div>
//                     </div>

//                     {/* Interests */}
//                     <div>
//                         <span className="block text-sm font-medium text-gray-600 mb-2">
//                             Interests
//                         </span>
//                         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 gap-4">
//                             {(['Nature', 'Adventure', 'Spiritual', 'Cultural', 'Foodie', 'Relaxing'] as InterestKey[])
//                                 .map((interest) => (
//                                     <button
//                                         key={interest}
//                                         type="button"
//                                         onClick={() => handleInterestClick(interest)}
//                                         className={`py-2 px-4 rounded-full border-2 transition-colors duration-200 ${formState.interests[interest]
//                                             ? 'bg-indigo-500 text-white font-medium border-indigo-500'
//                                             : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300'
//                                             }`}
//                                     >
//                                         {interest}
//                                     </button>
//                                 ))}
//                         </div>
//                     </div>

//                     {/* Submit */}
//                     <button
//                         type="submit"
//                         className="w-full bg-indigo-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 transform hover:scale-105 transition-all"
//                     >
//                         <div className="flex items-center justify-center space-x-2">
//                             <Map className="w-5 h-5" />
//                             <span>Generate Tour</span>
//                         </div>
//                     </button>
//                 </form>

//                 {/* Summary */}
//                 {tourGenerated && (
//                     <div className="mt-8 p-6 bg-gray-100 rounded-2xl shadow-inner">
//                         <h3 className="text-xl font-bold text-gray-800 mb-4">
//                             Your Tour Plan Summary
//                         </h3>
//                         <ul className="space-y-2 text-gray-600">
//                             <li>
//                                 <span className="font-semibold text-indigo-500">Destination:</span>{' '}
//                                 {formState.destination}
//                             </li>
//                             <li>
//                                 <span className="font-semibold text-indigo-500">Starting Date:</span>{' '}
//                                 {formState.startDate}
//                             </li>
//                             <li>
//                                 <span className="font-semibold text-indigo-500">Number of Days:</span>{' '}
//                                 {formState.numDays}
//                             </li>
//                             <li>
//                                 <span className="font-semibold text-indigo-500">Number of People:</span>{' '}
//                                 {formState.numPeople}
//                             </li>
//                             <li>
//                                 <span className="font-semibold text-indigo-500">Budget:</span> $
//                                 {formState.budget} ({getBudgetDescription(formState.budget)})
//                             </li>
//                             <li>
//                                 <span className="font-semibold text-indigo-500">Interests:</span>{' '}
//                                 {(Object.keys(formState.interests) as InterestKey[])
//                                     .filter((k) => formState.interests[k])
//                                     .join(', ') || 'None'}
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


// "use client";

// import Header from "@/components/Navbar";
// import CityscapeBackground from "@/components/CityscapeBackground";
// import { DestinationCombobox } from "@/components/DestinationCombobox";
// import { DateRange } from "react-day-picker";
// import { DateRangePicker } from "@/components/DateRangePicker";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { useState } from "react";
// import type { Metadata } from "next";

// // ✅ SEO metadata (replaces Helmet)
// export const metadata: Metadata = {
//   title: "Trip Builder - Smart City Tour Planner",
//   description:
//     "Plan your perfect city trip with our smart trip builder. Choose destination, dates, interests and budget to generate a tailored itinerary.",
//   openGraph: {
//     title: "Trip Builder - Smart City Tour Planner",
//     description: "Build a personalized city itinerary in minutes.",
//     url: "/plan",
//     siteName: "Smart City Tour Planner",
//   },
//   alternates: {
//     canonical: "/plan",
//   },
// };

// const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

// const TripBuilder = () => {
//   const [destination, setDestination] = useState<string>("");
//   const [dates, setDates] = useState<DateRange | undefined>();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [budget, setBudget] = useState<number[]>([1200]);

//   return (
//     <div className="relative min-h-screen text-foreground">
//       <CityscapeBackground />
//       <Header />

//       <main className="container relative py-16">
//         <section className="mx-auto max-w-3xl text-center">
//           <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
//             Plan Your Perfect <span className="text-gradient">City Trip</span>
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Select your destination, interests, and travel dates — we’ll handle
//             the rest.
//           </p>
//         </section>

//         <section className="mx-auto mt-10 max-w-3xl">
//           <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-elegant backdrop-blur">
//             <CardHeader>
//               <CardTitle className="text-left">Trip Builder</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid gap-6">
//                 {/* Destination */}
//                 <div className="grid gap-2">
//                   <Label>Destination</Label>
//                   <DestinationCombobox
//                     value={destination}
//                     onChange={setDestination}
//                   />
//                 </div>

//                 {/* Dates */}
//                 <div className="grid gap-2">
//                   <Label>Travel dates</Label>
//                   <DateRangePicker value={dates} onChange={setDates} />
//                 </div>

//                 {/* Interests */}
//                 <div className="grid gap-3">
//                   <Label>Interests</Label>
//                   <ToggleGroup
//                     type="multiple"
//                     value={selectedInterests}
//                     onValueChange={(vals) =>
//                       setSelectedInterests(vals as string[])
//                     }
//                     className="flex flex-wrap gap-2"
//                   >
//                     {interests.map((i) => (
//                       <ToggleGroupItem
//                         key={i}
//                         value={i}
//                         className="rounded-full px-4"
//                       >
//                         {i}
//                       </ToggleGroupItem>
//                     ))}
//                   </ToggleGroup>
//                 </div>

//                 {/* Budget */}
//                 <div className="grid gap-3">
//                   <div className="flex items-center justify-between">
//                     <Label>Budget</Label>
//                     <span className="text-sm text-muted-foreground">
//                       ${budget[0]}
//                     </span>
//                   </div>
//                   <Slider
//                     value={budget}
//                     onValueChange={setBudget}
//                     min={200}
//                     max={5000}
//                     step={50}
//                   />
//                 </div>

//                 {/* Button */}
//                 <div className="pt-2">
//                   <Button size="lg" variant="gradient" className="w-full">
//                     Generate Itinerary
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default TripBuilder;

import TripBuilder from "./TripBuilder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Builder - Smart City Tour Planner",
  description:
    "Plan your perfect city trip with our smart trip builder. Choose destination, dates, interests and budget to generate a tailored itinerary.",
  openGraph: {
    title: "Trip Builder - Smart City Tour Planner",
    description: "Build a personalized city itinerary in minutes.",
    url: "/plan-trip",
    siteName: "Smart City Tour Planner",
  },
  alternates: {
    canonical: "/plan-trip",
  },
};

export default function PlanTripPage() {
  return <TripBuilder />;
}
