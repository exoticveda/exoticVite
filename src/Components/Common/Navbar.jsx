import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/">
                <img src="/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full object-cover mt-3" loading="lazy" />
              </Link>
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
                <li className="py-2 md:py-0"><Link to="/products" className="hover:text-teal-600">Products</Link></li>
                {/* <li className="py-2 md:py-0"><a href="/search" className="hover:text-teal-600">Search</a></li> */}
                <li className="py-2 md:py-0"><Link to="/aboutus" className="hover:text-teal-600">About Us</Link></li>
                <li className="py-2 md:py-0"><Link to="/Contact" className="hover:text-teal-600">Contact Us</Link></li>

                {/* Dropdown */}
                <li
                  className="relative group py-2 md:py-0"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="hover:text-teal-600 cursor-pointer">Shop by Categories</span>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md z-50">
                      <li><Link to="/category/haircare" className="block px-4 py-2 hover:bg-gray-100">Hair Care</Link></li>
                      <li><Link to="/Skincaree-category" className="block px-4 py-2 hover:bg-gray-100">Skin Care</Link></li>
                      <li><Link to="/Dietry-Use-Category" className="block px-4 py-2 hover:bg-gray-100">Dietary</Link></li>
                      <li><Link to="/wellness" className="block px-4 py-2 hover:bg-gray-100">Wellness</Link></li>
                      <li><Link to="/Diya-Batti" className="block px-4 py-2 hover:bg-gray-100">Puja Essentials</Link></li>
                    </ul>
                  )}
                </li>

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
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Sun, Moon } from 'lucide-react';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
//   const handleMenuToggle = () => setMenuOpen(!menuOpen);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
//           darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img
//                   src="/assets/logo.png"
//                   alt="Logo"
//                   className="w-20 h-20 rounded-full object-cover mt-3"
//                   loading="lazy"
//                 />
//               </Link>
//             </div>

//             {/* Hamburger + Dark Mode (Mobile) */}
//             <div className="flex items-center gap-4 md:hidden">
//               <button onClick={() => setDarkMode(!darkMode)} className="hover:text-teal-400 transition">
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//               <button
//                 onClick={handleMenuToggle}
//                 className="  text-gray-400  hover:text-black focus:outline-none"
//               >
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   {menuOpen ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>

//             {/* Desktop Menu */}
//             <div
//               className={`${
//                 menuOpen ? 'block absolute top-16 left-0 w-full py-4 z-40' : 'hidden'
//               } md:block ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} md:bg-transparent`}
//             >
//               <ul className="flex flex-col md:flex-row md:space-x-6 items-start md:items-center font-medium px-4 md:px-0">
//                 <li className="py-2 md:py-0">
//                   <Link to="/products" className="hover:text-teal-600">Products</Link>
//                 </li>
//                 <li className="py-2 md:py-0">
//                   <Link to="/aboutus" className="hover:text-teal-600">About Us</Link>
//                 </li>
//                 <li className="py-2 md:py-0">
//                   <Link to="/Contact" className="hover:text-teal-600">Contact Us</Link>
//                 </li>

//                 {/* Dropdown */}
//                 <li
//                   className="relative group py-2 md:py-0"
//                   onMouseEnter={() => setDropdownOpen(true)}
//                   onMouseLeave={() => setDropdownOpen(false)}
//                 >
//                   <span className="hover:text-teal-600 cursor-pointer">Shop by Categories</span>
//                   {dropdownOpen && (
//                     <ul className={`absolute left-0 mt-2 w-44 shadow-md rounded-md z-50 ${
//                       darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
//                     }`}>
//                       <li><Link to="/category/haircare" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Hair Care</Link></li>
//                       <li><Link to="/Skincaree-category" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Skin Care</Link></li>
//                       <li><Link to="/Dietry-Use-Category" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Dietary</Link></li>
//                       <li><Link to="/wellness" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Wellness</Link></li>
//                       <li><Link to="/Diya-Batti" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Puja Essentials</Link></li>
//                     </ul>
//                   )}
//                 </li>

//                 <li className="py-2 md:py-0">
//                   <a
//                     href="https://www.revaais.shop"
//                     className="hover:text-teal-600"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Our Shop
//                   </a>
//                 </li>

//                 {/* Dark Mode Toggle (Desktop) */}
//                 <li className="py-2 md:py-0 ml-auto hidden md:block">
//                   <button onClick={() => setDarkMode(!darkMode)} className="hover:text-teal-400 transition">
//                     {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>


//     </>
//   );
// };

// export default Navbar;
