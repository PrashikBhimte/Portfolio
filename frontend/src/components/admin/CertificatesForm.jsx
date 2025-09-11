import React from 'react';

const CertificatesForm = ({ certificates, setCertificates, handleCertificatesSubmit }) => {
  const handleCertificateChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = { ...updatedCertificates[index], [name]: value };
    setCertificates(updatedCertificates);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { title: '', issuer: '', date: '', link: '' }]);
  };

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Edit Certificates Section</h3>
      <form onSubmit={handleCertificatesSubmit} className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="space-y-2">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={cert.title}
                  onChange={(e) => handleCertificateChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Issuer</label>
                <input
                  type="text"
                  name="issuer"
                  value={cert.issuer}
                  onChange={(e) => handleCertificateChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                <input
                  type="text"
                  name="date"
                  value={cert.date}
                  onChange={(e) => handleCertificateChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
                <input
                  type="text"
                  name="link"
                  value={cert.link}
                  onChange={(e) => handleCertificateChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <button type="button" onClick={() => removeCertificate(index)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addCertificate} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Add Certificate
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default CertificatesForm;
