import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { mainRoutes } from "./routes/index.js";
import { parseEnvList } from "./utils/common.js";

const app = express();

const PORT = 3000;
const CORS_OPTIONS = {
  origin: parseEnvList(process.env.CORS_ORIGINS),
};

app.use(express.json());
app.use(cors(CORS_OPTIONS));

app.use("/api", mainRoutes);

app.listen(3000, () => {
  console.log(`App is running on port ${PORT}`);
});
