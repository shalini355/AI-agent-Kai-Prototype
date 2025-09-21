// moodUtils.js
export const MOOD_KEYWORDS = {
  happy: ["happy", "glad", "joy", "joyful", "delighted", "excited", "great", "awesome", "good", "cheerful", "content"],
  sad: ["sad", "down", "upset", "blue", "tearful", "unhappy", "depressed", "low"],
  angry: ["angry", "mad", "furious", "irritated", "annoyed", "rage", "frustrated"],
  anxious: ["anxious", "anxiety", "nervous", "worried", "scared", "fearful", "panic", "stressed", "stress"],
  stressed: ["stressed", "overwhelmed", "pressure", "burnt out", "burnout", "tense"],
  tired: ["tired", "exhausted", "fatigued", "sleepy", "drained"],
  lonely: ["lonely", "alone", "isolated", "left out"],
  grateful: ["grateful", "thankful", "blessed", "appreciative"],
};

export function analyzeMood(text) {
  if (!text || !text.trim()) {
    return {
      mood: "neutral",
      label: "Neutral",
      response:
        "Thanks for sharing—feel free to tell more about what’s on your mind.",
      tip: "Short prompts help: “I feel … because …”",
    };
  }

  const lower = text.toLowerCase();
  let bestMood = "neutral";
  let score = 0;

  for (const [mood, words] of Object.entries(MOOD_KEYWORDS)) {
    let count = 0;
    for (const w of words) {
      // whole-word-ish match
      const regex = new RegExp(`\\b${escapeRegex(w)}\\b`, "i");
      if (regex.test(lower)) count++;
    }
    if (count > score) {
      score = count;
      bestMood = mood;
    }
  }

  return moodReply(bestMood);
}

function moodReply(mood) {
  switch (mood) {
    case "happy":
      return {
        mood,
        label: "Happy",
        response:
          "That’s wonderful to hear! What made the day positive for you?",
        tip: "Try saving a quick gratitude note to revisit later.",
      };
    case "grateful":
      return {
        mood,
        label: "Grateful",
        response:
          "Feeling grateful can really lift the day—what are you thankful for right now?",
        tip: "Capturing small wins builds resilience over time.",
      };
    case "sad":
      return {
        mood,
        label: "Sad",
        response:
          "Sorry it’s tough right now. Want to share what’s weighing on the mind?",
        tip: "A gentle 3–minute breathing break can help before writing more.",
      };
    case "angry":
      return {
        mood,
        label: "Angry",
        response:
          "Strong feelings are valid. What sparked the frustration today?",
        tip: "Name it to tame it—labeling emotions can reduce intensity.",
      };
    case "anxious":
      return {
        mood,
        label: "Anxious",
        response:
          "Thanks for sharing. Would a short grounding exercise help right now?",
        tip: "Try 5‑4‑3‑2‑1: notice 5 things you see, 4 touch, 3 hear, 2 smell, 1 taste.",
      };
    case "stressed":
      return {
        mood,
        label: "Stressed",
        response:
          "Pressure can feel heavy. What’s the top task to simplify first?",
        tip: "Break tasks into 10‑minute steps and pause between.",
      };
    case "tired":
      return {
        mood,
        label: "Tired",
        response:
          "Energy seems low—has rest or hydration been tricky lately?",
        tip: "A brief stretch and a glass of water can nudge energy up.",
      };
    case "lonely":
      return {
        mood,
        label: "Lonely",
        response:
          "Feeling isolated is hard. Would reaching out to someone feel okay?",
        tip: "A two‑line message to a friend can reopen connection gently.",
      };
    default:
      return {
        mood: "neutral",
        label: "Neutral",
        response:
          "Got it. Share a bit more and we can figure it out together.",
        tip: "Try starting with “I feel … about … because …”.",
      };
  }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
