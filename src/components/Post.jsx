import React, { useState } from 'react';

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentsVisible, setCommentsVisible] = useState(false); // Define commentsVisible state

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    const newComments = [...comments, newComment];
    setComments(newComments);
    setNewComment('');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/301509805_627780922047672_6062793317280586582_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4uD6vP7NMVMAX995xZu&_nc_ht=scontent-bom2-2.xx&oh=00_AfC6Wv1RkEHk-BXz7_YWR8VWUVbgkYrOV9Zf8PlMFjJX-w&oe=65C6B666"
            alt="Profile"
          />
          <div>
            <p className="text-gray-800 font-semibold">John Doe</p>
            <p className="text-gray-600 text-sm">2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero eget mauris placerat vehicula nec vel ante. In quis pretium lacus. Integer dignissim ipsum a nisi ultricies, eget aliquam turpis tincidunt.
        </p>
        <img
          className="w-full mb-4"
          src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
          alt="Post"
        />
        <div className="flex items-center justify-between">
          <button
            className="text-gray-700 hover:text-gray-900 flex items-center"
            onClick={handleLike}
          >
            <svg
              className="w-6 h-6 mr-1 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {likes} Likes
          </button>
          <button
            className="text-gray-700 hover:text-gray-900 flex items-center"
            onClick={() => setCommentsVisible(!commentsVisible)}
          >
            <svg
              className="w-6 h-6 mr-1 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 21H3V3h9V1H3C1.9 1 1 1.9 1 3v18l4-4h10c.55 0 1 .45 1 1v3l5-5-5-5v3c0 .55-.45 1-1 1h-6l-3 3H21c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"/>
            </svg>
            {comments.length} Comments
          </button>
        </div>
      </div>
      
      {commentsVisible && (
        <div className="bg-gray-100 p-4">
          {comments.map((comment, index) => (
            <p key={index} className="text-gray-700">{comment}</p>
          ))}
          <div className="flex items-center mt-2">
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 w-full mr-2"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleComment}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
