import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/Group 1.png";
import bgImage from "../assets/images/rm222-mind-26.jpg";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      {/* Background Image without fixed attachment */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-16 relative z-10 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 w-full">
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
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
              <Link to="/deservices" className="w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-auto border-2 border-yellow-400 text-black px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg transition duration-300 hover:bg-yellow-400 hover:text-black"
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/contact" className="w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-auto bg-gradient-to-r from-orange-500 to-orange-700 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:from-orange-600 hover:to-orange-800 transition duration-300"
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