import React, { useState } from 'react';

const ReturnPolicy = () => {
  const [activeTab, setActiveTab] = useState('shipping');

  const renderContent = () => {
    if (activeTab === 'shipping') {
      return (
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Date - Sep 23, 2024</h2>
          <h2 className="text-lg font-semibold">1. Processing Time</h2>
          <p>
            All orders are processed within 4-5 business days (excluding weekends and holidays) after
            receiving your order confirmation email. You will receive another notification when your
            order has shipped.
          </p>

          <h2 className="text-lg font-semibold">2. Shipping Rates and Delivery Estimates</h2>
          <p>Shipping charges for your order will be calculated and displayed at checkout.</p>

          <h3 className="font-semibold">Domestic Shipping (within US):</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Standard Shipping:</strong> 7–14 business days.</li>
            <li><strong>Expedited Shipping:</strong> 5–7 business days.</li>
            <li><strong>Free Shipping:</strong> Orders above $35.</li>
          </ul>

          <h3 className="font-semibold">International Shipping:</h3>
          <p>
            We offer international shipping to select countries. Shipping charges and delivery
            estimates vary based on location.
          </p>

          <h2 className="text-lg font-semibold">3. Shipment Confirmation and Order Tracking</h2>
          <p>
            You'll receive a confirmation email with tracking info once your order ships.
          </p>

          <h2 className="text-lg font-semibold">4. Damages</h2>
          <p>
            ExoticVeda.com is not liable for products damaged/lost during shipping. Contact the carrier to file a claim.
          </p>

          <h2 className="text-lg font-semibold">5. Lost or Stolen Packages</h2>
          <p>
            ExoticVeda.com is not responsible for lost/stolen packages after confirmed delivery.
          </p>

          <h2 className="text-lg font-semibold">6. Returns Policy</h2>
          <p>
            See our <a href="/returns-policy" className="text-blue-600 underline">Returns Policy</a>.
          </p>

          <h2 className="text-lg font-semibold">7. Shipping Restrictions</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>No PO Box delivery.</li>
            <li>Restrictions may apply based on regulations.</li>
          </ul>

          <h2 className="text-lg font-semibold">8. Contact Information</h2>
          <p>
            Email us at <a href="mailto:support@revaais.com" className="text-blue-600 underline">support@revaais.com</a>.
          </p>

          <footer className="pt-6 text-sm text-gray-600">
            © 2024 Exotic Veda. All rights reserved.
          </footer>
        </div>
      );
    }

    if (activeTab === 'return') {
      return (
        <div className="p-4 space-y-4">
          <h1 className="text-xl font-bold">Return & Cancellation Policy</h1>
          <p>
            We want you to be completely satisfied with your purchase...
          </p>

          <h2 className="text-lg font-semibold">Return Policy</h2>
          <p>Return requests must be submitted within 7 days.</p>

          <h3 className="font-semibold">Process</h3>
          <p>
            Contact us at <a href="mailto:support@revaais.com" className="text-blue-600 underline">support@revaais.com</a> with order details.
          </p>

          <h3 className="font-semibold">Return Guidelines</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Address & item must be eligible for return.</li>
            <li>Self-return may be required if pickup is unavailable.</li>
            <li>Refunds to original or chosen payment method.</li>
          </ul>

          <h3 className="font-semibold">Condition of Items</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Must not be damaged or used.</li>
            <li>Correct product must be returned.</li>
            <li>Grocery seal must not be broken.</li>
          </ul>

          <h3 className="font-semibold">Refund</h3>
          <p>Refunds within 4–7 business days after return is processed.</p>

          <h2 className="text-lg font-semibold">Cancellation Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cancel before or after shipping.</li>
            <li>If shipped, refund after item returns to warehouse.</li>
            <li>100% refund guaranteed. No deductions.</li>
          </ul>

          <h2 className="text-lg font-semibold">Shipping Costs</h2>
          <p>Return shipping costs are the customer’s responsibility.</p>

          <h2 className="text-lg font-semibold">Contact</h2>
          <p>
            For help, email us at <a href="mailto:support@revaais.com" className="text-blue-600 underline">support@revaais.com</a>.
          </p>

          <footer className="pt-6 text-sm text-gray-600">
            © 2024 Exotic Veda. All rights reserved.
          </footer>
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === 'shipping' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveTab('shipping')}
        >
          Shipping Policy
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium transition ${
            activeTab === 'return' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveTab('return')}
        >
          Return & Cancellation Policy
        </button>
      </div>
      <div className="bg-white shadow rounded-lg">{renderContent()}</div>
    </div>
  );
};

export default ReturnPolicy;
