import express from "express";
import Feedback from "../models/Feedback.js";
import mongoose from "mongoose";

const router = express.Router();


router.post("/feedback", async (req, res) => {
  const { userId, category, rating, comments } = req.body;
  if (!userId || !category || !rating) {
    return res.status(400).send("Missing required fields");
  }
  
  
  const newFeedback = new Feedback({
    userId, 
    category,
    rating,
    comments,
  });

  try {
    await newFeedback.save();
    res.status(201).send("Feedback submitted successfully!");
  } catch (error) {

    console.log("error occur",error);
    res.status(500).send("Error submitting feedback: " + error.message);
  }
});





router.get("/feedback", async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).send("Category is required");
  }

  try {
    const feedbackList = await Feedback.find({ category }).sort({ createdAt: -1 }); 
    res.status(200).json(feedbackList); 
  } catch (error) {
    res.status(500).send("Error retrieving feedback: " + error.message);
  }
});

export default router;
