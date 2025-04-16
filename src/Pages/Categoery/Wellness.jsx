import React from 'react'
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import { products } from '../../Components/Data';
import { Link } from 'react-router-dom'
const Wellness = () => {
  return (
  <>
    <h1 className="text-center text-2xl font-bold my-10">Explore Our Products</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
  { products
.filter((product) => product.categories && product.categories.includes('Wellness'))
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
  </>
  )
}

export default Wellness
