import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "User",  // Reference to the User model from auth service
    required: true,
  },
  category: {
    type: String,
    enum: ["Product Features", "Product Pricing", "Product Usability"],
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Feedback", feedbackSchema);
