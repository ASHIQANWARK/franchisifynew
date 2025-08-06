import React from "react";
import {
  FaBusinessTime,
  FaBalanceScale,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cardBg from "../assets/images/blue_abstract_lines_2.jpg"; // Ensure this is optimized

const services = [
  {
    title: "Franchise Model Development",
    description:
      "We create structured franchise models to help businesses expand efficiently.",
    icon: <FaBusinessTime className="text-blue-500" />,
    id: "franchise-model-development",
  },
  {
    title: "Legal Support",
    description:
      "Our team ensures legal compliance and smooth operations for your franchise.",
    icon: <FaBalanceScale className="text-green-500" />,
    id: "legal-support",
  },
  {
    title: "Lead Generation",
    description:
      "We use marketing strategies to attract and convert potential franchisees.",
    icon: <FaBullhorn className="text-yellow-500" />,
    id: "lead-generation",
  },
  {
    title: "Franchise Selling",
    description:
      "We connect businesses with the right franchise partners for seamless growth.",
    icon: <FaUsers className="text-purple-500" />,
    id: "franchise-selling",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (sectionId) => {
    navigate("/deservices");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="relative bg-white py-14 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight inline-block relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-[#fbbf24]">Services</span>
          <span className="block h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full" />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-3 text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          End-to-end solutions designed to fuel the success and scalability of your franchise.
        </motion.p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl shadow-md hover:scale-[1.03] transition-transform duration-300 border border-white/10 bg-cover bg-center bg-blend-overlay"
              style={{
                backgroundImage: `url(${cardBg})`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl mb-4 z-20">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white z-20">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-300 z-20">{service.description}</p>

              <button
                onClick={() => handleLearnMore(service.id)}
                className="mt-5 px-4 py-2.5 bg-[#fbbf24] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 z-20 text-sm sm:text-base"
              >
                Learn More
              </button>

              {/* Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-black/10 z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
