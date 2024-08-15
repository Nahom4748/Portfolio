import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./contactme.css"; // Ensure this file contains the necessary styles

function ContactMe() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="contact-section bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-sm">
        <h2 className="text-2xl text-center text-orange-500 mb-4">
          Contact Me
        </h2>
        <div className="flex flex-col space-y-4">
          {/* Contact Information */}
          <div className="contact-info text-white text-center">
            <div className="flex items-center justify-center mb-2">
              <FaMapMarkerAlt className="text-yellow-500 text-xl mr-2" />
              <span className="text-sm">Addis Ababa ,Ethiopia</span>
            </div>
            <div className="flex items-center justify-center mb-2">
              <FaPhone className="text-yellow-500 text-xl mr-2" />
              <span className="text-sm">+251-922174894</span>
            </div>
            <div className="flex items-center justify-center mb-2">
              <FaEnvelope className="text-yellow-500 text-xl mr-2" />
              <span className="text-sm">Nahom4748@gmail.com</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-white mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-white mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:border-yellow-500"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
