import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  
  topic: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;

