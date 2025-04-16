import { Link } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
const featuredProducts = [

  { id: 3, name: "Beetroot Powder: Delicious Superfood for Glowing Skin & Diet Support", price: "$25.00", img: "/assets/Assets/beetroot/beetroot  powder  front.png", buylink: 'https://revaais.com/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpSWEJTVDExOFowR1FQMVA0MUM2MTFHWg' },
  { id: 4, name: "Pure Sandalwood Powder  Refresh,  Nourish Your Skin Naturally", price: "$8.99", img: "/assets/Assets/sabdalwood/sandalwood Fornt.png ", buylink: 'https://revaais.com/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpSWEJUUTFTQzVWUzhYSlkyREJSU043Sg' },
  { id: 2, name: "Amla Powder: Natural Solution for Healthy Hair, Skin & Diet", buylink: 'https://revaais.com/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpSWEJGVkdNSFJUVE1FRTJLWUFaTjJZTg', price: "$25.00", img: '/assets/Assets/Amla/Amla Powderfront.png' },
  { id: 1, name: "Pure Shikakai Powder Promote Hair Growth and Scalp Health Naturally", price: "$15.99", img: "/assets/Assets/Aloe/Aloe vera  front.png", buylink: 'https://revaais.com/products/pure-aloe-vera-powder' },
  { id: 5, name: "Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally", price: "$6.99", img: "/assets/Assets/shikakipowder/Shikakai  Powder  Frontn.png ", buylink: 'https://revaais.com/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpSWEJWRzYzNUpUUzA4TTVFS0VQNUREOA' }
  ,
];

const FeaturedCollection = () => {
  return (
    <section className="  mx-auto px-6 sm:px-6  py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-center sm:text-left">Featured Collection</h2>
        <a href="/products" className="text-yellow-600 font-medium hover:underline">See All Products</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}

            className="group bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden rounded-md mb-3">
              <img
                src={product.img}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-yellow-600 text-sm font-medium mt-1">{product.price}</p>
            <Link to={product.buylink}>
              <button className="mt-3 inline-flex items-center gap-2 justify-center  bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full hover:cursor-pointer transition duration-300">
                <FaCartPlus /> Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
