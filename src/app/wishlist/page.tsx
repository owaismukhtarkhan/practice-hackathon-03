"use client"; // Mark this as a Client Component

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const WishlistPage = () => {
  const router = useRouter();
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
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-2xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">❤️ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
      ) : (
        <>
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between p-4 border-b shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-md shadow-sm"
                />
              )}

              {/* Product Name & Price */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Back Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition-all"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;