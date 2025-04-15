import express from 'express';
import Feedback from '../models/Feedback.js';
import { sendFeedbackToFrill } from '../services/frillService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { category, comment, rating, userEmail } = req.body;

  try {
    const feedback = new Feedback({ category, comment, rating, userEmail });
    await feedback.save();

    // Send to Frill
    await sendFeedbackToFrill({
      title: `${category} Feedback from ${userEmail}`,
      description: comment
    });

    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

router.get('/aggregate', async (req, res) => {
  try {
    const result = await Feedback.aggregate([
      { $group: { _id: '$category', avgRating: { $avg: '$rating' }, count: { $sum: 1 } } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve feedback' });
  }
});

export default router;
