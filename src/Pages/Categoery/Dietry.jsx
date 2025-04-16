import React from 'react';
import { FaArrowRight, FaLeaf, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../../Components/Data';

const Dietryuse = () => {

  return (
    <div className="bg-gray-50 pb-10">
      <img src='https://www.exoticveda.com/static/media/dietary%20use%20banner%20of%20exotic%20veda-01.22804dbb1f2a6de27bb5.png' alt="exotic veda" className="w-full object-cover max-h-[400px]" loading="lazy" />

      <h1 className="text-3xl font-bold text-center mt-6 text-green-700 flex items-center justify-center gap-2">
        <FaLeaf /> Explore Our Products
      </h1>

      <div className="max-w-7xl mx-auto px-4 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products
  .filter((product) => product.categories && product.categories.includes('Diet'))
  .map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <Link to={product.link}>
              <img
                src={product.img}
                alt={product.title}
                className="rounded-t-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <Link
                to={product.link}
                className="text-green-600 hover:underline text-sm flex items-center"
              >
                {product.updateInfo}
                <FaArrowRight className="ml-2" size={12} />
              </Link>
              <>{product.price}</>
              <Link
                to={product.buyLink}
                className="mt-4 inline-flex w-full items-center gap-2  justify-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
              >
                <FaCartPlus /> Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dietryuse;