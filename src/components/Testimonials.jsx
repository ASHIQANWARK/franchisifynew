import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

// Sample Testimonials Data
const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "Founder, Spice Haven",
    feedback:
      "Working with Franchisify.in has been a game-changer for our franchise expansion. Their expert guidance on model development and lead generation helped us successfully scale our brand across multiple cities.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Mehta",
    designation: "CEO, EduPlus",
    feedback:
      "Franchisify.in provided us with comprehensive legal and marketing support, making the process of franchising our education business smooth and efficient. Highly recommend their services!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Priya Desai",
    designation: "Co-founder, Green Thumb",
    feedback:
      "The lead generation service and consultation sessions were particularly helpful in setting up our franchise model. Franchisify.in’s support has been a great asset.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Vikram Sharma",
    designation: "Owner, Fitness Fusion",
    feedback:
      "The Elite Membership was exactly what we needed for our ambitious expansion plans. Their services have been instrumental in achieving our growth targets.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Arun Patel",
    designation: "Director, Tech Solutions",
    feedback:
      "Franchisify.in’s Premium Membership exceeded our expectations. Their customized marketing strategy and CRM setup significantly improved our franchise operations.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const Testimonials = () => {
  return (
    <div className="relative bg-gradient-to-b  from-blue-900 to-gray-900 py-24 px-6 overflow-hidden">
      {/* ✅ Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>
      <p className="text-center text-lg text-gray-300 mt-4">
        Real experiences from businesses that have grown with us.
      </p>

      {/* ✅ Scrolling Testimonials */}
      <motion.div className="mt-12 container mx-auto overflow-hidden relative">
        <motion.div
          className="flex space-x-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-black bg-opacity-10 backdrop-blur-lg p-6 w-80 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center border border-gray-500"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-blue-400 text-4xl mb-3" />
              <p className="italic text-gray-200 text-center">"{t.feedback}"</p>
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-lg"
                />
                <h4 className="font-semibold text-white mt-2">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.designation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
