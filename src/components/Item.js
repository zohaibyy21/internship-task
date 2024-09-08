import React from "react";
import PropTypes from "prop-types";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Item({ Id, Img, Title, Price, onClick }) {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const addToCart = (id, img, title, price) => {
    const newItem = { id, img, title, price };
    dispatch({ type: "ADD_TO_CART", payload: newItem });
    alert(`${title} added to cart!`);
  };

  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.length > 4 ? words.slice(0, 4).join(" ") + "..." : title;
  };

  return (
    <div
      className="m-5 w-56 rounded-lg bg-white shadow-lg transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl overflow-hidden cursor-pointer" // Add cursor-pointer for clickability
      onClick={() => {
        if (onClick) onClick();
        navigate(`/item/${Id}`);
      }}
    >
      <div className="h-40 flex justify-center items-center bg-white overflow-hidden relative">
        <img
          src={Img}
          alt={Title}
          className="max-w-full max-h-full transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-800 text-center mb-2">{truncateTitle(Title)}</p>
        <p className="text-xl font-bold text-green-600">${Price.toFixed(2)}</p>
      </div>
      <div className="flex justify-center p-2">
        <button
          className="bg-black text-white py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 shadow-md hover:bg-gray-800 hover:shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(Id, Img, Title, Price);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  Id: PropTypes.number.isRequired,
  Img: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Item;
