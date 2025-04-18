import React, { useState,  useMemo, useCallback, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import {products} from '../Data'
const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef(null);

    const filteredProducts = useMemo(() => {
      if (!query) return [];
      const lowercasedQuery = query.toLowerCase();
      return products.filter(product =>
        product.title.toLowerCase().includes(lowercasedQuery)
      );
    }, [query, products]);

    const debouncedSearch = useCallback(
      debounce((searchQuery) => {
        setSearchResults(filteredProducts);
      }, 300),
      [filteredProducts]
    );

    const handleInputChange = useCallback((event) => {
      const newQuery = event.target.value;
      setQuery(newQuery);
      setShowSuggestions(true);
      debouncedSearch(newQuery);
    }, [debouncedSearch]);

    const handleSearch = useCallback(() => {
      setSearchResults(filteredProducts);
      setShowSuggestions(false);
    }, [filteredProducts]);


    const handleSuggestionClick = useCallback((product) => {
      setQuery(product.title);
      setSearchResults([product]);
      setShowSuggestions(false);
    }, []);

    const handleKeyDown = useCallback((event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveSuggestionIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredProducts.length - 1)
        );
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, -1));
      } else if (event.key === 'Enter') {
        if (activeSuggestionIndex >= 0) {
          handleSuggestionClick(filteredProducts[activeSuggestionIndex]);
        } else {
          handleSearch();
        }
      }
    }, [activeSuggestionIndex, filteredProducts, handleSearch, handleSuggestionClick]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (  <div className="search-container">
      <div className="search-bar" ref={inputRef}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for products..."
          aria-label="Search for products"
        />
        <button onClick={handleSearch} aria-label="Search">
          <FaSearch />
        </button>
      </div>




      {searchResults.length > 0 && (
        <div>
          <h1>Show results</h1>
        <div className="search-results">

          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <Link href={product.link}>
                  <img src={product.img} loading="lazy" alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    <p className='r'>{product.updateInfo}  <FaArrowRight className="arrow-icon"  size={10} marginTop='100px' color="blue" style={{ marginLeft: '8px' }} /></p>
                  </div>

                </Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      )}
    </div>
  );
  };

  export default SearchBar;