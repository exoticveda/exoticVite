import React from 'react';
import { productData } from '../../Components/Data';
import { Link } from 'react-router-dom';
import { FaLock, FaLeaf, FaShippingFast } from "react-icons/fa"
const Product = ({ productId }) => {
  const product = productData[productId];
  if (!product) return <p>Product not found</p>;

  return (
    <div className="  lg:w-xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">


      <div className="p-6">

      <h2 className="text-xl font-bold font-serif mb-2">{product.name}</h2>

<p className="text-yellow-600 text-lg font-semibold mt-1 bg-yellow-100 px-2 py-1 rounded-md shadow-sm inline-block">
  ₹{product.price}
</p>

{/* Trust Badges */}
<div className="flex items-center gap-6 mt-4">
  <div className="flex items-center gap-2">
    <FaLock className="text-green-600" />
    <span className="text-xs text-gray-700 font-medium">Secure Payment</span>
  </div>
  <div className="flex items-center gap-2">
    <FaLeaf className="text-green-500" />
    <span className="text-xs text-gray-700 font-medium">100% Natural</span>
  </div>
  <div className="flex items-center gap-2">
    <FaShippingFast className="text-blue-500" />
    <span className="text-xs text-gray-700 font-medium">Fast Delivery</span>
  </div>
</div>
        <h3 className="font-semibold text-lg text-gray-700 mb-1 mt-3">Benefits:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {product.description.slice(0, 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mt-4 text-center w-full">
          <Link to={product.link} className="inline-block   text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-black transition w-full">   Buy Now</Link>



        </div>
      </div>
    </div>
  );
};

export default Product;
