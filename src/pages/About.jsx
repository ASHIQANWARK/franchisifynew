import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import missionImage from "../assets/images/Franchisify.in (1).png";
import visionImage from "../assets/images/why.jpg";
import missionSectionImage from "../assets/images/IMG14.jpg";
import CEOQuoteCard from "./Ceo";

const About = () => {
  return (
    <div id="about" className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">About Us</span>
          </nav>
        </div>
      </section>

      {/* Page Heading */}
      <section className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-b-4xl p-6 sm:p-6 mb-6 w-full max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                About Franchisify
              </h1>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                Your trusted partner in franchise development and business growth
              </p>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Intro Section - Left Image, Right Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={missionImage}
                  alt="About Franchisify"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-black text-lg leading-relaxed mb-4">
                  <strong className="text-gray-900">Franchisify</strong> is a premier franchise consulting and development platform dedicated to revolutionizing the franchising landscape in India. We serve as the bridge between innovative business concepts and ambitious entrepreneurs seeking proven business models.
                </p>
                
                <p className="text-black text-lg leading-relaxed">
                  We pride ourselves on our data-driven approach, leveraging market insights and industry trends to create franchise models that are not only profitable but also sustainable in the long run. Our comprehensive support system ensures that both franchisors and franchisees have the tools, knowledge, and resources needed to thrive in today's competitive business environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section - Left Content, Right Image */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              className="order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">
                  Our Vision
                </h2>
                <p className="text-black text-lg leading-relaxed mb-4 text-center">
                  <span className="text-yellow-300 font-semibold">Franchisify</span> envisions becoming the catalyst for India's entrepreneurial revolution by creating the most robust and dynamic franchise ecosystem in the country. We aim to be the definitive platform that transforms how businesses scale and how entrepreneurs succeed.
                </p>
                <p className="text-black text-lg leading-relaxed mb-4 text-center">
                  Our vision extends beyond mere business transactions - we see a future where franchising becomes the primary vehicle for economic empowerment, job creation, and regional development across India. We strive to build a network where every successful business concept can find its ideal expansion path, and every aspiring entrepreneur can access turnkey business opportunities with minimized risk.
                </p>
                
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={visionImage}
                  alt="Our Vision"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section - Left Image, Right Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={missionSectionImage}
                  alt="Our Mission"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">
                  Our Mission
                </h2>
                <p className="text-black text-lg leading-relaxed mb-4 text-center">
                  At <span className="text-green-300 font-semibold">Franchisify</span>, our mission is to democratize business ownership by making franchising accessible, transparent, and profitable for all stakeholders. We are committed to building the most comprehensive franchise development platform that serves both established brands and aspiring entrepreneurs.
                </p>
                <p className="text-black text-lg leading-relaxed mb-4 text-center">
                  We accomplish this through meticulous market research, data-driven strategy development, and personalized consulting services. Our mission encompasses creating standardized yet flexible franchise models, ensuring legal compliance, facilitating seamless onboarding processes, and providing continuous operational support throughout the franchise lifecycle.
                </p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CEOQuoteCard />
    </div>
  );
};

export default About;