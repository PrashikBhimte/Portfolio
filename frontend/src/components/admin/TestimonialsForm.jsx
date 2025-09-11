import React from 'react';

const TestimonialsForm = ({ testimonials, setTestimonials, handleTestimonialsSubmit }) => {
  const handleTestimonialChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index] = { ...updatedTestimonials[index], [name]: value };
    setTestimonials(updatedTestimonials);
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { quote: '', author: '' }]);
  };

  const removeTestimonial = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Edit Testimonials Section</h3>
      <form onSubmit={handleTestimonialsSubmit} className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="space-y-2">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Quote</label>
                <textarea
                  name="quote"
                  value={testimonial.quote}
                  onChange={(e) => handleTestimonialChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={testimonial.author}
                  onChange={(e) => handleTestimonialChange(index, e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <button type="button" onClick={() => removeTestimonial(index)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addTestimonial} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Add Testimonial
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default TestimonialsForm;
