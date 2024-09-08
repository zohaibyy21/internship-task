import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import Footer from "../components/Footer";
import axios from "axios";
import Banner from "../assets/images/Banner.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function HomePage() {
  const [items, setItems] = useState([]);
  const [latestItems, setLatestItems] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setLatestItems(res.data.slice(-4));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`);
  };

  const handleItemClick = (id) => {
    navigate(`/item/${id}`); 
  };

  return (
    <div className="mt-20 flex flex-col items-center relative">
      <div className="relative w-full h-[600px] overflow-hidden">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black bg-opacity-50 p-5 rounded-lg max-w-4xl w-full">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="text-xl mt-2">Discover the latest trends and exclusive collections</p>
        </div>
      </div>

      <div className="py-10 px-5 text-center w-full">
        <h2 className="text-2xl font-bold mb-5">Latest Items</h2>
        <div className="flex justify-center gap-5 flex-wrap w-full">
          {latestItems.map((item) => (
            <Item
              key={item.id}
              Id={item.id}
              Img={item.image}
              Title={item.title}
              Price={item.price}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="pt-5 mx-5 w-full">
        <div className="flex justify-center gap-5 flex-wrap w-full">
          {items.map((item) => (
            <Item
              key={item.id}
              Id={item.id}
              Img={item.image}
              Title={item.title}
              Price={item.price}
              onClick={() => handleItemClick(item.id)} 
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
