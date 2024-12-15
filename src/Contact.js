import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display success message locally
    setSuccessMessage("Thank you for reaching out! I'll get back to you soon.");

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-black text-white py-12 px-6 md:px-20 lg:px-40">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-400">Contact Me</h2>
        <p className="text-lg mt-4">
          Feel free to get in touch using the form below or through the provided contact details.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        {/* Contact Details */}
        <div className="lg:w-1/3 space-y-6">
          <h3 className="text-2xl font-semibold text-orange-400">Contact Information</h3>
          <p>
            <strong>Email:</strong> <span className="text-gray-300">iamaliffkamboh@gmail.com</span>
          </p>
          <p>
            <strong>Phone:</strong> <span className="text-gray-300">+92 304 6433370</span>
          </p>
          <p>
            <strong>Location:</strong> <span className="text-gray-300">Shahdara, Lahore, Pakistan</span>
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-orange-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-orange-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-orange-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-bold py-3 rounded-lg hover:bg-orange-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success Message */}
      {successMessage && (
        <p className="text-center mt-8 text-green-400 text-lg font-medium">{successMessage}</p>
      )}
    </section>
  );
};

export default Contact;
