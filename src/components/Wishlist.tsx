"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">❤️ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 p-6"
            >
              <Link href={`/product/${product._id}`} passHref>
                <p>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  )}
                  <h2 className="text-xl font-semibold mt-4 text-gray-900 hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h2>
                </p>
              </Link>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold text-gray-800 mt-2">
                Rs.{product.price.toFixed(2)}
              </p>
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all mt-4"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;