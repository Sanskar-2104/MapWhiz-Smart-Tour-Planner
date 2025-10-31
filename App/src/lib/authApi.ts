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
