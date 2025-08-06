import React from "react";
import {
  FaStore,
  FaWalking,
  FaHeart,
  FaGem,
  FaUtensils,
  FaBicycle,
  FaBook,
  FaCar,
  FaHardHat,
  FaBullhorn,
  FaServer,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import bgPattern from "../assets/images/blue_abstract_lines_2.jpg"; // Should be compressed and <150kb

const industries = [
  { icon: <FaUtensils size={36} />, label: "Restaurant", route: "/restaurant" },
  { icon: <FaBook size={36} />, label: "Education", route: "/education" },
  { icon: <FaStore size={36} />, label: "Retail", route: "/retail" },
  { icon: <FaHardHat size={36} />, label: "Construction", route: "/construction" },
  { icon: <FaWalking size={36} />, label: "Gym" },
  { icon: <FaHeart size={36} />, label: "Health Care", route: "/wellness" },
  { icon: <FaGem size={36} />, label: "Jewellery", route: "/jewellery" },
  { icon: <FaBicycle size={36} />, label: "Sports" },
  { icon: <FaCar size={36} />, label: "Auto" },
  { icon: <FaBullhorn size={36} />, label: "Digital Marketing", route: "/digital" },
  { icon: <FaServer size={32} />, label: "IT Solutions", route: "/solutions" },
];

const IndustryGrid = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <section
      className="relative py-12 bg-white text-center"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Section Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-white px-4 mb-8">
        Extensive Network of Brands & Industries
        <br />
        Choosed From us
        <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full" />
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10">
        {industries.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.route)}
            className={`flex flex-col items-center justify-center p-4 text-white rounded-lg transition-all duration-300 ${
              item.route
                ? "cursor-pointer hover:text-orange-400"
                : "cursor-default"
            }`}
          >
            {item.icon}
            <p className="mt-2 text-sm md:text-base font-medium border-b-2 border-transparent hover:border-orange-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrid;
