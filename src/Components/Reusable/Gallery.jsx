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
            src: 'assets/Assets/Yuvprash/yuvprash.png',
            content: "Yuvprash Tablets by Exotic Veda – 100% Herbal Supplement for Immunity & Overall Wellness",
            buyLink: 'https://revaais.com/products/exotic-veda-yuvprash-tablets-vedic-chyawanprash-in-tablet-form-herbal-supplement',
          },
          {
            id: 3,
            src: 'assets/Assets/Skinrr/Skinrr scar treatment ans skincare exotic veda revaais.png',
            content: "Skinrr+ Gel – 37 Natural Ingredients for Repair & Rejuvenation by Exotic Veda",
            link: "/product/skinrr-scar-treatment",
          },
          {
            id: 4,
            src: '/assets/Assets/Aloe/Aloe vera  front.png',
            content: "Pure Aloe Vera Powder : Your Natural Solution for Skin and Hair Care",
            link: "/product/aloe-vera",
          },
          {
            id: 5,
            src: '/assets/Assets/Amla/Amla Powderfront.png',
            content: "Amla Powder: Natural Solution for Healthy Hair, Skin & Diet",
            link: "/product/amla-powder",
          },
          {
            id: 6,
            src: '/assets/Assets/Amla/Amla Powderfront.png', title: 'Amla Powder: Natural Solution for Healthy Hair, Skin & Diet',
            content: "Curry Leaf Powder Strengthen Roots and Reduce Hair Loss Naturally",
            link: "/product/curry-powder",
          },
          {
            id: 7,
            src: '/assets/Assets/hennapowder/Henna Powder .png',
            content: "Pure Henna Powder Nourish, Strengthen, and Color Your Hair Naturally",
            link: "/product/henna-Powder",
          },
          {
            id: 8,
            src: '/assets/Assets/Lemongrass/lemonfront.jpg',
            content: "Lemongrass Powder: Natural Boost for Digestive Health & Wellness",
            link: "/product/lemongrass-Powder",
          },
          {
            id: 9,
            src: '/assets/Assets/Moringa/Moringa Leaf  (1).png',
            content: "Moringa Leaf Powder Natural Detox and Wellness Support for Vibrant Health",
            link: "/product/Moringa-powder",
          },
          {
            id: 10,
            classes: "md:col-span-2 md:row-span-2",
            src: '/assets/Assets/Shilajit/shilajitqq.png',
            content: "Premium Shilajit Resin | 100% Pure & Organic | Natural Energy & Stamina Booster (50g)",
            link: "/product/shilajit",
          },
          {
            id: 11,
            src: '/assets/Assets/shikakipowder/Shikakai  Powder  Frontn.png',
            content: "Pure Shikakai Powder Promote Hair Growth and Scalp Health Naturally",
            link: "/product/shikhakhai",
          },
          {
            id: 12,
            src: 'assets/Assets/Yuvprash/yuvprash.png',
            content: " Yuvprash Tablets by Exotic Veda – 100% Herbal Supplement for Immunity & Overall Wellness",
            link: "/product/Multani-Mitti",
          },
          {
            id: 13,
            src: '/assets/Assets/multani/MultaniMirtti.png',
            content: "Pure Multani Mitti by Exotic Veda: Detoxify, Purify, and Brighten Oily Skin",
            link: "",
          },
          {
            id: 14,
            src: '/assets/Assets/triphala/Tripahal 2 copy.png',
            content: "Triphala Powder Natural Detox and Wellness Support for Vibrant Health",
            link: "/product/Triphal-Power",
          },
          {
            id: 15,
            src: '/assets/Assets/jamunseed/jamunf.jpg',
            content: "jamun Seed Powder Promote Wellness with Natural Antioxidants and Nutrients",
            link: "/product/Jamunseed-Powder",
          },
          {
            id: 16,
            src: '/assets/Assets/Shilajit/shilajitqq.png',
            content: "Pure Sandalwood Powder Refresh, Nourish Your Skin Naturally",
            link: "/product/Sandalwood-Powder",
          },
          {
            id: 17,
            src: "/assets/Assets/beetroot/beetroot  powder  front.png",
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
              loading="lazy"
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
