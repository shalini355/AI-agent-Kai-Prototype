import React, { useState } from "react";

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
    </div>
  );
}

export default App;
