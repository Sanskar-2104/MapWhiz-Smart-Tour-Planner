import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from '@/lib/prisma';



export async function POST(request: NextRequest) { 
    try {
        const { email, password, name } = await request.json();
        if (!email || !password || !name) { 
            return NextResponse.json({ message: "Email, password and name are required." }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) { 
            return NextResponse.json({ message: "User already exists." }, { status: 400 });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hash(password, salt);
        
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: await hashedPassword
            }
        });

        console.log("User created:", user);

        return NextResponse.json({ message: "User created successfully." }, { status: 201 });

    } catch (error) { 
        console.log("Error during user signup:", error);
        return NextResponse.json({ error }, { status: 501 });
    }
}