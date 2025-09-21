import { useState, useMemo, useEffect } from "react";
import WelcomeScreen from "./WelcomeScreen";
import ConsentModal from "./ConsentModal";
import Dashboard from "./Dashboard";
import WellnessActivities from "./WellnessActivities";
import Resources from "./Resources";
import Settings from "./Settings";
import Chat from "./Chat";
import ContactUs from "./ContactUs";
import AboutPage from "./AboutPage";

function App() {
  const [page, setPage] = useState("welcome");
  const [consent, setConsent] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("kai_theme") || "dark"; // 'dark' | 'light'
  });

  useEffect(() => {
    localStorage.setItem("kai_theme", theme);
  }, [theme]);

  const palettes = {
    dark: {
      bg: "linear-gradient(135deg, #0b1220 0%, #141a2b 100%)",
      text: "#e7ecf3",
      navBg: "rgba(0,0,0,0.45)",
      border: "1px solid rgba(255,255,255,0.08)",
      chip: "rgba(255,255,255,0.08)",
    },
    light: {
      bg: "linear-gradient(135deg, #f5f7fb 0%, #ffffff 100%)",
      text: "#0f172a",
      navBg: "rgba(255,255,255,0.7)",
      border: "1px solid rgba(2,6,23,0.08)",
      chip: "rgba(2,6,23,0.06)",
    },
  };
  const pal = palettes[theme];

  const styles = useMemo(
    () => ({
      app: {
        minHeight: "100vh",
        background: page === "welcome" ? "transparent" : pal.bg,
        color: pal.text,
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
      },
      nav: {
        display: consent ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 18px",
        background: pal.navBg,
        borderBottom: pal.border,
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(6px)",
      },
      brand: { fontWeight: 800, letterSpacing: 1 },
      links: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" },
      link: {
        color: pal.text,
        textDecoration: "none",
        background: pal.chip,
        padding: "6px 10px",
        borderRadius: 10,
        cursor: "pointer",
        border: pal.border,
      },
      content: { padding: consent ? 16 : 0 },
    }),
    [consent, page, pal]
  );

  const renderPage = () => {
    if (page === "welcome") {
      return (
        <WelcomeScreen
          onNext={() => setPage("consent")}
          onContact={() => setPage("contact")}
          onAbout={() => setPage("about")}
          theme={theme}
          setTheme={setTheme}
        />
      );
    }

    if (page === "consent" && !consent) {
      return (
        <ConsentModal
          onConsent={() => {
            setConsent(true);
            setPage("dashboard");
          }}
        />
      );
    }

    switch (page) {
      case "dashboard":
        return <Dashboard onNavigate={setPage} theme={theme} />;
      case "wellness":
        return <WellnessActivities setScreen={setPage} theme={theme} />;
      case "resources":
        return <Resources theme={theme} />;
      case "settings":
        return <Settings onBack={() => setPage("dashboard")} theme={theme} setTheme={setTheme} />;
      case "chat":
        return <Chat onBack={() => setPage("dashboard")} theme={theme} />;
      case "contact":
        return <ContactUs onBack={() => setPage("welcome")} theme={theme} />;
      case "about":
        return <AboutPage onBack={() => setPage("welcome")} theme={theme} />;
      default:
        return <Dashboard onNavigate={setPage} theme={theme} />;
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.nav}>
        <div style={styles.brand}>KAI</div>
        <div style={styles.links}>
          <span style={styles.link} onClick={() => setPage("dashboard")}>Dashboard</span>
          <span style={styles.link} onClick={() => setPage("chat")}>Chat</span>
          <span style={styles.link} onClick={() => setPage("wellness")}>Wellness</span>
          <span style={styles.link} onClick={() => setPage("resources")}>Resources</span>
          <span style={styles.link} onClick={() => setPage("about")}>About Us</span>
          <span style={styles.link} onClick={() => setPage("contact")}>Contact Us</span>
          <span style={styles.link} onClick={() => setPage("settings")}>Settings</span>
          <span
            style={{ ...styles.link, background: theme === "dark" ? "rgba(239,68,68,0.15)" : "rgba(239,68,68,0.2)" }}
            onClick={() => {
              setConsent(false);
              setPage("welcome");
            }}
          >
            Sign Out
          </span>
        </div>
      </div>
      <div style={styles.content}>{renderPage()}</div>
    </div>
  );
}

export default App;
