import React from 'react'

const Gallery = () => {
     return (

      <section className="py-6 hidden lg:block">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            id: 1,
            src: "/assets/Assets/Alumbar/Alumbarss.jpg",
            classes: "md:col-span-2 md:row-span-2",
            content: "Alum Bar Powder Minimize Pores and Soothe Skin Naturally",
            buyLink: 'https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=30940bafe&_ss=r?variant=48956892152129',
          },
          {
            id: 2,
src:'assets/Assets/Yuvprash/yuvprash.png',
            content: "Yuvprash Tablets by Exotic Veda – 100% Herbal Supplement for Immunity & Overall Wellness",
            buyLink: 'https://revaais.com/products/exotic-veda-yuvprash-tablets-vedic-chyawanprash-in-tablet-form-herbal-supplement',
          },
          {
            id: 3,
            src: "https://www.exoticveda.com/static/media/Skinrr%20scar%20treatment%20ans%20skincare%20exotic%20veda%20revaais.213564695b1a0dba3d30.png",
            content: "Skinrr+ Gel – 37 Natural Ingredients for Repair & Rejuvenation by Exotic Veda",
            link: "/product/skinrr-scar-treatment",
          },
          {
            id: 4,
            src: "https://www.exoticveda.com/static/media/Aloe%20vera%20%20front.6ee2c7779b1e647738d7.png",
            content: "Pure Aloe Vera Powder : Your Natural Solution for Skin and Hair Care",
            link: "/product/aloe-vera",
          },
          {
            id: 5,
            src: "https://www.exoticveda.com/static/media/Amla%20Powderfront.27adc5459c34d4e5113b.png",
            content: "Amla Powder: Natural Solution for Healthy Hair, Skin & Diet",
            link: "/product/amla-powder",
          },
          {
            id: 6,
            src: "https://www.exoticveda.com/static/media/Curry%20Front.b17b58c71e74bda431ab.png",
            content: "Curry Leaf Powder Strengthen Roots and Reduce Hair Loss Naturally",
            link: "/product/curry-powder",
          },
          {
            id: 7,
            src: "https://www.exoticveda.com/static/media/33.f8a7ecfc21a561328991.png",
            content: "Pure Henna Powder Nourish, Strengthen, and Color Your Hair Naturally",
            link: "/product/henna-Powder",
          },
          {
            id: 8,
            src: "https://www.exoticveda.com/static/media/lemonfront.8fc168ad4f15e76374de.jpg",
            content: "Lemongrass Powder: Natural Boost for Digestive Health & Wellness",
            link: "/product/lemongrass-Powder",
          },
          {
            id: 9,
            src: "https://www.exoticveda.com/static/media/Moringa%20Leaf%20%20(1).3837f013322cac602669.png",
            content: "Moringa Leaf Powder Natural Detox and Wellness Support for Vibrant Health",
            link: "/product/Moringa-powder",
          },
          {
            id: 10,
            classes: "md:col-span-2 md:row-span-2",
            src: "https://www.exoticveda.com/static/media/shilajitqq.183058abc3746738e119.png",
            content: "Premium Shilajit Resin | 100% Pure & Organic | Natural Energy & Stamina Booster (50g)",
            link: "/product/shilajit",
          },
          {
            id: 11,
            src: "https://www.exoticveda.com/static/media/Shikakai%20%20Powder%20%20Frontn.1615346ea72ef7ac21ce.png",
            content: "Pure Shikakai Powder Promote Hair Growth and Scalp Health Naturally",
            link: "/product/shikhakhai",
          },
          {
            id: 12,
            src: "https://www.exoticveda.com/static/media/yuvprash.68572f79aa9e5084377e.png",
            content: " Yuvprash Tablets by Exotic Veda – 100% Herbal Supplement for Immunity & Overall Wellness",
            link: "/product/Multani-Mitti",
          },
          {
            id: 13,
            src: "https://www.exoticveda.com/static/media/32.43a169797cb72d4bac7b.png",
            content: "Pure Multani Mitti by Exotic Veda: Detoxify, Purify, and Brighten Oily Skin",
            link: "",
          },
          {
            id: 14,
            src: "https://www.exoticveda.com/static/media/Tripahal%202%20copy.4b6964de1a966f7fdb6c.png",
            content: "riphala Powder Natural Detox and Wellness Support for Vibrant Health",
            link: "/product/Triphal-Power",
          },
          {
            id: 15,
            src: "https://www.exoticveda.com/static/media/jamunf.e8b1b276e0914dcb8edb.jpg",
            content: "jamun Seed Powder Promote Wellness with Natural Antioxidants and Nutrients",
            link: "/product/Jamunseed-Powder",
          },
          {
            id: 16,
            src: "https://www.exoticveda.com/static/media/sandalwood%20Fornt.7462220e1548530dca95.png",
            content: "Pure Sandalwood Powder Refresh, Nourish Your Skin Naturally",
            link: "/product/Sandalwood-Powder",
          },
          {
            id: 17,
            src: "https://www.exoticveda.com/static/media/Moringa%20Leaf%20%20(1).3837f013322cac602669.png",
            content: "Beetroot Powder: Delicious Superfood for Glowing Skin & Diet Support",
            link: "/product/Moringa-powder",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group rounded shadow-md aspect-square ${item.classes || ""}`}
          >
            <img
              src={item.src}
              alt={item.content}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
       <div className="absolute inset-0 bg-transparent md:bg-white/50 md:backdrop-blur-md flex flex-col items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300">
  <p className="text-md md:text-lg font-semibold mb-2 text-center text-black md:text-black">
    {item.content}
  </p>
  <a href={item.buyLink}>
    <button className="bg-black hover:cursor-pointer text-white px-4 py-2 text-sm rounded-full hover:bg-gray-800">
      Shop Now
    </button>
  </a>
</div>

          </div>
        ))}
      </div>
    </section>



  )
}

export default Gallery
