import React from "react";

function Resources() {
  const resources = [
    { name: "Mental Health Helpline (India)", link: "tel:1800233", icon: "📞" },
    { name: "Childline 1098 (India)", link: "tel:1098", icon: "👧" },
    { name: "Talk to a Counselor", link: "https://www.therapistindia.com", icon: "🗣️" },
    { name: "Mental Health Info (US)", link: "https://www.mentalhealth.gov", icon: "📘" },
  ];

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
      marginBottom: 10,
    },
    titleWrap: { display: "flex", alignItems: "center", gap: 10 },
    badge: {
      padding: "6px 10px",
      borderRadius: 999,
      background: "rgba(52,211,153,.18)",
      border: "1px solid rgba(52,211,153,.35)",
      color: "#b6ffde",
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: 0.3,
    },
    title: { fontSize: 24, fontWeight: 900, color: "#F6FAFF", margin: 0 },
    list: { margin: "10px 0 0 0", padding: 0, listStyle: "none" },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 14,
      padding: "14px 16px",
      marginTop: 10,
      transition: "transform .15s ease, box-shadow .15s ease",
      boxShadow: "0 8px 20px rgba(0,0,0,.28)",
    },
    left: { display: "flex", alignItems: "center", gap: 10, minWidth: 0 },
    icon: {
      width: 36,
      height: 36,
      borderRadius: 10,
      display: "grid",
      placeItems: "center",
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.18)",
      fontSize: 18,
    },
    name: {
      color: "#F6FAFF",
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    linkBtn: {
      textDecoration: "none",
      padding: "10px 14px",
      borderRadius: 12,
      background: "rgba(96,165,250,.2)",
      border: "1px solid rgba(96,165,250,.45)",
      color: "#bfdbfe",
      fontWeight: 800,
      whiteSpace: "nowrap",
    },
    note: {
      marginTop: 14,
      padding: 12,
      borderRadius: 12,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      fontSize: 13,
      lineHeight: 1.6,
    },
  };

  return (
    <div style={ui.page}>
      <div style={ui.card}>
        <div style={ui.header}>
          <div style={ui.titleWrap}>
            <h2 style={ui.title}>Resource Navigator</h2>
            <span style={ui.badge}>Helpful links</span>
          </div>
        </div>

        <ul style={ui.list}>
          {resources.map((res, idx) => (
            <li
              key={idx}
              style={ui.item}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            >
              <div style={ui.left}>
                <div style={ui.icon}>{res.icon}</div>
                <div style={ui.name}>{res.name}</div>
              </div>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                style={ui.linkBtn}
                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(96,165,250,.3)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "rgba(96,165,250,.2)")}
              >
                Open
              </a>
            </li>
          ))}
        </ul>

        <div style={ui.note}>
          If this is an emergency or there is a risk of harm, contact local emergency
          services or a crisis hotline in your region. Consider saving important
          numbers to your phone for quick access.
        </div>
      </div>
    </div>
  );
}

export default Resources;

