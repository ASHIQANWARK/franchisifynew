import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import kovai from "../assets/images/Kovai.png";
import lnc from "../assets/images/LNC.jpg";
import TTP from "../assets/images/Teatalk.jpg";
import TTE from "../assets/images/TeaTalkExpress.jpg";
import KOKO from "../assets/images/kokoking.jpg";
import hh from "../assets/images/hungerheist.png";
import stonedmonkey from "../assets/images/stonedmonkey.png";
import We from "../assets/images/waffle.jpg";
import Te from "../assets/images/T4E.jpg";
import DA from "../assets/images/AR BRIYANI.jpg";
import Nl from "../assets/images/lassi.jpg";
import Mb from "../assets/images/Mr Burger L.jpg";
import Fk from "../assets/images/fk.jpg"
import jb from "../assets/images/joose.jpg";
import ff from "../assets/images/ff.jpg";
const franchises = [
  {
    name: "Fried Kozhi",
    logo: Fk, // Replace 'Fk' with the actual logo import or image URL
    investment: "12 Lakhs",
    sqft: "500-800 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2017,
    model: "FOFO, FOCO",
    franchisees: 5,
    description:
      "Fried Kozhi is a bold and flavorful fried chicken brand from Tamil Nadu, known for its spicy South Indian-style fried chicken and fusion fast food offerings. Launched in 2017, the brand has built a loyal customer base by combining local taste preferences with global QSR formats. With FOFO and FOCO franchise models, Fried Kozhi offers a lucrative opportunity for entrepreneurs looking to enter the fast food and casual dining space.",
  },
  {
    name: "Joose Booster",
    logo: jb, // Replace 'jb' with the actual logo import or image URL
    investment: "12 Lakhs",
    sqft: "500-800 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2017,
    model: "FOFO, FOCO",
    franchisees: 5,
    description:
      "Joose Booster is a vibrant beverage brand from Tamil Nadu specializing in fresh, cold-pressed juices, smoothies, and health drinks. Since its inception in 2017, the brand has gained popularity for its commitment to natural ingredients, no added preservatives, and trendy store formats. Offering both FOFO and FOCO franchise models, Joose Booster is an exciting business venture in the fast-growing health and wellness F&B segment.",
  },
  {
    name: "Frozen Fudge",
    logo: ff, // Replace 'ff' with the actual logo import or image URL
    investment: "12 Lakhs",
    sqft: "500-800 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2017,
    model: "FOFO, FOCO",
    franchisees: 5,
    description:
      "Frozen Fudge is a modern dessert brand from Tamil Nadu, offering a unique range of handcrafted ice creams and frozen treats. Established in 2017, the brand is known for its premium quality, innovative flavors, and trendy presentation. With a focus on FOFO and FOCO franchise models, Frozen Fudge presents a sweet business opportunity for entrepreneurs passionate about the dessert and QSR space.",
  },
  {
    name: "Dindigul AR Biriyani",
    logo: DA, // Replace with actual Dindigul AR Biriyani logo variable if different
    investment: "13-15 Lakhs",
    sqft: "500-800 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2007,
    model: "FOFO",
    franchisees: 1,
    description:
      "Dindigul AR Biriyani is a well-established culinary brand from Tamil Nadu, renowned for its authentic South Indian biriyani recipes made with traditional spices and techniques. With a legacy dating back to 2007, it offers a flavorful business opportunity through its FOFO franchise model, appealing to food lovers and entrepreneurs alike in India's thriving QSR and dine-in sectors.",
  },
  {
    name: "Namma Lassi",
    logo: Nl, // Replace with actual Namma Lassi logo variable if different
    investment: "8 Lakhs",
    sqft: "180-200 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2024,
    model: "FOFO",
    franchisees: 1,
    description:
      "Namma Lassi is a refreshing beverage franchise from Tamil Nadu, offering a wide variety of traditional and fusion lassi flavors in a modern setup. Designed for high footfall locations, it provides a low-investment opportunity for entrepreneurs aiming to enter the fast-growing dairy and beverage retail sector.",
  },
  {
    name: "Mr Burger",
    logo: Mb, // Replace with actual Mr Burger logo variable if different
    investment: "16 Lakhs",
    sqft: "500-800 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2017,
    model: "FOFO, FOCO",
    franchisees: 25,
    description:
      "Mr Burger is a popular fast-food franchise from Tamil Nadu, known for its flavorful burgers, quick service, and vibrant store design. With a proven track record and scalable FOFO/FOCO models, it offers a strong opportunity for entrepreneurs looking to invest in India’s booming QSR (Quick Service Restaurant) segment.",
  },
  {
    name: "Tea 4 Ever",
    logo: Te, // Replace with actual Tea 4 Ever logo variable if different
    investment:
      "₹3,00,000 (Based on equipment provided) | ₹5,00,000 (Based on equipment provided) | ₹7,50,000 (Based on equipment provided)",
    sqft: "10×10 sq.ft",
    rating: "4.4★",
    origin: "Tamil Nadu",
    year: 2023,
    model: "FOFO",
    franchisees: 1,
    description:
      "Tea 4 Ever is a rising tea franchise brand from Tamil Nadu, known for its flavorful blends and affordable setup options. With flexible investment tiers and a compact 10×10 model, it offers an ideal entry point for aspiring entrepreneurs looking to tap into India’s booming tea market.",
  },
  {
    name: "Waffle Express",
    logo: We,
    investment:
      "Cart Model - ₹3.5 Lakh | Kiosk - ₹5.25 Lakh | Café - ₹9.5 Lakh",
    sqft: "40–400 sq.ft",
    rating: "4.4★",
    origin: "Salem, Tamil Nadu",
    year: 2015,
    model: "FOFO",
    franchisees: 4,
    description:
      "Waffle Express is a fast-growing dessert franchise from Salem, offering a variety of freshly made waffles and beverages through flexible formats like carts, kiosks, and cafés.",
  },
  {
    name: "Kovai Rawuther Biriyani",
    logo: kovai,
    investment: "₹20 - ₹25 Lakhs",
    sqft: "1600-1800 sq.ft",
    rating: "4.4★",
    origin: "Bengaluru",
    year: 2025,
    franchisees: 1,
    description:
      "Kovai Rawuther Biriyani is a popular biryani franchise offering traditional South Indian flavors with a modern QSR experience.",
  },
  {
    name: "Lassi n cafe",
    logo: lnc,
    investment: "₹12 Lakhs",
    sqft: "200 Sqft",
    rating: "4.2★",
    origin: "Mangalore Karnataka",
    year: 2017,
    franchisees: 30,
    description:
      "Mr. Shafeequa a distinguished individual with extensive knowledge and expertise in the food industry. Mr, Shafeeque's family legacy in the food sector, coupled with his traditional culinary expertise, has given him a unique perspective on the value of combining delicious food with rich cultural heritage. In 2007, Mr. Shafeeque began his professional career in telecom marketing but soon shifted his focus to the food industry, where he co-founded and served as the managing director of KWR Enterprises PVT. LTD. This ISO 9001:2015 certified company has been renowned for its excellent and authentic cafe cuisine, and now Mr. Shafeeque runs a pioneering venture called Lassi n Cafe that will serve a diverse range of foods such as fried chicken, burgers, milkshakes, crushers, mojitos, ice creams, and soft drinks. Mr. Shafeeque's primary objective with Lassi n Café is to provide healthy and hygienic food that is also affordable and delectable, and he has prioritized the signature recipes of renowned chef Mr. AK Moideen, who has 40 years of experience in the global food industry in both India and Dubai. This Initiative is supported by an expert team in the food sector at the global level, and Mr. Shafeeque is offering a golden opportunity for dynamic investors to invest and earn a profit from venture. Moreover entrusted entrepreneurs can establish franchises with Lassi n Cafe Which presents an extremely professional franchise model with low initial investment and the assurance of future high growth and good returns through the provision of express and lounge services with a diverse range of dishes.",
  },
  {
    name: "Tea talk Budget Premium Cafe",
    logo: TTP,
    investment: "₹10-20 Lakhs",
    sqft: "200-300 sqft",
    rating: "4.1★",
    origin: "Kerala",
    year: 2018,
    model: "FOFO",
    franchisees: 1,
    description:
      "Premium cafe experience with budget-friendly investment and quick returns.",
  },
  {
    name: "Tea talk express",
    logo: TTE,
    investment: "₹5-12 Lakhs",
    sqft: "200-250 sqft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2018,
    model: "FOFO",
    franchisees: 4,
    description: "Compact tea outlet with high footfall in busy areas.",
  },
  {
    name: "Kokoking",
    logo: KOKO,
    investment: "₹8 Lakhs",
    sqft: "150 sqft",
    rating: "4.5★",
    origin: "Mangalore Karnataka",
    year: 2022,
    franchisees: 30,
    description:
      "Koko King services such as Fried chicken, Pizza, burgers, sandwiches, rolls, pizzas, French Fries, Chicken Lollipop, Chicken Wings, milkshakes, crushers mojitos, ice creams, and soft drinks. Our primary objective is to serve healthy and hygienic food that is also a ordable and delectable. The prominent signature recipes of Mr. AK Moideen are prioritized in the new initiative. He is a re nowned chef with 40 years of experience in the global food industry in both India and Dubai. As a ourishing proposal backed by an expert team in the food sector at the global level, we o er a golden opportunity for dynamic investors to invest in and earn pro t from our venture. Besides, there is a great opportunity for enthusiastic entrepreneurs to establish franchises with us. We present an extremely professional franchise model with a low initial investment and the assurance of future high growth and good returns through the provision of express and lounge services with a diverse range of dishes.",
  },
  {
    name: "Hunger Heist",
    logo: hh,
    investment: "17 Lakhs",
    sqft: "400 - 700 sqft",
    rating: "4.4★",
    origin: "Madurai",
    year: 2021,
    franchisees: 0,
    description:
      "Series brought to your table, an epitome of creativity. The establishment of Hunger Heist has been inspired by the famous series Money Heist. The heist begins with the alignment of the fresh ingredients along with hand-picked and ground spices. In the world of preservatives and food colour, step into this small theme-based restaurant to delve inside different culinary cuisines, keeping your health as the highest priority.",
  },
  {
    name: "Stoned Monkey",
    logo: stonedmonkey,
    investment: "Franchise 24L | Master Franchise - 50L",
    sqft: "400 to 600 sqft",
    rating: "4.6★",
    origin: "Bengaluru",
    year: 2015,
    franchisees: 3,
    description:
      "Dr.Aslesh is a hands-on Managing Director in Stoned Monkey Food & Beverages Private Limited. He has expertise in Business Development, Operations, Manufacturing, Import - Export, Entertainment and Hospitality Industry. Through strategic foresight, drive, and determination, he built a strong foundation for his successful Group of Companies",
  },
  
];

