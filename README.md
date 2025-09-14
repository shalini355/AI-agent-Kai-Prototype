# Kai - AI Agent

**Kai** is an empathetic AI assistant designed to support mental wellness, track mood, and provide helpful resources in a friendly and confidential way. The project is built using **React** for the frontend and **Node.js + Express** for the backend.

---

## Features

1. **Empathetic AI Chat**  
   - Friendly, confidential conversations with the AI.  
   - Supports English and Hinglish for a youth-friendly tone.

2. **Mood Check-In**  
   - Daily tracking with emojis.  
   - Simple sentiment analysis to detect user mood.

3. **Guided Wellness Activities**  
   - Journaling prompts, breathing exercises, and affirmations.

4. **Resource Navigator**  
   - Quick access to helplines and professional counselors.

5. **Cultural Sensitivity**  
   - AI understands both English and Hinglish inputs.

---

## Tech Stack

- **Frontend:** React, JavaScript, CSS  
- **Backend:** Node.js, Express  
- **AI Integration:** OpenAI API (or any generative AI model)  
- **Other Tools:** Axios, Body-Parser, CORS, Dotenv

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/shalini355/AI-agent-Kai-Prototype.git
cd AI-agent-Kai-Prototype

2. Backend Setup
cd kai-backend
npm install
cp .env.example .env
# Add your API keys and any required environment variables in .env
node server.js
Backend runs on http://localhost:5000 by default.

3. Frontend Setup
cd kai-frontend
npm install
npm start
Frontend runs on http://localhost:3000 by default.

4. Using the App
Open your browser at http://localhost:3000.

Use the chat to talk with Kai.

Check your mood using the Mood Check-In feature.

Explore guided wellness activities and resources.

Important Notes
Add your Gemini API key in .env in the backend folder.

Make sure to run the backend before starting the frontend.

Ignore node_modules in GitHub; .gitignore is provided.

Contributing
Fork the repo and create a new branch for your feature or bug fix.

Submit a pull request with clear description of your changes.
```

License
This project is open-source and free to use under the MIT License.