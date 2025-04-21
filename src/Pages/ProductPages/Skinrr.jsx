import React, { useState } from 'react';
import Product from './Product';
import { ShikaahairCareRecipes } from '../../Components/Data';
import { RecipeCard } from './RecipeCard';
const Skinrr = () => {
    const [activeTab, setActiveTab] = useState('skinCare');
    const images = [
        '/assets/Assets/Skinrr/Skinrr scar treatment ans skincare exotic veda revaais.png',
        '/assets/Assets/Skinrr/Skinrr front and back.png',
        '/assets/Assets/Skinrr/Benefits Of skinrr exotic veda.png',
        '/assets/Assets/Skinrr/Skinrruses.png',
        '/assets/Assets/Skinrr/Skinrrr image.png',
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div>
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
                    <div className="w-full md:w-1/2">
                        <Product productId="skinrr" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skinrr
