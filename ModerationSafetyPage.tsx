// src/pages/community/ModerationSafetyPage.tsx

import ModerationSafety from '../../components/community/ModerationSafety';

const examplePosts = [
  {
    id: '1',
    title: 'Hello Community!',
    text: 'I love this platform but sometimes I see badword1 here...',
    author: 'User123',
    createdAt: '2025-05-27 12:00',
  },
  {
    id: '2',
    text: 'Feeling great today! No hate here.',
    author: 'Anonymous',
    createdAt: '2025-05-27 13:00',
  },
];

const handleReport = (postId: string, reason: string) => {
  console.log(`Reported post ${postId} for reason: ${reason}`);
  // Here you would call your backend API or moderation service
};


const ModerationSafetyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <ModerationSafety posts={examplePosts} onReport={handleReport} />
    </div>
  );
};

export default ModerationSafetyPage;
