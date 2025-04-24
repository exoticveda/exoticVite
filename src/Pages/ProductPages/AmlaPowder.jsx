import React, { useState } from "react";
import Product from "./Product";
import { RecipeCard } from "./RecipeCard";
import {
  AmlaDietRecipes,
  AmlahairCareRecipes,
  Amlaskinrecipes,
} from "../../Components/Data";

const AmlaPowder = () => {
  const [activeTab, setActiveTab] = useState("skinCare");
  const images = [
    "/assets/Assets/Amla/Amla Powderfront.png",
    "/assets/Assets/Amla/Amla _05.jpg",
    "/assets/Assets/Amla/amlfet.png",
    "/assets/Assets/Amla/Amalabenefit.png",
    "/assets/Assets/Amla/benefit  of amla.png",
    "/assets/Assets/Amla/amla owder.png",
    "/assets/Assets/Amla/Amla _06.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const tabData = {
    skinCare: Amlaskinrecipes,
    diet: AmlaDietRecipes,
    hairCare: AmlahairCareRecipes,
  };

  const renderTabButton = (key, label) => (
    <button
      key={key}
      className={`px-4 py-2 rounded-md transition-all ${activeTab === key
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      onClick={() => setActiveTab(key)}
    >
      {label}
    </button>
  );

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

      {/* Banner + Description */}
      <div className="mt-8 text-center">
        <img
          src="/assets/Assets/Amla/Amla banner.png"
          alt="Amla Powder Banner"
          loading="lazy"
          className="w-full rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4">
          Pure Amla Powder – Nourishes Scalp, Boosts Hair Growth, Heals Skin Dryness & Sunburns | 100g
        </h1>
      </div>

      {/* Tabbed Section for Usage Tips */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Amla Powder Uses for Different Needs
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {renderTabButton("skinCare", "Tips for Skin Care")}
          {renderTabButton("diet", "Tips for Diet")}
          {renderTabButton("hairCare", "Tips for Hair Care")}
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabData[activeTab]?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Footer Banner + Disclaimer */}
      <div className="mt-8">
        <img
          src="/assets/Assets/Amla/AMLA POWEDER POSTERS BANNER_Vegan Circle Green.png"
          alt="Amla Powder Banner"
          className="w-full rounded-lg"
          loading="lazy"
        />
        <p className="mt-2 text-sm text-gray-800">
          <span className="font-semibold">Disclaimer:</span> Use Amla Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
        </p>
      </div>
    </div>
  );
};

export default AmlaPowder;
