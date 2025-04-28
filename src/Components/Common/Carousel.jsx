import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const desktopImages = [
    '/assets/Carouse/product discount.png',
    '/assets/Carouse/Skincare Beauty Product Features Banner Facebook Cover (2).png',
    '/assets/Carouse/Skincare Beauty Product Features Banner Facebook Cover (4).png',
    '/assets/Carouse/Skincare Beauty Product Features Banner Facebook Cover (6).webp',
  ];
  const mobileImages = [
    'https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-slide-1.jpg?v=1667186867&width=600',
    'https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-slide-2.jpg?v=1667311638&width=600',
    'https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-slide-3.jpg?v=1667311990&width=600',
  ];

  const mobileContents = [
    { title: "Glow Naturally", desc: "Reveal your inner glow with our organic skincare collection." },
    { title: "Pure Herbal Care", desc: "Feel the magic of ancient herbs blended for modern beauty." },
    { title: "Fresh & Radiant", desc: "Elevate your daily routine with exotic wellness essentials." },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <div className="relative w-full overflow-hidden shadow-md">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className={`w-full object-cover transition-all duration-700 ease-in-out ${isMobile ? 'h-[600px] max-w-[1080px] mx-auto' : 'h-[660px]'}`}
        loading="lazy"
        srcSet={`${images[activeIndex]} 600w`}
        sizes="(max-width: 768px) 100vw, 100vw"
      />

      {/* Mobile Text Content */}
      {isMobile && mobileContents[activeIndex] && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-black/50 text-white p-6 rounded-xl text-center space-y-3 max-w-md mx-auto">
            <h2 className="text-2xl font-bold">{mobileContents[activeIndex].title}</h2>
            <p className="text-sm">{mobileContents[activeIndex].desc}</p>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
              Get Now
            </button>
          </div>
        </div>
      )}

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${idx === activeIndex ? 'bg-black' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
