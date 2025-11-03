import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

// Sample Testimonials Data
const testimonials = [
  {
    name: "Faisal",
    designation: "Founder, Kovai Rawuther Biriyani",
    feedback:
      "Working with Franchisify.in has been a game-changer for our franchise expansion. Their expert guidance on model development and lead generation helped us successfully scale our brand across multiple cities.",
  },
  {
    name: "Shefin",
    designation: "CEO, Study in Bengaluru",
    feedback:
      "Franchisify.in provided us with comprehensive legal and marketing support, making the process of franchising our education business smooth and efficient. Highly recommend their services!",
  },
  {
    name: "Hashim",
    designation: "CEO, Career Cafe",
    feedback:
      "The lead generation service and consultation sessions were particularly helpful in setting up our franchise model. Franchisify.in's support has been a great asset.",
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
    <div className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        <section className="relative bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 rounded-b-3xl sm:rounded-b-4xl p-4 sm:p-6 mb-4 sm:mb-6 w-full max-w-4xl mx-auto">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
                        What Our Client Says
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                        Real experiences from businesses that have grown with us.
                      </p>
                    </div>
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                  </motion.div>
                </div>
              </section>

        {/* ✅ Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-start mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                  <FaQuoteLeft className="text-white text-sm sm:text-base" />
                </div>
              </div>

              {/* Feedback Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-loose mb-6 sm:mb-8 italic">
                "{testimonial.feedback}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Testimonials;