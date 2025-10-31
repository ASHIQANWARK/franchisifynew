import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import your images from local assets
import franchiseModelImg from "../assets/images/Rectangle 250.png";
import legalSupportImg from "../assets/images/Rectangle 250 (3).png";
import leadGenerationImg from "../assets/images/Rectangle 250 (1).png";

const services = [
  {
    title: "Franchise Model Development",
    description:
      "We create structured financial models to help businesses expand efficiently",
    image: franchiseModelImg,
    id: "franchise-model-development",
  },
  {
    title: "Legal Support",
    description:
      "Our team ensures legal compliance and smooth operations for your franchise.",
    image: legalSupportImg,
    id: "legal-support",
  },
  {
    title: "Lead Generation & Franchise Selling",
    description:
      "We use marketing strategies to attract and convert potential franchises and connect business with the right franchise partner for seamless growth.",
    image: leadGenerationImg,
    id: "lead-generation",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/deservices");
  };

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading with clean background */}
        {/* Heading with clean background */}
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
              Services We Offer
            </h2>

            {/* Subtitle/Description */}
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive franchise solutions tailored for your business
              growth and success
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105 flex flex-col h-full w-80 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section - Fixed dimensions */}
              <div className="w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow italic text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Learn More Button - Centered below cards */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleLearnMore}
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 px-10 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
