import React from 'react';

const EducationForm = ({ education, newEducation, handleEducationChange, handleEducationUpdate, handleEducationDelete, handleNewEducationChange, handleNewEducationSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Manage Education</h3>
      
      <div className="mb-8 p-4 border border-gray-200 rounded-lg">
        <h4 className="text-xl font-bold text-gray-700 mb-4">Add New Education Entry</h4>
        <form onSubmit={handleNewEducationSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Institution</label>
            <input type="text" name="institution" value={newEducation?.institution || ''} onChange={handleNewEducationChange} placeholder="Institution" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Degree</label>
            <input type="text" name="degree" value={newEducation?.degree || ''} onChange={handleNewEducationChange} placeholder="Degree" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="text" name="date" value={newEducation?.date || ''} onChange={handleNewEducationChange} placeholder="Date (e.g., 2023-Present)" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea name="description" value={newEducation?.description || ''} onChange={handleNewEducationChange} placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Add Education</button>
        </form>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-700 mb-4">Existing Education Entries</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education && Array.isArray(education) && education.length > 0 ? (
            education.map(edu => (
              edu && (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                  <form onSubmit={(e) => handleEducationUpdate(e, edu.id)} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Institution</label>
                      <input type="text" name="institution" value={edu.institution || ''} onChange={(e) => handleEducationChange(e, edu.id)} placeholder="Institution" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Degree</label>
                      <input type="text" name="degree" value={edu.degree || ''} onChange={(e) => handleEducationChange(e, edu.id)} placeholder="Degree" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                      <input type="text" name="date" value={edu.date || ''} onChange={(e) => handleEducationChange(e, edu.id)} placeholder="Date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                      <textarea name="description" value={edu.description || ''} onChange={(e) => handleEducationChange(e, edu.id)} placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Update</button>
                      <button type="button" onClick={() => handleEducationDelete(edu.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Delete</button>
                    </div>
                  </form>
                </div>
              )
            ))
          ) : (
            <p className="text-gray-600">No education entries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationForm;