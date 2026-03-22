import express from "express";
import { MainController } from "../controllers/main.controllers.js";
import { upload } from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.single("file"), MainController.upload);

router.post("/ask", MainController.ask);

export default router;
