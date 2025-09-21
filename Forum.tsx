import { useState } from 'react';
import type { ForumPost } from './types';
import PostCard from './PostCard';
import { v4 as uuid } from 'uuid';

const categories = ['Anxiety', 'Depression', 'Coping', 'Success Stories'];
const allTags = ['support', 'self-care', 'inspiration', 'struggle'];

export default function Forum() {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: categories[0],
    tags: [] as string[],
  });
  const [error, setError] = useState<string | null>(null);

  const handleCreatePost = () => {
    if (!form.title.trim() || !form.content.trim()) {
      setError("Please fill in both title and content.");
      return;
    }

    const newPost: ForumPost = {
      id: uuid(),
      title: form.title.trim(),
      content: form.content.trim(),
      category: form.category,
      tags: form.tags,
      replies: [],
      upvotes: 0,
      createdAt: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
    setForm({ title: '', content: '', category: categories[0], tags: [] });
    setError(null);
  };

  const handleReply = (postId: string, reply: string) => {
    setPosts(prev =>
      prev.map(p =>
        p.id === postId
          ? {
              ...p,
              replies: [...p.replies, { id: uuid(), content: reply, createdAt: new Date().toISOString() }],
            }
          : p
      )
    );
  };

  const handleUpvote = (postId: string) => {
    setPosts(prev =>
      prev.map(p =>
        p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p
      )
    );
  };

  const toggleTag = (tag: string) => {
    setForm(prev =>
      prev.tags.includes(tag)
        ? { ...prev, tags: prev.tags.filter(t => t !== tag) }
        : { ...prev, tags: [...prev.tags, tag] }
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 p-4">
      {/* Post Creation */}
      <div className="bg-white shadow p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🧵 Start a Discussion</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <textarea
          placeholder="Share your thoughts..."
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
          className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          rows={4}
        />
        <div className="mb-3">
          <label className="font-medium mr-2">Category:</label>
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="p-2 border rounded"
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                form.tags.includes(tag)
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-indigo-100'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
        <button
          onClick={handleCreatePost}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded transition"
        >
          Post
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 italic">No posts yet. Be the first to start a conversation!</p>
        ) : (
          posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onReply={handleReply}
              onUpvote={handleUpvote}
            />
          ))
        )}
      </div>
    </div>
  );
}

// import { useEffect, useState } from 'react';
// import { collection, addDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../lib/firebase';
// import PostCard from './PostCard';
// import type { ForumPost } from './types';
// import { Filter } from 'bad-words';
// import { Timestamp } from 'firebase/firestore';


// const categories = ['Anxiety', 'Depression', 'Coping', 'Success Stories'];
// const allTags = ['support', 'self-care', 'inspiration', 'struggle'];

// const filter = new Filter();

// export default function Forum() {
//   const [posts, setPosts] = useState<ForumPost[]>([]);
//   const [form, setForm] = useState({
//     title: '',
//     content: '',
//     category: categories[0],
//     tags: [] as string[],
//   });

//   // Real-time listener for Firestore posts
//   useEffect(() => {
//     const unsub = onSnapshot(collection(db, 'forumPosts'), (snapshot) => {
//       const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ForumPost[];
//       // setPosts(data.sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0)));
    
// setPosts(
//   data.sort((a, b) => {
//     const aTime =
//       a.createdAt && typeof a.createdAt === 'object' && 'seconds' in a.createdAt
//         ? (a.createdAt as Timestamp).seconds
//         : 0;

//     const bTime =
//       b.createdAt && typeof b.createdAt === 'object' && 'seconds' in b.createdAt
//         ? (b.createdAt as Timestamp).seconds
//         : 0;

//     return bTime - aTime;
//   })
// );


//     });

//     return () => unsub();
//   }, []);

//   const handleCreatePost = async () => {
//     if (!form.title || !form.content) return;

//     const cleanTitle = filter.clean(form.title);
//     const cleanContent = filter.clean(form.content);

//     await addDoc(collection(db, 'forumPosts'), {
//       title: cleanTitle,
//       content: cleanContent,
//       category: form.category,
//       tags: form.tags,
//       replies: [],
//       upvotes: 0,
//       createdAt: serverTimestamp(),
//       flagged: false, // used for moderation later
//     });

//     setForm({ title: '', content: '', category: categories[0], tags: [] });
//   };

//   const toggleTag = (tag: string) => {
//     setForm(prev =>
//       prev.tags.includes(tag)
//         ? { ...prev, tags: prev.tags.filter(t => t !== tag) }
//         : { ...prev, tags: [...prev.tags, tag] }
//     );
//   };

//   // Optional: replies and upvotes will be handled inside PostCard for now

//   return (
//     <div className="max-w-3xl mx-auto space-y-8">
//       {/* Post Creation */}
//       <div className="bg-white shadow p-6 rounded-xl border border-gray-200">
//         <h2 className="text-2xl font-semibold mb-4">🧵 Start a Discussion</h2>
//         <input
//           placeholder="Title"
//           value={form.title}
//           onChange={e => setForm({ ...form, title: e.target.value })}
//           className="w-full p-2 border mb-2 rounded"
//         />
//         <textarea
//           placeholder="Share your thoughts..."
//           value={form.content}
//           onChange={e => setForm({ ...form, content: e.target.value })}
//           className="w-full p-2 border mb-2 rounded"
//         />
//         <div className="mb-2">
//           <label className="font-medium">Category:</label>
//           <select
//             value={form.category}
//             onChange={e => setForm({ ...form, category: e.target.value })}
//             className="ml-2 p-1 border rounded"
//           >
//             {categories.map(cat => (
//               <option key={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4 flex gap-2 flex-wrap">
//           {allTags.map(tag => (
//             <button
//               key={tag}
//               onClick={() => toggleTag(tag)}
//               className={`px-2 py-1 rounded-full text-sm ${
//                 form.tags.includes(tag)
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-gray-200 text-gray-800'
//               }`}
//             >
//               #{tag}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={handleCreatePost}
//           className="bg-indigo-600 text-white px-4 py-2 rounded"
//         >
//           Post
//         </button>
//       </div>

//       {/* Posts */}
//       <div className="space-y-6">
//         {posts.length === 0 ? (
//           <p className="text-center text-gray-500">No posts yet. Start a discussion!</p>
//         ) : (
//           posts.map(post => (
//             <PostCard
//               key={post.id}
//               post={post}
//               onReply={() => {}} // Replies are not persisted yet
//               onUpvote={() => {}} // Upvotes are not persisted yet
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
