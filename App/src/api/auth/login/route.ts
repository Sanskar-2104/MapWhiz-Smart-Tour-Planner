import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";


export async function POST(request: NextRequest) { 
    try { 
        const { email, password } = await request.json();
        console.log("Email:", email, "Password:", password);
        if (!email || !password) { 
            console.warn("Missing email or password");
            return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
        }
        const existingUser = await prisma.user.findUnique(
            {
                where: {
                    email: email,
                }
            });
        if (!existingUser) { 
            console.log("User is not registered with :", email);
            return NextResponse.json({ message: "Invalid email" }, { status: 401 });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) { 
            console.log("Incorect password for the user:", email);
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        } 

        const token = jwt.sign({
            id: existingUser.id,
            email: existingUser.email
        }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        const response = NextResponse.json({
            message: "Login successful",
            userId : existingUser.id,
            email: existingUser.email,
            name: existingUser.name,
            token: token,
        }, { status: 200 });

        response.cookies.set("token", token, { httpOnly: true, secure: true, });
        
        return response;
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
