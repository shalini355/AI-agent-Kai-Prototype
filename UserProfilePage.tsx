
import UserProfile from '../../components/community/UserProfile';

const mockPosts = [
  { id: '1', title: 'How I manage anxiety', createdAt: '2025-05-20' },
  { id: '2', title: 'Tips for staying grounded', createdAt: '2025-05-21' },
];

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <UserProfile
        username="HopefulSoul"
        joinDate="March 15, 2025"
        badges={['Helpful Contributor', 'First Post']}
        posts={mockPosts}
        totalReactions={42}
      />
    </div>
  );
};

export default UserProfilePage;
