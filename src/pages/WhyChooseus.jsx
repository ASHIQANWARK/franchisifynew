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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with same style as Services */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background container */}
          <div className="bg-gray-200 rounded-b-4xl p-6 sm:p-6 mb-6 w-full max-w-2xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Why choose Franchisify
            </h2>
            
            {/* Subtitle/Description */}
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto italic">
              We focus on creating success stories rather than merely exchanging contracts.
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Feature Cards with Images */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image - Full width within card */}
              <div className="mb-3 w-full h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              
              {/* Content with smaller text */}
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
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