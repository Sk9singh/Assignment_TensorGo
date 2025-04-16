import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../contexts/FeedbackContext";

const FeedbackForm = () => {
  const [category, setCategory] = useState("Product Features");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { setFeedbackUpdated } = useFeedback();

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
      setComments("");
      setFeedbackUpdated(true);
      navigate("/view-feedback");
    } catch (err) {
      alert("❌ Error submitting feedback");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-14 animate-fade-in"
      >
        <h2 className="text-6xl font-bold text-center text-purple-700 mb-12 tracking-tight">
          ✨ Share Your Feedback
        </h2>

        {/* Category */}
        <div className="mb-10">
          <label className="block text-2xl font-medium text-gray-700 mb-4">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 text-lg"
          >
            <option>Product Features</option>
            <option>Product Pricing</option>
            <option>Product Usability</option>
          </select>
        </div>

        {/* Rating */}
        <div className="mb-10">
          <label className="block text-2xl font-medium text-gray-700 mb-4">Rating (1 to 5)</label>
          <input
            type="number"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 text-lg"
          />
        </div>

        {/* Comments */}
        <div className="mb-10">
          <label className="block text-2xl font-medium text-gray-700 mb-4">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="6"
            placeholder="Write your thoughts here..."
            className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 text-lg"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-5 rounded-xl shadow-lg transition duration-300 text-xl"
        >
          🚀 Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
