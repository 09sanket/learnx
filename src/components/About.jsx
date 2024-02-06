import React, { useState } from 'react';
import Toggle from './Toggle';

const AboutPage = () => {
  const [editing, setEditing] = useState(false); // State for editing mode
  const [aboutContent, setAboutContent] = useState(localStorage.getItem('aboutContent') || '');

  // Function to toggle editing mode
  const toggleEditing = () => {
    setEditing(!editing);
  };

  // Function to handle deletion of about content
  const handleDelete = () => {
    setAboutContent('');
  };

  // Function to handle saving of about content
  const handleSave = () => {
    localStorage.setItem('aboutContent', aboutContent);
    setEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-1 bg-gray-100 border border-gray-300 rounded">
      {/* Custom Toggle Button for Notify Network */}
      <div className="mb-2 flex items-center">
        <span className="mr-4">Notify Network</span>
        <Toggle /> {/* Integrating the CustomToggleButton component */}
      </div>

      <h4 className="text-2xl font-bold mb-4">About Page</h4>
      <div className="mb-4">
        {editing ? (
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={aboutContent}
            onChange={(e) => setAboutContent(e.target.value)}
          />
        ) : (
          <p className="text-gray-700">{aboutContent}</p>
        )}
      </div>
      <div className="flex justify-between">
        {!editing && (
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>
            Delete
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={editing ? handleSave : toggleEditing}
        >
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* Figma Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {/* Figma Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Figma Card 1</h2>
          <p className="text-gray-700">This is the content of Figma Card 1.</p>
        </div>
        {/* Figma Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Figma Card 2</h2>
          <p className="text-gray-700">This is the content of Figma Card 2.</p>
        </div>
        {/* Figma Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Figma Card 3</h2>
          <p className="text-gray-700">This is the content of Figma Card 3.</p>
        </div>
        {/* Figma Card 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Figma Card 4</h2>
          <p className="text-gray-700">This is the content of Figma Card 4.</p>
        </div>
        {/* Figma Card 5 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Figma Card 5</h2>
          <p className="text-gray-700">This is the content of Figma Card 5.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
