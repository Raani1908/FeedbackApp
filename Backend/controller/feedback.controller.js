import Feedback from '../models/feedback.model.js';
import User from '../models/user.model.js';

// Controller to handle submission of feedback
export const submitFeedback = async (req, res) => {
  const { topic, rating, comments } = req.body;
  console.log(req.body);
  try {
    const feedback = new Feedback({ topic, rating, comments });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit feedback', error });
  }
};

// Controller to retrieve all feedback
export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve feedback', error });
  }
};
