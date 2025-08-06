import React, { useState } from "react";
import { Link } from "react-router-dom";
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
   description:"DLx Suits is a premium menswear brand offering a curated range of stylish, tailored suits and formal wear. With a focus on elegance, modern design, and customer satisfaction, DLx Suits provides a strong business opportunity for those looking to invest in the growing fashion retail segment.",
  },
  {
    name: "Camp Nou",
    logo: camp,
    investment: "₹50–60 Lakhs",
    sqft: "1000 sq.ft",
    rating: "4.5★",
    origin: "Kerala",
    year: 2016,
    model: "COCO",
    franchisees: 2,
    description:
      "Camp Nou offers a unique retail franchise experience focused on delivering exceptional customer service and modern store design. With strong brand value and curated retail offerings, it’s a great opportunity for entrepreneurs aiming to invest in a premium retail concept.",
  },

  {
    name: "Zerash",
    logo: zearash,
    investment: "₹38-53 Lakhs",
    sqft: "120 - 200 sq.ft",
    rating: "4.5",
    description:
      "Zerash offers a unique retail franchise experience with strong customer service.",
    franchisees: "15",
    origin: "kerala",
    year: "2023",
  },
  {
    name: "GirLush",
    logo: GirLush,
    investment: "₹33 Lakhs",
    sqft: "250 - 350 sq.ft",
    rating: "4.7",
    description:
      "At Girlush, we are more than just a beauty and makeup store; we are a movement dedicated to empowering women. We believe in growth, leadership, and inspiration, creating endless opportunities for success.TheGirlush story began with Latha, whose dream was ignited in her father’s humble grocery store. With unwavering support from her family, including her visionary daughter-in-laws, Dhanasree and Nandini Krishnan, this dream became a reality.Together, they became the soul of Girlush, shaping it into a trusted and growing brand with 9 successful outlets",
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
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${retailfranchise})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative text-3xl md:text-4xl text-white font-bold font-serif drop-shadow-lg">
          Retail Franchises
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 bg-white shadow text-gray-700 text-sm">
        <Link to="/" className="hover:text-orange-500 font-medium">
          Home
        </Link>
        <span className="mx-1"> / </span>
        <span className="font-semibold">Retail</span>
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

export default Retail;
