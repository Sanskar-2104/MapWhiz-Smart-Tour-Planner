"use client";

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
// import { cva } from "class-variance-authority";

// const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

// // const buttonVariants = cva(
// //     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
// //     {
// //         variants: {
// //             variant: {
// //                 default: "bg-primary text-primary-foreground hover:bg-primary/90",
// //                 outline:
// //                     "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
// //                 destructive:
// //                     "bg-destructive text-destructive-foreground hover:bg-destructive/90",
// //                 secondary:
// //                     "bg-secondary text-secondary-foreground hover:bg-secondary/80",
// //                 ghost: "hover:bg-accent hover:text-accent-foreground",
// //                 link: "underline-offset-4 hover:underline text-primary",

// //                 gradient:
// //                     "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90",
// //             },
// //             size: {
// //                 default: "h-10 px-4 py-2",
// //                 sm: "h-9 px-3 rounded-md",
// //                 lg: "h-11 px-8 rounded-md",
// //             },
// //         },
// //         defaultVariants: {
// //             variant: "default",
// //             size: "default",
// //         },
// //     }
// // );

// export default function TripBuilder() {
//     const [destination, setDestination] = useState<string>("");
//     const [dates, setDates] = useState<DateRange | undefined>();
//     const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//     const [budget, setBudget] = useState<number[]>([1200]);

//     return (
//         <div className="bg-hero relative min-h-screen text-foreground">
//             <CityscapeBackground />

//             <main className="container relative py-16">
//                 <section className="mx-auto max-w-3xl text-center">
//                     <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
//                         Plan Your Perfect <span className="text-gradient">City Trip</span>
//                     </h1>
//                     <p className="mt-4 text-lg text-muted-foreground">
//                         Select your destination, interests, and travel dates — we’ll handle
//                         the rest.
//                     </p>
//                 </section>

//                 <section className="mx-auto mt-10 max-w-3xl">
//                     <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-elegant backdrop-blur">
//                         <CardHeader>
//                             <CardTitle className="text-left">Trip Builder</CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-6">
//                             <div className="grid gap-6">
//                                 {/* Destination */}
//                                 <div className="grid gap-2">
//                                     <Label>Destination</Label>
//                                     <DestinationCombobox
//                                         value={destination}
//                                         onChange={setDestination}
//                                     />
//                                 </div>

//                                 {/* Dates */}
//                                 <div className="grid gap-2">
//                                     <Label>Travel dates</Label>
//                                     <DateRangePicker value={dates} onChange={setDates} />
//                                 </div>

//                                 {/* Interests */}
//                                 <div className="grid gap-3">
//                                     <Label>Interests</Label>
//                                     <ToggleGroup
//                                         type="multiple"
//                                         value={selectedInterests}
//                                         onValueChange={(vals) =>
//                                             setSelectedInterests(vals as string[])
//                                         }
//                                         className="flex flex-wrap gap-2"
//                                     >
//                                         {interests.map((i) => (
//                                             <ToggleGroupItem
//                                                 key={i}
//                                                 value={i}
//                                                 className="rounded-full px-4"
//                                             >
//                                                 {i}
//                                             </ToggleGroupItem>
//                                         ))}
//                                     </ToggleGroup>
//                                 </div>

//                                 {/* Budget */}
//                                 <div className="grid gap-3">
//                                     <div className="flex items-center justify-between">
//                                         <Label>Budget</Label>
//                                         <span className="text-sm text-muted-foreground">
//                                             ${budget[0]}
//                                         </span>
//                                     </div>
//                                     <Slider
//                                         value={budget}
//                                         onValueChange={setBudget}
//                                         min={200}
//                                         max={5000}
//                                         step={50}
//                                     />
//                                 </div>

//                                 {/* Button */}
//                                 <div className="pt-2">
//                                     <Button size="lg" className="w-full btn-gradient">
//                                         Generate Itinerary
//                                     </Button>

//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </section>
//             </main>
//         </div>
//     );
// }


// import "./TripBuilder.module.css";
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

// const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

// const TripBuilder = () => {
//   const [destination, setDestination] = useState<string>("");
//   const [dates, setDates] = useState<DateRange | undefined>();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [budget, setBudget] = useState<number[]>([1200]);

