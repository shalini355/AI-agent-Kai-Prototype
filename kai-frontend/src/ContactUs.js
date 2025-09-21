import React, { useState } from "react";

function ContactUs({ onBack, onSubmitSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const page = {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0b1220 0%, #141a2b 100%)",
    color: "#e7ecf3",
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  };
  const container = { maxWidth: 960, margin: "0 auto", padding: "24px" };
  const header = { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 };
  const back = {
    padding: "8px 12px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    cursor: "pointer",
  };
  const card = {
    background: "#0e1829",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 10px 28px rgba(0,0,0,.35)",
  };
  const h1 = { fontSize: 32, fontWeight: 900, color: "#f6faff", margin: "0 0 8px" };
  const sub = { opacity: 0.9, marginBottom: 18 };
  const row = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 };
  const col = { display: "flex", flexDirection: "column", gap: 8 };
  const label = { fontWeight: 700, color: "#f6faff" };
  const input = {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    outline: "none",
  };
  const textarea = { ...input, minHeight: 140, resize: "vertical" };
  const actions = { marginTop: 16, display: "flex", gap: 10, alignItems: "center" };
  const btn = {
    padding: "12px 18px",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: 16,
  };
  const primary = {
    ...btn,
    background: "#34d399",
    color: "#0a1220",
    boxShadow: "0 8px 22px rgba(52,211,153,.3)",
  };
  const ghost = {
    ...btn,
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
  };
  const success = {
    marginTop: 16,
    padding: 14,
    borderRadius: 12,
    background: "rgba(52,211,153,0.15)",
    border: "1px solid rgba(52,211,153,0.35)",
    color: "#b6ffde",
    fontWeight: 700,
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Fake async submit; replace with real API/email service
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    onSubmitSuccess && onSubmitSuccess(form);
  };

  return (
    <div style={page}>
      <div style={container}>
        <div style={header}>
          <button style={back} onClick={onBack}>← Back</button>
        </div>

        <div style={card}>
          <h1 style={h1}>Contact Us</h1>
          <div style={sub}>Have questions or feedback? Send a message and the team will respond soon.</div>

          <form onSubmit={handleSubmit}>
            <div style={row}>
              <div style={col}>
                <label style={label}>Name</label>
                <input
                  style={input}
                  name="name"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={col}>
                <label style={label}>Email</label>
                <input
                  style={input}
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div style={{ ...col, marginTop: 16 }}>
              <label style={label}>Message</label>
              <textarea
                style={textarea}
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div style={actions}>
              <button type="submit" style={primary} disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              <button type="button" style={ghost} onClick={onBack}>
                Cancel
              </button>
            </div>

            {sent && <div style={success}>Thanks! Your message has been sent.</div>}
          </form>

          {/* Optional contact info */}
          <div style={{ marginTop: 20, opacity: 0.9 }}>
            Email: support@kai.app • Phone: +91 98xx-xxx-xxx
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
