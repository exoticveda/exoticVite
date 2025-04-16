import React from 'react'
// import Carousel from './Carousel'
import CategoryCards from '../Components/Reusable/CategoryCards';
import ProductGrid from '../Components/Reusable/ProductGrid';
import Gallery from '../Components/Reusable/Gallery';

import WhyBeYoursSection from '../Components/Common/WhyBeYoursSection';
import Categories from '../Components/Common/Categories';
import TreatmentImageSection from '../Components/Reusable/TreatmentImageSection';
 import FeaturedCollection from '../Collections/FeaturedCollection';
import Carousel from '../Components/Common/Carousel';
import FAQ from '../Components/Common/FAQ';

const desktopImages = [
  'https://www.exoticveda.com/static/media/New%20Products%20.3a4f94879e1dbd652d0e.png',
  '/images/desktop2.jpg',
  '/images/desktop3.jpg'
];

const mobileImages = [
  'https://www.exoticveda.com/static/media/New%20Products%20.3a4f94879e1dbd652d0e.png',
  '/images/mobile2.jpg',
  '/images/mobile3.jpg'
];
const Home = () => {
  return (
    <div>
      <Carousel/>
      <Categories />
      <FeaturedCollection />
      <WhyBeYoursSection />
      <TreatmentImageSection />
      <section
        className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Truly love the skin you're in
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-600 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our vision is to give melanin rich skin the attention it deserves.
          </p>
          <p
            className="text-lg sm:text-xl text-gray-600 mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We don't want to just nurture your skin—we want you to discover the beauty that lies within.
          </p>
          <p
            className="text-xl sm:text-2xl font-semibold text-pink-700"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            ✨ Everyone needs a lil' Buttah – baby ✨
          </p>
        </div>
      </section>
      <Gallery />
      <FAQ/>
     
    </div>
  )
}

export default Home
