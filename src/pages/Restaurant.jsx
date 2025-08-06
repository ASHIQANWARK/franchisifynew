import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import restaurant from "../assets/images/restaurant.jpg";
import kovai from "../assets/images/Kovai.png";
import lnc from "../assets/images/LNC.jpg";
import TTP from "../assets/images/Teatalk.jpg";
import TTE from "../assets/images/TeaTalkExpress.jpg";
import KOKO from "../assets/images/kokoking.jpg";
import CE from "../assets/images/crunchys.jpg";
import stevia from "../assets/images/stevia logo-1.png";
import Sizzlly from "../assets/images/Sizzly Snacks Logo Kit_page-0001.jpg";
import BBB from "../assets/images/Big Bang Bajji Logo Kit_page-0001.jpg";
import foodoor from "../assets/images/foodoor.jpg";
import so from "../assets/images/spized.jpg";
import hh from "../assets/images/hungerheist.png";
import stonedmonkey from "../assets/images/stonedmonkey.png";
import tasteio from "../assets/images/tasteo.jpg";
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
    name: "Crunchy's Express",
    logo: CE,
    investment: "₹12 Lakhs",
    sqft: "200 sqft",
    rating: "4.2★",
    origin: "Kerala",
    year: 2017,
    model: "FOCO",
    franchisees: 23,
    description:
      "Fast food joint known for its express menu and vibrant ambiance.",
  },
  {
    name: "Crunchy's",
    logo: CE,
    investment: "₹26.5 Lakhs",
    sqft: "600 sqft",
    rating: "4.3★",
    origin: "Kerala",
    year: 2017,
    model: "FOCO",
    franchisees: 23,
    description:
      "Larger dine-in format with complete kitchen setup and family seating.",
  },
  {
    name: "Crunchy's Master Franchise",
    logo: CE,
    investment: "₹50-75 Lakhs",
    sqft: "200 sqft",
    rating: "4.4★",
    origin: "Kerala",
    year: 2017,
    model: "Master",
    franchisees: 1,
    description:
      "Master franchise opportunity for regional operations and expansion.",
  },
  {
    name: "Stevia Delights",
    logo: stevia,
    investment: "₹2.5 Lakhs",
    sqft: "LWH: 4*2*7",
    rating: "4.6★",
    origin: "Malappuram, kottakkal",
    year: 2021,
    franchisees: 5,
    description:
      "Stevia Delights is a pioneering company specializing in producing Indian sweets and candies using stevia, a natural zero-calorie sugar alternative. Our goal is to become the leading manufacturer of stevia-based products inIndia, starting with a primary focus on the lucrative marketof Kerala. With a significant population of diabetic patientsand a health-conscious consumer base, Kerala provides promising opportunity for our innovative and healthier alternative. We invite franchises to join us on this journey to revolutionize the Indian sweets industry and expand our presence across South India.",
  },
  {
    name: "Sizzlly Snacks",
    logo: Sizzlly,
    investment: "Shop-in-Shop: ₹3.5 Lakhs | Street Model: ₹4 Lakhs",
    sqft: "LWH: 6*3*8",
    rating: "4.3★",
    origin: "Malappuram, kottakkal",
    year: 2024,
    franchisees: 0,
    description:
      "Welcome to Sizzly Snacks, the ultimate destination for snack lovers who crave bold flavours, crispy textures, and a mouth-watering experience! Our menu is crafted with a perfect blend of spice, crunch, and cheesy goodness, ensuring every bite is unforgettable. Whether you're on the go or enjoying a food break, we bring you freshly made, fast-served, and irresistibly delicious snacks thatkeep you coming back for more. Get ready to sizzle up your cravings with every bite.",
  },
  {
    name: "Big Bang Bajji",
    logo: BBB,
    investment: "Shop-in-Shop: ₹3.5 Lakhs | Street Model: ₹4 Lakhs",
    sqft: "LWH: 6*3*8",
    rating: "4.4★",
    origin: "Malappuram, kottakkal",
    year: 2024,
    franchisees: 1,
    description:
      "At Big Bang Bajji, we focus on taste, quality, and innovation. Our stalls are designed for efficiency, ensuring a smooth & fast customer experience while serving the most delicious bajjis",
  },
  {
    name: "Foodoor",
    logo: foodoor,
    investment: "₹1 Lakhs",
    rating: "4.0★",
    origin: "Perinthalmanna, Kerala",
    year: 2020,
    franchisees: 20,
    description:
      "we’ve been delivering more than just Food we’ve been delivering convenience, quality and a touch of joy to your doorstep for the past four years. Founded in 2019, our mission was simple: to transform the way people experience food delivery. We started with a vision to make mealtimes effortless and enjoyable by connecting you with your favourite restaurants and culinary delights, right at your fingertips Over the years we've grown from a small start up into a trusted partner in your daily routine, thanks to our unwavering commitment to exceptional service and customer satisfaction. Our user-friendly app ensures a seamless ordering experience, while our dedicated team works around the clock to ensure that your food arrives hot, fresh, and on time. we believe that food is more than just sustenance—it’s an experience to be savoured. That’s why we take pride in our curated selection of local eateries and popular dining spots, ensuring you always have access to  the best flavours in town.",
  },
  {
    name: "Spized Organics",
    logo: so,
    investment: "Silver :₹8 Lakhs|  Gold :₹14 Lakhs | Diamond:₹26 Lakhs",
    rating: "4.5★",
    origin: "Thekkadi ,Kerala",
    year: 2015,
    franchisees: 1,
    description:
      "The journey of Kerala spices from farm to kitchen is a testament to the region's rich cultural heritage and its pivotal role in the global spice trade. These spices not only enhance the flavour of dishes but also carry with them stories of ancient trade routes, culinary traditions, and the harmonious blend of cultures. Whether used in a hearty curry, a delicate dessert, or a simple home-cooked meal, Kerala spices continue to inspire anddelight chefs and food enthusiasts everywhere.",
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
  {
    name: "Tasteio",
    logo: tasteio,
    investment: "₹10 Lakhs",
    rating: "4.0★",
    origin: " Kerala",
    year: 2025,
    franchisees: 0,
    description:
      "we’ve been delivering more than just Food we’ve been delivering convenience, quality and a touch of joy to your doorstep for the past four years. Founded in 2019, our mission was simple: to transform the way people experience food delivery. We started with a vision to make mealtimes effortless and enjoyable by connecting you with your favourite restaurants and culinary delights, right at your fingertips Over the years we've grown from a small start up into a trusted partner in your daily routine, thanks to our unwavering commitment to exceptional service and customer satisfaction. Our user-friendly app ensures a seamless ordering experience, while our dedicated team works around the clock to ensure that your food arrives hot, fresh, and on time. we believe that food is more than just sustenance—it’s an experience to be savoured. That’s why we take pride in our curated selection of local eateries and popular dining spots, ensuring you always have access to  the best flavours in town.",
  },
];

