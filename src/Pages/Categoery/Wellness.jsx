import React from 'react'
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import { products } from '../../Components/Data';
import { Link } from 'react-router-dom'
const Wellness = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold my-10">Explore Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {products
          .filter((product) => product.categories && product.categories.includes('Wellness'))
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
               
               </>
             );
           };

export default Wellness
