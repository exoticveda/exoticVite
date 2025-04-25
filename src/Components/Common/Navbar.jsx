import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag, FiInfo, FiPhone, FiGrid, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

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

            {/* Mobile menu icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Navigation */}
            <div
              className={`${menuOpen ? 'block' : 'hidden'
                } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-20 left-0 w-full lg:w-auto bg-white shadow-md lg:shadow-none z-40 px-4 lg:px-0 py-4 lg:py-0`}
            >
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700 font-medium w-full lg:w-auto">

                <li>
                  <Link to="/products" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}>
                    <FiShoppingBag /> Products
                  </Link>
                </li>

                <li>
                  <Link to="/aboutus" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}>
                    <FiInfo /> About Us
                  </Link>
                </li>

                <li>
                  <Link to="/Contact" className="flex items-center gap-2 hover:text-teal-600" onClick={handleLinkClick}>
                    <FiPhone /> Contact Us
                  </Link>
                </li>

                {/* Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="cursor-pointer flex items-center gap-2  hover:text-teal-600">
                    < span className='flex items-center gap-2  justify-center'> <FiGrid />
                      Shop by Categories
                      {dropdownOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}</span>
                  </div>
                  <ul
                    className={`${dropdownOpen ? 'block' : 'hidden'
                      } absolute left-0  w-44 bg-white rounded-md shadow-md z-50`}
                  >
                    <li><Link to="/category/haircare" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Hair Care</Link></li>
                    <li><Link to="/Skincaree-category" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Skin Care</Link></li>
                    <li><Link to="/Dietry-Use-Category" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Dietary</Link></li>
                    <li><Link to="/wellness" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Wellness</Link></li>
                    <li><Link to="/Diya-Batti" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLinkClick}>Pooja Essentials</Link></li>
                  </ul>
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
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
