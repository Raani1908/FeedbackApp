import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [topic, setTopic] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic || rating <= 0 || !comments) {
      setMessage('Please fill in all fields correctly.');
      return;
    }

    try {
      axios.post('http://localhost:2024/Feedback/submit', {
        topic,
        rating,
        comments,
      });

      setMessage('Feedback submitted successfully!');
      setTopic('');
      setRating(0);
      setComments('');
    } catch (error) {
      setMessage('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FeedbackForm;
