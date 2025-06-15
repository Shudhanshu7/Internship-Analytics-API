// index.js

const express = require('express');
const app = express();
const applicationRoutes = require('./routes/applicationRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(express.json());

app.use('/api/application', applicationRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
