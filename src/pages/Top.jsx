import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import your franchise images - replace with actual images
import franchise1 from "../assets/images/Kovai.png";
import franchise2 from "../assets/images/SIB.jpg";
import franchise3 from "../assets/images/careercafe.jpg";
import franchise4 from "../assets/images/Kc.jpg";
import franchise5 from "../assets/images/AR BRIYANI.jpg";

const franchises = [
  {
    id: 1,
    name: "Kovai Rawuther Biriyani",
    description: "Leading restaurant franchises with proven business models",
    image: franchise1,
    route: "/restaurant"
  },
  {
    id: 2,
    name: "Study in Bengaluru",
    description: "Educational franchises shaping future generations",
    image: franchise2,
    route: "/education"
  },
  {
    id: 3,
    name: "Kovai Rawuther Biriyani",
    description: "Leading restaurant franchises with proven business models",
    image: franchise5,
    route: "/restaurant"
  },
  {
    id: 4,
    name: "Career Cafe",
    description: "Successful retail franchise opportunities",
    image: franchise3,
    route: "/education"
  },
  {
    id: 5,
    name: "Kayar Care",
    description: "Growing health and wellness franchise sector",
    image: franchise4,
    route: "/wellness"
  }
];

const TopFranchise = () => {
  const navigate = useNavigate();

  const handleExplore = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading with same style as other sections */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background container */}
          <div className="bg-gray-100 rounded-b-4xl p-6 sm:p-6 mb-6 w-full max-w-2xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Top Selling Franchises
            </h2>
            
            {/* Subtitle/Description */}
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Explore the most successful franchise opportunities in the market
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Franchise Grid - 5 cards in a line */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {franchises.map((franchise, index) => (
            <motion.div
              key={franchise.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Franchise Image - Smaller */}
              <div className="h-32 overflow-hidden">
                <img
                  src={franchise.image}
                  alt={franchise.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Franchise Content - Compact */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 mb-2 text-center leading-tight">
                  {franchise.name}
                </h3>
                
                <p className="text-gray-600 text-xs mb-3 text-center leading-tight flex-grow">
                  {franchise.description}
                </p>

                <button
                  onClick={() => handleExplore(franchise.route)}
                  className="w-full bg-gray-900 text-white py-1.5 px-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-xs"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default TopFranchise;