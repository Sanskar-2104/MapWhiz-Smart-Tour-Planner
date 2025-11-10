import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export interface AuthPayload extends JwtPayload {
    userId: string
    email?: string
}

export function signToken(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, SECRET)
    // ensure it's an object and has userId
    if (typeof decoded === 'string' || !('id' in decoded)) return null
    return decoded as AuthPayload
    } catch {
        return null;
    }
}
