import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img src="/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full object-cover" loading="lazy" />
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="flex md:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-700 hover:text-black focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div
              className={`${
                menuOpen ? 'block absolute top-16 left-0 w-full bg-white shadow-md py-4 z-40' : 'hidden'
              } md:block`}
            >
              <ul className="flex flex-col md:flex-row md:space-x-6 items-start md:items-center text-gray-700 font-medium px-4 md:px-0">
                {/* <li className="py-2 md:py-0"><a href="/" className="hover:text-teal-600">Home</a></li> */}
                <li className="py-2 md:py-0"><a href="/products" className="hover:text-teal-600">Products</a></li>
                {/* <li className="py-2 md:py-0"><a href="/search" className="hover:text-teal-600">Search</a></li> */}
                <li className="py-2 md:py-0"><a href="/about-us" className="hover:text-teal-600">About Us</a></li>
                <li className="py-2 md:py-0"><a href="/Contact" className="hover:text-teal-600">Contact Us</a></li>

                {/* Dropdown */}
                <li
                  className="relative group py-2 md:py-0"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="hover:text-teal-600 cursor-pointer">Shop by Categories</span>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md z-50">
                      <li><a href="/category/haircare" className="block px-4 py-2 hover:bg-gray-100">Hair Care</a></li>
                      <li><a href="/Skincaree-category" className="block px-4 py-2 hover:bg-gray-100">Skin Care</a></li>
                      <li><a href="/Dietry-Use-Category" className="block px-4 py-2 hover:bg-gray-100">Dietary</a></li>
                      <li><a href="/wellness" className="block px-4 py-2 hover:bg-gray-100">Wellness</a></li>
                      <li><a href="/Diya-Batti" className="block px-4 py-2 hover:bg-gray-100">Puja Essentials</a></li>
                    </ul>
                  )}
                </li>

                {/* External Shop Link */}
                <li className="py-2 md:py-0">
                  <a
                    href="https://www.revaais.shop"
                    className="hover:text-teal-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Add height spacer under fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
