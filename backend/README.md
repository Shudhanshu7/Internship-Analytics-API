# 📊 Internship Analytics API

A lightweight Node.js + Express.js microservice for analyzing internship application and feedback data, built using in-memory JSON.

---

## 🚀 Features

- **Top Applications API**: Get top 5 applications based on mentor feedback score
- **Daily Stats API**: Get summary of applications by status on a given date
- **Feedback Summary API**: Get count of positive, neutral, and negative feedback

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- In-memory data (JavaScript object arrays)

---

## 🔌 API Endpoints

### 1. `GET /api/application/top`

Returns top 5 applications sorted by `mentorFeedbackScore`.

### 2. `GET /api/application/stats?date=YYYY-MM-DD`

Returns application count summary for a given date:
- `total`
- `accepted`
- `rejected`
- `pending`

### 3. `GET /api/feedback/summary`

Returns:
- `positive` (ratings 4–5)
- `neutral` (rating 3)
- `negative` (ratings 1–2)

---

## ▶️ Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/internship-analytics-api.git
cd internship-analytics-api

# Install dependencies
npm install

# Run the server
npm start


Server runs at: http://localhost:3000




Example requests:

1. GET http://localhost:3000/api/application/top

2. GET http://localhost:3000/api/application/stats?date=2025-06-14

3. GET http://localhost:3000/api/feedback/summary


Mock Data:

All application and feedback data is stored in-memory under /data/mockData.js. You can modify it as needed.