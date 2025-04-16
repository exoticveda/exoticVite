import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaPinterestP, FaInstagram,
  FaFacebook, FaAmazonPay, FaYoutube, FaPaypal, FaCcVisa, FaCcMastercard,
  FaApple, FaGooglePay, FaPhone
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61555405733892', icon: <FaFacebook />, name: 'Facebook' },
    { href: 'https://www.instagram.com/exoticveda/', icon: <FaInstagram />, name: 'Instagram' },
    { href: 'https://www.youtube.com/@RevaaaisUS', icon: <FaYoutube />, name: 'YouTube' },
    { href: 'https://linktr.ee/Revaais_US', icon: <img src='' alt="Linktree" className="h-6 w-6" />, name: 'Linktree' },
  ];

  const footerSections = [
    {
      title: 'Company Information',
      links: [
        { name: 'Our Shop', path: 'https://revaais.com/' },
        { name: 'Address - 1001 S MAIN ST STE 500 KALISPELL, MT 59901', path: 'https://maps.app.goo.gl/vqpQwQxJdm5aj3nV6' },
        { name: 'support@exoticveda.com', path: 'mailto:support@exoticveda.com' },
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Shipping & Returns', path: '/return-policy' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Special Offers', path: '/product/special-offers/get-it' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Skincare Products', path: '/Skincaree-category' },
        { name: 'Haircare Products', path: '/category/haircare' },
        { name: 'Dietary Use Products', path: '/Dietry-Use-Category' },
        { name: 'Wellness', path: '/wellness' },
        { name: 'Pooja Essentials', path: '/Diya-Batti' },
      ]
    },
    {
      title: 'Additionals',
      links: [
        // { name: 'Search', path: '/Search' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
      ]
    },
  ];

  return (
    <footer className="bg-[#f5f5f5] text-gray-800 pt-12 pb-6 px-6 lg:px-20 border-t-4 border-gray-500">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-10">
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={link.path} className="hover:underline">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <h4 className="font-semibold mb-4">Exclusive Benefits</h4>
          <p className="mb-4 text-sm">
            Join us for deals, news, and events.
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter email here"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Submit
            </button>
          </div>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebookF className="hover:text-gray-600 cursor-pointer" />
            <FaTwitter className="hover:text-gray-600 cursor-pointer" />
            <FaPinterestP className="hover:text-gray-600 cursor-pointer" />
            <FaInstagram className="hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 text-sm border-t pt-4 border-gray-300">
        <div className="flex items-center gap-3">
          {socialLinks.map((link, i) => (
            <a href={link.href} key={i} target="_blank" rel="noopener noreferrer" className="text-lg">
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="tel:3126679634" className="flex items-center text-sm gap-1"><FaPhone /> 312667-9634</a>
        </div>

        <div className="flex items-center gap-2 text-lg">
          <FaApple className="text-[#A2AAAD]" />
          <FaGooglePay className="text-[#4285F4]" />
          <FaAmazonPay className="text-[#FF9900]" />
          <FaPaypal className="text-[#00308F]" />
          <FaCcVisa className="text-[#1A1F71]" />
          <FaCcMastercard className="text-[#EB001B]" />
        </div>
      </div>

      <div className="text-center mt-6 text-sm font-semibold">
        <p>© 2025, Revaais. All Rights Reserved.</p>
        <p>Powered by Revaais</p>
      </div>
    </footer>
  );
};

export default Footer;
