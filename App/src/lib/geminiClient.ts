import GenAI from "@google/genai";

const client = new GenAI.Client({
  apiKey: process.env.GEMINI_API_KEY, // if using API key; omit for ADC
});

export default client;
