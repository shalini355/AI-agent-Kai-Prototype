import React, { useState } from "react";
import { analyzeMood } from "./moodUtils";

function MoodChecker({ onDetect }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const wrap = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 16,
    color: "#e7ecf3",
  };
  const row = { display: "flex", gap: 8, alignItems: "stretch" };
  const input = {
    flex: 1,
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    outline: "none",
  };
  const btn = {
    padding: "12px 16px",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    background: "#34d399",
    color: "#0a1220",
  };
  const note = {
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: 14,
  };
  const tag = {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 999,
    background: "rgba(52,211,153,0.18)",
    border: "1px solid rgba(52,211,153,0.35)",
    color: "#b6ffde",
    fontWeight: 800,
    marginLeft: 8,
    fontSize: 12,
  };

  const check = () => {
    const r = analyzeMood(text);
    setResult(r);
    onDetect && onDetect(r); // send to parent (Chat) if needed
  };

  return (
    <div style={wrap}>
      <div style={row}>
        <input
          style={input}
          placeholder="Type how you feel (e.g., 'I feel happy today')"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button style={btn} onClick={check}>Check</button>
      </div>

      {result && (
        <div style={note}>
          <div>
            Mood: {result.label}
            <span style={tag}>{result.mood}</span>
          </div>
          <div style={{ marginTop: 6 }}>{result.response}</div>
          <div style={{ marginTop: 6, opacity: 0.9 }}>Tip: {result.tip}</div>
        </div>
      )}
    </div>
  );
}

export default MoodChecker;
