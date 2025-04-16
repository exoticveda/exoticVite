import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const desktopImages = [
    'https://www.exoticveda.com/static/media/Skincare%20Beauty%20Product%20Features%20Banner%20Facebook%20Cover%20(6).05fe0346fe94e095617c.webp',
    'https://www.exoticveda.com/static/media/Skincare%20Beauty%20Product%20Features%20Banner%20Facebook%20Cover%20(4).cd8fedb62b8fd38ecc54.png',
    'https://www.exoticveda.com/static/media/Happy%20new%20year%20.81e98ccea4f761fa5b1a.png',
  ];

  const mobileImages = [
    'https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-slide-1.jpg?v=1667186867&width=2000',
    'https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-slide-2.jpg?v=1667311638&width=750',
    'https://beyours-theme-beauty.myshopify.com/cdn/shop/files/mobile-slide-3.jpg?v=1667311990&width=750',
  ];

  const mobileContents = [
    {
      title: "Glow Naturally",
      desc: "Reveal your inner glow with our organic skincare collection.",
    },
    {
      title: "Pure Herbal Care",
      desc: "Feel the magic of ancient herbs blended for modern beauty.",
    },
    {
      title: "Fresh & Radiant",
      desc: "Elevate your daily routine with exotic wellness essentials.",
    },
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
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden shadow-md">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className={`
          w-full h-full object-cover transition-all duration-700 ease-in-out
          ${isMobile ? 'h-[600px] max-w-[1080px] mx-auto' : 'h-[660px]'}
        `}
        loading="lazy"
      />

      {/* Dynamic Mobile Content */}
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

      {/* Prev Button */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 rounded-full shadow-md"
      >
        &#10094;
      </button> */}

      {/* Next Button */}
      {/* <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 rounded-full shadow-md"
      >
        &#10095;
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === activeIndex ? 'bg-black' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
