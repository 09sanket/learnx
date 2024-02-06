import React, { useState } from 'react';

const AddExperienceForm = () => {
  const [notifyNetwork, setNotifyNetwork] = useState(false); // State for Notify Network toggle
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  // Function to toggle Notify Network
  const toggleNotifyNetwork = () => {
    setNotifyNetwork(!notifyNetwork);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const formData = {
      companyName,
      location,
      currentlyWorking,
      startDate,
      endDate: currentlyWorking ? 'Present' : endDate, // If currently working, set end date as 'Present'
      description
    };

    // Save form data to local storage
    localStorage.setItem('experienceData', JSON.stringify(formData));

    // Clear input fields
    clearForm();
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    // Clear input fields
    clearForm();
  };

  // Function to clear input fields
  const clearForm = () => {
    setCompanyName('');
    setLocation('');
    setCurrentlyWorking(false);
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Experience</h2>
      {/* Notify Network toggle */}
      <div className="mb-4 flex items-center">
        <span className="mr-2">Notify Network</span>
        <label className="switch">
          <input type="checkbox" checked={notifyNetwork} onChange={toggleNotifyNetwork} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Company Name */}
      <div className="mb-4">
        <label className="block mb-1">Company Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block mb-1">Location</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Currently Working */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={currentlyWorking}
          onChange={() => setCurrentlyWorking(!currentlyWorking)}
        />
        <span className="text-sm">I am Currently Working Here</span>
      </div>

      {/* Start Date */}
      <div className="mb-4">
        <label className="block mb-1">Start Date</label>
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {/* End Date */}
      {!currentlyWorking && (
        <div className="mb-4">
          <label className="block mb-1">End Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      )}

      {/* Description */}
      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-end">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2" onClick={handleCancel}>Cancel</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AddExperienceForm;