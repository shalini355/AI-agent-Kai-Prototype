import React, { useState } from 'react';
import type { SupportThought } from '../../types/support';

const emotionOptions = ['😄', '😟', '😔', '😠', '😢'];

const SupportThoughts: React.FC = () => {
  const [thoughts, setThoughts] = useState<SupportThought[]>([]);
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState('');
  const [author, setAuthor] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newThought: SupportThought = {
      id: Date.now().toString(),
      text,
      emotion,
      author: isAnonymous ? 'Anonymous' : author || 'Anonymous',
      createdAt: new Date().toLocaleString(),
    };

    setThoughts([newThought, ...thoughts]);
    setText('');
    setEmotion('');
    setAuthor('');
    setIsAnonymous(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🙋 Share a Thought</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded shadow"
      >
        <label className="block">
          <span className="text-sm text-gray-600">I’m feeling…</span>
          <textarea
            placeholder="e.g. overwhelmed, happy, anxious, etc."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={3}
            className="w-full mt-1 border p-2 rounded"
          />
        </label>

        <div className="flex items-center gap-3 flex-wrap">
          {emotionOptions.map((emo) => (
            <button
              key={emo}
              type="button"
              onClick={() => setEmotion(emo)}
              className={`text-2xl transition transform hover:scale-110 ${
                emotion === emo ? 'ring-2 ring-blue-500 rounded' : ''
              }`}
            >
              {emo}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-2 rounded w-1/2"
            disabled={isAnonymous}
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            <span>Post anonymously</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Share Thought
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">💬 Shared Thoughts</h3>
        {thoughts.length === 0 ? (
          <p className="text-gray-500">No thoughts shared yet.</p>
        ) : (
          <ul className="space-y-4">
            {thoughts.map((thought) => (
              <li
                key={thought.id}
                className="bg-white p-4 rounded shadow border-l-4 border-blue-400"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{thought.emotion}</span>
                  <span className="text-sm text-gray-500">{thought.createdAt}</span>
                </div>
                <p className="mt-2">{thought.text}</p>
                <p className="text-sm text-gray-600 mt-2">- {thought.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SupportThoughts;
