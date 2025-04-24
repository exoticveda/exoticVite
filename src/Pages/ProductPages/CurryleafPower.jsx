import React, { useState, useMemo } from 'react';
import Product from './Product';
import {
 curryhairCareRecipes,
currySkinCareRecipes,
  currydietRecipes,
} from '../../Components/Data';
import { RecipeCard } from './RecipeCard';

const CurryleafPower = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [
    "/assets/Assets/curryleaf/Curry Front.png",
    "/assets/Assets/curryleaf/curryback.png",
    "/assets/Assets/curryleaf/Curry Benfits.png",
    "/assets/Assets/curryleaf/usecurry.jpg",
    "/assets/Assets/curryleaf/Cruuty f3.png",


  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const tabData = useMemo(() => ({
    skinCare: {
      label: 'Skin Care Tips',
      recipes: currySkinCareRecipes,
    },
    hairCare: {
      label: 'Hair Care Tips',
      recipes:curryhairCareRecipes,
    },
    dietary: {
      label: 'Dietary Use Tips',
      recipes: currydietRecipes,
    }
  }), []);

  return (
    <div className="p-4">
      {/* Product Display */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Mobile Main Image */}
          <div className="flex-1 md:hidden">
            <img
              src={currentImage}
              alt="Lemongrass Product"
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
                alt={`Lemongrass Thumbnail ${idx + 1}`}
                loading="lazy"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 shrink-0"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>

          {/* Desktop Main Image */}
          <div className="flex-1 hidden md:block">
            <img
              src={currentImage}
              alt="Lemongrass Product"
              loading="lazy"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2">
          <Product productId="curryleafpowder" />
        </div>
      </div>



      {/* Banner & Description */}
      <div className="mt-8">
        <img
          src="/assets/Assets/curryleaf/curry-leaf-banner-2.png"
          alt="Lemongrass Powder Banner"
          loading="lazy"
          className="w-full rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-center">
          Pure Lemongrass Powder – Nourishes Scalp, Boosts Hair Growth, Treats Skin Dryness, Cuts, Sunburns, and Supports Digestion. Natural Herbal Supplement for Skin, Hair & Dietary Use (100g)
        </h1>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Lemongrass Powder Benefits</h2>
        <div className="flex gap-4 mb-6 flex-wrap">
          {Object.entries(tabData).map(([key, { label }]) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-md transition duration-300 ${activeTab === key ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
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

      {/* Disclaimer Section */}
      <div className="mt-10">
        <img
          src="/assets/Assets/curryleaf/Curry Leaf Powder.png"
          alt="Lemongrass Use Banner"
          className="w-full rounded-lg"
          loading="lazy"
        />

      </div>
    </div>
  );
};
export default CurryleafPower
