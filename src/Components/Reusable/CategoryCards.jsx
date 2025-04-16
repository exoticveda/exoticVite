import { FaSpa, FaLeaf, FaAppleAlt, FaHeart } from 'react-icons/fa';
import { motion } from "framer-motion";
const categories = [
  { title: 'Puja Essentials', description: 'Decorative items for ceremonies', icon: FaSpa, color: 'text-yellow-500' },
  { title: 'Skin Care', description: 'Reveal Your Natural Beauty', icon: FaLeaf, color: 'text-green-500' },
  { title: 'Dietary Use', description: 'Healthy Choices, Happy You', icon: FaAppleAlt, color: 'text-red-500' },
  { title: 'Hair Care', description: 'Wellness for Healthy Hair', icon: FaHeart, color: 'text-pink-500' }
];

const CategoryCards = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ title, description, icon: Icon, color }, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transition duration-300">
            <Icon size={40} className={`mx-auto mb-4 ${color}`} />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-1 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default CategoryCards;
