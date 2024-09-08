import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <Navbar />
      <div className="max-w-4xl w-full p-5">
        <div className="flex flex-col md:flex-row gap-5">
          <img src={item.image} alt={item.title} className="w-full md:w-1/2 h-auto object-cover" />
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="text-3xl font-bold mb-3">{item.title}</h1>
            <p className="text-lg mb-3">{item.description}</p>
            <p className="text-xl font-bold mb-3">${item.price.toFixed(2)}</p>
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 shadow-md hover:bg-blue-800 hover:shadow-lg"
              onClick={() => alert(`${item.title} added to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemDetail;
