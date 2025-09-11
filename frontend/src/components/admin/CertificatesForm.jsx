import React from 'react';

const CertificatesForm = ({ certificates, newCertificate, handleCertificateChange, handleCertificateUpdate, handleCertificateDelete, handleNewCertificateChange, handleNewCertificateSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Manage Certificates</h3>
      
      <div className="mb-8 p-4 border border-gray-200 rounded-lg">
        <h4 className="text-xl font-bold text-gray-700 mb-4">Add New Certificate Entry</h4>
        <form onSubmit={handleNewCertificateSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input type="text" name="title" value={newCertificate?.title || ''} onChange={handleNewCertificateChange} placeholder="Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Issuer</label>
            <input type="text" name="issuer" value={newCertificate?.issuer || ''} onChange={handleNewCertificateChange} placeholder="Issuer" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="text" name="date" value={newCertificate?.date || ''} onChange={handleNewCertificateChange} placeholder="Date (e.g., 2023-Present)" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
            <input type="text" name="link" value={newCertificate?.link || ''} onChange={handleNewCertificateChange} placeholder="Link" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Add Certificate</button>
        </form>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-700 mb-4">Existing Certificate Entries</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates && Array.isArray(certificates) && certificates.length > 0 ? (
            certificates.map(cert => (
              cert && (
                <div key={cert.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                  <form onSubmit={(e) => handleCertificateUpdate(e, cert.id)} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                      <input type="text" name="title" value={cert.title || ''} onChange={(e) => handleCertificateChange(e, cert.id)} placeholder="Title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Issuer</label>
                      <input type="text" name="issuer" value={cert.issuer || ''} onChange={(e) => handleCertificateChange(e, cert.id)} placeholder="Issuer" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                      <input type="text" name="date" value={cert.date || ''} onChange={(e) => handleCertificateChange(e, cert.id)} placeholder="Date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
                      <input type="text" name="link" value={cert.link || ''} onChange={(e) => handleCertificateChange(e, cert.id)} placeholder="Link" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Update</button>
                      <button type="button" onClick={() => handleCertificateDelete(cert.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Delete</button>
                    </div>
                  </form>
                </div>
              )
            ))
          ) : (
            <p className="text-gray-600">No certificate entries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesForm;