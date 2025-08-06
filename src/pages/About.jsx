import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/images/Franchisify.in (1)_page-0009.jpg";
import visionBg from "../assets/images/3470568.jpg";
import missionBg from "../assets/images/3470568.jpg";

const About = () => {
  return (
    <div id="about" className="bg-white">
      {/* About Intro Section */}
      <section className="relative py-14 px-4 sm:px-8 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center rounded-2xl overflow-hidden shadow-md">
          {/* Left: Title */}
          <motion.div
            className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white flex justify-center items-center p-8 md:p-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center leading-snug">
              About <span className="text-yellow-400">Franchisify</span>
            </h1>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="bg-white p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              <strong className="text-[#0F172A]">Franchisify</strong> is your
              trusted partner for launching and scaling franchise-based businesses.
              We connect franchisors with the right franchisees and empower entrepreneurs
              with valuable opportunities for sustainable growth.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Our goal is to unlock the true potential of India’s franchising
              industry by turning businesses into thriving franchises backed by
              strategy and insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision - Image - Mission Section */}
      <section className="py-14 px-4 sm:px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-center">
          {/* Our Vision */}
          <motion.div
            className="h-full relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-2xl shadow-md h-full flex flex-col justify-between overflow-hidden">
              <img
                src={visionBg}
                alt="Vision Background"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
              />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center text-white">
                  Our Vision
                </h2>
                <p className="text-white text-base sm:text-lg leading-relaxed text-justify">
                  <span className="text-purple-400 font-semibold">Franchisify</span> envisions a world
                  where businesses maximize their potential through strategic franchising.
                  We empower entrepreneurs with proven business concepts for long-term growth
                  and profitability, creating a thriving ecosystem.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="h-full flex justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-2xl shadow-md w-full h-full min-h-[300px] flex items-center justify-center">
              <img
                src={missionImage}
                alt="Franchisify Vision and Mission"
                loading="lazy"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            className="h-full relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-8 rounded-2xl shadow-md h-full flex flex-col justify-between overflow-hidden">
              <img
                src={missionBg}
                alt="Mission Background"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
              />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center text-white">
                  Our Mission
                </h2>
                <p className="text-white text-base sm:text-lg leading-relaxed text-justify">
                  At <span className="text-cyan-400 font-semibold">Franchisify</span>,
                  our mission is to transform companies into profitable franchises
                  backed by research and best practices. We foster scalable, sustainable
                  business models for lasting success and growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
