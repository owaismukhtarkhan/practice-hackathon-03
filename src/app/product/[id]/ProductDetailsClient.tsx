"use client"; // Mark this as a Client Component

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetailsClient: React.FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setCart(existingCart);
    setWishlist(existingWishlist);
  }, []);

  // Check if the product is in the wishlist
  const isInWishlist = wishlist.some((item) => item._id === product._id);

  // Add to wishlist
  const toggleWishlist = () => {
    let updatedWishlist;
    if (isInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Add to cart with selected color and size
  const addToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size.");
      return;
    }

    const productWithSelection = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const updatedCart = [...cart, productWithSelection];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setShowModal(false); // Close the modal
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Product Image */}
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        )}

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Price & Discount */}
          <div className="flex items-center mt-4">
            <p className="text-xl font-semibold text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            {product.discountPercent != null && product.discountPercent > 0 && (
              <span className="ml-3 text-red-500 bg-red-100 px-2 py-1 rounded-md">
                -{product.discountPercent}%
              </span>
            )}
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Available Colors:</p>
              <div className="flex space-x-2 mt-1">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`block w-6 h-6 rounded-full border ${
                      selectedColor === color ? "ring-2 ring-indigo-600" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Available Sizes:</p>
              <div className="flex space-x-2 mt-1">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 bg-gray-200 rounded-md text-sm ${
                      selectedSize === size ? "bg-indigo-600 text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart & Wishlist Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900 transition flex items-center gap-2"
            >
              {isInWishlist ? (
                <>
                  <FaHeart className="text-red-500" />
                  Remove from Wishlist
                </>
              ) : (
                <>
                  <FaRegHeart />
                  Add to Wishlist
                </>
              )}
            </button>
          </div>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mt-4 bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Back
          </button>
        </div>
      </div>

      {/* Modal for Color and Size Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Select Color and Size</h2>
            <div className="space-y-4">
              {/* Colors */}
              <div>
                <p className="text-sm font-medium text-gray-500">Select Color:</p>
                <div className="flex space-x-2 mt-1">
                  {product.colors?.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`block w-6 h-6 rounded-full border ${
                        selectedColor === color ? "ring-2 ring-indigo-600" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <p className="text-sm font-medium text-gray-500">Select Size:</p>
                <div className="flex space-x-2 mt-1">
                  {product.sizes?.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 bg-gray-200 rounded-md text-sm ${
                        selectedSize === size ? "bg-indigo-600 text-white" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm and Cancel Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={addToCart}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsClient;