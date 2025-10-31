import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/Group 1.png";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight sm:leading-tight md:leading-tight">
              Transforming Franchising
              <br />
              into the Future
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-6 text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              The ultimate franchise growth platform, empowering businesses with
              structured solutions and AI-powered insights.
            </p>

            {/* CTA Buttons */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6">
              <Link to="/deservices" className="w-full xs:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full xs:w-auto border-2 border-yellow-400 text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg transition duration-300 hover:bg-yellow-400 hover:text-black"
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/contact" className="w-full xs:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full xs:w-auto bg-gradient-to-r from-orange-500 to-orange-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:from-orange-600 hover:to-orange-800 transition duration-300"
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
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
          >
            <div className="relative max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src={heroImage}
                alt="Franchise Platform"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;