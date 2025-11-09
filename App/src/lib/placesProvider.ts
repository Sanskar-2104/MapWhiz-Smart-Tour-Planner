import axios from "axios";

const GOOGLE_KEY = process.env.GOOGLE_MAPS_KEY;
const OTM_KEY = process.env.OPENTRIPMAP_KEY;

type POI = {
    name: string;
    description?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    category?: string | null;
    address?: string | null;
};

export async function geocodePlace(place: string) {
    if (!GOOGLE_KEY) throw new Error("GOOGLE_MAPS_KEY missing");
    const res = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: { address: place, key: GOOGLE_KEY },
    });
    const first = res.data.results?.[0];
    return {
        lat: first?.geometry?.location?.lat,
        lng: first?.geometry?.location?.lng,
    };
}

export async function fetchPlaces(lat: number, lon: number, interests: string[] = [], limit = 30): Promise<POI[]> {
    // TRY Google Places Nearby Search (Places API v1 uses different endpoint; we'll use Places Web Service)
    try {
        if (!GOOGLE_KEY) throw new Error("GOOGLE_MAPS_KEY missing");
        const keyword = interests.length ? interests.join(" ") : "tourist attraction";
        const res = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        params: {
            location: `${lat},${lon}`,
            radius: 20000,
            keyword,
            type: "tourist_attraction",
            key: GOOGLE_KEY,
        },
        });

        const places = res.data.results ?? [];
        return places.slice(0, limit).map((p: any) => ({
        name: p.name,
        description: p.vicinity ?? null,
        latitude: p.geometry?.location?.lat ?? null,
        longitude: p.geometry?.location?.lng ?? null,
        category: p.types?.[0] ?? null,
        address: p.vicinity ?? null,
        }));
    } catch (err) {
        console.warn("Google Places failed, falling back to OpenTripMap", err?.message ?? err);
        // fallback to OpenTripMap
        if (!OTM_KEY) throw new Error("OPENTRIPMAP_KEY missing");
        const radius = 20000;
        const res = await axios.get("https://api.opentripmap.com/0.1/en/places/radius", {
        params: { lat, lon, radius, limit, apikey: OTM_KEY },
        });
        const features = res.data.features ?? [];
        const mapped = features.map((f: any) => {
        const coords = f.geometry?.coordinates ?? [];
        return {
            name: f.properties?.name || "Unknown",
            description: f.properties?.kinds ?? null,
            latitude: coords[1] ?? null,
            longitude: coords[0] ?? null,
            category: f.properties?.kinds?.split(",")?.[0] ?? null,
            address: f.properties?.address?.road ?? null,
        };
        });
        return mapped;
    }
}

export async function fetchPlaceDetailsGoogle(placeId: string) {
    if (!GOOGLE_KEY) throw new Error("GOOGLE_MAPS_KEY missing");
    const res = await axios.get("https://maps.googleapis.com/maps/api/place/details/json", {
        params: { place_id: placeId, key: GOOGLE_KEY, fields: "name,formatted_address,geometry,opening_hours,photos,rating" },
    });
    return res.data.result;
}
