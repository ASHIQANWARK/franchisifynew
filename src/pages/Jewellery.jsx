import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import goldfranchise from "../assets/images/jewellery.webp";
import BMA from "../assets/images/brahma.jpg";
import Agd from "../assets/images/appolo .jpg"

const franchises = [
  {
      name: "Brahma",
      logo: BMA,
      investment: "250 SQFT – ₹45–50 Lakhs || 250–1000 SQFT – ₹1 Cr and above",
      sqft: "250–1000 sq.ft",
      rating: "4.5★",
      origin: "Kerala",
      year: 2021,
      model: "FOCO",
      franchisees: 1,
      description:
        "Brahma Jewellery brings a luxurious retail experience rooted in tradition and elegance. With a strong presence in Kerala and growing nationwide appeal, it offers handcrafted collections that blend heritage with modern design. The franchise model ensures high returns, premium brand recognition, and full operational support, making it an ideal choice for entrepreneurs in the jewellery retail sector.",
    },
  {
  name: "Appolo Gold And Diamonds",
  logo: Agd,
  investment: "₹3 Cr",
  sqft: "500 sq.ft",
  rating: "4.5★",
  origin: "Kerala",
  year: 2022,
  model: "FOCO, Master Franchise",
  franchisees: 1,
  description:
    "Appolo Gold And Diamonds is a premium jewellery brand from Kerala, offering a luxurious retail experience with an exquisite collection of gold and diamond jewellery. With a focus on craftsmanship, trust, and customer satisfaction, the brand is expanding through FOCO and Master Franchise models, providing investors with a high-margin, well-supported opportunity in the luxury retail space.",
},

];

const Jewellery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#0b1120] text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${goldfranchise})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white font-serif">
         Jewellery Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-[#0e1334] border-b border-gray-800 text-sm text-gray-400">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-white font-semibold">Jewellery</span>
      </div>

      {/* Franchise Cards */}
      <div className="px-4 py-12 space-y-8 max-w-6xl mx-auto">
        {franchises.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border border-yellow-600 text-gray-200 rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-400 transition-all p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo */}
              <img
                src={item.logo}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-lg border border-gray-700 bg-gray-800 p-2"
              />

              {/* Info */}
              <div className="flex-1 space-y-3 text-sm">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-green-700/20 text-green-400 px-3 py-1 rounded-full">
                    ⭐ 4.5 Google Ratings
                  </span>
                  <span className="bg-blue-700/20 text-blue-400 px-3 py-1 rounded-full">
                    ✅ Verified Brand
                  </span>
                </div>
                <p className="text-gray-400">
                  {item.description?.slice(0, 100)}...
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 text-gray-300 text-sm">
                  <div>
                    <strong>Investment:</strong> {item.investment}
                  </div>
                  <div>
                    <strong>Space:</strong> {item.sqft}
                  </div>
                  <div>
                    <strong>Model:</strong> {item.model}
                  </div>
                  <div>
                    <strong>Franchisees:</strong> {item.franchisees}
                  </div>
                  <div>
                    <strong>Origin:</strong> {item.origin}
                  </div>
                  <div>
                    <strong>Est. Year:</strong> {item.year}
                  </div>
                </div>

                {/* Expanded Info */}
                {expandedIndex === index && (
                  <div className="bg-gray-800/70 p-4 rounded-xl mt-4 text-sm">
                    <p className="text-gray-300">{item.description}</p>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-red-400 underline mt-4 block text-sm"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-400 border border-blue-500 px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-all text-sm"
                >
                  {expandedIndex === index ? "Hide Details" : "View Details"}
                </button>
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-sm px-5 py-1.5 rounded-full shadow transition-all duration-200"
                >
                  Contact Brand
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Jewellery;
