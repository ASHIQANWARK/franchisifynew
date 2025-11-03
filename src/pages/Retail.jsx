import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import zearash from "../assets/images/Zerash.jpg";
import retailfranchise from "../assets/images/retail.jpg";
import GirLush from "../assets/images/girllush.png";
import camp from "../assets/images/camp.jpg";
import dlx from "../assets/images/dlx.jpg";

const franchises = [
  {
    name: "DLx Suits",
    logo: dlx,
    investment: "₹12 Lakhs",
    sqft: "300-500 sq.ft",
    rating: "4.5★",
    origin: "Tamil Nadu",
    year: 2023,
    model: "FOCO",
    franchisees: 3,
    description: "DLx Suits is a premium menswear brand offering a curated range of stylish, tailored suits and formal wear. With a focus on elegance, modern design, and customer satisfaction, DLx Suits provides a strong business opportunity for those looking to invest in the growing fashion retail segment.",
  },
  {
    name: "GirLush",
    logo: GirLush,
    investment: "₹33 Lakhs",
    sqft: "250 - 350 sq.ft",
    rating: "4.7",
    description: "At Girlush, we are more than just a beauty and makeup store; we are a movement dedicated to empowering women. We believe in growth, leadership, and inspiration, creating endless opportunities for success.TheGirlush story began with Latha, whose dream was ignited in her father's humble grocery store. With unwavering support from her family, including her visionary daughter-in-laws, Dhanasree and Nandini Krishnan, this dream became a reality.Together, they became the soul of Girlush, shaping it into a trusted and growing brand with 9 successful outlets",
    model: "Master Franchise",
    franchisees: "3",
    origin: "Coimbatore",
    year: "2025",
  },
];

const Retail = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Modern Header Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Retail Franchises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover premium retail franchise opportunities in fashion, beauty, and lifestyle
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-8 rounded-full"
          />
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Retail Franchises</span>
          </div>
        </div>
      </nav>

      {/* Franchise Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {franchises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-center">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            {item.name}
                          </h2>
                          
                          {/* Rating Badge */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                              {item.rating} Rating
                            </span>
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                              Verified Brand
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {expandedIndex === index
                              ? item.description
                              : `${item.description.slice(0, 120)}...`}
                          </p>

                          {/* Franchise Details Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Investment:</strong> {item.investment}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Space:</strong> {item.sqft || "Flexible"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Model:</strong> {item.model || "Standard"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Franchisees:</strong> {item.franchisees || "New"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Origin:</strong> {item.origin}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Since:</strong> {item.year}
                              </span>
                            </div>
                          </div>

                          {/* Expand/Collapse Button */}
                          {item.description.length > 120 && (
                            <button
                              onClick={() => toggleDescription(index)}
                              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors flex items-center gap-1"
                            >
                              {expandedIndex === index ? (
                                <>
                                  <span>Show Less</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  <span>Read More</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 lg:items-end">
                          <button
                            onClick={() => toggleDescription(index)}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm font-medium whitespace-nowrap"
                          >
                            {expandedIndex === index ? "Hide Details" : "View Details"}
                          </button>
                          <Link
                            to="/contact"
                            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium text-center whitespace-nowrap shadow-sm"
                          >
                            Contact Brand
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;