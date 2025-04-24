import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="w-16 h-16 object-cover rounded-full mt-2"
                loading="lazy"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } md:flex md:items-center md:space-x-6 md:static absolute top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40 px-4 md:px-0 py-4 md:py-0`}
            >
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-700 font-medium w-full md:w-auto">
                <li>
                  <Link to="/products" className="hover:text-teal-600 block" onClick={handleLinkClick}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="hover:text-teal-600 block" onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="hover:text-teal-600 block" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>

                {/* Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="cursor-pointer hover:text-teal-600 block">Shop by Categories</span>
                  <ul
                    className={`${
                      dropdownOpen ? 'block' : 'hidden'
                    } absolute left-0 mt-2 w-44 bg-white rounded-md shadow-md z-50`}
                  >
                    <li><Link to="/category/haircare" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Hair Care</Link></li>
                    <li><Link to="/Skincaree-category" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Skin Care</Link></li>
                    <li><Link to="/Dietry-Use-Category" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Dietary</Link></li>
                    <li><Link to="/wellness" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Wellness</Link></li>
                    <li><Link to="/Diya-Batti" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Puja Essentials</Link></li>
                  </ul>
                </li>

                <li>
                  <a
                    href="https://www.revaais.shop"
                    className="hover:text-teal-600 block"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Our Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to offset fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
