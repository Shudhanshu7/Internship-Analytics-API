// controllers/applicationController.js

const { applications } = require('../data/mockData');

exports.getTopApplications = (req, res) => {
  const topApps = applications
    .sort((a, b) => b.mentorFeedbackScore - a.mentorFeedbackScore)
    .slice(0, 5);
  res.json(topApps);
};

exports.getDailyStats = (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ error: 'Date query is required' });

  const dailyApps = applications.filter(app => app.date === date);
  const stats = {
    total: dailyApps.length,
    accepted: dailyApps.filter(a => a.status === 'accepted').length,
    rejected: dailyApps.filter(a => a.status === 'rejected').length,
    pending: dailyApps.filter(a => a.status === 'pending').length
  };

  res.json(stats);
};
