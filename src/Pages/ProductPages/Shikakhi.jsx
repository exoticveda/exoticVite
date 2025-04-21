import React, { useState } from 'react';
import Product from './Product';
import { ShikaahairCareRecipes } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';

const Shikakhi = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [
    "/assets/Assets/shikakipowder/Shikakai  Powder  Frontn.png",
    "/assets/Assets/shikakipowder/shikakai powdder.jpg",
    "/assets/Assets/shikakipowder/shikaaipowder.jpg",
    "/assets/Assets/shikakipowder/skikhai.png",
    "/assets/Assets/shikakipowder/shikakai.png",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <>
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
            <Product productId="shikakaipowder" />
          </div>
        </div>

        <div className="mt-8">
          <img src="/assets/Assets/shikakipowder/shika970.png" alt='Beetroot Powder Banner' loading="lazy" className="w-full rounded-lg" />
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Organic Shikakai Powder Natural Hair Cleanser and Conditioner, Non-GMO, Herbal Formula for Strong, Shiny Hair, 100g
          </h2>

          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'skinCare' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('skinCare')}
            >
              Tips For Hair Care
            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'skinCare'
              ? ShikaahairCareRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
              : ShikaahairCareRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </div>

        <div className="mt-8">
          <img src="/assets/Assets/shikakipowder/WhatsApp Image 2024-09-09 at 13.42.59_799fa071.png" alt="Beetroot Powder" className="w-full rounded-lg" loading="lazy" />
          <p className="mt-2 text-sm text-gray-800">
            <span className="font-semibold">Disclaimer:</span> Use Beetroot Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
          </p>
        </div>
      </div>
    </>
  )
}

export default Shikakhi
