import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  userEmail: String,
  category: String,
  comment: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);
export default Feedback;
