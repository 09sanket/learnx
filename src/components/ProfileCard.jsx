import React, { useState } from 'react';

const ProfileCard = ({ profileName }) => {
  const [visibleProfiles, setVisibleProfiles] = useState(5);

  // Function to generate random subscribers
  const generateRandomSubscribers = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  // Function to load more profiles
  const loadMoreProfiles = () => {
    setVisibleProfiles((prevCount) => prevCount + 5);
  };

  return (
    <div className="container mx-auto px-4 py-1">
      <h1 className="text-2xl font-bold mb-4 text-white font-ubuntu">Communities feed</h1>
      {/* Profile Section */}
      {[...Array(visibleProfiles)].map((_, index) => (
        <div key={index} className="bg-white p-2 rounded-lg shadow-md mb-2 flex items-center">
          {/* Profile Image */}
          <div className="bg-white rounded-full w-16 h-16 border-4 border-white overflow-hidden mr-2">
            <img
              src="https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/301509805_627780922047672_6062793317280586582_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4uD6vP7NMVMAX995xZu&_nc_ht=scontent-bom2-2.xx&oh=00_AfC6Wv1RkEHk-BXz7_YWR8VWUVbgkYrOV9Zf8PlMFjJX-w&oe=65C6B666"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Profile Information */}
          <div>
            <p className="text-sm font-semibold">Profile {profileName}</p>
            <p className="text-xs text-gray-700">{generateRandomSubscribers()} subscribers</p>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      {visibleProfiles < 10 && (
        <button className="bg-blue-500 text-white py-1 px-2 rounded-md mt-2" onClick={loadMoreProfiles}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
