import React, { useState } from "react";

function Setting({ onBack }) {
  const [darkMode, setDarkMode] = useState(true);
  const [compactChat, setCompactChat] = useState(false);

  const ui = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0b1220 0%, #141a2b 100%)",
      color: "#e7ecf3",
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    },
    card: {
      width: "100%",
      maxWidth: 720,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 20,
      padding: 22,
      boxShadow: "0 16px 48px rgba(0,0,0,.45)",
      backdropFilter: "blur(6px)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    left: { display: "flex", alignItems: "center", gap: 10 },
    title: { fontSize: 24, fontWeight: 900, color: "#F6FAFF", margin: 0 },
    back: {
      padding: "8px 12px",
      borderRadius: 12,
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.18)",
      color: "#fff",
      cursor: "pointer",
    },
    sub: { opacity: 0.9, marginBottom: 12 },

    section: {
      marginTop: 12,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 16,
      padding: 14,
    },
    sectionTitle: { fontWeight: 800, color: "#F6FAFF", marginBottom: 8 },

    row: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: "10px 0",
      borderBottom: "1px dashed rgba(255,255,255,0.12)",
    },
    lastRow: { borderBottom: "none" },
    label: { fontWeight: 700, color: "#F6FAFF" },
    help: { fontSize: 13, opacity: 0.85 },

    toggle: (on) => ({
      width: 48,
      height: 28,
      borderRadius: 999,
      background: on ? "#34d399" : "rgba(255,255,255,0.18)",
      border: "1px solid rgba(255,255,255,0.2)",
      position: "relative",
      cursor: "pointer",
      transition: "background .15s ease",
    }),
    knob: (on) => ({
      position: "absolute",
      top: 3,
      left: on ? 24 : 3,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "#0a1220",
      transition: "left .15s ease",
      boxShadow: "0 4px 10px rgba(0,0,0,.3)",
    }),

    danger: {
      marginTop: 12,
      padding: 12,
      borderRadius: 14,
      background: "rgba(239,68,68,0.12)",
      border: "1px solid rgba(239,68,68,0.35)",
      color: "#fecaca",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    dangerBtn: {
      padding: "8px 12px",
      borderRadius: 10,
      background: "rgba(239,68,68,0.25)",
      border: "1px solid rgba(239,68,68,0.45)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 800,
    },
  };

  return (
    <div style={ui.page}>
      <div style={ui.card}>
        <div style={ui.header}>
          <div style={ui.left}>
            <h1 style={ui.title}>Settings</h1>
          </div>
          <button
            style={ui.back}
            onClick={onBack}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 0.9)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          >
            ← Back
          </button>
        </div>
        <div style={ui.sub}>Manage privacy, display, and chat preferences.</div>

        {/* Display */}
        <div style={ui.section}>
          <div style={ui.sectionTitle}>Display</div>

          <div style={ui.row}>
            <div>
              <div style={ui.label}>Dark Mode</div>
              <div style={ui.help}>Reduce eye strain with a darker theme.</div>
            </div>
            <div
              role="switch"
              aria-checked={darkMode}
              onClick={() => setDarkMode((v) => !v)}
              style={ui.toggle(darkMode)}
              title="Toggle dark mode"
            >
              <div style={ui.knob(darkMode)} />
            </div>
          </div>

          <div style={{ ...ui.row, ...ui.lastRow }}>
            <div>
              <div style={ui.label}>Compact Chat</div>
              <div style={ui.help}>Smaller message spacing in chat interface.</div>
            </div>
            <div
              role="switch"
              aria-checked={compactChat}
              onClick={() => setCompactChat((v) => !v)}
              style={ui.toggle(compactChat)}
              title="Toggle compact chat"
            >
              <div style={ui.knob(compactChat)} />
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div style={ui.section}>
          <div style={ui.sectionTitle}>Privacy</div>

          <div style={ui.row}>
            <div>
              <div style={ui.label}>Data Export</div>
              <div style={ui.help}>Download chat history and mood logs.</div>
            </div>
            <button
              style={ui.back}
              onClick={() => alert("Export started…")}
            >
              Export
            </button>
          </div>

          <div style={{ ...ui.row, ...ui.lastRow }}>
            <div>
              <div style={ui.label}>Data Deletion</div>
              <div style={ui.help}>Request deletion of stored personal data.</div>
            </div>
            <button
              style={ui.back}
              onClick={() => alert("Deletion request submitted.")}
            >
              Request
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div style={ui.danger}>
          <div>
            <strong>Danger zone:</strong> Signing out clears local session state.
          </div>
          <button
            style={ui.dangerBtn}
            onClick={() => alert("Signed out locally.")}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
