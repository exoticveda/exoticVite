import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const TreatmentImageSection = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section className="relative w-full overflow-hidden">
<div className="hidden md:block relative w-full h-[700px]">
        <img
          src="https://beyours-theme-beauty.myshopify.com/cdn/shop/files/banner-6.jpg?v=1655430252&width=2000"
          alt="Skincare Banner"
          className="w-full h-full object-cover"
        />

        {showContent && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '50%', opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/4 right-35 w-1/2 h-auto bg-gray-200  p-10 rounded-l-3xl shadow-xl"
          >
            <h2 className="text-lg text-pink-600 font-semibold">Treatment</h2>
            <h1 className="text-4xl font-bold text-gray-800 my-2">Face your skin with us</h1>
            <p className="text-gray-600 mb-4">
              Skincare made with the world’s finest plant oils and absolutes.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
              Explore Now <FaArrowRight />
            </button>
            {/* <div className="mt-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800">Quick and Classic</h3>
              <p className="text-gray-600">
                The Makeup Set gives you an instant polish, and instant savings.
              </p>
              <button className="mt-2 text-pink-600 underline">Shop now</button>
            </div> */}
          </motion.div>
        )}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full h-[600px]">
        <img
          src="https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-img-1.jpg?v=1667187367&width=2000"
          alt="Treatment Mobile"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/4 left-4 right-4 bg-black/50 p-4 rounded-lg text-white space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-300">Treatment</p>
          <h2 className="text-2xl font-bold">Face your skin with us</h2>
          <p>
            Skincare made with the world’s finest plant oils and absolutes.
          </p>
          <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100">
            Explore Now
          </button>
        </div>
      </div>

      {/* Common Section Below Image */}
      <div className=" md:hidden bg-white text-center py-12 px-4 sm:px-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Quick and Classic</h3>
        <p className="text-gray-600 mb-4">
          The Makeup Set gives you an instant polish, and instant savings.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center mx-auto">
          Shop Now <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default TreatmentImageSection;
