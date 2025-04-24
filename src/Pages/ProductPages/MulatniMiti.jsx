import React, { useState } from 'react';
import Product from './Product';
import { multanihairCareRecipes, multanirecipes, } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';
const MulatniMiti = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [
    "/assets/Assets/multani/MultaniMirtti.png",
    "/assets/Assets/multani/multani.jpg",
    "/assets/Assets/multani/multani Mitti  Exotic VEda .png",
    "/assets/Assets/multani/multni mitti uaing.png",
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
          <Product productId="Multanimittipowder" />
        </div>
      </div>

      <div className="mt-8">
        <img src="/assets/Assets/multani/Multani-mitti-banner.png" alt='Mulatani Mitti Powder ' loading="lazy" className="w-full rounded-lg" />
        <h1 className="text-2xl font-bold mt-4 text-center">Pure  Multani Mitti Powder - Helps Nourish Scalp, Boost Hair Growth, Aids in Skin Dryness, Cuts, Sunburns, Natural Herbal Supplement for Skin & Hair Care (100g)</h1>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4"> Multani Mitti Powder Uses for Different Skin Types And Hair Types</h2>

        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'skinCare' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('skinCare')}
          >
            Tips For Skin Care
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'hairCare' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('hairCare')}
          >
            Tips For The Hair Care
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'skinCare'
            ? multanirecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            : multanihairCareRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </div>

      <div className="mt-8">
        <img src="/assets/Assets/multani/Multani mitti-01.png" alt="Mulatni Mitti Powder  " className="w-full rounded-lg" loading="lazy" />
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-semibold">Disclaimer:</span> Use  Mulatni Mitti Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
        </p>
      </div>
    </div>
  );
};
export default MulatniMiti
