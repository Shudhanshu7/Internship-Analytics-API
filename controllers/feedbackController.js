// controllers/feedbackController.js

const { feedback } = require('../data/mockData');

exports.getFeedbackSummary = (req, res) => {
  const summary = {
    positive: feedback.filter(f => f.rating >= 4).length,
    neutral: feedback.filter(f => f.rating === 3).length,
    negative: feedback.filter(f => f.rating <= 2).length
  };
  res.json(summary);
};
