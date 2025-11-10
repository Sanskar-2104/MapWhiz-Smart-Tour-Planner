// src/lib/geminiClient.ts
import { GoogleGenAI } from "@google/genai";

// Initialize client
export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});


// or "gemini-2.5-pro" if you need deeper reasoning


