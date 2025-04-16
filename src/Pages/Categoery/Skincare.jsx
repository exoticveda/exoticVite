import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaSun, FaSpa, FaCartPlus } from 'react-icons/fa';
import { products } from '../../Components/Data';


const Skincare = () => {
  return (
    <div className="text-justify">
      <img src="https://www.exoticveda.com/static/media/banner%20for%20skins%20care.aff16de0b005a18ed908.png" alt='exotic veda' className="w-full" loading="lazy" />

      <h2 className="text-center text-3xl font-semibold my-6">Embrace Natural Beauty with Exotic Veda</h2>

      {/* <img src='https://www.exoticveda.com/static/media/Skincare%20Beauty%20Product%20Features%20Banner%20Facebook%20Cover%20(6).05fe0346fe94e095617c.webp' alt='exotic veda banner' className="w-full my-4" /> */}

      <p className="max-w-4xl mx-auto px-4 text-lg leading-relaxed">
        In today's fast-paced world, the quest for healthy, glowing skin often leads us to a myriad of skincare products filled with chemicals and synthetic ingredients. However, the wisdom of ancient practices offers a refreshing alternative. Exotic Veda, a brand rooted in Ayurvedic traditions, brings you a range of skincare products harnessing the power of nature's finest ingredients.
      </p>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaLeaf className="text-green-600" /> Key Ingredients That Make a Difference</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Amla:</strong> A powerhouse of vitamin C, Amla helps combat free radicals, promotes collagen production, and enhances skin elasticity.</li>
          <li><strong>Sandalwood Powder:</strong> Known for its anti-inflammatory and antiseptic properties, sandalwood soothes irritated skin and reduces blemishes.</li>
          <li><strong>Turmeric:</strong> A skin brightener with anti-inflammatory and antibacterial properties, turmeric evens out skin tone.</li>
          <li><strong>Moringa Leaf Powder:</strong> Rich in vitamins and minerals, moringa nourishes the skin and fights signs of aging.</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaSpa className="text-pink-600" /> Creating Your Skincare Ritual</h3>
        <p className="mb-2">To truly experience the transformative effects of Exotic Veda, it's essential to adopt a dedicated skincare routine. Here’s a step-by-step guide:</p>
        <ul className="list-decimal pl-8 space-y-1">
          <li><strong>Cleanse:</strong> Start with a gentle cleanser.</li>
          <li><strong>Exfoliate:</strong> Use an exfoliating mask or scrub once or twice a week.</li>
          <li><strong>Tone:</strong> Apply a toner to balance your skin’s pH levels.</li>
          <li><strong>Treat:</strong> Use serums or oils that address specific skin concerns.</li>
          <li><strong>Moisturize:</strong> Lock in moisture with a nourishing moisturizer.</li>
          <li><strong>Sun Protection:</strong> Never skip sunscreen!</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaSun className="text-yellow-500" /> DIY Recipes with Exotic Veda Products</h3>
        <p className="mb-2">Enhance your skincare routine with simple DIY recipes:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li><strong>Amla Face Mask:</strong> Mix Amla powder with yogurt and honey.</li>
          <li><strong>Sandalwood and Turmeric Scrub:</strong> Combine sandalwood powder, turmeric, and milk.</li>
          <li><strong>Moringa Infused Oil:</strong> Infuse moringa leaves in a carrier oil.</li>
        </ul>
      </div>

      <h1 className="text-center text-2xl font-bold my-10">Explore Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        { products
  .filter((product) => product.categories && product.categories.includes('Skin'))
  .map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
            <Link to={product.link}>
              <img src={product.img} alt={product.title} className="w-full h-85 object-cover" loading="lazy" />
            </Link>
            <div className="p-4">
              <Link to={product.link}>
                <h5 className="text-lg font-bold text-gray-800 hover:text-green-600 transition duration-200">{product.title}</h5>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                <Link to={product.link} className="flex items-center gap-1 hover:text-blue-600 transition">
                  {product.updateInfo} <FaArrowRight size={12} />
                </Link>
              </p>
              <>{product.price}</>
              <Link to={product.buyLink}>
                <button className="mt-3 inline-flex items-center gap-2 justify-center  bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full">
                  <FaCartPlus /> Buy Now</button>
              </Link>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skincare;
