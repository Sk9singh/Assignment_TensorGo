import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackDisplay from "./pages/FeedbackDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/submit-feedback" element={<FeedbackForm />} />
        <Route path="/view-feedback" element={<FeedbackDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
