import React from 'react';
import { FaLeaf, FaTruck, FaRecycle, FaShieldAlt } from 'react-icons/fa'; // Importing icons from react-icons

const WhyBeYoursSection = () => {
    return (
        <section className="py-16 px-4 sm:px-8 lg:px-24 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
                    Why Be Yours?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Clean Skincare */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaLeaf className="text-green-500 text-3xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800">Clean Skincare</h3>
                        <p className="text-gray-600 mt-2">
                            Clean and natural skincare with safe and transparent ingredients.
                        </p>
                    </div>

                    {/* European Delivery */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaTruck className="text-blue-500 text-3xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800">USA Delivery</h3>
                        <p className="text-gray-600 mt-2">
                            Fast delivery options with tracking. No import duties.
                        </p>
                    </div>

                    {/* Sustainability */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaRecycle className="text-yellow-500 text-3xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800">Sustainability</h3>
                        <p className="text-gray-600 mt-2">
                            Our signature shipping boxes are fully recyclable and biodegradable.
                        </p>
                    </div>

                    {/* Authorized Retailer */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaShieldAlt className="text-purple-500 text-3xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800">Authorized Retailer</h3>
                        <p className="text-gray-600 mt-2">
                            We are an authorized retailer for all the brands we carry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyBeYoursSection;
