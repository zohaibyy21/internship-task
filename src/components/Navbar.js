import React from "react";
import Cart from "../assets/icon/cart.png";
import { useCart } from "./CartContext";
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { state } = useCart();

  return (
    <div className="fixed top-0 left-0 w-full h-20 flex items-center justify-between bg-white shadow-md z-50 px-16 box-border md:px-5">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-black uppercase">ZABBY</span>
      </div>
      <div className="flex gap-8 md:gap-5">
        <Link to="/" className="text-base font-semibold text-black hover:text-blue-500 transition-colors duration-300">Home</Link>
        <Link to="/category/men" className="text-base font-semibold text-black hover:text-blue-500 transition-colors duration-300">Men</Link>
        <Link to="/category/women" className="text-base font-semibold text-black hover:text-blue-500 transition-colors duration-300">Women</Link>
        <Link to="/category/special" className="text-base font-semibold text-black hover:text-blue-500 transition-colors duration-300">Special</Link>
      </div>
      <div className="flex items-center gap-5">
        <button className="bg-black text-white px-4 py-2 rounded font-bold transition-colors duration-300 hover:bg-gray-800" onClick={() => navigate('/login')}>
          Login
        </button>
        <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
          <img src={Cart} alt="Cart" className="w-8 md:w-6" />
          <span className="absolute text-white text-xs font-medium bg-red-500 px-2 py-1 rounded-full -top-2 -right-2">
            {state.items.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
