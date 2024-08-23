import express from 'express';
import {submitFeedback, getFeedbacks} from '../controller/feedback.controller.js';

const router = express.Router();

// Route to submit feedback
router.post('/submit', submitFeedback);

// Route to retrieve all feedback
router.get('/retrieve', getFeedbacks);

export default router;

