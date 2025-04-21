import React, { useState } from 'react';
import Product from './Product';
import { ShikaahairCareRecipes } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';
const Shilajit = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [
    "/assets/Assets/Shilajit/shilajitqq.png",
    "/assets/Assets/Shilajit/Shilajit.png",
    "/assets/Assets/Shilajit/shilajitbeneift.png",
    "/assets/Assets/Shilajit/shilajitw.png",
    "/assets/Assets/Shilajit/Shilajeet.png",


  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Thumbnail List */}
          <div className="flex-1 md:hidden">
            <img
              src={currentImage}
              alt="Main product"
              loading="lazy"
              className="w-full max-h-[400px] md:max-h-[500px] object-contain rounded-lg"
            />
          </div>
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                loading="lazy"
                alt={`Thumbnail ${idx + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 shrink-0"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
          <div className="flex-1 hidden md:block">
            <img
              src={currentImage}
              alt="Main product"
              loading="lazy"
              className="w-full max-h-[400px] md:max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Main Image */}

        </div>

        {/* Product Content Section */}
        <div className="w-full md:w-1/2">
          <Product productId="shilajit" />
        </div>
      </div>

      <div className="mt-8">
        <img src="/assets/Assets/Shilajit/Shilajit Banner1.png" alt='Exotic veda Shilajit 35g' loading="lazy" className="w-full" />
      </div>
      <div className=" ">
        <img src="/assets/Assets/Shilajit/Shilajit Banner3.png" alt='Exotic veda Shilajit 35g' loading="lazy" className="w-full " />
      </div>
      <div className=" ">
        <img src="/assets/Assets/Shilajit/Shilajit Banner3.png" alt='Exotic veda Shilajit 35g' loading="lazy" className="w-full  " />
      </div>
      <div className=" ">
        <img src="/assets/Assets/Shilajit/Shilajit Banner4.png" alt='Exotic veda Shilajit 35g' loading="lazy" className="w-full  " />
      </div>
      <div className=" ">
        <img src="/assets/Assets/Shilajit/Shilajit Banner5.png" alt='Exotic veda Shilajit 35g' loading="lazy" className="w-full  " />
      </div>
      <div className=" ">
        <img src="/assets/Assets/Shilajit/Shilajit Banner6.png" alt='Exotic veda Shilajit 35g' loading="lazy" className="w-full  " />
      </div>
    </div>
  )
}

export default Shilajit
