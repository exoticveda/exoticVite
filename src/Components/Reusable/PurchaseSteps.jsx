import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const steps = [
  "Visit the Exotic Veda platform.",
  "Click on the 'Buy Now' button for your desired product.",
  "You will be redirected to Revaais — our official website.",
  "Add the product to cart and complete your purchase securely.",
];

const PurchaseSteps= () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2">
          How to Purchase Our Products
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          <span className="font-semibold text-green-600">Revaais</span> (<span>www.revaais.com</span>) is our official website.
          <br />
          <span className="font-semibold text-yellow-600">Exotic Veda</span> is currently a work-in-progress platform.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(activeStep / steps.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full bg-green-500 rounded-full"
        />
      </div>

      {/* Step Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={index < activeStep ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 transition-all duration-300 ${
              index < activeStep ? "hover:shadow-lg" : "opacity-30"
            }`}
          >
            <div className="flex justify-center mb-4">
              <FaCheckCircle
                className={`text-3xl ${
                  index < activeStep ? "text-green-500" : "text-gray-400"
                }`}
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Step {index + 1}
            </h4>
            <p className="text-sm text-gray-600">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PurchaseSteps;
