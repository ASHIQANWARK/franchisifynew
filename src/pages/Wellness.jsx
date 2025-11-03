import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import velby from "../assets/images/Velby logo.png";
import wellness from "../assets/images/wellness.jpg";
import kc from "../assets/images/Kc.jpg";
import sap from "../assets/images/sahasra.jpg";
import ska from "../assets/images/ska.jpg";

const franchises = [
  {
    name: "Shri Kerala Ayurveda",
    logo: ska,
    rating: "4.5",
    investment: "VAIDYASALA- ₹8-11 Lakhs || Chikitsalaya- ₹11,10,000 -16,50,000 Lakhs || Ayurveda Hospital - ₹22-33 Lakhs ",
    sqft: "VAIDYASALA-600-1200 sq.ft || Chikitsalaya - 1500-2000 sq.ft ||Ayurveda Hospital - 2000-3500 sq.ft",
    description:
      "Sahasra Ayurveda Pharmacy is a trusted Ayurvedic retail franchise offering a wide range of traditional medicines, herbal wellness products, and natural supplements. Rooted in Kerala's rich Ayurvedic heritage, the brand combines ancient healing practices with modern retail convenience. With a FOCO model and low setup cost, it's an ideal opportunity for entrepreneurs passionate about holistic healthcare.",
    model: "Master Franchise",
    origin: "TamilNadu",
    year: "2019",
    franchisees: 3,
  },
  {
    name: "Sahasra Ayurveda Pharmacy",
    logo: sap,
    rating: "4.5",
    investment: "₹8 Lakhs",
    sqft: "100-300 sq.ft",
    description:
      "Sahasra Ayurveda Pharmacy is a trusted Ayurvedic retail franchise offering a wide range of traditional medicines, herbal wellness products, and natural supplements. Rooted in Kerala's rich Ayurvedic heritage, the brand combines ancient healing practices with modern retail convenience. With a FOCO model and low setup cost, it's an ideal opportunity for entrepreneurs passionate about holistic healthcare.",
    model: "FOCO",
    origin: "Kerala",
    year: "2021",
    franchisees: 1,
  },
  {
    name: "Kayar Care",
    logo: kc,
    rating: "4.5",
    investment: "₹50 Lakhs - ₹55 Lakhs",
    sqft: "2000 sq.ft",
    description:
      "Kayar Care delivers compassionate and affordable medical services with a focus on preventive healthcare and community wellness. Their franchise model enables partners to create meaningful impact through a robust healthcare delivery framework.",
    model: "COCO",
    origin: "Mangalore",
    year: "2009",
    franchisees: 2,
  },
  {
    name: "Velby",
    logo: velby,
    rating: "4.5",
    tierInvestments: {
      Tier1: "₹33L - ₹38L (1000+ sq.ft)",
      Tier2: "₹23L - ₹28L (800+ sq.ft)",
      Tier3: "₹15L - ₹20L (500+ sq.ft)",
      Tier4: "₹12L - ₹17L (300+ sq.ft)",
    },
    masterFranchise: {
      State: "₹70L - ₹95L",
      Zonal: "₹1.75Cr - ₹1.96Cr",
    },
    description:
      "At Velby, we blend innovation with care to build a future-ready healthcare system. Our AI-powered platform delivers preventive care, smart diagnostics, and access to global healthcare—all under one digital umbrella. Join us as a Velby Franchise Partner and shape a purposeful business in a fast-growing sector.",
    model: "FOCO & MASTER FRANCHISEE",
    origin: "Kozhikode, Kerala",
    year: "2024",
  },
];

const Wellness = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleDescription = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

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
            Healthcare Franchises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform lives with premium healthcare, wellness, and medical franchise opportunities
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto mt-8 rounded-full"
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
            <span className="text-gray-900 font-semibold">Healthcare Franchises</span>
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
                              ⭐ {item.rating} Rating
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

                          {/* Basic Franchise Details */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Model:</strong> {item.model || "Standard"}
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
                            {item.investment && (
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                <span className="text-sm text-gray-700">
                                  <strong>Investment:</strong> {item.investment}
                                </span>
                              </div>
                            )}
                            {item.sqft && (
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                <span className="text-sm text-gray-700">
                                  <strong>Space:</strong> {item.sqft}
                                </span>
                              </div>
                            )}
                            {item.franchisees && (
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                <span className="text-sm text-gray-700">
                                  <strong>Franchisees:</strong> {item.franchisees}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Expand/Collapse Button */}
                          {item.description.length > 120 || item.tierInvestments || item.masterFranchise ? (
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
                          ) : null}
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

                      {/* Expanded Details */}
                      {expandedIndex === index && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-gray-700 mb-4">{item.description}</p>

                          {item.tierInvestments && (
                            <div className="mb-4">
                              <h3 className="font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-2">
                                Tier Investment Options:
                              </h3>
                              <ul className="space-y-1 text-sm text-gray-700">
                                <li className="flex justify-between">
                                  <span>Tier 1 Metro:</span>
                                  <span className="font-medium">{item.tierInvestments.Tier1}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Tier 2 Metro:</span>
                                  <span className="font-medium">{item.tierInvestments.Tier2}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Tier 3:</span>
                                  <span className="font-medium">{item.tierInvestments.Tier3}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Tier 4:</span>
                                  <span className="font-medium">{item.tierInvestments.Tier4}</span>
                                </li>
                              </ul>
                            </div>
                          )}

                          {item.masterFranchise && (
                            <div>
                              <h3 className="font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-2">
                                Master Franchise Options:
                              </h3>
                              <ul className="space-y-1 text-sm text-gray-700">
                                <li className="flex justify-between">
                                  <span>State Level:</span>
                                  <span className="font-medium">{item.masterFranchise.State}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Zonal Level:</span>
                                  <span className="font-medium">{item.masterFranchise.Zonal}</span>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
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

export default Wellness;