//   return (
//     <div className="relative min-h-screen text-foreground">

//       <CityscapeBackground />

//       <main className="container relative py-16">
//         <section className="mx-auto max-w-3xl text-center">
//           <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
//             Plan Your Perfect <span className="text-gradient">City Trip</span>
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Select your destination, interests, and travel dates — we’ll handle the rest.
//           </p>
//         </section>

//         <section className="mx-auto mt-10 max-w-3xl">
//           <Card className="rounded-2xl border border-border/60 bg-card/80 shadow-elegant backdrop-blur">
//             <CardHeader>
//               <CardTitle className="text-left">Trip Builder</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid gap-6">
//                 <div className="grid gap-2">
//                   <Label>Destination</Label>
//                   <DestinationCombobox value={destination} onChange={setDestination} />
//                 </div>

//                 <div className="grid gap-2">
//                   <Label>Travel dates</Label>
//                   <DateRangePicker value={dates} onChange={setDates} />
//                 </div>

//                 <div className="grid gap-3">
//                   <Label>Interests</Label>
//                   <ToggleGroup
//                     type="multiple"
//                     value={selectedInterests}
//                     onValueChange={(vals) => setSelectedInterests(vals as string[])}
//                     className="flex flex-wrap gap-2"
//                   >
//                     {interests.map((i) => (
//                       <ToggleGroupItem key={i} value={i} className="rounded-full px-4">
//                         {i}
//                       </ToggleGroupItem>
//                     ))}
//                   </ToggleGroup>
//                 </div>

//                 <div className="grid gap-3">
//                   <div className="flex items-center justify-between">
//                     <Label>Budget</Label>
//                     <span className="text-sm text-muted-foreground">${budget[0]}</span>
//                   </div>
//                   <Slider
//                     value={budget}
//                     onValueChange={setBudget}
//                     min={200}
//                     max={5000}
//                     step={50}
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <Button size="lg" className="w-full btn-gradient">
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



// import styles from "./TripBuilder.module.css";
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

// const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

// const TripBuilder = () => {
//   const [destination, setDestination] = useState<string>("");
//   const [dates, setDates] = useState<DateRange | undefined>();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [budget, setBudget] = useState<number[]>([1200]);

//   return (
//     <div className={`${styles.pageBackground} text-foreground`}>
//       <CityscapeBackground />

//       <main className="container relative py-16">
//         <section className="mx-auto max-w-3xl text-center">
//           <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
//             Plan Your Perfect <span className="text-gradient">City Trip</span>
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Select your destination, interests, and travel dates — we’ll handle the rest.
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
//                   <DestinationCombobox value={destination} onChange={setDestination} />
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
//                     onValueChange={(vals) => setSelectedInterests(vals as string[])}
//                     className="flex flex-wrap gap-2"
//                   >
//                     {interests.map((i) => (
//                       <ToggleGroupItem key={i} value={i} className="rounded-full px-4">
//                         {i}
//                       </ToggleGroupItem>
//                     ))}
//                   </ToggleGroup>
//                 </div>

//                 {/* Budget */}
//                 <div className="grid gap-3">
//                   <div className="flex items-center justify-between">
//                     <Label>Budget</Label>
//                     <span className="text-sm text-muted-foreground">${budget[0]}</span>
//                   </div>
//                   <Slider
//                     value={budget}
//                     onValueChange={setBudget}
//                     min={200}
//                     max={5000}
//                     step={50}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <div className="pt-2">
//                   <Button size="lg" className="w-full btn-gradient">
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



// import styles from "./TripBuilder.module.css";
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

// const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

// const TripBuilder = () => {
//   const [destination, setDestination] = useState<string>("");
//   const [dates, setDates] = useState<DateRange | undefined>();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [budget, setBudget] = useState<number[]>([1200]);

//   return (
//     <div className={`${styles.tripBuilder}`}>
//       <CityscapeBackground />

