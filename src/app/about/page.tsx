import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          About Us
        </h1>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to ClassyStore
          </h2>
          <p className="text-gray-600">
            At ClassyStore, we believe in bringing you the finest collection of
            stylish fashion, curated for the new generation. Our mission is to
            provide high-quality, trendy, and affordable clothing that makes
            you feel confident and classy.
          </p>
          <p className="text-gray-600">
            Founded in 2023, ClassyStore has quickly become a trusted name in
            the fashion industry. We are passionate about delivering an
            exceptional shopping experience, from browsing our collections to
            receiving your order at your doorstep.
          </p>
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

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-2xl p-6 text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300">
              <div className="h-48 w-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl font-bold text-gray-600">OMK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Owais Mukhtar Khan
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-2xl p-6 text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300">
              <div className="h-48 w-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl font-bold text-gray-600">Asif</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Asif
              </h3>
              <p className="text-gray-600">Head of Design</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-2xl p-6 text-center transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300">
              <div className="h-48 w-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl font-bold text-gray-600">Hamza</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Hamza
              </h3>
              <p className="text-gray-600">Marketing Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;