import { processImage } from "../services/main.services.js";
import { errorResponse, messageResponse } from "../utils/common.js";
import { getCached, saveCache } from "../utils/db.js";

export class MainController {
  static async upload(req, res) {
    try {
      console.log("request", req);
      const file = req.file;

      if (!file) {
        return errorResponse(res, {
          message: "File not found",
          statusCode: 400,
        });
      }

      const filePath = file.path;
      const mimeType = file.mimetype;

      const cached = getCached(file.originalname);
      if (cached) {
        return messageResponse(res, "Cached response", 200, cached.response);
      }

      const result = await processImage(filePath, mimeType);

      saveCache(file.originalname, result);

      return messageResponse(res, "File uploaded successfully", 200, result);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}
