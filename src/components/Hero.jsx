import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/Group 1.png";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
           
               Transforming Franchising
               <br></br> into the Future 
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-black max-w-2xl">
              The ultimate franchise growth platform, empowering businesses with
              structured solutions and AI-powered insights.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link to="/deservices">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-yellow-400 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg transition duration-300 hover:bg-yellow-400 hover:text-black"
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-700 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:from-orange-600 hover:to-orange-800 transition duration-300"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src={heroImage}
                alt="Franchise Platform"
                className="w-full h-auto rounded-lg "
              />
             
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;