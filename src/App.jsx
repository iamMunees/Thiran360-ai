// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import LikeUnlike from './pages/LikeUnlike';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path='/like' element={<LikeUnlike />} />
         <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
