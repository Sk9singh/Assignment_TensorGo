import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../contexts/FeedbackContext"; // Import the FeedbackContext

const FeedbackForm = () => {
  const [category, setCategory] = useState("Product Features");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { setFeedbackUpdated } = useFeedback(); // Access the context to trigger re-fetch

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/feedback", {
        userId: user.sub,
        category,
        rating,
        comments,
      });
      alert("✅ Feedback submitted!");
      setComments(""); // Clear the comments field

      setFeedbackUpdated(true); // Trigger the update in context

      // Redirect to FeedbackDisplay page
      navigate("/view-feedback");
    } catch (err) {
      alert("❌ Error submitting feedback");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-100 via-white to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl animate-fade-in"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Submit Feedback
        </h2>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option>Product Features</option>
            <option>Product Pricing</option>
            <option>Product Usability</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Rating (1-5)</label>
          <input
            type="number"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Write your thoughts here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
