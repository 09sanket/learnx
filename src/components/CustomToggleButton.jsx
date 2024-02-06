import React, { useState } from 'react';

const CustomToggleButton = () => {
  const [isActive, setIsActive] = useState(false); // State for toggle button

  // Function to handle toggle button click
  const toggleButton = () => {
    setIsActive(!isActive); // Toggle the state
  };

  return (
    <div
      className={`w-12 h-6 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer ${
        isActive ? 'bg-green-500' : ''
      }`}
      onClick={toggleButton}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
          isActive ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  );
};

export default CustomToggleButton;