import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">ClassyStore</h2>
          <p className="mt-2 text-gray-400">
            Bringing you the finest collection of stylish fashion, curated for the new generation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn size={20} /></a>
          </div>

          <p className="mt-4 text-sm text-gray-400">Email: support@classystore.com</p>
          <p className="text-sm text-gray-400">Phone: +92 315 2414252</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ClassyStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
