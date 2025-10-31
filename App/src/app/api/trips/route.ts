// src/app/api/trips/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateTripPlan } from "@/lib/aiTripPlanner";

export async function POST(req: Request) {
    try {
        const { userId, destination, startDate, endDate, interests } = await req.json();

        // Call AI/Logic to generate day-wise plan
        const tripPlan = await generateTripPlan(destination, startDate, endDate, interests);

        const newTrip = await prisma.trip.create({
        data: {
            userId,
            destination,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            interests,
            aiGenerated: true,
            days: {
            create: tripPlan.days.map((day: any, index: number) => ({
                dayNumber: index + 1,
                date: new Date(day.date),
                routes: day.routes,
                places: {
                create: day.places.map((p: any) => ({
                    name: p.name,
                    category: p.category,
                    address: p.address,
                    description: p.description,
                    latitude: p.latitude,
                    longitude: p.longitude,
                    rating: p.rating,
                    timeSlot: p.timeSlot,
                })),
                },
            })),
            },
        },
        include: { days: { include: { places: true } } },
        });

        return NextResponse.json(newTrip);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
    }
}
