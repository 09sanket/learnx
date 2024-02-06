// src/components/Blog.jsx
import React, { useState } from 'react';
import Post from './Post';
import About from './About';
import Experience from './Experience';
import Thankyou from './Thankyou';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('about'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      {/* Tab View */}
      <div className="mb-4 rounded-md shadow-md p-4"> {/* Added rounded-md and shadow-md to the Tab View */}
        {/* Tabs */}
        <div className="flex border-b mb-2 rounded-md shadow-md"> {/* Added rounded-md and shadow-md */}
          <Tab isActive={activeTab === 'about'} onClick={() => handleTabClick('about')}>
            About
          </Tab>
          <Tab isActive={activeTab === 'skills'} onClick={() => handleTabClick('skills')}>
            Experience
          </Tab>
          <Tab isActive={activeTab === 'posts'} onClick={() => handleTabClick('posts')}>
            Posts
          </Tab>
          <Tab isActive={activeTab === 'spaces'} onClick={() => handleTabClick('spaces')}>
            Thankyou
          </Tab>
        </div>

        {/* Content */}
        <div className="p-4 rounded-md shadow-md"> {/* Added rounded-md and shadow-md to the content */}
          {activeTab === 'about' && <div><About/></div>}
          {activeTab === 'skills' && <div><Experience /></div>}
          {activeTab === 'posts' && <div><Post /></div>}
          {activeTab === 'spaces' && <div><Thankyou /> </div>}
        </div>
      </div>
    </div>
  );
};

const Tab = ({ isActive, onClick, children }) => {
  return (
    <div
      className={`cursor-pointer px-4 py-2 border-b ${isActive ? 'border-blue-500' : 'border-transparent'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Blog;
