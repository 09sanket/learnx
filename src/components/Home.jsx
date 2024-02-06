// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Blog from './Blog';
import HeaderBackground from './HeaderBackground';

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 p-4">
          {/* HeaderBackground */}
          <HeaderBackground />

          <div className="flex flex-col md:flex-row">
            {/* Profile */}
            <div className="flex-1 md:pr-2 mb-4 md:mb-0">
              <Profile />
            </div>

            {/* Blog */}
            <div className="flex-1 md:pl-2 -ml-15">
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
