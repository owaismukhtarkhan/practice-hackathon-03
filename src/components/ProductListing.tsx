"use client";

import React, { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  // Handle search and filter
  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
        Discover Your Style
      </h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          <option value="tshirt">T-Shirt</option>
          <option value="short">Short</option>
          <option value="jeans">Jeans</option>
          <option value="hoodie">Hoodie</option>
          <option value="shirt">Shirt</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
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
              ${product.price.toFixed(2)}
            </p>
            {product.discountPercent != null && product.discountPercent > 0 && (
              <p className="text-sm text-red-500 mt-1">
                Save {product.discountPercent}%
              </p>
            )}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Colors:</p>
                <div className="flex space-x-2 mt-1">
                  {product.colors?.map((color, index) => (
                    <span
                      key={index}
                      className="block w-5 h-5 rounded-full border shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Sizes:</p>
                <div className="flex space-x-2 mt-1">
                  {product.sizes?.map((size, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 rounded-md text-sm shadow-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Products Found Message */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default ProductListing;