// src/app/api/trips/route.ts
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { generateTripPlan } from "@/lib/aiTripPlanner";

// export async function POST(req: Request) {
//     try {
//         const { userId, destination, startDate, endDate, interests } = await req.json();

//         // Call AI/Logic to generate day-wise plan
//         const tripPlan = await generateTripPlan(destination, startDate, endDate, interests);

//         const newTrip = await prisma.trip.create({
//         data: {
//             userId,
//             destination,
//             startDate: new Date(startDate),
//             endDate: new Date(endDate),
//             interests,
//             aiGenerated: true,
//             days: {
//             create: tripPlan.days.map((day: any, index: number) => ({
//                 dayNumber: index + 1,
//                 date: new Date(day.date),
//                 routes: day.routes,
//                 places: {
//                 create: day.places.map((p: any) => ({
//                     name: p.name,
//                     category: p.category,
//                     address: p.address,
//                     description: p.description,
//                     latitude: p.latitude,
//                     longitude: p.longitude,
//                     rating: p.rating,
//                     timeSlot: p.timeSlot,
//                 })),
//                 },
//             })),
//             },
//         },
//         include: { days: { include: { places: true } } },
//         });

//         return NextResponse.json(newTrip);
//     } catch (error: any) {
//         console.error(error);
//         return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
//     }
// }



import { NextResponse } from 'next/server';
import { getUserFromReq } from '@/lib/authApi'; // your existing auth helper
import prisma from '@/lib/prisma';
import { generateItinerary } from '@/lib/aiTripPlanner';

export async function POST(req: Request) {
    const user = await getUserFromReq(req);
    if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

    const body = await req.json();
    const { title, destination, startDate, endDate, interests, budget } = body;

    const trip = await prisma.trip.create({
        data: {
        userId: user.id,
        title,
        destination,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        interests,
        budget,
        },
    });

    // Call AI planner to get day-wise plan
    try {
        console.log("Generating itinerary...");
        const dayPlans = await generateItinerary({ destination, startDate, endDate, interests, budget });
        console.log("Itinerary generated:", dayPlans);

        // Save DayPlans + Attraction
        for (let i = 0; i < dayPlans.days.length; i++) {
            const day = dayPlans.days[i];
            console.log(`Saving day ${i + 1} with ${day.places.length} places`);
        const createdDay = await prisma.dailyPlan.create({
            data: {
            tripId: trip.id,
            dayIndex: i + 1,
            date: day.date ? new Date(day.date) : null,
            notes: day.notes ?? '',
            places: { create: day.places.map((a: any, idx: number) => ({
                name: a.name,
                description: a.description ?? '',
                category: a.category ?? 'General',
                address: a.address ?? '',
                latitude: a.lat ?? null,
                longitude: a.lng ?? null,
                startTime: a.startTime ?? null,
                endTime: a.endTime ?? null,
                order: idx,
            })) }
            },
            include: { places: true }
        });
        }

        const full = await prisma.trip.findUnique({ where: { id: trip.id }, include: { days: { include: { places: true } } } });
        return NextResponse.json({ publicId: full?.publicId, trip: full });
        // return NextResponse.json({ tripId: trip.id, publicId: trip.publicId });
    } catch (err) {
        console.error("Trip creation error:", err);
        // If something failed, delete created trip to avoid orphan
        await prisma.trip.delete({ where: { id: trip.id } }).catch(() => {});
        return NextResponse.json({ error: "Failed to generate itinerary" }, { status: 500 });
    }
}


export async function GET(req: Request) {
    const user = await getUserFromReq(req);
    if (!user) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });

    const trips = await prisma.trip.findMany({
        where: { userId: user.id },
        orderBy: { updatedAt: "desc" },
        include: { days: { include: { places: true } } },
    });
    return NextResponse.json(trips);
}
