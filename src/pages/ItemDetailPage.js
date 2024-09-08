import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../components/CartContext';
function ItemDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch item details.');
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (item) {
      const newItem = { id: item.id, img: item.image, title: item.title, price: item.price };
      dispatch({ type: 'ADD_TO_CART', payload: newItem });
      alert(`${item.title} added to cart!`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-24">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <div className="flex">
        <img src={item.image} alt={item.title} className="w-1/3" />
        <div className="ml-8">
          <p className="text-lg mb-2 font-semibold">${item.price}</p>
          <p>{item.description}</p>
          <button
            className="bg-black text-white py-2 px-4 mt-4 rounded"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
