
import React, { useState } from 'react';
import clsx from 'clsx';

const predefinedTags = [
  'anxious', 'grateful', 'tired', 'angry',
  'happy', 'overwhelmed', 'motivated', 'sad',
  'calm', 'stressed', 'confident', 'lonely'
];

type EmotionTagsProps = {
  onChange?: (selected: string[]) => void;
};

const EmotionTags: React.FC<EmotionTagsProps> = ({ onChange }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updated);
    if (onChange) onChange(updated);
    console.log("Selected tags:", updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">How are you feeling today?</h2>

      <div className="flex flex-wrap gap-3">
        {predefinedTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={clsx(
              "px-4 py-2 rounded-full border text-sm font-medium transition focus:outline-none",
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
            )}
          >
            {tag}
          </button>          
        ))}
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-1">Selected Emotions:</h3>
        {selectedTags.length > 0 ? (
          <ul className="list-disc list-inside text-gray-800">
            {selectedTags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No emotions selected yet.</p>
        )}
      </div>
    </div>
    
  );
};

export default EmotionTags;