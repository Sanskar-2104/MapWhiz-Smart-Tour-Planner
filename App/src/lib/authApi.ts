import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { verifyToken } from "./jwt";
import prisma from "./prisma";

export interface AuthResponse {
    message: string;
    token?: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

const BASE_URL = '/api/auth';

export async function signup(data: SignupData): Promise<AuthResponse> {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error((await res.json()).message || 'Signup failed');
    return res.json();
}

export async function login(data: LoginData): Promise<AuthResponse> {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error((await res.json()).message || 'Login failed');
    return res.json();
}

export async function logout(): Promise<AuthResponse> {
    const res = await fetch(`${BASE_URL}/logout`, { method: 'POST' });
    if (!res.ok) throw new Error('Logout failed');
    return res.json();
}


export async function getUserFromReq(req: NextRequest | Request) {
    try {
        // Normalize cookies extraction between NextRequest and standard Request
        let token: string | undefined

        // 1️⃣ Try cookies (NextRequest supports .cookies.get)
        // @ts-ignore — works in both environments*/
        if (req.cookies?.get) {
        // @ts-ignore
        token = req.cookies.get('token')?.value
        } else {
        // Fallback for plain Request objects
        const cookieHeader = req.headers.get('cookie')
        token = cookieHeader?.split(';').find(c => c.trim().startsWith('token='))?.split('=')[1]
        }

        // 2️⃣ Try Authorization header (e.g. "Bearer <token>")
        if (!token) {
        const authHeader = req.headers.get('authorization')
        if (authHeader?.startsWith('Bearer ')) {
            token = authHeader.substring(7)
        }
        }

        if (!token) return null

        // 3️⃣ Verify JWT
        const payload = verifyToken(token)
        if (!payload || !payload.userId) return null

        // 4️⃣ Fetch user from DB
        const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        select: { id: true, email: true, name: true },
        })

        return user
    } catch (err) {
        console.error('Auth error:', err)
        return null
    }
}