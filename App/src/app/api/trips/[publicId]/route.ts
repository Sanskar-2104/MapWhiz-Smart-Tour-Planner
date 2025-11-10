import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromReq } from "@/lib/authApi";

export async function GET(req: Request, { params }: { params: { publicId: string } }) {
    const trip = await prisma.trip.findUnique({
        where: { publicId: params.publicId },
        include: { days: { include: { places: true } }, owner: { select: { id: true, name: true } } },
    });
    if (!trip) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(trip);
}

export async function PUT(req: Request, { params }: { params: { publicId: string } }) {
    const user = await getUserFromReq(req);
    if (!user) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });

    const existing = await prisma.trip.findUnique({ where: { publicId: params.publicId } });
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (existing.userId !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const body = await req.json();

    // Simple approach: update meta & replace days if provided
    const updateData: any = {};
    if (body.destination) updateData.destination = body.destination;
    if (body.startDate) updateData.startDate = new Date(body.startDate);
    if (body.endDate) updateData.endDate = new Date(body.endDate);
    if (body.interests) updateData.interests = body.interests;
    if (body.title) updateData.title = body.title;

    if (body.days) {
        // Delete existing days and recreate (simpler)
        const tripDb = await prisma.trip.findUnique({ where: { publicId: params.publicId } });
        if (!tripDb) return NextResponse.json({ error: "Not found" }, { status: 404 });
        await prisma.dailyPlan.deleteMany({ where: { tripId: tripDb.id } });
        updateData.days = {
        create: body.days.map((d: any, dayIdx: number) => ({
            dayNumber: d.dayNumber ?? dayIdx + 1,
            date: d.date ? new Date(d.date) : new Date(),
            places: {
            create: d.places.map((p: any, idx: number) => ({
                name: p.name,
                description: p.description ?? null,
                latitude: p.latitude ?? null,
                longitude: p.longitude ?? null,
                startTime: p.startTime ?? null,
                endTime: p.endTime ?? null,
                order: idx,
            })),
            },
        })),
        };
    }

    const updated = await prisma.trip.update({ where: { publicId: params.publicId }, data: updateData, include: { days: { include: { places: true } } } });
    return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { publicId: string } }) {
    const user = await getUserFromReq(req);
    if (!user) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });

    const trip = await prisma.trip.findUnique({ where: { publicId: params.publicId } });
    if (!trip) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (trip.userId !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    await prisma.trip.delete({ where: { publicId: params.publicId } });
    return NextResponse.json({ message: "Deleted" });
}
