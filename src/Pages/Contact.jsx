import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // loader state

    const handleClear = (e) => {
      e.preventDefault();
      setName('');
      setPhone('');
      setEmail('');
      setReason('');
      setMessage('');
    };

    const handleSendMessage = (e) => {
      e.preventDefault();

      if (!name || !phone || !email || !reason || !message) {
        toast.error('Please fill in all fields before submitting!');
        return;
      }

      setLoading(true); // show loader

      emailjs
        .sendForm('service_2qgc2lp', 'template_peo6c8o', form.current, '77GhrP483V-tWB0LE')
        .then(
          (result) => {
            toast.success('Message sent successfully!');
            handleClear(e);
          },
          (error) => {
            toast.error(`Failed to send message: ${error.text}`);
          }
        )
        .finally(() => setLoading(false)); // hide loader
    };

  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-20">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <h2 className="text-xl text-center mb-6 text-gray-600">
          Get in Touch with Us Today – We're Here to Help!
        </h2>
        <p className="text-center text-gray-500 mb-4">
          At Exotic Veda, your satisfaction is our top priority. Whether you have a
          question about our products, need assistance with an order, or just want to
          share your feedback, we’re here to help. Please fill out the form below, and
          one of our team members will get back to you as soon as possible.
        </p>
        <p className="text-center text-sm text-gray-500">📍 1001 S MAIN ST STE 500 KALISPELL, MT 59901</p>
        <p className="text-center text-sm text-gray-500 mb-8">🕑 Our Team Will Respond Within 48 Hours</p>

        <form ref={form} onSubmit={handleSendMessage} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black"
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black"
          />

          <select
            name="user_reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring focus:ring-black"
          >
            <option value="">Select Reason for Contact</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Order Issue">Order Issue</option>
            <option value="Feedback">Feedback</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="user_message"
            placeholder="Message for Us"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-black"
          />

<div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'SEND MESSAGE'
              )}
            </button>

            <button
              onClick={handleClear}
              className="w-full sm:w-auto border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-200"
            >
              CLEAR MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
