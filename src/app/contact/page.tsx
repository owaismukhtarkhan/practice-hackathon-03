import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Have questions or need assistance? Feel free to reach out to us!
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> support@classystore.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> +92 315 2414252
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> 123 Fashion Street, Style City, PK
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-transform transform hover:scale-110"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-transform transform hover:scale-110"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-transform transform hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-transform transform hover:scale-110"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Location
              </h2>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <p className="text-gray-600">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;