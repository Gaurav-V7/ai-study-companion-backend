import { generateAI, processImage } from "../services/main.services.js";
import { errorResponse, messageResponse } from "../utils/common.js";
import { getCached, saveCache } from "../utils/cache.js";

export class MainController {
  static async upload(req, res) {
    try {
      const file = req.file;

      if (!file) {
        return errorResponse(res, {
          message: "File not found",
          statusCode: 400,
        });
      }

      const mimeType = file.mimetype;

      const base64 = file.buffer.toString("base64");

      const cached = getCached(file.originalname);
      if (cached) {
        return messageResponse(res, "Cached response", 200, cached);
      }

      const result = await processImage(base64, mimeType);

      saveCache(file.originalname, result);

      return messageResponse(res, "File uploaded successfully", 200, result);
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  static async ask(req, res) {
    try {
      const { question, context } = req.body;

      if (!question) {
        return errorResponse(res, {
          message: "Question is required",
          statusCode: 400,
        });
      }

      const prompt = `
      You are a helpful study assistant.
      
      Use the following study material to answer the question.
      
      Context:
      ${context}

      Question:
      ${question}

      Guidelines:
      - Answer clearly and simply
      - Keep it relevant to the context
      - If answer is not in the context, say "Not found in the provided notes"
      `;

      const result = await generateAI(prompt);

      return messageResponse(res, "The answer for the question", 200, result);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}
