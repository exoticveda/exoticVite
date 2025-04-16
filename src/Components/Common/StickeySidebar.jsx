import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const StickySidebar = () => {
  const sidebarRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;

      const { top } = sidebarRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`
       hidden  md:flex flex-col items-center gap-4
        ${isFixed ? 'fixed top-4 left-0' : 'sticky top-20 left-0'}
        z-50 p-4 bg-white border border-gray-200 rounded-xl shadow-md
        transition-all duration-300 w-[55px] mt-4
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 text-xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition-transform" />
        </a>
      </div>
      <div className="mt-4 text-sm font-semibold text-gray-700 text-center max-w-[100px]">
        🎉 Get <span className="text-red-500 font-bold">30% OFF</span> now!
      </div>
    </div>
  );
};

export default StickySidebar;
