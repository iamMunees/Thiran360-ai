// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, cartCount } = useCart();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartCount === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4">
                <img src={item.logo} alt={item.name} className="h-12 w-12" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.offer}</p>
                </div>
              </div>
              <span className="text-sm text-gray-700">1 item</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
