import { Link } from "react-router-dom";
import { FaCartPlus, FaArrowRight } from "react-icons/fa";
import { featuredProducts } from "../Components/Data";

const FeaturedCollection = () => {
  return (
    <section className="mx-auto px-6 sm:px-6 py-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-center sm:text-left">Our Collection</h2>
        <Link to="/products" className="text-yellow-600 font-medium hover:underline">
          See All Products
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {featuredProducts.map((product) => {
          const { id, name, img, badge, rating, route, updateInfo, price, buyLink } = product;

          return (
            <div
              key={id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              {/* Badge */}
              {badge && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded z-10">
                  {badge}
                </span>
              )}

              {/* Image Section */}
              <div className="relative group">
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 backdrop-blur-md bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={route}
                    className="bg-white text-black px-4 py-2 rounded shadow hover:bg-green-600 hover:text-white transition"
                  >
                    Quick View
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <Link to={route}>
                  <h5 className="text-lg font-bold text-gray-800 hover:text-green-600 transition duration-200">
                    {name}
                  </h5>
                  <div className="flex items-center text-yellow-400 mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>{i < rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </Link>

                {/* Update Info */}
                <p className="text-sm text-gray-500 mt-2">
                  <Link
                    to={route}
                    className="flex items-center gap-1 hover:text-blue-600 transition hover:underline"
                  >
                    {updateInfo} <FaArrowRight size={12} />
                  </Link>
                </p>

                {/* Price & Buy Button */}
                <p className="text-yellow-600 text-lg font-semibold mt-2">{price}</p>
                <Link to={buyLink} target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 inline-flex items-center gap-2 justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full">
                    <FaCartPlus /> Buy Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCollection;
