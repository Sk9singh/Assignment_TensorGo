import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// POST - Submit Feedback
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
    res.status(500).send("Error submitting feedback: " + error.message);
  }
});

// GET - Retrieve Feedback Data (by category)
router.get("/feedback", async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).send("Category is required");
  }

  try {
    const feedbackData = await Feedback.aggregate([
      { $match: { category } },
      { $group: { _id: "$category", averageRating: { $avg: "$rating" }, feedbackCount: { $sum: 1 } } },
    ]);
    res.status(200).json(feedbackData);
  } catch (error) {
    res.status(500).send("Error retrieving feedback: " + error.message);
  }
});

export default router;
