"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const [wishlistItemCount, setWishlistItemCount] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setCartItemCount(cart.length);
    setWishlistItemCount(wishlist.length);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <p className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-transform transform hover:scale-105">
            ClassyStore
          </p>
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" passHref>
            <p className="text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-105">
              Home
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-105">
              About Us
            </p>
          </Link>
          <Link href="/contact" passHref>
            <p className="text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-105">
              Contact
            </p>
          </Link>
          <Link href="/wishlist" passHref>
            <div className="relative">
              <p className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all transform hover:scale-105 flex items-center gap-2">
                <FaHeart className="text-red-500" />
                Wishlist
              </p>
              {wishlistItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 shadow-sm">
                  {wishlistItemCount}
                </span>
              )}
            </div>
          </Link>
          <Link href="/cart" passHref>
            <div className="relative">
              <p className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center gap-2">
                <FaShoppingCart className="text-yellow-400" />
                Cart
              </p>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 flex flex-col space-y-4">
            <Link href="/" passHref>
              <p className="text-gray-700 hover:text-indigo-600">Home</p>
            </Link>
            <Link href="/about" passHref>
              <p className="text-gray-700 hover:text-indigo-600">About Us</p>
            </Link>
            <Link href="/contact" passHref>
              <p className="text-gray-700 hover:text-indigo-600">Contact</p>
            </Link>
            <Link href="/wishlist" passHref>
              <div className="relative">
                <p className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  Wishlist
                </p>
                {wishlistItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 shadow-sm">
                    {wishlistItemCount}
                  </span>
                )}
              </div>
            </Link>
            <Link href="/cart" passHref>
              <div className="relative">
                <p className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-2">
                  <FaShoppingCart className="text-yellow-400" />
                  Cart
                </p>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 shadow-sm">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;