import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemDetailPage from './pages/ItemDetailPage';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';

function NotFoundPage() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 block">Go back to Home</a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;