// Add more franchise objects as needed

const Restaurant = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Modern Header Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Restaurant Franchises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover premium franchise opportunities in the food and restaurant industry
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-8 rounded-full"
          />
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">\</span>
            <span className="text-gray-900 font-semibold">Restaurant Franchises</span>
          </div>
        </div>
      </nav>

      {/* Franchise Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {franchises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-center">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            {item.name}
                          </h2>
                          
                          {/* Rating Badge */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                              {item.rating} Rating
                            </span>
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                              Verified Brand
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {expandedIndex === index
                              ? item.description
                              : `${item.description.slice(0, 120)}...`}
                          </p>

                          {/* Franchise Details Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Investment:</strong> {item.investment}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Space:</strong> {item.sqft || "Flexible"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Model:</strong> {item.model || "Standard"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Franchisees:</strong> {item.franchisees || "New"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Origin:</strong> {item.origin}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                <strong>Since:</strong> {item.year}
                              </span>
                            </div>
                          </div>

                          {/* Expand/Collapse Button */}
                          {item.description.length > 120 && (
                            <button
                              onClick={() => toggleDescription(index)}
                              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors flex items-center gap-1"
                            >
                              {expandedIndex === index ? (
                                <>
                                  <span>Show Less</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  <span>Read More</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 lg:items-end">
                          <button
                            onClick={() => toggleDescription(index)}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm font-medium whitespace-nowrap"
                          >
                            {expandedIndex === index ? "Hide Details" : "View Details"}
                          </button>
                          <Link
                            to="/contact"
                            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium text-center whitespace-nowrap shadow-sm"
                          >
                            Contact Brand
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
