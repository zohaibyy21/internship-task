import React from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const isEmpty = state.items.length === 0;

  const GoBack = () => {
    navigate("/");
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const totalCost = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="mt-24 text-center">
      <Navbar />
      <div className="py-2 text-2xl font-bold">Cart Page</div>
      <div className="mx-5 mt-5">
        {isEmpty ? (
          <div
            className="text-lg text-gray-600 text-center py-5 bg-gray-100 border border-dashed border-gray-300 rounded-lg cursor-pointer"
            onClick={() => {
              GoBack();
            }}
          >
            Your cart is empty. Start shopping to add items!
          </div>
        ) : (
          <>
            {state.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                onRemove={() => handleRemoveItem(item.id)} // Pass remove function
              />
            ))}
            <div className="mt-5">
              <div className="text-lg font-bold mb-2">Total Cost: ${totalCost.toFixed(2)}</div>
              <button
                className="mt-2 px-5 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button
                className="mt-5 px-5 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700"
                onClick={handleCheckout}
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
