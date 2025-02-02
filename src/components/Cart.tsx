"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Redirect to checkout page
  const handleCheckout = () => {
    alert("Redirecting to checkout...");
    router.push("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-2xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
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
                onClick={() => removeFromCart(product._id)}
                className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 p-4 border-t">
            <p className="text-xl font-semibold text-gray-900">
              Total: <span className="text-indigo-600">${calculateTotal()}</span>
            </p>
          </div>

          {/* Back & Checkout Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition-all"
            >
              Back
            </button>
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;