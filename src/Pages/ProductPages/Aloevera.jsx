import React, { useState } from 'react';
import Product from './Product';
import {
  AloeverahairCareRecipes,
  Aloeverarecipesskin,
  AloeveraDietaryRecipes,
} from '../../Components/Data';
import { RecipeCard } from './RecipeCard';

const Aloevera = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [
    "/assets/Assets/Aloe/Aloe vera  front.png",
    "/assets/Assets/Aloe/Amazon.png",
    "/assets/Assets/Aloe/aloeverapowder.png",
    "/assets/Assets/Aloe/aloebenifts.png",
    "/assets/Assets/Aloe/close-up-woman-wearing-face-mask.jpg",
    "/assets/Assets/Aloe/aloeuse1.jpg"
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const tabData = {
    skinCare: {
      label: 'Tips for Skin Care',
      recipes: Aloeverarecipesskin,
    },
    hairCare: {
      label: 'Tips for Hair Care',
      recipes: AloeverahairCareRecipes,
    },
    dietary: {
      label: 'Tips for Dietary Use',
      recipes: AloeveraDietaryRecipes,
    }
  };

  return (
    <div className="p-4">
      {/* Top Section with Images and Product Info */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Mobile View Main Image */}
          <div className="flex-1 md:hidden">
            <img
              src={currentImage}
              alt="Main Aloe Vera Product"
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
                alt={`Aloe Thumbnail ${idx + 1}`}
                loading="lazy"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 shrink-0"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>

          {/* Desktop View Main Image */}
          <div className="flex-1 hidden md:block">
            <img
              src={currentImage}
              alt="Main Aloe Vera Product"
              loading="lazy"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <Product productId="Aloevera" />
        </div>
      </div>

      {/* Banner and Heading */}
      <div className="mt-8">
        <img
          src="/assets/Assets/Aloe/Aloeverapowder banner Exotic veda.png"
          alt="Aloe Vera Powder Banner"
          loading="lazy"
          className="w-full rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-center">
          Pure Aloe Vera Powder - Helps Nourish Scalp, Boost Hair Growth, Aids in Skin Dryness, Cuts, Sunburns, Natural Herbal Supplement for Skin, Hair & Dietary Use (100g)
        </h1>
      </div>

      {/* Tabs for Recipes */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Aloe Vera Powder Uses for Different Needs</h2>

        <div className="flex   gap-4 mb-6">
          {Object.entries(tabData).map(([key, { label }]) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-md ${activeTab === key ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabData[activeTab].recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8">
        <img
          src="/assets/Assets/Aloe/aloe ver banner stretch_Vegan Circle Green copy (1).png"
          alt="Aloe Vera Powder Use Banner"
          className="w-full rounded-lg"
          loading="lazy"
        />
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-semibold">Disclaimer:</span> For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.
        </p>
      </div>
    </div>
  );
};

export default Aloevera;
