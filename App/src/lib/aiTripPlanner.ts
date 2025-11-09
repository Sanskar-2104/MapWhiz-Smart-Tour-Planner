// src/lib/aiTripPlanner.ts
// export async function generateTripPlan(destination: string, startDate: string, endDate: string, interests: string[]) {
//   // (Pseudo-Logic or AI Call)
//   // Here you can call Gemini/OpenAI API or use your own place-suggestion logic.

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
    const days = [
        {
        date: input.startDate,
        notes: 'Arrival and light sightseeing',
        attractions: [
            { name: 'Old City', description: 'Historic walk', lat: 26.9, lng: 75.8, startTime: '09:00', endTime: '11:00' }
        ]
        },
        // ...
    ];

    return days;
}

