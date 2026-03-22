import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

function getAI() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
  return { genAI, model };
}

// Image + AI
export async function processImage(filePath, mimeType) {
  const fileData = fs.readFileSync(filePath).toString("base64");

  const result = await getAI().model.generateContent([
    `
Extract content from this file and:
1. Explain in simple terms
2. Give 4-6 key points
3. Generate 3-5 quiz questions
`,
    {
      inlineData: {
        data: fileData,
        mimeType,
      },
    },
  ]);

  return result.response.text();
}

// Chat / Follow - up
export async function generateAI(prompt) {
  const result = await getAI().model.generateContent(prompt);

  return result.response.text();
}
