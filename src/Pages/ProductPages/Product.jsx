import React from 'react';
import { productData } from '../../Components/Data';
const Product  = ({ productId }) => {
  const product = productData[productId];
  if (!product) return <p>Product not found</p>;

  return (
    <div className="  lg:w-xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">


      <div className="p-6">
        <h2 className="text-xl font-bold font-serif mb-2">{product.name}</h2>

        <h3 className="font-semibold text-sm text-gray-700 mb-1">Benefits:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {product.description.slice(0, 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mt-4">
          <a
            href="https://revaais.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product ;
