import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Cards from '../script/card'; // your card data source

const Product = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-bold py-6 text-center text-gray-800">
        All Products
      </h1>

      <div className="bg-[#f5f9ff] py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Cards.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 border hover:border-cyan-500 hover:shadow-xl"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {brand.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{brand.offer}</p>

              {brand.actions?.map((action, btnIndex) => (
                <div key={btnIndex} className="flex gap-2">
                  <motion.a
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg hover:from-blue-600 hover:to-cyan-600"
                  >
                    {action.label}
                  </motion.a>
                  <button
                    onClick={addToCart}
                    className="px-3 py-2 text-sm font-medium text-cyan-600 border border-cyan-500 rounded-lg hover:bg-cyan-50"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
