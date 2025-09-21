import React from "react";

function Navbar({ onNavigate }) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    background: "linear-gradient(to right, #6366f1, #60a5fa)",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const buttonStyle = {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "background 0.2s",
  };

  const hoverEffect = (e) => (e.target.style.background = "rgba(255,255,255,0.2)");
  const leaveEffect = (e) => (e.target.style.background = "transparent");

  return (
    <div style={navStyle}>
      <button
        style={buttonStyle}
        onMouseOver={hoverEffect}
        onMouseOut={leaveEffect}
        onClick={() => onNavigate("dashboard")}
      >
        Dashboard
      </button>
      <button
        style={buttonStyle}
        onMouseOver={hoverEffect}
        onMouseOut={leaveEffect}
        onClick={() => onNavigate("WellnessActivities")}
      >
        Wellness
      </button>
      <button
        style={buttonStyle}
        onMouseOver={hoverEffect}
        onMouseOut={leaveEffect}
        onClick={() => onNavigate("chat")}
      >
        Chat
      </button>
      <button
        style={buttonStyle}
        onMouseOver={hoverEffect}
        onMouseOut={leaveEffect}
        onClick={() => onNavigate("resources")}
      >
        Resources
      </button>
      <button
        style={buttonStyle}
        onMouseOver={hoverEffect}
        onMouseOut={leaveEffect}
        onClick={() => onNavigate("settings")}
      >
        Settings
      </button>
    </div>
  );
}

export default Navbar;
