import { useState } from "react";

type JournalEntry = {
  id: string;
  title: string;
  content: string;
  date: string; // ISO string
};

type JournalDashboardProps = {
  entries: JournalEntry[];
  onSave: (entry: JournalEntry) => void;
  onDelete: (id: string) => void;
};

const JournalDashboard = ({ entries, onSave, onDelete }: JournalDashboardProps) => {
  return (
    <div>
      <h2>Your Journal Entries</h2>
      {entries.length === 0 && <p>No entries yet.</p>}
      <ul>
        {entries.map((entry) => (
          <li key={entry.id} style={{ marginBottom: "20px" }}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <small>{new Date(entry.date).toLocaleDateString()}</small>
            <br />
            <button onClick={() => onDelete(entry.id)}>Delete</button>
            {/* Add an Edit button and logic if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function JournalApp() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddEntry = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please enter title and content");
      return;
    }
    const newEntry: JournalEntry = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      date: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleSave = (updatedEntry: JournalEntry) => {
    setEntries(
      entries.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry))
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: 20 }}>
      <h1>My Journal</h1>
      <div style={{ marginBottom: 30 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <textarea
          placeholder="Write your thoughts here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          style={{ width: "100%", padding: 8 }}
        />
        <button onClick={handleAddEntry} style={{ marginTop: 10 }}>
          Add Entry
        </button>
      </div>

      <JournalDashboard entries={entries} onSave={handleSave} onDelete={handleDelete} />
    </div>
  );
}
