import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaCrown,
  FaCheckCircle,
  FaUsers,
  FaExpand,
  FaFileContract,
  FaPalette,
  FaVideo
} from "react-icons/fa";

// Hero and content media imports
import heroVideo from "../assets/video/herovideo.mp4";
import strategyImg from "../assets/video/b4.jpg";
import designImg from "../assets/images/b1.jpg";
import legalImg from "../assets/video/b6.jpg";
import chartImage from "../assets/images/b3.jpg";
import lawimage from "../assets/video/b7.jpg";
import interiorImage from "../assets/video/b5.jpg";

// Franchise story videos
import video1 from "../assets/video/KOVAI.mp4";
import video2 from "../assets/video/vid4 (2).mp4";
import video3 from "../assets/video/AR Biriyani.mp4";

const FranchiseServices = () => {
  const [openVideo, setOpenVideo] = useState(null);

  const videos = [
    { src: video1, title: "Kovai Rawuther Biriyani Franchise" },
    { src: video2, title: "Study in Bengaluru Success Story" },
    { src: video3, title: "AR Biriyani Franchise Model" },
  ];

  const features = [
    { icon: "💰", label: "High ROI-Driven Franchise Models" },
    { icon: "📊", label: "Unit-Level P&L Structuring" },
    { icon: "💼", label: "Optimized Franchise Fee & Royalty Design" },
    { icon: "🔄", label: "Breakeven Analysis & Cash Flow Forecasting" },
    { icon: "📦", label: "Vendor Margin Planning & Supply Chain Costing" },
    { icon: "📈", label: "Multi-Format Scalability" },
    { icon: "🧾", label: "Franchisee Profitability Focus" },
  ];

  const services = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: "End to End Franchise Strategy & Structure",
      description: "Comprehensive franchise solutions from modeling to legal, marketing, training, and more.",
      image: strategyImg
    },
    {
      icon: <FaPalette className="text-4xl text-green-600" />,
      title: "Franchise Design & Visuals",
      description: "Brand-aligned systems that are easy to replicate, ensuring operational consistency.",
      image: designImg
    },
    {
      icon: <FaFileContract className="text-4xl text-purple-600" />,
      title: "Legal Documentation & Agreements",
      description: "Foundational legal compliance and performance optimization from launch and beyond.",
      image: legalImg
    }
  ];

  const advantages = [
    {
      icon: <FaCrown className="text-3xl text-white" />,
      title: "End to End Complementary Expertise",
      description: "From concept to rollout—modeling, marketing, training, and legal compliance.",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <FaExpand className="text-3xl text-white" />,
      title: "Tailored & Scalable Franchise Solutions",
      description: "Brand-matching strategies and systems built for operational consistency.",
      gradient: "from-pink-600 to-purple-600"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "Market Driven Strategy & Ongoing Support",
      description: "Research-backed strategy and long-term advisory for sustained success.",
      gradient: "from-red-600 to-pink-600"
    }
  ];

  const solutions = [
    {
      title: "Launch Ready Essentials",
      color: "yellow",
      features: ["Basic Franchise Model", "Legal Documentation", "Brand Guidelines", "Initial Training"]
    },
    {
      title: "Growth Ready Hybrid",
      color: "blue",
      features: ["Advanced Financial Modeling", "Marketing Strategy", "Operational Manuals", "Ongoing Support"]
    },
    {
      title: "Expansion Suite",
      color: "purple",
      features: ["Multi-territory Expansion", "International Compliance", "Advanced Analytics", "Dedicated Account Manager"]
    }
  ];

  const legalServices = [
    "Drafting of Master Franchise Agreements & Unit Franchise Agreements",
    "Franchisee Onboarding Legal Packs: NDAs, SOPs, IP Use Terms",
    "Entity Formation & Ownership Structuring (India & Abroad)",
    "Compliance Setup: FSSAI, GST, MSME, Shops & Establishment Act",
    "Trademark Licensing & IP Protection",
    "Franchisee Exit & Renewal Clauses",
    "Territory Mapping, Royalty Terms & Legal Risk Shields",
    "Custom legal documentation for Retail, Food, Digital, and Service brands"
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Business Structuring
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto">
              Transform your business into a scalable franchise model with our comprehensive solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">Business Structuring</span>
          </nav>
        </div>
      </section>

      {/* Page Heading */}
      <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-b-4xl p-8 mb-8 w-full max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Business Structuring Services
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive franchise development solutions to scale your business effectively
              </p>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Why We Are the Best */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Are the Best
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {feature.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Franchisify */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Franchisify</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${advantage.gradient} p-8 rounded-2xl text-white shadow-lg`}
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-blue-50 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Franchise Success Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <FaVideo className="text-white text-4xl opacity-80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Watch how we transformed this business into a successful franchise model
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Our Clients
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by 40+ Brands Across India
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver tailored franchise solutions that fuel nationwide growth and create sustainable business ecosystems.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={chartImage}
                alt="Growth chart showing our impact"
                className="rounded-2xl shadow-lg max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions We Provide
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-${solution.color}-500 relative`}
              >
                <div className={`w-12 h-12 bg-${solution.color}-500 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {solution.title}
                </h3>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheckCircle className={`text-${solution.color}-500 mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={lawimage}
                alt="Legal Documentation Services"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Legal Documentation & Agreements
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8 rounded-full" />
              <div className="space-y-4">
                {legalServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <FaFileContract className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interior Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interior Designing with Walkthrough
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8 rounded-full" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Step into your dream space before it's even built! Our Interior Designing with Realistic Video Walkthrough service brings your vision to life through high-definition 3D visualizations and immersive walkthrough videos.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From floor plans to fine textures, lighting, furniture, and décor — every detail is designed with precision and presented in a lifelike virtual experience.
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                Whether it's an office, retail outlet, or commercial space — we help you visualize it before execution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={interiorImage}
                alt="Interior Design Walkthrough"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchiseServices;