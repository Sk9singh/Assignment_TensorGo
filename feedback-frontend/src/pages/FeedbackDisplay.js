import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFeedback } from "../contexts/FeedbackContext"; // Import FeedbackContext

const categories = ["Product Features", "Product Pricing", "Product Usability"];

const FeedbackDisplay = () => {
  const [data, setData] = useState({});
  const { feedbackUpdated, setFeedbackUpdated } = useFeedback(); // Access the context

  const fetchFeedback = async () => {
    const results = {};
    for (let cat of categories) {
      const res = await axios.get(
        `http://localhost:5001/api/feedback?category=${encodeURIComponent(cat)}`
      );
      results[cat] = res.data;
    }
    setData(results);
  };

  useEffect(() => {
    fetchFeedback(); // Fetch feedback data on load
  }, [feedbackUpdated]); // Re-fetch when feedbackUpdated changes

  useEffect(() => {
    if (feedbackUpdated) {
      setFeedbackUpdated(false); // Reset the feedbackUpdated state
    }
  }, [feedbackUpdated, setFeedbackUpdated]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Feedback Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{cat}</h3>
            {data[cat] && data[cat].length > 0 ? (
              data[cat].map((item, i) => (
                <p key={i} className="text-gray-700 mb-2">
                  ⭐ {item.rating} - <span className="italic">"{item.comments}"</span>
                </p>
              ))
            ) : (
              <p className="text-gray-500">No feedback yet</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackDisplay;
