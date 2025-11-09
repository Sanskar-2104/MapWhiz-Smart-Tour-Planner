import client from "./geminiClient";
import { z } from "zod";

const AttractionSchema = z.object({
    name: z.string(),
    description: z.string().nullable().optional(),
    lat: z.number().nullable().optional(),
    lng: z.number().nullable().optional(),
    startTime: z.string().nullable().optional(),
    endTime: z.string().nullable().optional(),
});

const DaySchema = z.object({
    date: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
    attractions: z.array(AttractionSchema),
});

const ResponseSchema = z.object({
    days: z.array(DaySchema),
});

type POI = { name: string; description?: string | null; latitude?: number | null; longitude?: number | null };

export async function enrichPOIsWithGemini(pois: POI[], destination: string, daysHint?: number) {
    const prompt = `You are a travel assistant. Given a list of verified POIs (name, lat, lng), produce a ${daysHint ?? "day-by-day"} itinerary for ${destination}. Return JSON with top-level "days": [{ "date": "YYYY-MM-DD" (optional), "notes": "...", "attractions": [{name, description, lat, lng, startTime (optional), endTime (optional)}]}]. Use the provided POI list. If lat/lng is missing for a POI, set it to null. Return JSON only.`;

    // Build a simple JSON schema for the request
    const responseSchema = {
        type: "object",
        properties: {
        days: {
            type: "array",
            items: {
            type: "object",
            properties: {
                date: { type: ["string", "null"] },
                notes: { type: ["string", "null"] },
                attractions: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                    name: { type: "string" },
                    description: { type: ["string", "null"] },
                    lat: { type: ["number", "null"] },
                    lng: { type: ["number", "null"] },
                    startTime: { type: ["string", "null"] },
                    endTime: { type: ["string", "null"] },
                    },
                    required: ["name"],
                    additionalProperties: false,
                },
                },
            },
            required: ["attractions"],
            additionalProperties: false,
            },
        },
        },
        required: ["days"],
        additionalProperties: false,
    };

    try {
        const inputText = `POI_LIST:${JSON.stringify(pois.slice(0, 40))}\n\n${prompt}`;

        const resp = await client.generate({
        model: "gemini-1.5-pro",
        prompt: inputText,
        responseSchema,
        temperature: 0.2,
        maxTokens: 1200,
        });

        // Extract structured response: different SDK versions vary; handle common shapes
        let structured: any = null;
        if (resp?.structured) structured = resp.structured;
        else if (resp?.output?.[0]?.content) {
        const cont = resp.output[0].content.find((c: any) => c.type === "structured" || c.type === "json");
        structured = cont?.structured ?? cont?.text;
        } else if (resp?.text) structured = resp.text;
        else structured = resp;

        let parsed;
        if (typeof structured === "string") {
        parsed = JSON.parse(structured);
        } else {
        parsed = structured;
        }

        const validated = ResponseSchema.safeParse(parsed);
        if (!validated.success) {
        console.warn("Gemini output validation failed:", validated.error.format());
        throw new Error("Gemini output did not match schema");
        }

        // Normalize to common keys lat/lng
        return validated.data.days.map((d: any) => ({
        date: d.date ?? null,
        notes: d.notes ?? null,
        attractions: (d.attractions ?? []).map((a: any) => ({
            name: a.name,
            description: a.description ?? null,
            lat: typeof a.lat === "number" ? a.lat : null,
            lng: typeof a.lng === "number" ? a.lng : null,
            startTime: a.startTime ?? null,
            endTime: a.endTime ?? null,
        })),
        }));
    } catch (err) {
        console.error("enrichPOIsWithGemini error:", err);
        throw err;
    }
}
