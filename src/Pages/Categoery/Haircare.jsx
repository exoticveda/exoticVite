import React from 'react'
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../../Components/Data';
// export const products = [


//   {
//     id: 1,
//     link: '/products/aloevera-powder',
//     img: '/assets/Assets/Aloe/Aloe vera  front.png',
//     title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
//     description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
//     updateInfo: ' Click here to Learn Our  Tips  ',
//     buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
//     route: '/products/aloevera-powder',
//     price: "$7",
//     categories: ['Hair', 'Skin', 'Diet'],
//   },

//   {
//     id: 2,
//     link: '/products/amla-powder',
//     img: '/assets/Assets/Amla/Amla Powderfront.png', title: 'Amla Powder: Natural Solution for Healthy Hair, Skin & Diet',
//     description: 'Boost your skin and hair care with pure Amla Powder, rich in Vitamin C. Ideal for enhancing natural radiance and promoting healthy hair growth',
//     updateInfo: 'Click here to Learn Our  Tips ',
//     buyLink: 'https://revaais.com/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=5edfdd030&_ss=r',
//     route: '/products/amla-powder',
//     price: "$7",
//     categories: ['Hair', 'Skin', 'Diet'],
//   },
//   {
//     id: 3,
//     link: '/products/curry-leaf-powder',
//     img: '/assets/Assets/curryleaf/Curry Front.png',
//     title: 'Curry Leaf Powder   Strengthen Roots and Reduce Hair Loss Naturally',
//     description: 'Boost your hair health with our natural Curry Leaf Powder. It helps reduce hair fall, promotes growth, and adds shine to your hair.',
//     updateInfo: 'Click here to Learn Our  Tips ',
//     buyLink: 'https://revaais.com/products/exotic-veda-curry-powder-organic-curry-powder?_pos=3&_sid=5edfdd030&_ss=r',
//     route: '/products/curry-leaf-powder',
//     price: "$7",
//     categories: ['Hair', 'Skin', 'Diet'],
//   },
//   {
//     id: 4,
//     link: '/products/henna-powder',
//     img: '/assets/Assets/hennapowder/Henna Powder .png',
//     title: 'Pure Henna Powder   Nourish, Strengthen, and Color Your Hair Naturally',
//     description: 'Enhance your hair’s health and color with our pure Henna Powder. It provides a natural tint, conditions hair, and promotes a healthy scalp',
//     updateInfo: 'Click here to Learn Our  Tips ',
//     buyLink: 'https://revaais.com/products/exotic-veda-organic-henna-powder-100-natural-hair-dye-from-rajasthan-india-lawsonia-inermis-non-gmo-deep-brown-100g?_pos=11&_sid=5edfdd030&_ss=r',
//     route: '/products/henna-powder',
//     price: "$7",
//     categories: ['Hair',],
//   },



//   {
//     id: 5,
//     link: '/products/shikhakhai-powder',
//     img: '/assets/Assets/shikakipowder/Shikakai  Powder  Frontn.png',
//     title: 'Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally',
//     description: 'Shikakai Powder is a natural hair cleanser that strengthens roots, promotes growth, and adds shine while gently nourishing your scalp and hair',
//     updateInfo: 'Click here to Learn Our  Tips ',
//     buyLink: 'https://revaais.com/products/organic-shikakai-powder?_pos=10&_sid=5edfdd030&_ss=r',
//     route: '/recipe-aloe-vera',
//     price: "$7",
//     categories: ['Hair'],
//   },


// ];
const Haircare = () => {

  return (
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
    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link to={product.link}>
        <img src={product.img} alt={product.title} className="w-full h-64 object-cover" loading="lazy" />
      </Link>
      <div className="p-4">
        <Link to={product.link}>
          <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
        </Link>
        <Link to={product.link}>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        </Link>
        <p className="text-sm text-gray-500">
          <Link to={product.link} className="inline-flex items-center">
            {product.updateInfo} <FaArrowRight className="ml-2 text-blue-500" size={12} />
          </Link>
        </p>
        <>{product.price}</>
        <Link to={product.buyLink}>
          <button className="mt-3 inline-flex items-center gap-2 justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full">
            <FaCartPlus /> Buy Now
          </button>
        </Link>
      </div>
    </div>
))}

        </div>
      </div>
    </div>
  )
}

export default Haircare