//       <main className="container relative py-16">
//         <section className="mx-auto max-w-3xl text-center">
//           <h1 className={`font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl ${styles.fontHeading}`}>
//             Plan Your Perfect{" "}
//             <span className={styles.textGradient}>City Trip</span>
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Select your destination, interests, and travel dates — we’ll handle the rest.
//           </p>
//         </section>

//         <section className="mx-auto mt-10 max-w-3xl">
//           <Card className={`rounded-2xl border border-border/60 bg-card/80 ${styles.shadowElegant} backdrop-blur`}>
//             <CardHeader>
//               <CardTitle className="text-left">Trip Builder</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid gap-6">
//                 {/* Destination */}
//                 <div className="grid gap-2">
//                   <Label>Destination</Label>
//                   <DestinationCombobox value={destination} onChange={setDestination} />
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
//                     onValueChange={(vals) => setSelectedInterests(vals as string[])}
//                     className="flex flex-wrap gap-2"
//                   >
//                     {interests.map((i) => (
//                       <ToggleGroupItem key={i} value={i} className="rounded-full px-4">
//                         {i}
//                       </ToggleGroupItem>
//                     ))}
//                   </ToggleGroup>
//                 </div>

//                 {/* Budget */}
//                 <div className="grid gap-3">
//                   <div className="flex items-center justify-between">
//                     <Label>Budget</Label>
//                     <span className="text-sm text-muted-foreground">${budget[0]}</span>
//                   </div>
//                   <Slider
//                     value={budget}
//                     onValueChange={setBudget}
//                     min={200}
//                     max={5000}
//                     step={50}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <div className="pt-2">
//                   <Button size="lg" className={`w-full ${styles.bgGradientAccent}`}>
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


// import styles from "./TripBuilder.module.css";
// import CityscapeBackground from "@/components/CityscapeBackground";
// import { DestinationCombobox } from "@/components/DestinationCombobox";
// import { DateRange } from "react-day-picker";
// import { DateRangePicker } from "@/components/DateRangePicker";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import ItineraryViewer, { SAMPLE_TRIP } from "@/components/ItineraryViewer"; 
// import { useState } from "react";

// const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

// const TripBuilder = () => {
//   const [destination, setDestination] = useState<string>("");
//   const [dates, setDates] = useState<DateRange | undefined>();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [budget, setBudget] = useState<number[]>([1200]);

//   return (
//     <div className={`relative min-h-screen text-foreground ${styles.tripBuilder}`}>
//       <div className="absolute inset-0 z-0">
//         <CityscapeBackground />
//       </div>
//       <div className={`${styles.bgHero} absolute inset-0 z-0`}>
//         <main className="container relative py-16">
//           <section className="mx-auto max-w-3xl text-center">
//             <h1
//               className={`font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl ${styles.fontHeading}`}
//             >
//               Plan Your Perfect{" "}
//               <span className={styles.textGradient}>City Trip</span>
//             </h1>
//             <p className="mt-4 text-lg text-muted-foreground">
//               Select your destination, interests, and travel dates — we’ll handle
//               the rest.
//             </p>
//           </section>

//           <section className="mx-auto mt-10 max-w-3xl">
//             {/* Custom CSS Card instead of shadcn Card */}
//             <div className={styles.card}>
//               <div className={styles.cardHeader}>
//                 <h2 className={styles.cardTitle}>Trip Builder</h2>
//               </div>
//               <div className={styles.cardContent}>
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
//                         className={styles.interestItem}
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
//                       ₹{budget[0]}
//                     </span>
//                   </div>
//                   <Slider
//                     value={budget}
//                     min={200}
//                     max={5000}
//                     step={50}
//                     onValueChange={(value) => setBudget(value)}
//                     className={styles.sliderWrapper}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <div className="pt-2">
//                   <Button
//                     size="lg"
//                     className={`w-full ${styles.bgGradientAccent}`}
//                   >
//                     Generate Itinerary
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default TripBuilder;




"use client";

import styles from "./TripBuilder.module.css";
import CityscapeBackground from "@/components/CityscapeBackground";
import { DestinationCombobox } from "@/components/DestinationCombobox";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import ItineraryViewer, { SAMPLE_TRIP } from "./IternaryGenerator"; // ✅ Import viewer
import { start } from "repl";

