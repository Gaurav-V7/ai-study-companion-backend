import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { mainRoutes } from "./routes/index.js";

const app = express();

const PORT = 3000;
const CORS_OPTIONS = {
  origin: "http://localhost:3001",
};

app.use(express.json());
app.use(cors(CORS_OPTIONS));

app.use("/api", mainRoutes);

app.listen(3000, () => {
  console.log(`App is running on port ${PORT}`);
});
