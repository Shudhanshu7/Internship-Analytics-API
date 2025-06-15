// routes/applicationRoutes.js

const express = require('express');
const router = express.Router();
const { getTopApplications, getDailyStats } = require('../controllers/applicationController');

router.get('/top', getTopApplications);
router.get('/stats', getDailyStats);

module.exports = router;
