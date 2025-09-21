import React, { useState } from "react";
import { analyzeMood } from "./moodUtils"; // from previous step

function Dashboard({ onNavigate }) {
  const [showChecker, setShowChecker] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const colors = {
    bgFrom: "#0b1220",
    bgTo: "#141a2b",
    card: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    text: "rgba(231,236,243,0.95)",
    heading: "#F6FAFF",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${colors.bgFrom} 0%, ${colors.bgTo} 100%)`,
      color: colors.text,
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    card: {
      width: "100%",
      maxWidth: 920,
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 20,
      padding: 24,
      boxShadow: "0 16px 48px rgba(0,0,0,.45)",
      backdropFilter: "blur(6px)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
    },
    titleWrap: { display: "flex", alignItems: "center", gap: 12 },
    logo: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background:
        "linear-gradient(135deg, rgba(52,211,153,0.85), rgba(59,130,246,0.85))",
      display: "grid",
      placeItems: "center",
      color: "#0a1220",
      fontWeight: 900,
    },
    title: { fontSize: 26, fontWeight: 900, color: colors.heading, margin: 0 },
    subtitle: { opacity: 0.9, fontSize: 14 },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: 16,
      marginTop: 16,
    },
    tile: {
      gridColumn: "span 6",
      background: "rgba(255,255,255,0.08)",
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      padding: 18,
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "#fff",
      cursor: "pointer",
      transition: "transform .18s ease, box-shadow .18s ease",
      boxShadow: "0 8px 22px rgba(0,0,0,.28)",
    },
    icon: {
      width: 42,
      height: 42,
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      fontSize: 20,
      background: "rgba(255,255,255,0.12)",
      border: `1px solid ${colors.border}`,
    },
    tileText: { display: "grid", gap: 4 },
    tileTitle: { fontWeight: 800, color: colors.heading },
    tileSub: { fontSize: 13, opacity: 0.9 },
    blue: { background: "linear-gradient(135deg,#1e3a8a,#2563eb)" },
    purple: { background: "linear-gradient(135deg,#6d28d9,#7c3aed)" },
    green: { background: "linear-gradient(135deg,#0f766e,#16a34a)" },
    yellow: { background: "linear-gradient(135deg,#ca8a04,#f59e0b)" },

    // inline mood checker panel
    panel: {
      gridColumn: "span 12",
      marginTop: 8,
      background: "rgba(255,255,255,0.06)",
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      padding: 16,
    },
    row: { display: "flex", gap: 8, alignItems: "stretch", flexWrap: "wrap" },
    input: {
      flex: 1,
      minWidth: 240,
      padding: "12px 14px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      outline: "none",
    },
    btn: {
      padding: "12px 16px",
      borderRadius: 12,
      border: "none",
      cursor: "pointer",
      fontWeight: 800,
      background: "#34d399",
      color: "#0a1220",
    },
    note: {
      marginTop: 8,
      padding: 12,
      borderRadius: 12,
      background: "rgba(255,255,255,0.06)",
      border: `1px solid ${colors.border}`,
      fontSize: 14,
    },
    tag: {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      background: "rgba(52,211,153,0.18)",
      border: "1px solid rgba(52,211,153,0.35)",
      color: "#b6ffde",
      fontWeight: 800,
      marginLeft: 8,
      fontSize: 12,
    },
  };

  const raise = (e) => {
    e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,.38)";
  };
  const lower = (e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,.28)";
  };

  const isWide = typeof window !== "undefined" && window.innerWidth >= 800;
  const span = isWide ? { gridColumn: "span 6" } : { gridColumn: "span 12" };

  const runCheck = () => {
    const r = analyzeMood(text);
    setResult(r);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.titleWrap}>
            <div style={styles.logo}>K</div>
            <div>
              <h1 style={styles.title}>Dashboard</h1>
              <div style={styles.subtitle}>Quick actions and tools</div>
            </div>
          </div>
        </div>

        <div style={styles.grid}>
          <div
            style={{ ...styles.tile, ...span, borderColor: "rgba(37,99,235,.35)" }}
            onMouseOver={raise}
            onMouseOut={lower}
            onClick={() => onNavigate("chat")}
          >
            <div style={{ ...styles.icon, ...styles.blue }}>💬</div>
            <div style={styles.tileText}>
              <div style={styles.tileTitle}>Chat with KAI</div>
              <div style={styles.tileSub}>Start a supportive conversation</div>
            </div>
          </div>

          <div
            style={{ ...styles.tile, ...span, borderColor: "rgba(124,58,237,.35)" }}
            onMouseOver={raise}
            onMouseOut={lower}
            onClick={() => onNavigate("wellness")}
          >
            <div style={{ ...styles.icon, ...styles.purple }}>🌿</div>
            <div style={styles.tileText}>
              <div style={styles.tileTitle}>Wellness Activities</div>
              <div style={styles.tileSub}>Breathing, journaling, routines</div>
            </div>
          </div>

          <div
            style={{ ...styles.tile, ...span, borderColor: "rgba(22,163,74,.35)" }}
            onMouseOver={raise}
            onMouseOut={lower}
            onClick={() => onNavigate("resources")}
          >
            <div style={{ ...styles.icon, ...styles.green }}>📚</div>
            <div style={styles.tileText}>
              <div style={styles.tileTitle}>Resources</div>
              <div style={styles.tileSub}>Reliable guides and links</div>
            </div>
          </div>

          {/* Mood Checker tile replaces Settings */}
          <div
            style={{ ...styles.tile, ...span, borderColor: "rgba(234,179,8,.35)" }}
            onMouseOver={raise}
            onMouseOut={lower}
            onClick={() => setShowChecker((s) => !s)}
            title="Quick mood check"
          >
            <div style={{ ...styles.icon, ...styles.yellow }}>🙂</div>
            <div style={styles.tileText}>
              <div style={styles.tileTitle}>Mood Checker</div>
              <div style={styles.tileSub}>Type a feeling to get a tip</div>
            </div>
          </div>

          {showChecker && (
            <div style={styles.panel}>
              <div style={styles.row}>
                <input
                  style={styles.input}
                  placeholder="How do you feel? (e.g., I'm happy today)"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button style={styles.btn} onClick={runCheck}>
                  Analyze
                </button>
              </div>
              {result && (
                <div style={styles.note}>
                  <div>
                    Mood: {result.label}
                    <span style={styles.tag}>{result.mood}</span>
                  </div>
                  <div style={{ marginTop: 6 }}>{result.response}</div>
                  <div style={{ marginTop: 6, opacity: 0.9 }}>Tip: {result.tip}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
