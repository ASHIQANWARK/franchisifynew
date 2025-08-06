import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrLeakage from "../assets/images/dr leakage.jpg";
import constructionfranchise from "../assets/images/construction.jpg";
import Energia from "../assets/images/energia.jpg";
import Cm from "../assets/images/crysta.jpg";
import ED from "../assets/images/Ela.jpg";
import ACPL from "../assets/images/aizam.jpg";
import CNA from "../assets/images/cnr.jpg";

const franchises = [
  {
    name: "Clay Courtyad",
    logo: CNA,
    investment:
      "Class A: ₹1.25 Lakhs - Virtual Office | Class B: ₹2 Lakhs - Without Interior | Class C: ₹7 Lakhs - With Interior",
    sqft: "180 - 200 sq.ft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2024,
    model: "FOCO",
    franchisees: 1,
    description:
      "Cocoon Natural Homes is a sustainable housing brand based in Kerala, dedicated to building eco-friendly homes using natural and locally sourced materials. With flexible investment models and a growing demand for green living, Cocoon empowers franchisees to contribute to a healthier environment while building a profitable business.",
  },
  {
    name: "Energia Solar Power Solutions Pvt Ltd",
    logo: Energia,
    investment: "Class A: ₹27.5 Lakhs | Class B: ₹11 Lakh | Class C: ₹6 Lakh",
    sqft: "100 - 300 sq.ft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2013,
    model: "FOCO",
    franchisees: 1,
    description:
      "Energia Solar Power Solutions Pvt Ltd is a leading solar energy company based in Kerala, India. We offer high-efficiency solar solutions including installations, consulting, and franchise partnerships. With a proven track record since 2013, Energia empowers local entrepreneurs to thrive in the clean energy revolution with flexible investment options and complete technical support.",
  },
  {
    name: "Crysta Modular",
    logo: Cm,
    investment: "₹40 Lakh",
    sqft: "1500 - 15000 sq.ft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2015,
    model: "FOCO",
    franchisees: 1,
    description:
      "Crysta Modular is a premium modular furniture and interior solutions provider from Kerala. With cutting-edge designs and scalable business models, Crysta offers franchisees a profitable opportunity in the rapidly growing home improvement and furniture sector. Their state-of-the-art modular units are tailored for residential, commercial, and institutional spaces.",
  },

  {
    name: "ELADecor",
    logo: ED,
    investment: "₹40 Lakh - ₹1 Crore",
    sqft: "2000 - 25000 sq.ft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2015,
    model: "FOCO",
    franchisees: 2,
    description:
      "ELADecor is a premium home interior and decor brand that specializes in turnkey design solutions, modular furniture, and customized home makeovers. With a legacy rooted in design excellence and precision craftsmanship, ELADecor empowers franchise partners to tap into the booming interior decor industry with high-quality products and comprehensive business support.",
  },

  {
    name: "Aizam Construction Pvt Ltd",
    logo: ACPL,
    investment: "₹7 - ₹8 Lakh",
    sqft: "200 sq.ft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2024,
    model: "FOCO",
    franchisees: 1,
    description:
      "Aizam Construction Pvt Ltd is a growing player in the civil and modular construction space, offering cost-effective and scalable infrastructure solutions. With expertise in residential, commercial, and prefabricated building projects, Aizam empowers franchise partners to tap into the fast-developing construction and real estate market with low setup costs and high operational support.",
  },
  {
    name: "Dr Leakage",
    logo: DrLeakage,
    investment: "₹5 Lakhs",
    sqft: "120 - 200 sq.ft",
    rating: "4.3★",
    origin: "Chennai",
    year: 2018,
    franchisees: 15,
    description:
      " Dr. Leakage is a leading waterproofing service provider in Tamil Nadu, India. We offer waterproof coating services and supply construction chemicals for different types of buildings. Our team of skilled professionals ensures you get the best solution for your needs. We provide a variety of waterproofing services for areas like terraces, walls, bathrooms, water tanks, and swimming pools. We use high-quality waterproofing chemicals made with Acrylic Polymer, a modified acrylic hybrid system that offers many benefits compared to other waterproofing materials.",
  },
];

const Constructions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${constructionfranchise})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Construction Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">
          Home
        </Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Construction</span>
      </div>

      {/* Franchise Cards */}
      <div className="px-4 py-8 space-y-6 max-w-6xl mx-auto">
        {franchises.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border flex flex-col md:flex-row items-start md:items-center gap-4 p-4 relative"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="w-24 h-24 object-contain rounded border bg-white"
            />

            {/* Info */}
            <div className="flex-1 space-y-1 text-sm text-gray-700">
              <h2 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h2>
              <div className="flex flex-wrap gap-2 items-center text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                  {item.rating} Google Ratings
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Verified Brand
                </span>
              </div>
              <p className="mt-2">{item.description?.slice(0, 100)}...</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-3 text-gray-600 text-xs">
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
                  <strong>Brand Origin:</strong> {item.origin}
                </div>
                <div>
                  <strong>Est. Year:</strong> {item.year}
                </div>
              </div>

              {/* Toggle Description */}
              {expandedIndex === index && (
                <div className="bg-gray-100 p-3 rounded mt-2 text-xs">
                  <p>{item.description}</p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-red-500 text-xs mt-2 underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-end justify-center ml-auto">
              <button
                onClick={() => toggleDescription(index)}
                className="text-sm text-blue-600 border border-blue-500 px-4 py-1 rounded hover:bg-blue-50"
              >
                {expandedIndex === index ? "Hide Details" : "View Details"}
              </button>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 mt-2 rounded"
              >
                Contact Brand
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constructions;
