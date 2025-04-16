import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';

const PoojaItmes = () => {
  const products = [
    {
      id: 14,
      link: '/products/cow-ghee-diya',
      img: '/assets/Assets/cow/cow gheediya 2.jpg',
      title: 'Handmade Cow Ghee Diya for Sacred Pooja and Ceremonies',
      description: 'Our cow ghee diya brings sacred light to your space, perfect for puja, festivals, and creating an uplifting atmosphere.',
      updateInfo: 'Click here to Learn Our Tips',
      buyLink: 'https://revaais.com/products/cow-ghee-batti-cotton-wick-organic-handcrafted-non-toxic-puja-items-ghee-wicks-for-pooja-long-lasting-aromatic-ghee-diya-wicks-for-pooja-eco-conscious-clean-burning-pack-of-50?_pos=15&_sid=5edfdd030&_ss=r',
    },
    {
      id: 15,
      link: '/products/round-cotton-wick',
 img:'/assets/Assets/Round/Roundwick2.jpg',
      title: 'Round Cotton Wick with Brass Holder',
      description: 'Traditional brass diya wick holder with cotton wicks – ideal for steady and clean-burning oil lamps.',
      updateInfo: 'Click here to Learn Our Tips',
      buyLink: 'https://revaais.com/products/round-cotton-wick-with-brass-wick-holder-traditional-brass-diya-wick-holder-with-cotton-wick-perfect-cotton-wick-with-brass-holder-for-oil-lamps-diyas-pack-of-500?_pos=17&_sid=5edfdd030&_ss=r',
    },
    {
      id: 16,
      link: '/products/long-cotton-wick',
      img:  '/assets/Assets/long/long-cotton-wick2.jpg',
            title: 'Premium Long Cotton Wick with Brass Holder',
      description: 'Luxury organic cotton wicks for pooja thali – decorative, long-lasting, and eco-conscious.',
      updateInfo: 'Click here to Learn Our Tips',
      buyLink: 'https://revaais.com/products/premium-long-cotton-wick-with-two-brass-wick-holder-for-pooja-items-luxury-organic-cotton-wicks-for-puja-thali-pooja-wick-set-200-pieces-decorative-and-clean-burning?_pos=14&_sid=5edfdd030&_ss=r',
    },
    {
      id: 17,
      link: '/products/pujan-clay-ghee-diya',
 img:'/assets/Assets/poojan clay/pujan-clay3.jpg',
      title: 'Handcrafted Pujan Clay Diya (Set of 15)',
      description: 'Eco-friendly homemade diya with premium cow ghee wick for spiritual rituals and religious ceremonies.',
      updateInfo: 'Click here to Learn Our Tips',
      buyLink: 'https://revaais.com/products/handcrafted-pujan-clay-diya-set-of-15-eco-friendly-homemade-diya-with-premium-cow-ghee-wick-for-spiritual-rituals-and-religious-ceremonies-meditation?_pos=19&_sid=5edfdd030&_ss=r',
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-16 py-8 text-justify">
      <p className="text-base md:text-lg mb-6 leading-relaxed">
        Discover our thoughtfully curated <strong>Pooja Essentials</strong> Collection, designed to elevate your spiritual rituals with purity and tradition. From handmade Pooja Clay Diyas that illuminate your sacred spaces to Cow Ghee Diyas that bring a divine touch to your prayers, we offer products crafted with care and authenticity. Our Long Cotton Wicks and Round Cotton Wicks ensure steady and lasting flames, making them perfect for every ceremony. Experience the essence of devotion with these high-quality, eco-friendly essentials tailored to enhance your pooja experience.
      </p>


      <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Link to={product.link}>
              <img src={product.img} alt={product.title} className="w-full h-85 object-cover" loading="lazy" />
            </Link>
            <div className="p-5">
              <h2 className="text-lg font-bold mb-2 text-gray-900">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              {/* <p className="text-sm text-blue-600 flex items-center mb-4">
                <Link to={product.link} className="hover:underline">
                  {product.updateInfo}
                </Link>
                <FaArrowRight className="ml-2 text-blue-500" size={12} />
              </p> */}
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

export default PoojaItmes;
