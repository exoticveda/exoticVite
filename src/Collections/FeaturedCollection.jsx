import { Link } from "react-router-dom";
import { FaCartPlus, FaArrowRight } from "react-icons/fa";


const FeaturedCollection = () => {
  const featuredProducts = [

    {
      id: 1,
      name: "Beetroot Powder: Delicious Superfood for Glowing Skin & Diet Support",
      price: "$6.99",
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/beetroot-powder',
      price: "$6.99",
      updateInfo: 'Click here to Learn Our  Tips ',
      rating: 5,
      badge: "5% OFF",
      img: "/assets/Assets/beetroot/beetroot  powder  front.png",
    },
    {
      id: 2,
      name: "Pure Sandalwood Powder  Refresh,  Nourish Your Skin Naturally",
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/exotic-veda-sandalwood-powder?_pos=6&_sid=5edfdd030&_ss=r',
      route: '/products/sandalwood-powder',
      price: "$7.90",
      rating: 5,
      badge: "5% OFF",
      img: "/assets/Assets/sabdalwood/sandalwood Fornt.png ",
    },
    {
      id: 3,
      name: "Amla Powder: Natural Solution for Healthy Hair, Skin & Diet",
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=5edfdd030&_ss=r',
      route: '/products/amla-powder',
      price: "$7.99",
      rating: 4,
      badge: "Best Seller",
      img: '/assets/Assets/Amla/Amla Powderfront.png'
    },
    {
      id: 4,
      name: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
      price: "$7",
      rating: 5,
      badge: "Best Seller",
      img: "/assets/Assets/Aloe/Aloe vera  front.png",
      buylink: 'https://revaais.com/products/pure-aloe-vera-powder'
    },
    {
      id: 5,
      name: "Pure Shikakai Powder Promote Hair Growth and Scalp Health Naturally",
      img: "/assets/Assets/shikakipowder/Shikakai  Powder  Frontn.png",
      updateInfo: "Click here to Learn Our Tips",
      route: "/products/shikhakhai-powder",
      price: "$7",
      rating: 5,
      badge: "Best Seller",
      buyLink:
        "https://revaais.com/products/organic-shikakai-powder?_pos=10&_sid=5edfdd030&_ss=r",
    },
    ,
  ];

  return (
    <section className="mx-auto px-6 sm:px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-center sm:text-left">Our Collection</h2>
        <a href="/products" className="text-yellow-600 font-medium hover:underline">See All Products</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >


            {/* Badge */}
            {product.badge && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded z-10">
                {product.badge}
              </span>
            )}

            {/* Image + Quick View */}
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 backdrop-blur-md bg-white/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Link
                  to={product.route}
                  className="bg-white text-black px-4 py-2 rounded shadow hover:bg-green-600 hover:text-white transition"
                >
                  Quick View
                </Link>
              </div>
            </div>

            {/* Product Content */}
            <div className="p-4">
              <Link to={product.route}>
                <h5 className="text-lg font-bold text-gray-800 hover:text-green-600 transition duration-200">
                  {product.name}
                </h5>
                <div className="flex items-center text-yellow-400 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </Link>

              <p className="text-sm text-gray-500 mt-2">
                <Link
                  to={product.route}
                  className="flex items-center gap-1 hover:text-blue-600 transition hover:underline"
                >
                  {product.updateInfo} <FaArrowRight size={12} />
                </Link>
              </p>

              <p className="text-yellow-600 text-lg font-semibold mt-2">
                {product.price}
              </p>

              <Link to={product.buyLink} target="_blank" rel="noopener noreferrer">
                <button className="mt-3 inline-flex items-center gap-2 justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full">
                  <FaCartPlus /> Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
