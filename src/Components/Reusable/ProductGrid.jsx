import React from 'react';
import { useState } from 'react';

import { products } from '../Data';


const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
    <img
      src={product.img}
      alt={product.title}
      loading='lazy'
      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-green-500 font-bold">{product.price}</span>
        <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-black">
            Buy Now
          </button>
        </a>
      </div>
    </div>
  </div>
);

const ProductGrid = () => {
  const categories = ['All', 'Hair', 'Skin', 'Diet'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) =>
        product.categories?.includes(selectedCategory)
      );

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:w-1/5 p-4 lg:fixed  ">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${selectedCategory === cat
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-black'
                } hover:bg-green-200  transition duration-200`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:ml-[20%] ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>

  );
};

export default ProductGrid;
