import React from 'react'
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../../Components/Data';

const Haircare = () => {
  return(
    <div className="text-justify">
      <img src='https://www.exoticveda.com/static/media/HAIRE%20CARE%20BANNNER.f21ac899c65a3d5ff23b.png' alt="exotic veda, organic, revaais, natural" className="w-full mb-6" loading="lazy" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-4">Unlocking Nature's Secrets: A Guide to Hair Care with Exotic Veda</h1>
        {/* <img src= '' alt="exotic veda banner" className="w-full mb-6" loading="lazy" /> */}

        <p className="mb-4">
          In a world where hair care often involves a plethora of products filled with chemicals, the journey to healthy hair can seem daunting. However, the ancient wisdom of Ayurveda offers a refreshing alternative. Exotic Veda, a brand inspired by the richness of Ayurvedic traditions, provides a range of hair care products that are both natural and effective. In this blog, we’ll explore the benefits of using Exotic Veda's hair care line and how to incorporate these powerful ingredients into your routine for vibrant, healthy hair.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">The Ayurvedic Approach to Hair Care</h2>
        <p className="mb-4">
          Ayurveda, a holistic system of medicine originating in India, emphasizes the importance of balance and harmony within the body. This philosophy extends to hair care, where the focus is on nourishing the scalp and hair with natural ingredients rather than relying on synthetic products that can cause more harm than good. Exotic Veda embraces this philosophy by crafting products that restore balance to your hair and scalp.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Key Ingredients for Luxurious Hair</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><strong>Amla (Indian Gooseberry):</strong> Rich in vitamin C and antioxidants, it helps strengthen hair follicles, promote hair growth, and prevent premature graying.</li>
          <li><strong>Brahmi:</strong> Strengthens hair roots, prevents hair fall, and promotes healthy growth.</li>
          <li><strong>Bhringraj:</strong> Known to prevent hair loss and enhance shine while soothing the scalp.</li>
          <li><strong>Shikakai:</strong> A natural cleanser that leaves hair soft and manageable.</li>
          <li><strong>Hibiscus:</strong> Promotes hair growth and prevents dandruff while enhancing shine.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">The Benefits of Choosing Exotic Veda</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Natural and Chemical-Free</li>
          <li>Sustainably Sourced</li>
          <li>Cruelty-Free</li>
          <li>Tailored for All Hair Types</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Creating Your Hair Care Ritual</h2>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li><strong>Pre-Wash Treatment:</strong> Use Exotic Veda’s hair oil enriched with Amla, Bhringraj, and Brahmi.</li>
          <li><strong>Gentle Cleansing:</strong> Cleanse your hair with Exotic Veda’s Shikakai Shampoo.</li>
          <li><strong>Conditioning:</strong> Follow up with a nourishing conditioner infused with Hibiscus and Amla.</li>
          <li><strong>Deep Conditioning:</strong> Treat your hair to a deep conditioning mask made from Moringa Powder and yogurt.</li>
          <li><strong>Styling:</strong> Use a leave-in conditioner or hair serum with natural oils.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-2">DIY Recipes with Exotic Veda Ingredients</h2>
        <ul className="list-disc list-inside mb-10 space-y-1">
          <li><strong>Amla Hair Rinse:</strong> Boil dried Amla in water and use as a final rinse.</li>
          <li><strong>Bhringraj Hair Pack:</strong> Mix Bhringraj powder with water, apply, and rinse.</li>
          <li><strong>Hibiscus Hair Oil:</strong> Infuse dried hibiscus flowers in coconut oil.</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10">Explore Our Products</h1>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products
  .filter((product) => product.categories && product.categories.includes('Hair'))
  .map((product) => (
    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl">

              <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:text-red-500 z-10">
         ❤️
       </button>

       {/* Badge */}
       {product.badge && (
         <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded z-10">
           {product.badge}
         </span>
       )}<div className="relative">
                   <img
                     src={product.img}
                     alt={product.title}
                     loading="lazy"
                     className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                   />
                   <div className="absolute inset-0 backdrop-blur-md bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                     <Link to={product.route} className="bg-white text-black px-4 py-2 rounded shadow hover:bg-green-600 hover:text-white transition">
                       Quick View
                     </Link>
                   </div>
                 </div>
               <div className="p-4">
                 <Link to={product.link}>
                   <h5 className="text-lg font-bold text-gray-800 hover:text-green-600 transition duration-200">{product.title}</h5>
                   <div className="flex items-center text-yellow-400 mb-2">
           {Array.from({ length: 5 }, (_, i) => (
             <span key={i}>{i < product.rating ? '★' : '☆'}</span>
           ))}
         </div>
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
       </div>
);
};

export default Haircare
