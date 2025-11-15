import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

// Importing routes (ESM import)
import dataRoutes from "./Routes/routes.js";   

app.use("/", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});