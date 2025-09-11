import React from 'react';

const ExperienceForm = ({ experiences, newExperience, handleExperienceChange, handleExperienceUpdate, handleExperienceDelete, handleNewExperienceChange, handleNewExperienceSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Manage Experience</h3>
      
      <div className="mb-8 p-4 border border-gray-200 rounded-lg">
        <h4 className="text-xl font-bold text-gray-700 mb-4">Add New Experience Entry</h4>
        <form onSubmit={handleNewExperienceSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input type="text" name="title" value={newExperience?.title || ''} onChange={handleNewExperienceChange} placeholder="Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
            <input type="text" name="company" value={newExperience?.company || ''} onChange={handleNewExperienceChange} placeholder="Company" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="text" name="date" value={newExperience?.date || ''} onChange={handleNewExperienceChange} placeholder="Date (e.g., 2023-Present)" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea name="description" value={newExperience?.description || ''} onChange={handleNewExperienceChange} placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Add Experience</button>
        </form>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-700 mb-4">Existing Experience Entries</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences && Array.isArray(experiences) && experiences.length > 0 ? (
            experiences.map(experience => (
              experience && (
                <div key={experience.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                  <form onSubmit={(e) => handleExperienceUpdate(e, experience.id)} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                      <input type="text" name="title" value={experience.title || ''} onChange={(e) => handleExperienceChange(e, experience.id)} placeholder="Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                      <input type="text" name="company" value={experience.company || ''} onChange={(e) => handleExperienceChange(e, experience.id)} placeholder="Company" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                      <input type="text" name="date" value={experience.date || ''} onChange={(e) => handleExperienceChange(e, experience.id)} placeholder="Date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                      <textarea name="description" value={experience.description || ''} onChange={(e) => handleExperienceChange(e, experience.id)} placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Update</button>
                      <button type="button" onClick={() => handleExperienceDelete(experience.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Delete</button>
                    </div>
                  </form>
                </div>
              )
            ))
          ) : (
            <p className="text-gray-600">No experience entries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;