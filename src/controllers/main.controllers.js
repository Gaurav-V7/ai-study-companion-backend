import { processImage } from "../services/main.services.js";
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
}