const interests = ["History", "Nature", "Food", "Art", "Shopping", "Nightlife"];

const TripBuilder = () => {
  const [destination, setDestination] = useState<string>("");
  const [dates, setDates] = useState<DateRange | undefined>();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState<number[]>([1200]);
  const [generatedTrip, setGeneratedTrip] = useState<any | null>(null); // ✅ holds generated itinerary
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

const handleGenerate = async () => {
  setErrorMsg(null);

  // Basic validation
  if (!destination) {
    setErrorMsg("Please select a destination.");
    return;
  }
  if (!dates || !dates?.from || !dates?.to) {
    setErrorMsg("Please select travel dates.");
    return;
  }

  setIsGenerating(true);

  try {
    const body = {
      destination,
      startDate: dates.from,
      endDate: dates.to,
      interests: selectedInterests,
      budget: budget[0],
    };

    const res = await fetch("/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || "Failed to generate itinerary");
    }

    const newTrip = await res.json();
    setGeneratedTrip(newTrip);

    try {
        sessionStorage.setItem("generatedTrip", JSON.stringify(newTrip));
      } catch (e) {
        console.warn("Failed to save generatedTrip to sessionStorage", e);
      }
  } catch (err: any) {
    console.error("generate error", err);
    setErrorMsg(err?.message || "Something went wrong");
  } finally {
    setIsGenerating(false);
  }
};
  return (
    <div className={`relative min-h-screen text-foreground ${styles.tripBuilder}`}>
      <div className="absolute inset-0 z-0">
        <CityscapeBackground />
      </div>

      <div className={`${styles.bgHero} absolute inset-0 z-0`}>
        <main className="container relative py-16">
          {!generatedTrip ? (
            <>
              <section className="mx-auto max-w-3xl text-center">
                <h1
                  className={`font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl ${styles.fontHeading}`}
                >
                  Plan Your Perfect{" "}
                  <span className={styles.textGradient}>City Trip</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Select your destination, interests, and travel dates — we’ll handle
                  the rest.
                </p>
              </section>

              <section className="mx-auto mt-10 max-w-3xl">
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Trip Builder</h2>
                  </div>
                  <div className={styles.cardContent}>
                    {/* Destination */}
                    <div className="grid gap-2">
                      <Label>Destination</Label>
                      <DestinationCombobox
                        value={destination}
                        onChange={setDestination}
                      />
                    </div>

                    {/* Dates */}
                    <div className="grid gap-2">
                      <Label>Travel dates</Label>
                      <DateRangePicker value={dates} onChange={setDates} />
                    </div>

                    {/* Interests */}
                    <div className="grid gap-3">
                      <Label>Interests</Label>
                      <ToggleGroup
                        type="multiple"
                        value={selectedInterests}
                        onValueChange={(vals) =>
                          setSelectedInterests(vals as string[])
                        }
                        className="flex flex-wrap gap-2"
                      >
                        {interests.map((i) => (
                          <ToggleGroupItem
                            key={i}
                            value={i}
                            className={styles.interestItem}
                          >
                            {i}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>

                    {/* Budget */}
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <Label>Budget</Label>
                        <span className="text-sm text-muted-foreground">
                          ₹{budget[0]}
                        </span>
                      </div>
                      <Slider
                        value={budget}
                        min={1000}
                        max={70000}
                        step={50}
                        onValueChange={(value) => setBudget(value)}
                        className={styles.sliderWrapper}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <Button
                        size="lg"
                        className={`w-full ${styles.bgGradientAccent}`}
                        onClick={handleGenerate}
                        disabled={isGenerating}
                      >
                      {isGenerating ? "Generating..." : "Generate Itinerary"}
                      </Button>

                      {errorMsg && (
                        <p className="mt-2 text-sm text-red-500 text-center">{errorMsg}</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            // ✅ Show generated itinerary
            <section className="mt-10">
              <ItineraryViewer trip={generatedTrip} />
              <div className="text-center mt-6">
                <Button variant="outline" onClick={() => setGeneratedTrip(null)}>
                  Back to Trip Builder
                </Button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default TripBuilder;