// Add more franchise objects as needed

const Restaurant = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0b1120] text-gray-100 min-h-screen font-sans">
      <div
        className="h-80 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white font-serif">
          Restaurant Franchises
        </h1>
      </div>

      <div className="p-4 bg-[#0e1334] border-b border-gray-800 text-sm text-gray-400">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-white font-semibold">Restaurant</span>
      </div>

      <div className="px-4 py-12 space-y-8 max-w-6xl mx-auto">
        {franchises.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border border-yellow-600 text-gray-200 rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-400 transition-all p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={item.logo}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-lg border border-gray-700 bg-gray-800 p-2"
              />

              <div className="flex-1 space-y-3 text-sm">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-green-700/20 text-green-400 px-3 py-1 rounded-full">
                    {item.rating} Google Ratings
                  </span>
                  <span className="bg-blue-700/20 text-blue-400 px-3 py-1 rounded-full">
                    ✅ Verified Brand
                  </span>
                </div>
                <p className="text-gray-400">
                  {expandedIndex === index
                    ? item.description
                    : `${item.description.slice(0, 100)}...`}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 text-gray-300 text-sm">
                  <div>
                    <strong>Investment:</strong> {item.investment}
                  </div>
                  <div>
                    <strong>Space:</strong> {item.sqft || "N/A"}
                  </div>
                  <div>
                    <strong>Model:</strong> {item.model || "N/A"}
                  </div>
                  <div>
                    <strong>Franchisees:</strong> {item.franchisees || "N/A"}
                  </div>
                  <div>
                    <strong>Origin:</strong> {item.origin}
                  </div>
                  <div>
                    <strong>Est. Year:</strong> {item.year}
                  </div>
                </div>

                {expandedIndex === index && (
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-red-400 underline mt-4 block text-sm"
                  >
                    Close
                  </button>
                )}
              </div>

              <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-400 border border-blue-500 px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-all text-sm"
                >
                  {expandedIndex === index ? "Hide Details" : "View Details"}
                </button>
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-sm px-5 py-1.5 rounded-full shadow transition-all duration-200"
                >
                  Contact Brand
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
