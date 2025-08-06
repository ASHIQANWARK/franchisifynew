import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// ✅ Team Images
import shafi from "../assets/images/IMG_3596.png";
import jino from "../assets/images/jino-removebg-preview.png";
import jithin from "../assets/images/jithin.png";
import ashwath from "../assets/images/ashwath.png";

// ✅ Background Image
import bgSvg from "../assets/images/rm222-mind-26.jpg";

const teamMembers = [
  { name: "Shafi Shoukath", role: "Chairman", image: shafi },
  { name: "Jino Joseph", role: "Chief Executive Officer (CEO)", image: jino },
  { name: "Jithin Sivadas", role: "Brand Onboarding Manager (BOM)", image: jithin },
  { name: "Ashwath E", role: "Business Consultant Manager (BCM)", image: ashwath },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const Team = () => {
  return (
    <section
      className="py-20 overflow-hidden relative"
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0  z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-[#07293d] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-[#fbbf24]">Team</span>
        </motion.h2>

        {/* Underline */}
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full mx-auto mb-10" />

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-[#07293d] shadow-md rounded-xl text-center p-4 flex flex-col items-center justify-start"
            >
              {/* Image */}
              <div className="w-60 h-70 overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150")
                  }
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300 text-sm">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-3 mt-3">
                {[FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF].map(
                  (Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white hover:text-[#fbbf24] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
