import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) { 
    const { email, password, name }= await request.json();

}