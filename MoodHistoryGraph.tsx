import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

type MoodEntry = {
  date: string;          // "2025-05-27"
  moodScore: number;     // e.g., 1 to 10
  tags: string[];        // ["anxious", "hopeful"]
};

const MoodHistoryGraph: React.FC = () => {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);
  const [filter, setFilter] = useState<'week' | 'month'>('month');

  useEffect(() => {
    const raw = localStorage.getItem('moodTrackerData');
    if (raw) {
      const parsed: MoodEntry[] = JSON.parse(raw);
      const sorted = parsed.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setMoodData(sorted);
    }
  }, []);

  const getFilteredData = () => {
    const cutoff = new Date();
    if (filter === 'week') {
      cutoff.setDate(cutoff.getDate() - 7);
    } else {
      cutoff.setDate(cutoff.getDate() - 30);
    }

    return moodData.filter(entry => new Date(entry.date) >= cutoff);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">📊 Mood History</h2>
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'week' | 'month')}
        >
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
        </select>
      </div>

      {moodData.length === 0 ? (
        <p className="text-gray-500 italic">No mood data yet. Start tracking!</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={getFilteredData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} />
            <Tooltip content={({ payload }) => {
              if (!payload || !payload.length) return null;
              const entry = payload[0].payload;
              return (
                <div className="bg-white p-2 border rounded shadow">
                  <p><strong>Date:</strong> {entry.date}</p>
                  <p><strong>Mood:</strong> {entry.moodScore}</p>
                  <p><strong>Tags:</strong> {entry.tags.join(', ')}</p>
                </div>
              );
            }} />
            <Line type="monotone" dataKey="moodScore" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default MoodHistoryGraph;
