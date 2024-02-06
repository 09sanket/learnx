// src/components/Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-700 p-4">
      {/* Company Logo */}
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="https://bloggingms.in/wp-content/uploads/2024/02/cropped-BLOGGINGMS.IN-LOGO-1.png"
          alt="Company Logo"
          className="w-30 h-8 mr-2"
        />

      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-2 py-1 rounded mr-4"
        />

        {/* Notification Icon */}
        <span className="text-white mr-4">
          <FontAwesomeIcon icon={faBell} />
        </span>

        {/* Message Icon */}
        <span className="text-white mr-4">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>

        {/* Profile Icon */}
        <span className="text-white">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
