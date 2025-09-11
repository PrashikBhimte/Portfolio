import React from 'react';

const TestimonialsForm = ({ testimonials, newTestimonial, handleTestimonialChange, handleTestimonialUpdate, handleTestimonialDelete, handleNewTestimonialChange, handleNewTestimonialSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Manage Testimonials</h3>
      
      <div className="mb-8 p-4 border border-gray-200 rounded-lg">
        <h4 className="text-xl font-bold text-gray-700 mb-4">Add New Testimonial Entry</h4>
        <form onSubmit={handleNewTestimonialSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Quote</label>
            <textarea name="quote" value={newTestimonial?.quote || ''} onChange={handleNewTestimonialChange} placeholder="Quote" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
            <input type="text" name="author" value={newTestimonial?.author || ''} onChange={handleNewTestimonialChange} placeholder="Author" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Add Testimonial</button>
        </form>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-700 mb-4">Existing Testimonial Entries</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials && Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map(testimonial => (
              testimonial && (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                  <form onSubmit={(e) => handleTestimonialUpdate(e, testimonial.id)} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Quote</label>
                      <textarea name="quote" value={testimonial.quote || ''} onChange={(e) => handleTestimonialChange(e, testimonial.id)} placeholder="Quote" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
                      <input type="text" name="author" value={testimonial.author || ''} onChange={(e) => handleTestimonialChange(e, testimonial.id)} placeholder="Author" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Update</button>
                      <button type="button" onClick={() => handleTestimonialDelete(testimonial.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Delete</button>
                    </div>
                  </form>
                </div>
              )
            ))
          ) : (
            <p className="text-gray-600">No testimonial entries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsForm;