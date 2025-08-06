import React, { useState } from "react";
import {
  FaGavel,
  FaCogs,
  FaDraftingCompass,
  FaCheckCircle,
} from "react-icons/fa";

// Hero and content media imports
import heroVideo from "../assets/video/herovideo.mp4";
import cardimage from "../assets/images/blue_abstract_lines_2.jpg";
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
    { src: video1, title: "Franchise Story 1" },
    { src: video2, title: "Franchise Story 2" },
    { src: video3, title: "Franchise Story 3" },
  ];

  return (
    <>
      {/* Hero Section with Video */}
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
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center">
            Business Structuring
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white px-6 py-4 text-sm text-gray-700">
        <div className="max-w-6xl mx-auto">
          <span className="hover:underline cursor-pointer text-blue-600">
            Home
          </span>{" "}
          / <span>Business Structuring</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Why We Are the Best */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold">Why We Are the Best</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "High ROI-Driven Franchise Models", icon: "💰" },
                { label: "Unit-Level P&L Structuring", icon: "📊" },
                {
                  label: "Optimized Franchise Fee & Royalty Design",
                  icon: "💼",
                },
                {
                  label: "Breakeven Analysis & Cash Flow Forecasting",
                  icon: "🔄",
                },
                {
                  label: "Vendor Margin Planning & Supply Chain Costing",
                  icon: "📦",
                },
                { label: "Multi-Format Scalability", icon: "📈" },
                { label: "Franchisee Profitability Focus", icon: "🧾" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-xl p-6 min-h-[160px] flex items-center justify-center text-center shadow-md transform hover:scale-105 transition-transform bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${cardimage})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-xl" />
                  <p className="relative z-10 text-white text-lg font-semibold">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Services */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Our Services</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[strategyImg, designImg, legalImg].map((img, index) => {
                const services = [
                  {
                    title: "End to End Franchise Strategy & Structure",
                    desc: "Comprehensive franchise solutions from modeling to legal, marketing, training, and more.",
                  },
                  {
                    title: "Franchise Design & Visuals",
                    desc: "Brand-aligned systems that are easy to replicate, ensuring operational consistency.",
                  },
                  {
                    title: "Legal Documentation & Agreements",
                    desc: "Foundational legal compliance and performance optimization from launch and beyond.",
                  },
                ];
                return (
                  <div key={index}>
                    <img
                      src={img}
                      alt={services[index].title}
                      className="w-full h-56 object-cover rounded-xl"
                    />
                    <div className="pt-4">
                      <h3 className="text-lg font-semibold">
                        {services[index].title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {services[index].desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why Choose */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light">
                Why Choose{" "}
                <span className="font-bold text-blue-700">Franchisify</span>
                <span className="font-bold text-amber-300">.in</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "End to End Complementary Expertise",
                  desc: "From concept to rollout—modeling, marketing, training, and legal compliance.",
                  bg: "bg-[#6B21A8]",
                },
                {
                  title: "Tailored & Scalable Franchise Solutions",
                  desc: "Brand-matching strategies and systems built for operational consistency.",
                  bg: "bg-[#C026D3]",
                },
                {
                  title: "Market Driven Strategy & Ongoing Support",
                  desc: "Research-backed strategy and long-term advisory for sustained success.",
                  bg: "bg-[#DB2777]",
                },
              ].map((item, i) => (
                <div key={i} className={`p-6 text-white rounded-xl ${item.bg}`}>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Franchise Video Gallery */}
          <section className="py-20 px-4 bg-white text-black">
            <div className="max-w-3xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">Our Franchise Designs</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded" />
              </div>

              {/* Vertical Video List */}
              <div className="space-y-6">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-200"
                  >
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Clients */}
          <section>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-lg font-light uppercase text-gray-500">
                  Our Clients
                </h4>
                <h2 className="text-4xl font-extrabold mt-2">
                  Across 40+ Brands in India
                </h2>
                <div className="w-20 h-1 bg-blue-600 mt-3 mb-4 rounded" />
                <p className="text-gray-600 max-w-md">
                  We deliver tailored franchise solutions that fuel nationwide
                  growth.
                </p>
              </div>
              <div>
                <img
                  src={chartImage}
                  alt="Growth chart"
                  className="w-full max-w-md object-contain mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Tailored Solutions */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                Tailored Solutions We Provide
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Launch Ready Essentials",
                  color: "bg-yellow-400",
                  border: "border-yellow-500",
                },
                {
                  title: "Growth Ready Hybrid",
                  color: "bg-blue-500",
                  border: "border-blue-600",
                },
                {
                  title: "Expansion Suite",
                  color: "bg-purple-500",
                  border: "border-purple-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white text-black rounded-xl p-6 pt-14 shadow-md"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${item.color} absolute -top-4 left-1/2 transform -translate-x-1/2`}
                  />
                  <h3 className="font-bold text-md uppercase">{item.title}</h3>
                  <div
                    className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 ${item.color} border-4 ${item.border}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Legal Documentation */}
          <section className="py-20 px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src={lawimage}
                  alt="Legal Documents"
                  className="w-full h-[700px] object-cover rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-extrabold mb-4 text-center md:text-left">
                  Legal Documentation & Agreements
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6 mx-auto md:mx-0 rounded" />
                <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
                  <li>
                    Drafting of Master Franchise Agreements & Unit Franchise
                    Agreements
                  </li>
                  <li>
                    Franchisee Onboarding Legal Packs: NDAs, SOPs, IP Use Terms
                  </li>
                  <li>
                    Entity Formation & Ownership Structuring (India & Abroad)
                  </li>
                  <li>
                    Compliance Setup: FSSAI, GST, MSME, Shops & Establishment
                    Act
                  </li>
                  <li>Trademark Licensing & IP Protection</li>
                  <li>Franchisee Exit & Renewal Clauses</li>
                  <li>Territory Mapping, Royalty Terms & Legal Risk Shields</li>
                  <li>
                    Custom legal documentation for Retail, Food, Digital, and
                    Service brands
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interior Design */}
          <section className="py-20 px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-4 text-center md:text-left">
                  Interior Designing with Walkthrough
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6 mx-auto md:mx-0 rounded" />
                <p className="text-lg leading-relaxed">
                  Step into your dream space before it’s even built! Our
                  Interior Designing with Realistic Video Walkthrough service
                  brings your vision to life through high-definition 3D
                  visualizations and immersive walkthrough videos. From floor
                  plans to fine textures, lighting, furniture, and décor — every
                  detail is designed with precision and presented in a lifelike
                  virtual experience.
                  <br />
                  <br />
                  <span className="font-extrabold">
                    Whether it's an office, retail outlet, or commercial space —
                    we help you visualize it before execution.
                  </span>
                </p>
              </div>
              <div>
                <img
                  src={interiorImage}
                  alt="Interior Walkthrough"
                  className="w-full h-[650px] object-cover rounded-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default FranchiseServices;
