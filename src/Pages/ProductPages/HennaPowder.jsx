import React, { useState } from 'react';
import Product from './Product';
import {  hennahairCareRecipes,hennaproductDetails } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';

const HennaPowder = () => {

  const [activeTab, setActiveTab] = useState('skinCare');
  const images = ["/assets/Assets/hennapowder/Henna Powder .png", "/assets/Assets/hennapowder/hennaback.png",  "/assets/Assets/hennapowder/henass.jpg", "/assets/Assets/hennapowder/Henna HowTo use .png", "/assets/Assets/hennapowder/hair.jpg",];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Thumbnail List */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 shrink-0"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={currentImage}
              alt="Main product"
              className="w-full max-h-[400px] md:max-h-[500px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Content Section */}
        <div className="w-full md:w-1/2">
          <Product productId="hennapowder" />
        </div>
      </div>

      <div className="mt-8">
        <img src="/assets/Assets/hennapowder/henna Powder banner.png" alt='Beetroot Powder Banner' className="w-full rounded-lg" />
        <h1 className="text-2xl font-bold mt-4 text-center">Organic Henna - Powder Perfect for  Haircare  Uses</h1>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Henna Powder Uses for Different Types</h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'skinCare'
            ? hennahairCareRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            : hennahairCareRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </div>

      <div className="mt-8">
        <img src="" alt="Beetroot Powder" className="w-full rounded-lg" />
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-semibold">Disclaimer:</span> Use Beetroot Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
        </p>
      </div>
    </div>
  )
}

export default HennaPowder
