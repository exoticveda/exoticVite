// SearchBar.jsx
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../Data'; // Adjust path if needed
import { debounce } from 'lodash'; // lodash is used for debounce

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
      product.title.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      setSearchResults(filteredProducts);
    }, 300),
    [filteredProducts]
  );

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setShowSuggestions(true);
    debouncedSearch(newQuery);
  };

  const handleProductClick = (route) => {
    setQuery('');
    setShowSuggestions(false);
    navigate(route);
  };

  const handleSuggestionClick = (product) => {
    handleProductClick(product.route);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults[activeSuggestionIndex]) {
        handleProductClick(searchResults[activeSuggestionIndex].route);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={inputRef}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          className="w-full py-2 pl-10 pr-4 rounded-full border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      {/* Search Suggestions */}
      {showSuggestions && query && (
        <div className="absolute mt-2 w-full bg-white rounded-md shadow-lg max-h-80 overflow-y-auto z-50 animate-fadeIn">
          {searchResults.length > 0 ? (
            searchResults.map((product, index) => (
              <div
                key={product.id}
                onClick={() => handleSuggestionClick(product)}
                className={`flex items-center gap-4 p-4 transition-all cursor-pointer ${
                  activeSuggestionIndex === index ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">{product.title}</span>
                  <span className="text-sm text-gray-500">{product.description.substring(0, 50)}...</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500 text-center">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
