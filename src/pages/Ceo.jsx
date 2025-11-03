import React from "react";
import ceoImage from "../assets/images/jino.jpg"; // Replace with your actual CEO image path

const CEOQuoteCard = () => {
  return (
    <section className="bg-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00333A] uppercase">
          WHAT OUR LEADERS SAY
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* CEO Image */}
        <div className="flex justify-center mb-8">
          <div className="w-52 h-52 md:w-60 md:h-60  overflow-hidden border-4 border-white shadow-lg">
            <img
              src={ceoImage}
              alt="Jino Joseph - CEO Franchisify"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Quote Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center border border-gray-100">
          {/* CEO Quote */}
          <div className="text-gray-800">
            <p className="text-lg sm:text-xl md:text-xl italic leading-relaxed mb-6">
              "At Franchisify, our vision is rooted in enabling structured and
              scalable growth for brands while empowering entrepreneurs to build
              successful franchise ventures. We believe franchising is not merely
              a growth strategy — it is a catalyst for economic development, job
              creation, and long-term value generation."
            </p>
            
            {/* CEO Info */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900">Jino Joseph</h3>
              <p className="text-gray-600">CEO, Franchisify</p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default CEOQuoteCard;