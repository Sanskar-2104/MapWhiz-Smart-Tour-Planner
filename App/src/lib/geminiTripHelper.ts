import { ai } from "./geminiClient";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const placeSchema = z.object({
    name: z.string().describe("Place name"),
    description: z.string().nullable().optional().describe("Short description"),
    lat: z.number().nullable().optional().describe("Latitude"),
    lng: z.number().nullable().optional().describe("Longitude"),
    startTime: z.string().nullable().optional().describe("Suggested start time"),
    endTime: z.string().nullable().optional().describe("Suggested end time"),
});

const daySchema = z.object({
    date: z.string().nullable().optional().describe("Date of the day"),
    notes: z.string().nullable().optional().describe("General notes"),
    places: z.array(placeSchema).describe("List of places for this day"),
});

const itinerarySchema = z.object({
    days: z.array(daySchema).describe("Trip days with places"),
});

export type Itinerary = z.infer<typeof itinerarySchema>;

type POI = { name: string; description?: string | null; latitude?: number | null; longitude?: number | null };

export async function enrichPOIsWithGemini(pois: POI[], destination: string, daysHint?: number) {
    // const prompt = `You are a travel assistant. Given a list of verified POIs (name, lat, lng), produce a ${daysHint ?? "day-by-day"} itinerary for ${destination}. Return JSON with top-level "days": [{ "date": "YYYY-MM-DD" (optional), "notes": "...", "places": [{name, description, lat, lng, startTime (optional), endTime (optional)}]}]. Use the provided POI list. If lat/lng is missing for a POI, set it to null. Return JSON only.`;

    // // Build a simple JSON schema for the request
    // const responseSchema = {
    //     type: "object",
    //     properties: {
    //     days: {
    //         type: "array",
    //         items: {
    //         type: "object",
    //         properties: {
    //             date: { type: ["string", "null"] },
    //             notes: { type: ["string", "null"] },
    //             places: {
    //             type: "array",
    //             items: {
    //                 type: "object",
    //                 properties: {
    //                 name: { type: "string" },
    //                 description: { type: ["string", "null"] },
    //                 lat: { type: ["number", "null"] },
    //                 lng: { type: ["number", "null"] },
    //                 startTime: { type: ["string", "null"] },
    //                 endTime: { type: ["string", "null"] },
    //                 },
    //                 required: ["name"],
    //                 additionalProperties: false,
    //             },
    //             },
    //         },
    //         required: ["places"],
    //         additionalProperties: false,
    //         },
    //     },
    //     },
    //     required: ["days"],
    //     additionalProperties: false,
    // };

    // try {
    //     const inputText = `POI_LIST:${JSON.stringify(pois.slice(0, 40))}\n\n${prompt}`;

    //     const resp = await ai.models.generateContent({
    //         model: "gemini-2.5-flash", // or gemini-2.5-pro for deeper reasoning
    //         contents: prompt,
    //         config: {
    //             responseMimeType: "application/json",
    //             responseJsonSchema: zodToJsonSchema(itinerarySchema),
    //         },
    //     });

    //     // Extract structured response: different SDK versions vary; handle common shapes
    //     let structured: any = null;
    //     if (resp?.structured) structured = resp.structured;
    //     else if (resp?.output?.[0]?.content) {
    //     const cont = resp.output[0].content.find((c: any) => c.type === "structured" || c.type === "json");
    //     structured = cont?.structured ?? cont?.text;
    //     } else if (resp?.text) structured = resp.text;
    //     else structured = resp;

    //     let parsed;
    //     if (typeof structured === "string") {
    //     parsed = JSON.parse(structured);
    //     } else {
    //     parsed = structured;
    //     }

    //     const validated = ResponseSchema.safeParse(parsed);
    //     if (!validated.success) {
    //     console.warn("Gemini output validation failed:", validated.error.format());
    //     throw new Error("Gemini output did not match schema");
    //     }

    //     // Normalize to common keys lat/lng
    //     return validated.data.days.map((d: any) => ({
    //     date: d.date ?? null,
    //     notes: d.notes ?? null,
    //     places: (d.places ?? []).map((a: any) => ({
    //         name: a.name,
    //         description: a.description ?? null,
    //         lat: typeof a.lat === "number" ? a.lat : null,
    //         lng: typeof a.lng === "number" ? a.lng : null,
    //         startTime: a.startTime ?? null,
    //         endTime: a.endTime ?? null,
    //     })),
    //     }));
    // } catch (err) {
    //     console.error("enrichPOIsWithGemini error:", err);
    //     throw err;
    // }
    const prompt = `
        You are a travel planner.
        Given these POIs for ${destination}, build a ${daysHint ?? "day-by-day"} itinerary.
        Return only valid JSON following the provided schema.

        POIs:
        ${JSON.stringify(pois.slice(0, 30))}
        `;

    try {
        const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(itinerarySchema),
        },
        });

        const text = response.text;                    // SDK guarantees JSON here
        const parsed = JSON.parse(text);
        return itinerarySchema.parse(parsed);          // Zod validates and types it
    } catch (err) {
        console.error("Gemini itinerary error:", err);
        return { days: [] };                           // Safe fallback
    }
}
