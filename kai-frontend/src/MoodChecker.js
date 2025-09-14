import React, { useState } from "react";

function MoodChecker() {
  const [mood, setMood] = useState("");

  const handleMoodClick = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "1px solid #ccc" }}>
      <h2>How are you feeling today?</h2>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => handleMoodClick("😊 Happy")}>😊</button>
        <button onClick={() => handleMoodClick("😔 Sad")}>😔</button>
        <button onClick={() => handleMoodClick("😡 Angry")}>😡</button>
        <button onClick={() => handleMoodClick("😰 Stressed")}>😰</button>
      </div>
      {mood && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Your current mood: {mood}
        </p>
      )}
    </div>
  );
}

export default MoodChecker;
