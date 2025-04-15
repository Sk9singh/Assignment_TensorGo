import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import cors from 'cors';
dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // React frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());  // To parse JSON request body
app.use("/api", feedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Feedback service running on port ${PORT}`));
