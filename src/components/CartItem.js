import React from 'react';
import { useCart } from './CartContext';

function CartItem({ id, img, title, price, quantity }) {
  const { dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const adjustQuantity = (id, change) => {
    dispatch({ type: 'ADJUST_QUANTITY', payload: { id, change } });
  };

  return (
    <div className="w-[90vw] max-w-[800px] h-[120px] rounded-lg mx-auto my-4 grid grid-cols-[80px_2fr_1fr_1fr_60px] items-center text-base font-medium p-3 shadow-md bg-white gap-4 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="w-15 h-15 flex justify-center items-center bg-white overflow-hidden rounded-lg">
        <img src={img} alt={title} className="w-15 h-15 object-cover rounded-lg" />
      </div>
      <div className="text-sm text-gray-800 text-left">{title}</div>
      <div className="text-base font-bold text-green-600">${price.toFixed(2)}</div>
      <div className="flex items-center justify-between">
        <button
          className="bg-gray-300 text-white px-3 py-1 rounded-md font-bold cursor-pointer transition-colors duration-300 hover:bg-gray-400 disabled:opacity-50"
          onClick={() => adjustQuantity(id, -1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="mx-3 text-sm text-gray-800">{quantity}</span>
        <button
          className="bg-gray-300 text-white px-3 py-1 rounded-md font-bold cursor-pointer transition-colors duration-300 hover:bg-gray-400"
          onClick={() => adjustQuantity(id, 1)}
        >
          +
        </button>
      </div>
      <div
        className="text-red-500 cursor-pointer text-sm transition-colors duration-300 hover:text-red-600"
        onClick={() => removeFromCart(id)}
      >
        Remove
      </div>
    </div>
  );
}

export default CartItem;
