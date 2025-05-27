import React from "react";
import { motion } from "framer-motion";
import homeImg from "../assets/homepage.webp";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between h-screen px-6 md:px-20 bg-white dark:bg-gray-900">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 max-w-xl text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Up to <span className="text-blue-500">60%</span> Off
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Grab the best deals on Clothing, Footwear & more. Limited time offers you don’t want to miss!
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="w-max px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg transition-all duration-300"
        >
          Explore More
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src={homeImg}
        alt="Hero"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md md:max-w-xl"
      />
    </div>
  );
};

export default Home;
