// src/components/Profile.jsx
import React, { useState } from 'react';
import DonutChart from './DonutChart'; // Import the DonutChart component
import CustomToggleButton from './CustomToggleButton'; // Import the CustomToggleButton component
import ProgressBar from './Progress_bar'; // Import the ProgressBar component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCirclePlus, faLink, faPaperclip, faComment } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons

const testData = [
  { bgcolor: "#6a1b9a", completed: 70 },
  
];

const Profile = () => {
  const [profileVisible, setProfileVisible] = useState(true);

  const handleToggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <div className="relative mb-4 overflow-hidden max-w-sm rounded-md shadow-md">
      {/* Circular Profile Image */}
      <div className="bg-white rounded-full w-24 h-24 border-4 border-white overflow-hidden ml-4 mt-2">
        <img src="https://placekitten.com/200/200" alt="Profile" className="h-full object-cover" />
      </div>

      {/* User Information */}
      <div className="text-black mt-8 px-4">
        {/* Adjusted margin-top and added padding */}
        <h2 className="text-2xl font-bold mb-2">John Doe</h2>
        <p className="text-sm mb-1">Software Developer</p>
        
        {/* Followers */}
        <div className="flex items-center mb-2">
          <span className="mr-1">Followers:</span>
          <span>{profileVisible ? '200' : '100'}</span>
        </div>

        {/* Toggle for Profile Visibility using CustomToggleButton */}
        <div className="flex items-center mb-2">
          <span className="mr-2">Make my profile visible to employee:</span>
          <CustomToggleButton checked={profileVisible} onChange={handleToggleProfile} />
        </div>

        <p className="light-grey-text">Lorem ipsum dolor sit amet consectetur adipisiclat adipisci cum odit similique deleniti. Atque!</p>

        {/* Online Links Section */}
        <div className="flex items-center mb-2">
          <span className="mr-2">Online Links:</span>
          <div className="flex items-center space-x-2">
            <div className="rounded-md p-3 ">
              <FontAwesomeIcon icon={faCirclePlus} />
            </div>
          
          </div>
        </div>

      

{/* Icons Section */}
<div className="flex items-center justify-center mb-2">
  <div className="flex items-center space-x-2">
    <div className="rounded-md bg-gray-200 p-3 shadow-md mr-2">
      <FontAwesomeIcon icon={faComment} />
    </div>
    <div className="rounded-md bg-gray-200 p-3 shadow-md mr-2">
      <FontAwesomeIcon icon={faLink} />
    </div>
    <div className="rounded-md bg-gray-200 p-3 shadow-md">
      <FontAwesomeIcon icon={faPaperclip} />
    </div>
    {/* Add more icons here if needed */}
  </div>
</div>




        <p className="light-grey-text">Lorem ipsum dolor sit amet consectetur adipisiclat adipisci cum odit similique deleniti. Atque!</p>

        {/* Donut Chart */}
        {profileVisible && (
          <div className="mt-4">
            <div className="rounded-md bg-gray-100 p-4 shadow-lg">
              <DonutChart />
            </div>
         
          </div>
          
        )}



{/* Progress Bar Section */}
<div className="mt-3">
  <h3 className="text-xl font-bold ">Progress Bar Title</h3>
  {testData.map((item, idx) => (
    <ProgressBar
      key={idx}
      bgcolor={item.bgcolor}
      completed={item.completed}
      style={{ width: '20%', height: '10px' }} // Adjust width and height as needed
    />
  ))}
  <p className="text text-center -mt-3">Hurray you are in Top 27%</p>
</div>




      </div>
    </div>
  );
};

export default Profile;
