// location: kai-backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // ensure .env me OPENAI_API_KEY set ho
});

// Mood + AI endpoint
app.post("/ai-mood", async (req, res) => {
  const { message } = req.body;

  if (!message) return res.json({ mood: "neutral", reply: "Please send some text!" });

  const msg = message.toLowerCase();

  const happyKeywords = ["happy", "good", "excited", "great", "joy"];
  const sadKeywords = ["sad", "depressed", "unhappy", "bad", "down"];
  const angryKeywords = ["angry", "frustrated", "mad", "upset"];

  let mood = "neutral";

  if (happyKeywords.some(word => msg.includes(word))) mood = "happy";
  else if (sadKeywords.some(word => msg.includes(word))) mood = "sad";
  else if (angryKeywords.some(word => msg.includes(word))) mood = "angry";

  // AI Response
  try {
    const aiPrompt = `The user is feeling ${mood}. Respond in a friendly way to their message: "${message}"`;
    
    const aiRes = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: aiPrompt }],
      max_tokens: 150,
    });

    const aiReply = aiRes.choices[0].message.content;

    res.json({ mood, reply: aiReply });

  } catch (error) {
    console.error(error);
    res.json({ mood, reply: "Sorry, I couldn't process your request." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
