import React, { useState } from 'react';
import Product from './Product';
import { beetrootSkinCareRecipes, beetrootDietaryRecipes, beetrootHairCareRecipes } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';

const BeetrootPowder = () => {
  const images = [
    "/assets/Assets/beetroot/beetroot  powder  front.png",
    "/assets/Assets/beetroot/beet root powder  back.png",
    "/assets/Assets/beetroot/sdsd (2).png",
    "/assets/Assets/beetroot/beetrootbenfits .png",
    "/assets/Assets/beetroot/use1beet.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState('skinCare');

  const getRecipesByTab = () => {
    switch (activeTab) {
      case 'skinCare':
        return beetrootSkinCareRecipes;
      case 'hairCare':
        return beetrootHairCareRecipes;
      case 'dietCare':
        return beetrootDietaryRecipes;
      default:
        return [];
    }
  };

  return (
    <div className="p-4">
         {/* Product Image and Details */}
         <div className="flex flex-col md:flex-row gap-6">
        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Mobile Main Image */}
          <div className="md:hidden">
            <img
              src={currentImage}
              alt="Main product"
              loading="lazy"
              className="w-full max-h-[400px] object-contain rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                loading="lazy"
                alt={`Thumbnail ${idx + 1}`}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-all ${currentImage === img ? "border-green-500" : "border-gray-300"
                  }`}
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>

          {/* Desktop Main Image */}
          <div className="hidden md:block flex-1">
            <img
              src={currentImage}
              alt="Main product"
              loading="lazy"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <Product productId="Amlapowder" />
        </div>
      </div>

      {/* Banner and Title */}
      <div className="mt-8">
        <img src="/assets/Assets/beetroot/beetrootPowder.png" alt="Beetroot Powder Banner" className="w-full rounded-lg" loading="lazy" />
        <h1 className="text-2xl font-bold mt-4 text-center">Organic Beetroot Powder - Perfect for Skin, Hair & Dietary Uses</h1>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Beetroot Powder Uses for Different Purposes</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            { key: 'skinCare', label: 'Tips For Skin Care' },
            { key: 'hairCare', label: 'Tips For Hair Care' },
            { key: 'dietCare', label: 'Tips For Dietary Use' }
          ].map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${activeTab === tab.key ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getRecipesByTab().map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8">
        <img src="/assets/Assets/beetroot/disclaimer_banner.png" alt="Beetroot Powder" className="w-full rounded-lg" loading="lazy" />
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-semibold">Disclaimer:</span> Use Beetroot Powder externally unless mentioned for dietary. Avoid contact with eyes. Discontinue use if irritation occurs.
        </p>
      </div>
    </div>
  );
};

export default BeetrootPowder;
