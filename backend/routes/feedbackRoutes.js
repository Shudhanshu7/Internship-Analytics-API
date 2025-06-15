// routes/feedbackRoutes.js

const express = require('express');
const router = express.Router();
const { getFeedbackSummary } = require('../controllers/feedbackController');

router.get('/summary', getFeedbackSummary);

module.exports = router;
