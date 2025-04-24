import React, { useState } from 'react';
import Product from './Product';
import { sandalwoodrecipes } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';
const SandalwoodPowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = ["/assets/Assets/sabdalwood/sandalwood Fornt.png",
    "/assets/Assets/sabdalwood/sandalwood  powder back.png",
    "/assets/Assets/sabdalwood/sandalwood powder.png",
    "/assets/Assets/sabdalwood/sandal how to  use.png",
    "/assets/Assets/sabdalwood/sande.jpg",
    "/assets/Assets/sabdalwood/san.jpg",
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
        </div>
        <div className="w-full md:w-1/2">
          <Product productId="sandalwoodpowder" />
        </div>
      </div>
      <div className="mt-8">
        <img src="/assets/Assets/sabdalwood/sandalwwod-certifiation-banner.png" alt='Beetroot Powder Banner' loading="lazy" className="w-full rounded-lg" />
        <h1 className="text-2xl font-bold mt-4 text-center">Organic Sandalwood Powder - Perfect for Skin Uses</h1>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Sandalwood Powder Uses for Different Skin Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'skinCare'
            ? sandalwoodrecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            : beetrootDietaryRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
};

export default SandalwoodPowder
