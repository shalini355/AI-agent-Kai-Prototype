import React, { useState } from "react";
import MoodChecker from "./MoodChecker";
import WellnessActivities from "./WellnessActivities";
import ResourceNavigator from "./ResourceNavigator";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askAI(q) {
    const res = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    askAI(question);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kai - AI Agent</h1>

      {/* AI Chat */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Ask</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <strong>AI Answer:</strong>
        <p>{answer}</p>
      </div>

      {/* Mood Checker */}
      <MoodChecker />
      {/* Wellness Activities */}
      <WellnessActivities/>
      {/* Resource Navigator */}
      <ResourceNavigator />
    </div>
  );
}

export default App;
