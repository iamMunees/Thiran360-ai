import React, { useState } from 'react';

const LikeUnlike = () => {
  const [likes, setLikes] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleLike = () => setLikes(likes + 1);
  const handleUnlike = () => setLikes(likes > 0 ? likes - 1 : 0);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  
  const bgClass = darkMode ? 'bg-zinc-900' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300';

  const likeBtnClass = darkMode
    ? 'bg-lime-500 hover:bg-lime-600 text-white'
    : 'bg-green-500 hover:bg-green-600 text-white';

  const unlikeBtnClass = darkMode
    ? 'bg-pink-500 hover:bg-pink-600 text-white'
    : 'bg-red-500 hover:bg-red-600 text-white';

  const toggleBtnClass = darkMode
    ? 'border-gray-300 hover:bg-gray-700 text-gray-100'
    : 'border-gray-500 hover:bg-gray-200 text-gray-900';

  return (
    <div className={`transition-colors duration-500 min-h-screen flex items-center justify-center ${bgClass}`}>
      <div className={`p-8 rounded-xl shadow-lg border ${borderClass} max-w-sm w-full text-center space-y-6 ${textClass}`}>
        <h2 className="text-3xl font-bold">Like / Unlike</h2>
        <p className="text-4xl font-semibold">{likes} 👍</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLike}
            className={`px-5 py-2 rounded-full font-medium transition ${likeBtnClass}`}
          >
            Like
          </button>
          <button
            onClick={handleUnlike}
            className={`px-5 py-2 rounded-full font-medium transition ${unlikeBtnClass}`}
          >
            Unlike
          </button>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`mt-4 px-4 py-2 rounded-full border text-sm transition ${toggleBtnClass}`}
        >
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
};

export default LikeUnlike;
