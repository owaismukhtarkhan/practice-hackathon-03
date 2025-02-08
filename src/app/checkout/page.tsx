"use client"; // Mark this as a Client Component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";

const CheckoutPage = () => {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Calculate total price
  const calculateTotal = (cart: Product[]) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(total);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart"); // Clear the cart
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Shipping Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
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
                  placeholder="john.doe@example.com"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="123 Main St"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="NY"
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="10001"
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:scale-105"
              >
                Place Order
              </button>
              {/* Back Button */}
              <button
                onClick={() => router.back()}
                className="w-full bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition-all"
              >
                Back
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item._id} className="flex items-center justify-between">
                  <p className="text-gray-700">{item.name}</p>
                  <p className="text-gray-900 font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="border-t border-gray-300 pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 font-semibold">Total</p>
                  <p className="text-gray-900 font-bold text-xl">
                    ${total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;