import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { mainRoutes } from "./routes/index.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api", mainRoutes);

app.listen(3000, () => {
  console.log(`App is running on port ${PORT}`);
});
