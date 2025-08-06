import React, { useState } from "react";
import { Link } from "react-router-dom";
import sib from "../assets/images/SIB.jpg";
import educationfranchise from "../assets/images/education franchise.jpeg";
import ccafe from "../assets/images/careercafe.jpg";
import ef from "../assets/images/edufriend.jpg";
import ACE from "../assets/images/ACE INDIA LOGO FINALE (1)_page-0001.jpg"
import EDX from "../assets/images/Ed.jpg";
import ABC from "../assets/images/abc.jpg";
import HBFX from "../assets/images/hbfx.jpg";

const franchises = [
  {
  name: "EDXERA",
  logo: EDX,
  investment: "₹70,000",
  rating: "4.5",
  description:
    "EDXERA is a fast-growing edtech franchise dedicated to making high-quality, affordable digital education accessible across India. With innovative online learning platforms, skill development courses, and a scalable FOCO model, EDXERA empowers franchisees to deliver future-ready education in both urban and rural markets.",
  model: "FOCO",
  franchisees: "1",
  origin: "Kerala",
  year: "2025",
},
{
  name: "ABC Institute of Skill",
  logo: ABC,
  investment: "₹20 Lakhs",
  sqft: "700 sq.ft",
  rating: "4.5",
  description:
    "ABC Institute of Skill is a premier vocational training and skill development franchise focused on empowering youth with industry-relevant competencies. Based in Tamil Nadu, the institute offers government-aligned certification programs and hands-on learning through a robust COCO model, making it an ideal opportunity for investors in the education and employment sector.",
  model: "COCO",
  franchisees: "1",
  origin: "Tamil Nadu",
  year: "2024",
},
{
  name: "HBFX",
  logo: HBFX,
  investment: "₹25-27 Lakhs",
  sqft: "900-1000 sq.ft",
  rating: "4.5",
  description:
    "HBFX is a professional trading institute based in Kerala, offering comprehensive training programs in forex, stock, and commodity markets. With a focus on real-time market strategies, risk management, and hands-on mentorship, HBFX equips students with the skills needed to succeed in financial trading. Its FOCO franchise model ensures operational support and strong returns in the growing financial education sector.",
  model: "FOCO",
  franchisees: "1",
  origin: "Kerala",
  year: "2025",
},
  {
    name: "ACE India Training & Services Pvt. Ltd",
    logo: ACE ,
    investment: "₹30 Lakhs",
    sqft: "1500 sq.ft",
    rating: "4.5",
    description: "ACE India Training & Services Pvt. Ltd is a reputed education franchise, known for delivering high-quality training programs since 2007. Headquartered in Ernakulam, it currently operates in Bangalore and continues to expand with a strong focus on educational excellence.",
    model: "Single Unit",
    franchisees: "1",
    origin: "Ernakulam",
    year: "2007",
  },
  {
    name: " Edufriend",
    logo: ef ,
    investment: "₹5 - ₹16 Lakhs",
    sqft: "800 - 1200 sq.ft",
    rating: "4.5",
    description: "A leading education franchise offering quality education in Kerala.",
    model: "Single Unit",
    franchisees: "2",
    origin: "Kerala",
    year: "2024",
  },
  {
    name: "Study In Bengaluru",
    logo: sib,
    investment: "₹10 - ₹15 Lakhs",
    sqft: "800 - 1200 sq.ft",
    rating: "4.5",
    description: "A leading education franchise offering quality education in Bangalore.",
    model: "Single Unit",
    franchisees: "2",
    origin: "Bengaluru",
    year: "2024",
  },
  {
    name: "Career Cafe",
    logo: ccafe,
    investment: "₹45 - ₹53 Lakhs",
    sqft: "2500 sq.ft",
    rating: "4.7",
    description: "A popular career counseling franchise with a strong network of experts.",
    model: "Master Franchise",
    franchisees: "1",
    origin: "Bengaluru",
    year: "2025",
  },
];

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${educationfranchise})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Education Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">
          Home
        </Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Education</span>
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
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
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

export default Education;
