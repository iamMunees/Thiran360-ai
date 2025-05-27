import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Update the path if needed
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-white font-medium text-lg">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-blue-500 transition">Product</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">About</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
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
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
