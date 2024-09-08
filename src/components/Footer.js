import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-8 px-4 mt-16 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
        <div className="flex flex-wrap justify-center gap-5">
          <a href="/" className="text-white text-lg hover:text-gray-300" aria-label="Go to Home page">Home</a>
          <a href="/products" className="text-white text-lg hover:text-gray-300" aria-label="Go to Products page">Products</a>
          <a href="/about" className="text-white text-lg hover:text-gray-300" aria-label="Go to About Us page">About Us</a>
          <a href="/contact" className="text-white text-lg hover:text-gray-300" aria-label="Go to Contact page">Contact</a>
        </div>

        <div className="text-center my-5">
          <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
          <p className="mb-4">Enter your email for newsletters and promotional emails</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-52 border border-gray-300 rounded mr-2"
              aria-label="Newsletter email input"
            />
            <button
              className="bg-white text-black py-2 px-4 font-bold rounded transition-colors duration-300 hover:bg-gray-300"
              aria-label="Subscribe to Newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-4 my-5">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-gray-300" aria-label="Visit Facebook page">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-gray-300" aria-label="Visit Twitter page">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-gray-300" aria-label="Visit Instagram page">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-5">
        <p>
          <a href="/privacy" className="text-white hover:underline" aria-label="View Privacy Policy">Privacy Policy</a> | 
          <a href="/terms" className="text-white hover:underline" aria-label="View Terms of Service">Terms of Service</a>
        </p>
        <p className="mt-2">© 2024 Zabby. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
