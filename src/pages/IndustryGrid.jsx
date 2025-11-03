import React from "react";
import {
  FaStore,

  FaHeart,
  FaGem,
  FaUtensils,
  FaBicycle,
  FaBook,
  FaCar,
  FaHardHat,
  FaBullhorn,
  FaServer,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const industries = [
  { icon: <FaUtensils size={36} />, label: "Restaurant", route: "/restaurant" },
  { icon: <FaBook size={36} />, label: "Education", route: "/education" },
  { icon: <FaStore size={36} />, label: "Retail", route: "/retail" },
  { icon: <FaHardHat size={36} />, label: "Construction", route: "/construction" },

  { icon: <FaHeart size={36} />, label: "Health Care", route: "/wellness" },
  { icon: <FaGem size={36} />, label: "Jewellery", route: "/jewellery" },
  { icon: <FaBicycle size={36} />, label: "Sports" },
  { icon: <FaCar size={36} />, label: "Auto" },
  { icon: <FaBullhorn size={36} />, label: "Digital Marketing", route: "/digital" },
  { icon: <FaServer size={32} />, label: "IT Solutions", route: "/solutions" },
];

const IndustryGrid = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
              Franchise Categories
            </h2>
            
            {/* Subtitle/Description */}
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Explore diverse franchise opportunities across various industries
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Grid with icons only, no backgrounds */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleClick(item.route)}
              className={`flex flex-col items-center justify-center p-4 transition-all duration-300 ${
                item.route
                  ? "cursor-pointer hover:text-blue-500 hover:scale-105"
                  : "cursor-default"
              } text-gray-700`}
            >
              {/* Icon */}
              <div className="mb-2">
                {item.icon}
              </div>
              
              {/* Label */}
              <p className="text-sm md:text-base font-medium text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;