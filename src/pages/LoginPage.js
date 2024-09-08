import React, { useState } from "react";
import CoverImg from "../assets/images/coverImg.png";
import axios from "axios";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const data = {
        email: user,
        password: password,
      };
      const res = await axios.post("http://localhost:8080/login", data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        alert("Login Success");
        window.location.href = "/home";
      }
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-black text-center p-5">
        <div className="hero-section px-10">
          <div className="text-white text-4xl font-bold mb-2">Welcome to Zabby</div>
          <div className="text-white text-xl mb-5">Login with your credentials</div>
          <div className="login-form bg-white bg-opacity-80 p-5 rounded-lg shadow-md w-[90%] max-w-md mx-auto">
            <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setUser(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label htmlFor="password" className="block text-gray-800 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="submit-buttons flex flex-col gap-4 mt-4">
              <button
                className="py-3 bg-black text-white font-medium rounded shadow-md transition-colors duration-300 hover:bg-gray-800"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <button className="py-3 bg-black text-white font-medium rounded shadow-md transition-colors duration-300 hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}></div>
    </div>
  );
}

export default LoginPage;
