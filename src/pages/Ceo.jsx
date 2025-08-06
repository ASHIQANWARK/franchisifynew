import React from "react";
import bgTexture from "../assets/images/black-textured-paper-background.jpg"; // Background image
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const CEOQuoteCard = () => {
  return (
    <section className="bg-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00333A] uppercase">
          WHAT OUR LEADERS SAY
        </h2>
      </div>

      {/* Card */}
      <div
        className="max-w-6xl mx-auto rounded-2xl p-6 md:p-12 flex flex-col gap-12"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#00333A",
        }}
      >
        {/* Chairman Quote */}
        <div className="text-white">
          <p className="text-base sm:text-xl italic leading-relaxed mb-4">
            “As Chairman of Franchisify, my vision has always been to build a
            platform that not only accelerates business expansion but also
            strengthens the backbone of India’s entrepreneurial ecosystem.
            Franchising, when done right, is a powerful vehicle for inclusive
            growth — creating opportunities, generating employment, and
            fostering innovation at scale. At Franchisify, we are committed to
            setting new benchmarks in transparency, trust, and operational
            excellence. Our goal is simple: to empower both emerging and
            established brands to grow sustainably, and to inspire a new
            generation of entrepreneurs to lead with purpose and resilience.”
          </p>
          <p className="text-right text-sm text-gray-300 font-semibold">
            — Shafi Shoukath, Chairman, Franchisify
          </p>
        </div>

        {/* CEO Quote */}
        <div className="text-white">
          <p className="text-base sm:text-xl italic leading-relaxed mb-4">
            “At Franchisify, our vision is rooted in enabling structured and
            scalable growth for brands while empowering entrepreneurs to build
            successful franchise ventures. We believe franchising is not merely
            a growth strategy — it is a catalyst for economic development, job
            creation, and long-term value generation. Our role is to bridge the
            gap between ambition and execution by offering expert guidance,
            proven systems, and a robust platform that fosters strategic
            partnerships. At Franchisify, we are committed to building a future
            where franchising becomes the preferred pathway for business
            expansion and entrepreneurial success in India.”
          </p>
          <p className="text-right text-sm text-gray-300 font-semibold">
            — Jino Joseph, CEO, Franchisify
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-white text-2xl">
          <a
            href="https://www.instagram.com/franchisify.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/franchisify-in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CEOQuoteCard;
