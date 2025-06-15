// data/mockData.js

const applications = [
  {
    id: 1,
    date: '2025-06-14',
    status: 'accepted', // accepted | rejected | pending
    mentorFeedbackScore: 4.8
  },
  {
    id: 2,
    date: '2025-06-14',
    status: 'rejected',
    mentorFeedbackScore: 2.0
  },
  {
    id: 3,
    date: '2025-06-14',
    status: 'pending',
    mentorFeedbackScore: 3.0
  },
  {
    id: 4,
    date: '2025-06-15',
    status: 'accepted',
    mentorFeedbackScore: 5.0
  },
  {
    id: 5,
    date: '2025-06-15',
    status: 'accepted',
    mentorFeedbackScore: 4.5
  },
  {
    id: 6,
    date: '2025-06-15',
    status: 'rejected',
    mentorFeedbackScore: 1.5
  }
];

const feedback = [
  { applicationId: 1, rating: 5 },
  { applicationId: 2, rating: 2 },
  { applicationId: 3, rating: 3 },
  { applicationId: 4, rating: 4 },
  { applicationId: 5, rating: 1 },
  { applicationId: 6, rating: 3 }
];

module.exports = { applications, feedback };
