import React from "react";
import { motion } from "framer-motion";

// Import your images - replace these with your actual image paths
import franchiseModelImg from "../assets/images/Group 21.png";
import operationalStrategyImg from "../assets/images/Rectangle 6.png";
import profitabilityImg from "../assets/images/Rectangle 6 (1).png";
import marketInsightsImg from "../assets/images/Rectangle 6 (3).png";

const highlights = [
  {
    title: "Successful Franchise Models",
    description:
      "Designed to maximize your brand's potential and ensure sustainable growth.",
    image: franchiseModelImg,
  },
  {
    title: "Operational Strategies",
    description:
      "Providing step-by-step guidance to streamline your franchise operations.",
    image: operationalStrategyImg,
  },
  {
    title: "Profitability Focus",
    description:
      "Ensuring that expansion leads to tangible financial success.",
    image: profitabilityImg,
  },
  {
    title: "Market Insights",
    description:
      "Equipping franchisees with essential tools and industry knowledge.",
    image: marketInsightsImg,
  },
];

const WhyFranchisify = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with same style as Services */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background container */}
          <div className="bg-gray-200 rounded-b-3xl sm:rounded-b-4xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 w-full max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Why choose Franchisify
            </h2>
            
            {/* Subtitle/Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto italic">
              We focus on creating success stories rather than merely exchanging contracts.
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Feature Cards with Images */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center hover:scale-105 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image - Responsive sizing */}
              <div className="mb-2 sm:mb-3 md:mb-4 w-full h-28 xs:h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-1 sm:p-2"
                />
              </div>
              
              {/* Content with responsive text */}
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600 leading-relaxed sm:leading-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFranchisify;