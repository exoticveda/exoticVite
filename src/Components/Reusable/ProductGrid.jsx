import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../Data';


const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative hover:scale-105 hover:shadow-xl">
    {/* Wishlist Icon */}
    <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:text-red-500 z-10">
      ❤️
    </button>

    {/* Badge */}
    {product.badge && (
      <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded z-10">
        {product.badge}
      </span>
    )}

    {/* Product Image with Hover Overlay */}
    <div className="relative">
      <img
        src={product.img}
        alt={product.title}
        loading="lazy"
        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 backdrop-blur-md bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <Link to={product.route} className="bg-white text-black px-4 py-2 rounded shadow hover:bg-green-600 hover:text-white transition">
          Quick View
        </Link>
      </div>
    </div>

    {/* Product Info */}
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1 dark:text-black">{product.title}</h3>

      {/* Rating
      <div className="flex items-center text-yellow-400 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < product.rating ? '★' : '☆'}</span>
        ))}
      </div> */}

      <p className="text-gray-600 text-sm mb-3">{product.description}</p>

      <Link to={product.route}>
        <p className="text-gray-600 text-sm mb-3 hover:underline hover:cursor-pointer">
          {product.updateInfo} ➡️
        </p>
      </Link>

      <div className="flex items-center justify-between">
        <span className="text-green-500 font-bold">{product.price}</span>
        <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-black hover:cursor-pointer transition duration-200 flex items-center gap-2">
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
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredProducts = products
  .filter((product) =>
    selectedCategory === 'All' || product.categories?.includes(selectedCategory)
  )
  .filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOption === 'priceLowHigh') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    if (sortOption === 'priceHighLow') return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    return 0;
  });

  return (
    <div className="flex flex-col lg:flex-row">
    {/* Sidebar */}
    <div className="lg:w-1/5 p-4 lg:fixed">
      <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${selectedCategory === cat
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-black'
              } hover:bg-green-200 transition duration-200`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* Search & Sort Controls */}
    <div className="flex flex-col lg:ml-[20%] p-6 gap-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full lg:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  </div>
);
};


export default ProductGrid;
