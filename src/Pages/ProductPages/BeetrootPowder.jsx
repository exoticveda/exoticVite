import React, { useState } from 'react';
import Product from './Product';
import { beetrootSkinCareRecipes, beetrootDietaryRecipes } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';


const BeetrootPowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [ "/assets/Assets/beetroot/beetroot  powder  front.png","/assets/Assets/beetroot/beet root powder  back.png", "/assets/Assets/beetroot/sdsd (2).png", "/assets/Assets/beetroot/beetrootbenfits .png", "/assets/Assets/beetroot/use1beet.jpg"];
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
    <Product productId="Beetrootpowder" />
  </div>
</div>

      <div className="mt-8">
        <img src="/assets/Assets/beetroot/beetrootPowder.png" alt='Beetroot Powder Banner' className="w-full rounded-lg" />
        <h1 className="text-2xl font-bold mt-4 text-center">Organic Beetroot Powder - Perfect for Skin & Dietary Uses</h1>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Beetroot Powder Uses for Different Skin Types</h2>

        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'skinCare' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('skinCare')}
          >
            Tips For Skin Care
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'hairCare' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('hairCare')}
          >
            Tips For The Dietcare
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'skinCare'
            ? beetrootSkinCareRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            : beetrootDietaryRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </div>

      <div className="mt-8">
        <img src="" alt="Beetroot Powder" className="w-full rounded-lg" />
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-semibold">Disclaimer:</span> Use Beetroot Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
        </p>
      </div>
    </div>
  );
};

export default BeetrootPowder;