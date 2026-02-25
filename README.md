🚀 Overview

This application allows users to:

Add websites to monitor

Check for content changes manually

View structured diffs (Git-style)

Generate AI summaries of detected changes

View history of the last 5 checks per website

Monitor backend, database, and LLM health

🏗 Tech Stack

Frontend:

React (Vite)

Axios

Plain CSS

Backend:

Node.js

Express

MongoDB (Mongoose)

Cheerio (HTML parsing)

diff (change detection)

Groq API (LLM summaries)

Database:

MongoDB Atlas

✨ Features Implemented

Add monitored URLs

Delete monitored URLs

Manual “Check Now” functionality

Website content fetching with timeout handling

Diff detection between previous and latest version

AI-generated summaries using Groq (llama-3.3-70b-versatile)

View history (last 5 checks per URL)

System Status page:

Server health

Database health

LLM connectivity

Environment-based configuration

Clean and responsive UI

📂 Project Structure

web-monitor/
│
├── web-monitor-frontend/
│ ├── src/
│ └── ...
│
├── web-monitor-backend/
│ ├── routes/
│ ├── models/
│ ├── utils/
│ └── server.js
│
├── README.md
├── AI_NOTES.md
├── ABOUTME.md
└── PROMPTS_USED.md

⚙️ How To Run Locally
1️⃣ Clone the Repository

git clone <your-repo-url>
cd <repo-name>

2️⃣ Backend Setup

cd web-monitor-backend
npm install

Create a .env file in the backend root:

MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
PORT=5000

Start backend:

npm run dev

Backend runs on:
http://localhost:5000

3️⃣ Frontend Setup

cd web-monitor-frontend
npm install

Create a .env file in frontend root:

VITE_API_URL=http://localhost:5000

Start frontend:

npm run dev

Frontend runs on:
http://localhost:5173

🔌 API Endpoints

POST /api/links
→ Add a new link

GET /api/links
→ Get all monitored links

DELETE /api/links/:id
→ Delete a link

POST /api/check/:id
→ Fetch website, detect changes, generate summary

GET /api/history/:id
→ Get last 5 checks for a link

GET /api/status
→ System health check (server, database, LLM)

🧠 How It Works

Website content is fetched using Axios.

HTML is parsed using Cheerio.

Previous version is retrieved from MongoDB.

Changes are detected using the diff library.

If changes are found:

Diff is stored

AI summary is generated via Groq LLM

Only the latest 5 checks per link are retained.

✅ What Is Done

✔ Diff-based change detection
✔ AI summary generation
✔ History tracking (last 5 checks)
✔ Delete functionality
✔ Health monitoring endpoint
✔ Timeout handling for slow websites
✔ Colored diff rendering in UI
✔ Environment-based config

❌ What Is Not Done

Authentication / user accounts

Scheduled background checks (manual only)

Email or push notifications

Rate limiting

Advanced content filtering

Docker containerization

Production logging setup

🌍 Deployment

Backend can be deployed on:

Render

Railway

Fly.io

Frontend can be deployed on:

Vercel

Netlify

📌 Notes

First check stores a baseline snapshot.

AI summaries are generated only when changes are detected.

Only last 5 checks per link are stored to prevent database bloat.

Designed as a practical evaluation project demonstrating full-stack and LLM integration.
