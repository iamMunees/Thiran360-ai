import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/AboutImg.webp'; // Update path if needed

const About = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay to darken the background for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 p-10 rounded-xl max-w-2xl mx-4 text-center shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed"
        >
          At <span className="font-semibold text-blue-600 dark:text-cyan-400">UniSync</span>, we believe shopping should be smart, simple, and fun.
          From fashion and electronics to everyday essentials, we bring you top deals and unbeatable value — all in one place. Join thousands
          of happy customers and make every purchase count.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
