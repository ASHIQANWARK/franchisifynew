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
      "Sahasra Ayurveda Pharmacy is a trusted Ayurvedic retail franchise offering a wide range of traditional medicines, herbal wellness products, and natural supplements. Rooted in Kerala’s rich Ayurvedic heritage, the brand combines ancient healing practices with modern retail convenience. With a FOCO model and low setup cost, it’s an ideal opportunity for entrepreneurs passionate about holistic healthcare.",
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
      "Sahasra Ayurveda Pharmacy is a trusted Ayurvedic retail franchise offering a wide range of traditional medicines, herbal wellness products, and natural supplements. Rooted in Kerala’s rich Ayurvedic heritage, the brand combines ancient healing practices with modern retail convenience. With a FOCO model and low setup cost, it’s an ideal opportunity for entrepreneurs passionate about holistic healthcare.",
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
    <div className="bg-white text-gray-100 min-h-screen font-sans">
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${wellness})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white font-serif">
          Healthcare Franchises
        </h1>
      </div>

      <div className="p-4 bg-[#0e1334] border-b border-gray-800 text-sm text-gray-400">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-white font-semibold">Healthcare</span>
      </div>

      <div className="px-4 py-12 space-y-8 max-w-6xl mx-auto">
        {franchises.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            key={index}
            className="bg-[#0F172A] border border-yellow-600 text-gray-200 rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-400 transition-all p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={item.logo}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-lg border border-gray-700 bg-gray-800 p-2"
              />

              <div className="flex-1 space-y-3 text-sm">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-green-700/20 text-green-400 px-3 py-1 rounded-full">
                    ⭐ {item.rating} Google Ratings
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
                    <strong>Model:</strong> {item.model}
                  </div>
                  <div>
                    <strong>Origin:</strong> {item.origin}
                  </div>
                  <div>
                    <strong>Est. Year:</strong> {item.year}
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="bg-gray-800/70 p-4 rounded-xl mt-4 text-sm">
                    <p className="mb-3 text-gray-300">{item.description}</p>

                    {item.tierInvestments && (
                      <div className="mb-3">
                        <h3 className="font-semibold text-yellow-400 border-b border-yellow-700 pb-1 mb-1">
                          Tier Investment:
                        </h3>
                        <ul className="list-disc ml-6 space-y-1 text-gray-300">
                          <li>Tier 1 Metro: {item.tierInvestments.Tier1}</li>
                          <li>Tier 2 Metro: {item.tierInvestments.Tier2}</li>
                          <li>Tier 3: {item.tierInvestments.Tier3}</li>
                          <li>Tier 4: {item.tierInvestments.Tier4}</li>
                        </ul>
                      </div>
                    )}

                    {item.masterFranchise && (
                      <div>
                        <h3 className="font-semibold text-yellow-400 border-b border-yellow-700 pb-1 mb-1">
                          Master Franchise:
                        </h3>
                        <ul className="list-disc ml-6 space-y-1 text-gray-300">
                          <li>State Level: {item.masterFranchise.State}</li>
                          <li>Zonal Level: {item.masterFranchise.Zonal}</li>
                        </ul>
                      </div>
                    )}

                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-red-400 underline mt-4 block text-sm"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>

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

export default Wellness;
