// import { useFavoritesStore } from "../../store/useFavoritesStore";

// const UserFavorites = () => {
//   const favorites = useFavoritesStore((state) => state.favorites);
//   const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-pink-50 to-purple-100">
//       <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
//         ❤️ Your Favorite Tracks
//       </h1>

//       {favorites.length === 0 ? (
//         <p className="text-center text-gray-600">You haven't liked any tracks yet.</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {favorites.map((track) => (
//             <div
//               key={track.id}
//               className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center"
//             >
//               <h2 className="text-lg font-semibold text-center mb-2">{track.title}</h2>
//               {track.url ? (
//                 <iframe
//                   src={track.url}
//                   width="100%"
//                   height="80"
//                   allow="encrypted-media"
//                   className="rounded-xl mb-3"
//                   title={track.title}
//                 ></iframe>
//               ) : (
//                 <p className="text-gray-500 text-sm">No preview available</p>
//               )}
//               <button
//                 onClick={() => removeFavorite(track.id)}
//                 className="mt-2 px-4 py-1 text-sm bg-red-100 text-red-600 rounded-full hover:bg-red-200"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserFavorites;

import { useFavoritesStore } from "../../store/useFavoritesStore";

const UserFavorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites.length === 0) {
    return <p className="text-center mt-8 text-gray-500">No favorites yet.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-6">
      {favorites.map((fav) => (
        <div
          key={fav.id}
          className="bg-blue-50 p-4 rounded-xl shadow-sm flex flex-col items-center"
        >
          <iframe
            src={`https://open.spotify.com/embed/track/${fav.trackId}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default UserFavorites;
