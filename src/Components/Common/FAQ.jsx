import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What products do you offer?",
            answer: "Exotic Veda offers a range of exotic and premium wellness products including herbal supplements, essential oils, and beauty products."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order through our website Revaais.com by adding products to your cart and proceeding to checkout. Follow the prompts to complete your purchase."
        },
        {
            question: "What are your shipping options?",
            answer: "We offer various shipping options, including standard and expedited shipping. Shipping costs and delivery times will be displayed during checkout."
        },
        {
            question: "Can I return a product?",
            answer: "Yes, we accept returns within 14 days of purchase. Please refer to our Return Policy page for more details on how to process a return."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team via email at support@revaais.com or through our contact form on the website."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
                        <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <h2 className="text-lg font-semibold">{faq.question}</h2>
                            <span className="text-2xl font-bold text-blue-500">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-3 text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
