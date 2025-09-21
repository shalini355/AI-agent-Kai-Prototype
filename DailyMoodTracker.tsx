import React, { useState, useEffect } from 'react';

type MoodOption = {
  label: string;
  value: number;
  emoji: string;
  color: string;
};

const moods: MoodOption[] = [
  { label: 'Very Sad', value: 1, emoji: '😞', color: 'bg-red-400' },
  { label: 'Sad', value: 3, emoji: '😔', color: 'bg-orange-400' },
  { label: 'Neutral', value: 5, emoji: '😐', color: 'bg-yellow-400' },
  { label: 'Happy', value: 7, emoji: '🙂', color: 'bg-green-400' },
  { label: 'Very Happy', value: 9, emoji: '😄', color: 'bg-blue-400' },
];

const DailyMoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const savedData = localStorage.getItem('moodTrackerData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      const existing = parsed.find((entry: any) => entry.date === today);
      if (existing) {
        setSelectedMood(existing.moodScore);
        setNotes(existing.notes);
        setSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = () => {
    if (!selectedMood) return;

    const newEntry = {
      date: today,
      moodScore: selectedMood,
      notes,
      tags: [] // Placeholder if you want to add emotion tags later
    };

    const existing = localStorage.getItem('moodTrackerData');
    const parsed = existing ? JSON.parse(existing) : [];

    const updated = [...parsed.filter((e: any) => e.date !== today), newEntry];
    localStorage.setItem('moodTrackerData', JSON.stringify(updated));
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow p-6 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Daily Mood Tracker</h2>

      <div className="flex justify-around items-center mb-4">
        {moods.map((mood) => (
          <button
            key={mood.value}
            className={`text-3xl p-2 rounded-full hover:scale-110 transition-all 
              ${selectedMood === mood.value ? mood.color + ' ring-4 ring-black' : ''}`}
            onClick={() => !submitted && setSelectedMood(mood.value)}
            disabled={submitted}
            title={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>

      <textarea
        className="w-full border p-2 rounded mb-4"
        rows={3}
        placeholder="Write your thoughts (optional)..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        disabled={submitted}
      />

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        onClick={handleSubmit}
        disabled={submitted || selectedMood === null}
      >
        {submitted ? 'Submitted ✅' : 'Save Mood'}
      </button>
      {submitted && (
  <button
    className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded"
    onClick={() => {
      // Remove today's entry and reset state
      const stored = localStorage.getItem('moodTrackerData');
      if (stored) {
        const parsed = JSON.parse(stored);
        const filtered = parsed.filter((entry: any) => entry.date !== today);
        localStorage.setItem('moodTrackerData', JSON.stringify(filtered));
      }
      setSelectedMood(null);
      setNotes('');
      setSubmitted(false);
    }}
  >
    Edit Today's Mood
  </button>
)}

    </div>
  );
};

export default DailyMoodTracker;
