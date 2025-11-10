// src/lib/aiTripPlanner.ts
// export async function generateTripPlan(destination: string, startDate: string, endDate: string, interests: string[]) {
//   // (Pseudo-Logic or AI Call)
//   // Here you can call Gemini/OpenAI API or use your own place-suggestion logic.

import { enrichPOIsWithGemini } from "./geminiTripHelper";
import { fetchPlaces, geocodePlace } from "./placesProvider";
import prisma from "./prisma";

//     const days = [
//         {
//         date: startDate,
//         routes: ["Museum → Central Park → Restaurant"],
//         places: [
//             { name: "City Museum", category: "Museum", address: "Main St", latitude: 12.34, longitude: 56.78, timeSlot: "Morning" },
//             { name: "Central Park", category: "Park", address: "Downtown", latitude: 12.35, longitude: 56.79, timeSlot: "Afternoon" },
//             { name: "Sunset Grill", category: "Restaurant", address: "Ocean Road", latitude: 12.36, longitude: 56.80, timeSlot: "Evening" },
//         ],
//         },
//     ];

//     return { days };
// }
export type PlannerInput = {
    destination: string,
    startDate: string,
    endDate: string,
    interests: string[],
    budget?: number
}

export async function generateItinerary(input: PlannerInput) {
    // 1) Build prompt describing days count, interests, must-see items
    // 2) Call your LLM provider (openai/gemini)
    // 3) Expect structured JSON with days: [{date, notes, attractions: [{name, description, lat, lng, startTime, endTime}]}]
    // 4) Parse and return

    // Example simple stub (replace with real LLM call)

    const { destination, startDate, endDate, interests = [],budget , days } = input;

  // check cache first
    const cached = await prisma.cityCache.findUnique({ where: { destination } });
    if (cached) {
        try {
        const parsed = JSON.parse(cached.data);
        return parsed;
        } catch {
        // continue to regenerate
        }
    }

    // 1) geocode
    const geo = await geocodePlace(destination);
    if (!geo?.lat || !geo?.lng) {
        throw new Error("Unable to geocode destination");
    }

    // 2) fetch POIs
    const pois = await fetchPlaces(geo.lat, geo.lng, interests, 40);

    // 3) enrich with Gemini
    const enriched = await enrichPOIsWithGemini(pois, destination, days ?? null);

    // 4) cache to DB (stringified)
    await prisma.cityCache.upsert({
        where: { destination },
        update: { data: JSON.stringify(enriched) },
        create: { destination, data: JSON.stringify(enriched) },
    });

    return enriched;
    // const days = [
    //     {
    //     date: input.startDate,
    //     notes: 'Arrival and light sightseeing',
    //     attractions: [
    //         { name: 'Old City', description: 'Historic walk', lat: 26.9, lng: 75.8, startTime: '09:00', endTime: '11:00' }
    //     ]
    //     },
    //     // ...
    // ];

    // return days;

}

