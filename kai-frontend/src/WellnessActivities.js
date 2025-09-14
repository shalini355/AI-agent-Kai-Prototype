import React, { useState } from "react";

function WellnessActivities() {
  const activities = [
    { type: "Journaling", content: "Write down 3 things you're grateful for today." },
    { type: "Breathing", content: "Take 5 deep breaths, inhaling for 4 sec, exhaling for 4 sec." },
    { type: "Affirmation", content: "Say to yourself: 'I am capable and strong.' " },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "1px solid #ccc" }}>
      <h2>Guided Wellness Activity</h2>
      <p>
        <strong>{activities[currentIndex].type}:</strong> {activities[currentIndex].content}
      </p>
      <button onClick={handleNext}>Next Activity</button>
    </div>
  );
}

export default WellnessActivities;
