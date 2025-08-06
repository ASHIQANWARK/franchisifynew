import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCogs,
  FaDollarSign,
  FaLightbulb,
} from "react-icons/fa";
import why from "../assets/images/why.jpg"; // Make sure this is compressed or in WebP

const highlights = [
  {
    title: "Successful Franchise Models",
    description:
      "Designed to maximize your brand's potential and ensure sustainable growth.",
    icon: <FaChartLine className="text-4xl text-[#fbbf24]" />,
  },
  {
    title: "Operational Strategies",
    description:
      "Providing step-by-step guidance to streamline your franchise operations.",
    icon: <FaCogs className="text-4xl text-[#fbbf24]" />,
  },
  {
    title: "Profitability Focus",
    description:
      "Ensuring that expansion leads to tangible financial success.",
    icon: <FaDollarSign className="text-4xl text-[#fbbf24]" />,
  },
  {
    title: "Market Insights",
    description:
      "Equipping franchisees with essential tools and industry knowledge.",
    icon: <FaLightbulb className="text-4xl text-[#fbbf24]" />,
  },
];

const WhyFranchisify = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white py-16 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${why})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay (less GPU intensive) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main Content */}
      <div className="relative max-w-7xl w-full mx-auto text-center z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why <span className="text-[#fbbf24]">Franchisify?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We focus on creating success stories rather than merely exchanging contracts.
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-gray-300 text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFranchisify;
