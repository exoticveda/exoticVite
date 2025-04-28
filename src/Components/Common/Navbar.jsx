import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMenu, FiX, FiShoppingBag, FiInfo, FiPhone, FiGrid, FiChevronDown, FiChevronUp, FiExternalLink,
} from 'react-icons/fi';
import SearchBar from '../Reusable/SearchBar';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="w-14 h-14 object-cover rounded-full"
                loading="lazy"
              />
            </Link>

            {/* Desktop SearchBar */}
            <div className="hidden lg:block w-[300px]">
              <SearchBar />
            </div>
            <div className="lg:hidden md:block  w-full px-4">
              <SearchBar />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
              <Link to="/products" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}>
                <FiShoppingBag /> Products
              </Link>
              <Link to="/aboutus" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}>
                <FiInfo /> About Us
              </Link>
              <Link to="/Contact" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}>
                <FiPhone /> Contact Us
              </Link>

              {/* Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-2 hover:text-teal-600 focus:outline-none">
                  <FiGrid /> Shop by Categories {dropdownOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-8 left-0 w-48 bg-white rounded-md shadow-md z-50 py-2">
                    <li><Link to="/category/haircare" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Hair Care</Link></li>
                    <li><Link to="/Skincaree-category" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Skin Care</Link></li>
                    <li><Link to="/Dietry-Use-Category" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Dietary</Link></li>
                    <li><Link to="/wellness" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Wellness</Link></li>
                    <li><Link to="/Diya-Batti" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Pooja Essentials</Link></li>
                  </ul>
                )}
              </div>

              <a
                href="https://www.revaais.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-600"
                onClick={handleLinkClick}
              >
                <FiExternalLink /> Our Shop
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md px-6 py-4">
            {/* <div className="mb-4">
              <SearchBar />
            </div> */}
            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              <li><Link to="/products" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}><FiShoppingBag /> Products</Link></li>
              <li><Link to="/aboutus" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}><FiInfo /> About Us</Link></li>
              <li><Link to="/Contact" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}><FiPhone /> Contact Us</Link></li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-full justify-between hover:text-teal-600"
                >
                  <span className="flex items-center gap-2"><FiGrid /> Shop by Categories</span>
                  {dropdownOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 space-y-2 pl-6">
                    <li><Link to="/category/haircare" onClick={handleLinkClick} className="block hover:text-teal-600">Hair Care</Link></li>
                    <li><Link to="/Skincaree-category" onClick={handleLinkClick} className="block hover:text-teal-600">Skin Care</Link></li>
                    <li><Link to="/Dietry-Use-Category" onClick={handleLinkClick} className="block hover:text-teal-600">Dietary</Link></li>
                    <li><Link to="/wellness" onClick={handleLinkClick} className="block hover:text-teal-600">Wellness</Link></li>
                    <li><Link to="/Diya-Batti" onClick={handleLinkClick} className="block hover:text-teal-600">Pooja Essentials</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="https://www.revaais.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-600"
                  onClick={handleLinkClick}
                >
                  <FiExternalLink /> Our Shop
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
