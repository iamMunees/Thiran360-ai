// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Make sure this path is correct
import { FiMenu, FiX } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart(); // 🛒 Get cart count

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-white font-medium text-lg items-center">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-blue-500 transition">Product</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">About</Link>
            </li>
            <li>
              <Link to="/like" className="hover:text-blue-500 transition">Task</Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="hover:text-blue-500 transition flex items-center">
                <FaShoppingCart className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-800 dark:text-white text-lg font-medium">
            <li>
              <Link to="/" onClick={toggleMenu} className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/product" onClick={toggleMenu} className="hover:text-blue-500 transition">Product</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="hover:text-blue-500 transition">About</Link>
            </li>
            <li>
              <Link to="/like" onClick={toggleMenu} className="hover:text-blue-500 transition">Task</Link>
            </li>
            <li className="relative">
              <Link to="/cart" onClick={toggleMenu} className="hover:text-blue-500 transition flex items-center">
                <FaShoppingCart className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
