// src/components/Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartBar,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
  faBandage,
  faPersonRifle,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import ProfileCard from './ProfileCard'; // Import the ProfileCard component

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-start bg-gray-800 p-4 h-full">
      <SidebarItem icon={faHome} label="Home" />
      <SidebarItem icon={faBandage} label="Job Invites" />
      <SidebarItem icon={faChartBar} label="Analytics" />
      <SidebarItem icon={faPersonRifle} label="Profile" />
      <SidebarItem icon={faDiceSix} label="Explore" />
      
       {/* ProfileCard as another SidebarItem  */}
      <div className="mt-2">
        <ProfileCard />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center text-white mb-2 cursor-pointer">
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
